/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChatBody = ({messages, HandleMessages}) => {
  return (
    <ScrollView>
      {messages.map((message, index) => (
        <View
          key={index}
          style={{
            ...styles.container,
            alignSelf: message.isUser ? 'flex-end' : 'flex-start',
          }}>
          <Text
            style={{
              ...styles.text,
              backgroundColor: message.isUser ? '#4CAF50' : '#2196F3',
            }}>
            {message.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    borderRadius: 8,
    color: '#fff',
    padding: 8,
    maxWidth: '80%',
  },
});
export default ChatBody;
