import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { observer } from 'mobx-react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Anasayfa from './Anasayfa';
import temaH from '../help/temaH';
import anasayfaC from '../controller/anasayfaC';


const Stack = createStackNavigator();

class App extends React.Component {
    navigasyon() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={"Anasayfa"} component={Anasayfa} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor={anasayfaC.spalshAktif ? 'transparent' : temaH.renkler.r1} barStyle={"dark-content"}/>
                {this.navigasyon()}
            </>
        );
    }
}

export default observer(App);