import React from 'react';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default function Repository({ navigation }) {
  const uri = navigation.getParam('item').html_url;
  return <WebView source={{ uri }} />;
}
