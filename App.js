import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen from './Screens/Camera'

export default class App extends React.Component{
  render(){
    return <CameraScreen/>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
