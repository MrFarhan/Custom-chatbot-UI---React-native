import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The Tech Intuitors</Text>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {},
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    // paddingBottom: 20,
  },
});
