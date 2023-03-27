import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CreateTodoScreen from '../Screens/CreateTodoScreen/CreateTodoScreen';
import { ALL_SCREENS } from './allScreens';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import EditTodoScreen from '../Screens/EditTodoScreen/EditTodoScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName={ALL_SCREENS.homeScreen}>
            <Drawer.Screen name={ALL_SCREENS.homeScreen} component={HomeScreen} />
            <Drawer.Screen name={ALL_SCREENS.createTodoScreen} component={CreateTodoScreen} />
        </Drawer.Navigator>
    );
}
export default function RootNavigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={'MyDrawer'} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} >
                <Stack.Screen name={'MyDrawer'} component={MyDrawer} />
                <Stack.Screen name={ALL_SCREENS.editTodoScreen} component={EditTodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}