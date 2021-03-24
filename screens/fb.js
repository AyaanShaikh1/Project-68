import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Fb extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FaceBook</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 270,
    flex:1
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    alignSelf:'center'
  },
});
