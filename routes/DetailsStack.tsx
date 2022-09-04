import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountryDetails from '../screens/CountryDetails';
import WeatherDetails from '../screens/WeatherDetails';

const Stack = createNativeStackNavigator();

export default function DetailsStack({ route }: { route: any }) {
  const params = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen name="CountryDetails" component={CountryDetails} options={{ title: 'Country' }} initialParams={params} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetails} options={{ title: 'Weather' }} />
    </Stack.Navigator>
  )
};