import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import images from '../../constants/images';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={images.brandLogo} style={{height: 40, width: 35}} />
      <Text style={styles.heading}>The Tech Intuitors</Text>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderBottomWidth: 1,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 15,
    marginLeft: 15,
  },
});
