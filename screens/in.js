import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class In extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Instagram</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 270,
    flex:1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
    alignSelf:'center'
  },
});
