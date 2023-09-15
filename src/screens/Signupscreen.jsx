import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default function Signupscreen() {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Email Address"
        onChangeText={newText => setText(newText)}
        defaultText={text}
      />
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Password"
        onChangeText={newText => setText(newText)}
        defaultText={text}
      />
      <Button
        onPress={() => {
          console.log('you signed up');
        }}
        title="Signup"
        className="my-5"
      />
    </View>
  );
}
