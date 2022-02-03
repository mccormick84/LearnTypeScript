import React from 'react';
import Profile from './Profile';
import {SafeAreaView, Text} from 'react-native';
import MessageForm from './MessageForm';

export default function App() {
  return (
    <SafeAreaView>
      <Profile name={'John Doe'}>
        <Text>Hello World</Text>
      </Profile>
      <MessageForm />
    </SafeAreaView>
  );
}
