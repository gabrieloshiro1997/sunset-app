import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
export default function App() {
  const [city, setCity] = useState('');

  const handleChangeCity = (city) => {
    setCity(city);
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
        <Button title='Ok'></Button>
      </View>
      <StatusBar style='auto' />
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
