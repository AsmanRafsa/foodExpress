import {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app, db} from '../firebase';
import {doc, setDoc} from 'firebase/firestore';

export default function Signupscreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const auth = getAuth(app);
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      userCredential => {
        const user = userCredential.user;
        console.log(user);
        setDoc(doc(db, 'users', user.uid), {
          firstName,
          lastName,
          email,
          password,
        });
        navigation.navigate('Signin');
      },
    );
  };

  return (
    <View>
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="First name"
        placeholderTextColor="black"
        type="text"
        onChangeText={firstName => setFirstName(firstName)}
        defaultText={firstName}
      />
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Last name"
        placeholderTextColor="black"
        type="text"
        onChangeText={lastName => setLastName(lastName)}
        defaultText={lastName}
      />
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Email Address"
        placeholderTextColor="black"
        type="email"
        onChangeText={email => setEmail(email)}
        defaultText={email}
      />
      <TextInput
        className="border-black border w-[50vw] mx-10 my-4 text-black"
        placeholder="Password"
        placeholderTextColor="black"
        type="password"
        onChangeText={password => setPassword(password)}
        defaultText={password}
      />
      <Button
        onPress={() => {
          createUser() && navigation.navigate('Signin');
        }}
        title="Signup"
        className="my-5"
      />
    </View>
  );
}
