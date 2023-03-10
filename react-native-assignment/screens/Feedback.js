import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function Feedback() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldtext}>The sessions were packed with very interesting information but they were a bit too fast sometimes.</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
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
