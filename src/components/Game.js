import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Game = () => {
  const randomNumbers = Array.from({length: 6}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  const target = randomNumbers.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target} </Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) => (
          <Text key={index} style={styles.random}>
            {randomNumber}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  target: {
    fontSize: 50,
    margin: 50,
    backgroundColor: '#bbb',
    textAlign: 'center',
    borderRadius: 25,
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
    borderRadius: 10,
  },
});
