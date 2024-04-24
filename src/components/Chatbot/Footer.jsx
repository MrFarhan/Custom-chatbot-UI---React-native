import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Voice from '@react-native-voice/voice';
import VectorIcons from '../../constants/vectorIcons';

const ChatFooter = ({messages, setMessages}) => {
  const {MaterialIcons} = VectorIcons;

  const [inputText, setInputText] = useState('');

  const handleSendText = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, {text: inputText, isUser: true}]);
      setInputText('');
    }
  };

  const handleVoiceRecognition = async () => {
    try {
      await Voice.start('en-US');
      Voice.onSpeechResults = event => {
        setInputText(event.value[0]);
        Voice.stop();
      };
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <Button title="Send" onPress={handleSendText} />
      <MaterialIcons name={'keyboard-voice'} size={30} color="#900" />
      {/* <Button title="Voice" onPress={handleVoiceRecognition} /> */}
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', padding: 10},
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 8,
    paddingLeft: 10,
  },
});
