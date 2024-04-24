import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import WebView from 'react-native-webview';
import Chatbot from './src/components/Chatbot';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Chatbot />
    </SafeAreaView>
  );
}

export default App;
