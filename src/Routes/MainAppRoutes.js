import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstScreen from '../Components/FirstScreen'
import List from '../Components/List'
import ImageScreen from '../Components/ImageScreen'
import Progress from '../Components/Progress'

const Stack = createNativeStackNavigator()

function MainAppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home Screen" screenOptions={{
                // headerShown:false
                // headerTitle:'Home Screen',
                headerTitleAlign:'center',
                headerTintColor:'pink',
                
                
            }
            }>
                <Stack.Screen name="Home Screen" component={FirstScreen} />
                <Stack.Screen name="Image Screen" component={ImageScreen} />
                <Stack.Screen name="Second Screen" component={List} />
                <Stack.Screen name="Progress Screen" component={Progress} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainAppRoutes
