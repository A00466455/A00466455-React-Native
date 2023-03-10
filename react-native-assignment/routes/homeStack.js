import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer, NavigationContainer } from "@react-navigation/native";
import Home from '../screens/Home';
import Feedback from '../screens/Feedback';
import Weather from '../screens/Weather';

const screens = {
    Home:{
        screen:Home
    },
    Feedback:{
        screen:Feedback
    },
    Weather:{
        screen:Weather
    }

}
export default function App()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
const HomeStack= createStackNavigator({})

// export default createAppContainer(HomeStack);