import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const RandomNumber = ({number, isDisabled, id, selectNumber}) => {
  const handlePress = () => {
    selectNumber(id);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.random, isDisabled && styles.disabled]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

export default RandomNumber;

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
    borderRadius: 10,
  },
  disabled: {
    opacity: 0.3,
  },
});
