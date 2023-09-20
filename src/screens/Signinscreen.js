import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {app} from '../firebase';
import {View, TextInput, Button, Text} from 'react-native';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const signinUser = (email, password) => {
    signInWithEmailAndPassword = (email, password).then(userCredential => {
      const user = userCredential.user;
    });
  };

  return (
    <View>
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Email Address"
        type="email"
        onChangeText={email => setEmail(email)}
        defaultText={email}
        {...console.log(email)}
      />
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Password"
        type="password"
        onChangeText={password => setPassword(password)}
        defaultText={password}
        {...console.log(password)}
      />
      <Button
        onPress={() => {
          signinUser();
        }}
        title="Signin"
        className="my-5"
      />
    </View>
  );
}
