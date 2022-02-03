import React from 'react';
import Profile from './Profile';
import {SafeAreaView, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Profile name={'John Doe'}>
        <Text>Hello World</Text>
      </Profile>
    </SafeAreaView>
  );
}
