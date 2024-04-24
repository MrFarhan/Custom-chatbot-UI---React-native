// import {GiftedChat} from 'react-native-gifted-chat';
// import {Dialogflow_V2} from 'react-native-dialogflow';
// import {useEffect, useState} from 'react';
// import {dialogflowConfig} from './service-key';

// function Chat() {
//   useEffect(() => {
//     Dialogflow_V2.setConfiguration(
//       dialogflowConfig.client_email,
//       dialogflowConfig.private_key,
//       dialogflowConfig.project_id,
//     );
//     console.log('dialogflow v2 is ', dialogflowConfig);
//   }, []);
//   //   Dialogflow_V2.setConfiguration({
//   //     apiKey: '234be763261aa6edde583155427f4a600581866a',
//   //     language: 'en', // Change to your desired language
//   //   });
//   const [messages, setMessages] = useState([]);

//   const onSend = (newMessages = []) => {
//     setMessages(previousMessages =>
//       GiftedChat.append(previousMessages, newMessages),
//     );
//     const userMessage = newMessages[0].text;
//     Dialogflow_V2.requestQuery(
//       userMessage,
//       result => {
//         const chatbotResponse = result.queryResult.fulfillmentText;
//         const botMessage = {
//           _id: Math.random().toString(36).substring(7),
//           text: chatbotResponse,
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: 'Chatbot',
//           },
//         };
//         setMessages(previousMessages =>
//           GiftedChat.append(previousMessages, [botMessage]),
//         );
//       },
//       error => {
//         console.log('hello error ', error);
//         // Handle errors
//       },
//     );
//   };
//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={newMessages => onSend(newMessages)}
//       //   user={{
//       //     _id: 1,
//       //   }}
//     />
//   );
// }
// export default Chat;
