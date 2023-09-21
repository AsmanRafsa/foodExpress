import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {app} from '../firebase';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Signin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const signinUser = (email, password) => {
    signInWithEmailAndPassword = (email, password).then(userCredential => {
      const user = userCredential.user;
    });
    navigation.navigate('Home');
  };
  return (
    <View className="w-[90%] mx-auto">
      <Image
        source={require('../../assets/foods/food-express-logo.png')}
        className="self-center my-5"
      />
      <TextInput
        className="w-[100%] self-center  mx-10 my-4 text-xl p-5 text-black bg-gray-300 rounded-[50px] "
        placeholder="Email Address"
        placeholderTextColor={'gray'}
        type="email"
        onChangeText={email => setEmail(email)}
        defaultText={email}
        {...console.log(email)}
      />
      <TextInput
        className="w-[100%] self-center  mx-10 my-4 text-xl p-5 text-black bg-gray-300 rounded-[50px] "
        placeholder="Password"
        placeholderTextColor={'gray'}
        type="password"
        onChangeText={password => setPassword(password)}
        defaultText={password}
        {...console.log(password)}
      />
      <Text className="text-gray-500 text-2xl self-end">Forgot Password?</Text>
      {/* <Button
        onPress={() => {
          signinUser();
        }}
        title="Signin"
        className="my-5"
      /> */}
      <TouchableOpacity
        onPress={() => {
          signinUser() && navigation.navigate('Home');
        }}>
        <Text className="my-5 bg-[#ff7356] p-4 text-center text-2xl font-bold rounded-[50px] text-white w-[100%] mx-auto">
          Log In
        </Text>
      </TouchableOpacity>
      {/* <Text className="border-b border-gray-600">OR</Text> */}

      <View className=" flex items-center flex-row py-4 my-[1em]">
        <View className="flex-grow p-0 h-px bg-gray-500 "></View>
        <Text className="flex-shrink font-medium text-gray-500 text-2xl mx-1">OR</Text>
        <View className="flex-grow h-px p-0 bg-gray-500 "></View>
      </View>

      <TouchableOpacity className="flex flex-row justify-center items-center p-3 rounded-[50px] my-3 shadow shadow-gray-500 bg-white w-[100%]">
        <Image
          source={require('../../assets/foods/google.png')}
          className="w-[10vw] h-[5vh]"
        />
        <Text className="text-3xl text-center mx-10 font-bold text-black">
          Continue With Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-row justify-center items-center p-3 rounded-[50px] w-[100%] my-3">
        <Text className="text-gray-500 font-semibold mb-3 text-2xl">
          Don't Have an Account?
        </Text>
        <Text className="text-[#ff7356] font-medium text-2xl ml-2 mb-3">
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
