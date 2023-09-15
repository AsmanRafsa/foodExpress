import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function Signupscreen() {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Email Address"
        onChangeText={newText => setText(newText)}
        defaultText={text}
      />
      <TextInput
        placeholder="Password"
        onChangeText={newText => setText(newText)}
        defaultText={text}
      />
      <Button
        onPress={() => {
          console.log('you signed up');
        }}
      />
    </View>
  );
}
