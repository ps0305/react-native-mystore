import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { white } from './node_modules/ansi-colors';

export default class App extends React.Component {
  handlePress(e){
    console.log(e)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native App ! </Text>
        <Button onPress={this.handlePress} title="Press Me !" />
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
