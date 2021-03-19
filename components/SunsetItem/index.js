import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const SunsetItem = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.textoCartao}>Cidade: {props.city}</Text>
      <Text style={styles.textoCartao}>Nascer do sol: {props.sunset}</Text>
      <Text style={styles.textoCartao}>Pôr do sol: {props.sunrise}</Text>
      <Text style={styles.textoCartao}>
        Sensação Térmica: {props.feels_like}ºC
      </Text>
      <Image
        style={styles.imagem}
        source={{
          uri: 'https://openweathermap.org/img/wn/' + props.icon + '.png',
        }}
      />
    </View>
  );
};

export default SunsetItem;

const styles = StyleSheet.create({
  item: {
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.32,
    elevation: 4,
    padding: 15,
    borderRadius: 12,
    margin: 5,
    backgroundColor: '#fff',
  },
  textoCartao: {
    color: '#000',
  },
  imagem: {
    alignSelf: 'center',
    margin: 2,
    width: 50,
    height: 50,
  },
});
