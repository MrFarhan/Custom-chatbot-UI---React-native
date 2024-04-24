import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const Test = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </SafeAreaView>
  );
};

export default Test;
