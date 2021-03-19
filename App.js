import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  FlatList,
  Keyboard,
} from 'react-native';
import Card from './components/Card';
import SunsetItem from './components/SunsetItem';
import keys from './keys';

export default function App() {
  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState([]);

  const key = keys.key;

  const cityUrl =
    'https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=';
  const cityDataUrl =
    'https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&';

  const handleChangeCity = (city) => {
    setCity(city);
  };

  const handleGetCityData = () => {
    const target = cityUrl + city + '&appid=' + key;
    fetch(target)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const name = data.city.name;
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;
        getCitySunsetData(name, lat, lon);
      });
  };

  const getCitySunsetData = (city, lat, lon) => {
    const target = cityDataUrl + 'lat=' + lat + '&lon=' + lon + '&appid=' + key;
    fetch(target)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCityData([]);

        const status = {
          city: city,
          sunrise: data.current.sunrise,
          sunset: data.current.sunset,
          feels_like: data.current.feels_like,
          icon: data.current.weather[0].icon,
        };
        console.log(status);
        setCityData([status]);
        Keyboard.dismiss();
      });
    FlatList;
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.cityName}
          placeholder='Digite o nome de uma cidade'
          value={city}
          onChangeText={handleChangeCity}
        />
        <Button title='Ok' onPress={handleGetCityData}></Button>
      </View>
      <FlatList
        data={cityData}
        renderItem={(city) => (
          <SunsetItem
            city={city.item.city}
            sunset={new Date(city.item.sunset).toLocaleTimeString()}
            sunrise={new Date(city.item.sunrise).toLocaleTimeString()}
            feels_like={city.item.feels_like}
            icon={city.item.icon}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 8,
  },
  cityName: {
    padding: 12,
    borderBottomColor: '#bb96f3',
    borderBottomWidth: 2,
    textAlign: 'center',
    marginBottom: 6,
    flexGrow: 0.9,
  },
});
