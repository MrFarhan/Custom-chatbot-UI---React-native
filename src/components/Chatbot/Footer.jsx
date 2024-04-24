import {View, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Voice from '@react-native-voice/voice';
import VectorIcons from '../../constants/vectorIcons';
import axios from 'axios';
import {URL} from '../../constants';

const ChatFooter = ({messages, setMessages}) => {
  const {MaterialIcons} = VectorIcons;
  let url = URL;

  const [inputText, setInputText] = useState('');

  const handleSendText = () => {
    if (!inputText.trim().length) {
      return;
    }

    setMessages([
      ...messages,
      {text: inputText, isUser: true, time: new Date()},
    ]);
    setInputText('');

    axios
      .post(url, {text: inputText})
      .then(result => {
        const text =
          typeof result == 'string'
            ? result
            : result?.data?.data?.fulfillmentText;
        const quickReplies = result?.data?.data?.quickReplies;
        text?.map(item =>
          setMessages(old => [
            ...old,
            {
              from: 'computer',
              text:
                item ||
                'Sorry i am facing a technical glitch, please checkout our website for more details about our services',
              quickReplies: quickReplies,
            },
          ]),
        );
      })
      .catch(err => {
        setMessages(old => [
          ...old,
          {from: 'computer', text: 'Sorry i am currently offline'},
        ]);
      });
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
      <View>
        <Button title="Send" onPress={handleSendText} />
      </View>
      <MaterialIcons
        name={'keyboard-voice'}
        size={30}
        color="#900"
        onPress={handleVoiceRecognition}
      />
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
    // height: 50,
  },
});
