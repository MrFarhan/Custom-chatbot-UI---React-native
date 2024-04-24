/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import images from '../../constants/images';
import dayjs from 'dayjs';

const ChatBody = ({messages, HandleMessages}) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({animated: true});
  }, [messages]);

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }>
      {messages.map((message, index) => (
        <View
          key={index}
          style={{
            ...styles.container,
            alignSelf: message.isUser ? 'flex-end' : 'flex-start',
          }}>
          {!message.isUser && (
            <Image
              source={images.operator}
              style={{height: 40, width: 35}}
              alt="Chat Operator"
            />
          )}
          <View>
            <Text
              style={{
                ...styles.text,
                backgroundColor: message.isUser ? '#4CAF50' : '#2196F3',
              }}>
              {message.text}
            </Text>
            <Text
              style={{
                ...styles.time,
              }}>
              {dayjs(message?.time).format('hh:mm A')}
            </Text>
          </View>
          {/* {message.isUser && (
            <Image
              source={images.user}
              style={{height: 30, width: 25}}
              alt="User operator"
            />
          )} */}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    borderRadius: 8,
    color: '#fff',
    padding: 8,
    width: '100%',
    // maxWidth: '80%',
  },
  time: {
    fontSize: 10,
  },
});
export default ChatBody;
