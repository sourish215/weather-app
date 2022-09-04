import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WeatherDetails({ route }: { route: any }) {
  const { icon, temp, precip, wind_speed } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weather Details</Text>
      <Image
        style={styles.icon}
        source={{
          uri: icon,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.text}>Temperature: {temp} &deg;C</Text>
        <Text style={styles.text}>Precipitation: {precip} %</Text>
        <Text style={styles.text}>Wind Speed: {wind_speed} kmph</Text>
      </View>
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
  icon: {
    width: 100,
    height: 100,
  },
});