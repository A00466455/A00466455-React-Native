import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldtext}>Welcome Home!</Text>
      </View>
      
      <Button title="Feedback Page" onPress={()=>navigation.navigate("FeedbackScreen",{par:"fb"})} />
      <Button title="Weather Page" onPress={()=>navigation.navigate("WeatherScreen",{par:"w"})} />
      
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
