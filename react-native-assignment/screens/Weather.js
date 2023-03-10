import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState} from "react";

const Stack = createStackNavigator();

export default function Weather() {
const [data,setData]=useState([])
const [loading,setLoading] =useState(true)
const url="http://api.openweathermap.org/data/2.5/weather?lat=44.6476&lon=-63.5728&APPID=2f312d3d5bd03745084c658833fae747&units=metric";

useEffect(() => {
    setLoading(true);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=44.6476&lon=-63.5728&APPID=2f312d3d5bd03745084c658833fae747&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        setData({
          temperature: json.main.temp,
          locationName: json.name,
          weatherCondition: json.weather[0].main,
        });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
 
            <View>
                <Text>{data.temperature}</Text>
                <Text>{data.locationName}</Text>
                <Text>{data.weatherCondition}</Text>
            </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldtext:{
    fontWeight:'bold',
  }
});
