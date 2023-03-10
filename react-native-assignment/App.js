import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Feedback from './screens/Feedback';
import Weather from './screens/Weather';
// import Navigator from './routes/homeStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //   <Text style={styles.boldtext}>Hello!</Text>
    //   </View>
    //   {/* <StatusBar style="auto" /> */}
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} options={{title:"Welcome"}}/>
        <Stack.Screen name="FeedbackScreen" component={Feedback}/>
        <Stack.Screen name="WeatherScreen" component={Weather}/>
        
      </Stack.Navigator>
    </NavigationContainer>
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
