/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import { Toolbar } from 'react-native-material-ui'

const home = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  renderHomeAnyPlatform = () => {
    if(Platform.OS === "ios"){
      return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <Toolbar
            leftElement="menu"
            centerElement="Searchable"
            searchable={{
              autoFocus: true,
              placeholder: 'Search',
            }}
            rightElement={{
              menu: {
                icon: "more-vert",
                labels: ["1","2","3"]
              }
            }}
            onRightElementPress={ (label) => { console.log(label) }}
          />
        </SafeAreaView>
      )
    }else if(Platform.OS === "android"){
      return (
        <View style={styles.container}>
          <Toolbar
            leftElement="menu"
            centerElement="Searchable"
            searchable={{
              autoFocus: true,
              placeholder: 'Search',
            }}
            rightElement={{
              menu: {
                icon: "more-vert",
                labels: ["1","2","3"]
              }
            }}
            onRightElementPress={ (label) => { console.log(label) }}
          />
          <Text>Aqui va el resto de la aplicación</Text>
        </View>
      )
    }
  }
  render() {
    console.log("hola");
    console.log(StatusBar.currentHeight)
    return (
      <View>
        {this.renderHomeAnyPlatform()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
