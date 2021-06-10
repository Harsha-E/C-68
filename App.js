import { Title } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Scanner from './screens/scanner';
import Transaction from './screens/transaction';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Title>Wireless Library</Title>
        <Text>Wireless Library</Text> 

      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : Transaction}, 
  Scanner : {screen :Scanner},
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
