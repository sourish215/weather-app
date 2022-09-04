import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';

import { API_KEY } from '../utils/APIKey';

export default function CountryDetails({ route, navigation }: { route: any, navigation: any }) {
  const { capital, population, lat, lng, flag } = route.params;
  const [weather, setWeather] = useState({});
  console.log(capital)

  useEffect(() => {
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}&units=m`)
    .then(res => res.json())
    .then(json => {
      let obj = {
        icon: json.current.weather_icons[0],
        temp: json.current.temperature,
        precip: json.current.precip,
        wind_speed: json.current.wind_speed
      }
      console.log(obj)
      setWeather(obj);
    });
  }, [capital])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Country Details</Text>
      <Image
        style={styles.flag}
        source={{
          uri: flag,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.text}>Capital: {capital}</Text>
        <Text style={styles.text}>Country's Population: {population}</Text>
        <Text style={styles.text}>Latitude: {lat} deg</Text>
        <Text style={styles.text}>Longitude: {lng} deg</Text>
      </View>
      <Button
        onPress={() => navigation.navigate('WeatherDetails', weather)}
        title='Capital Weather'
        color='#6200ed'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24
  },
  info: {
    marginBottom: 32
  },
  text: {
    fontSize: 18,
    marginTop: 32,
  },
  flag: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
});