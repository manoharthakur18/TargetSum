import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Game = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.target}>42</Text>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add',
    flex: 1,
    paddingTop: 30,
  },
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    marginHorizontal: 50,
    textAlign: 'center',
  },
});
