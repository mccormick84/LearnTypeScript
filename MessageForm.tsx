import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function MessageForm() {
  const [text, setText] = useState<string>('');
  const [lastMessage, setLastMessage] = useState<{
    message: string;
    date: Date;
  } | null>(null);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
    });
    setText('');
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title={'Press ME!'} onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>
            마지막 메시지: {lastMessage.message} (
            {lastMessage.date.toLocaleString()})
          </Text>
        </View>
      )}
    </View>
  );
}
