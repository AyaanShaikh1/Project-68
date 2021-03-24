import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Fb from './screens/fb';
import In from './screens/in';
export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  FaceBook: { screen: Fb },
  Instagram: { screen: In },
});
const AppContainer = createAppContainer(TabNavigator);
