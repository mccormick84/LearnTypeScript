import React from 'react';
import Profile from './Profile';
import {SafeAreaView, Text} from 'react-native';
import MessageForm from './MessageForm';
import Counter from './Counter';

export default function App() {
  return (
    <SafeAreaView>
      <Profile name={'John Doe'}>
        <Text>Hello World</Text>
      </Profile>
      <MessageForm />
      <Counter />
    </SafeAreaView>
  );
}
