import React, {useState} from 'react';
import {View, TextInput, Button, Text, ScrollView} from 'react-native';
import Voice from '@react-native-voice/voice';
import ChatBody from './Body';
import ChatFooter from './Footer';
import ChatHeader from './Header';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {isUser: false, text: 'Hi, I am your test assistant'},
  ]);

  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter messages={messages} setMessages={setMessages} />
    </View>
  );
};

export default Chatbot;
