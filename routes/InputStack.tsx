import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from '../screens/InputScreen';
import DetailsStack from './DetailsStack';

const Stack = createNativeStackNavigator();

export default function InputStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={InputScreen} />
      <Stack.Screen name="DetailsStack" component={DetailsStack} options={{ title: 'Country' }} />
    </Stack.Navigator>
  )
};