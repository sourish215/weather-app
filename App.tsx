import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import InputStack from './routes/InputStack';

export default function App() {

  return (
    <NavigationContainer>
      <InputStack />
    </NavigationContainer>
  );
};