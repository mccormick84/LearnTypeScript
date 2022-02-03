import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
  //JSX 타입의 props를 받아올 때는 React.ReactNode 타입을 사용
  children: React.ReactNode;
}

export default function Profile({
  name,
  isActive,
  image = 'https://picsum.photos/200',
  children,
}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Image source={{uri: image}} />
      <Text style={styles.text}>{name}</Text>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
  activeStyle: {
    backgroundColor: 'Yellow',
  },
});
