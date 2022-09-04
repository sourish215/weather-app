import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, TextInput, SafeAreaView, Button } from 'react-native';
import { useState, useEffect } from 'react';


export default function InputScreen({ navigation }: { navigation: any }) {
  const [country, setCountry] = useState("");

  const [info, setInfo] = useState({});
  const changeHandler = (val: string): void => {
    setCountry(val);
  };

  useEffect(() => {
    if(country !== "") {
      fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then(res => res.json())
      .then(json => {
        let obj = {
          capital: json[0].capital[0],
          population: json[0].population,
          lat: json[0].latlng[0],
          lng: json[0].latlng[1],
          flag: json[0].flags.png
        }
        console.log(obj);
        setInfo(obj);
      })
      .catch(err => console.log(err));
    }
  }, [country]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Country"
          onChangeText={(val) => changeHandler(val)}
        />
        <Button
          disabled={!country}
          onPress={() => navigation.navigate('DetailsStack', info)}
          title='Submit'
          color='#6200ed'
        />
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 32,
    width: 256,
    height: 64,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey'
  }
});