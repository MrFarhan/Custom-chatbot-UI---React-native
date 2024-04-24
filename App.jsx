import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import WebView from 'react-native-webview';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <WebView
        source={{
          uri: 'https://39c8-39-34-131-227.ngrok-free.app/src/components/test/test.html',
        }}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
