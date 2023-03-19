import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import RandomNumber from './RandomNumber';

const Game = () => {
  const randomNumbers = Array.from({length: 6}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  const [selectedIndex, setSelectedIndex] = useState([]);
  const isNumberSelected = numberIndex => {
    return selectedIndex.indexOf(numberIndex) >= 0;
  };
  const selectNumber = numberIndex => {
    setSelectedIndex(current => [...current, numberIndex]);
  };
  const target = randomNumbers.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target} </Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, index) => (
          <RandomNumber
            key={index}
            id={index}
            number={randomNumber}
            isDisabled={isNumberSelected(index)}
            selectNumber={selectNumber}
          />
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
});
