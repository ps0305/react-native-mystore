import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { white } from './node_modules/ansi-colors';
import FlexExamples from './flex';

export default class App extends React.Component {
  handlePress(e){
    console.log(e)
  }
  render() {
    return (
      <FlexExamples/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
});
