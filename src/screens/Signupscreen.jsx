import {useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
    <ScrollView>
      <View className="w-[90%] mx-auto">
        <Image
          source={require('../../assets/foods/food-express-logo.png')}
          className="self-center my-5"
        />
        <TextInput
          className="w-[100%] self-center  mx-10 my-4 text-xl p-5 text-black bg-gray-300 rounded-[50px] "
          placeholder="First name"
          placeholderTextColor="gray"
          type="text"
          onChangeText={firstName => setFirstName(firstName)}
          defaultText={firstName}
        />
        <TextInput
          className="w-[100%] self-center mx-10 my-4 text-xl p-5 text-black bg-gray-300 rounded-[50px] "
          placeholder="Last name"
          placeholderTextColor="gray"
          type="text"
          onChangeText={lastName => setLastName(lastName)}
          defaultText={lastName}
        />
        <TextInput
          className="w-[100%] self-center mx-10 my-4 text-xl p-5 text-black bg-gray-300 rounded-[50px] "
          placeholder="Email Address"
          placeholderTextColor="gray"
          type="email"
          onChangeText={email => setEmail(email)}
          defaultText={email}
        />
        <TextInput
          className="w-[100%] self-center mx-10 my-4 text-xl p-5 text-black bg-gray-300 rounded-[50px] "
          placeholder="Password"
          placeholderTextColor="gray"
          type="password"
          onChangeText={password => setPassword(password)}
          defaultText={password}
        />
        {/* <Button
       
        title="Signup"
        className="my-5"
      /> */}
        <TouchableOpacity
          onPress={() => {
            createUser() && navigation.navigate('Signin');
          }}>
          <Text className="my-5 bg-[#ff7356] p-5 text-center text-xl font-semibold rounded-[50px] text-white w-[100%] mx-auto">
            Create Account
          </Text>
        </TouchableOpacity>
        {/* <Text className="border-b border-gray-600">OR</Text> */}

        <View className=" flex items-center flex-row py-4 my-[1em]">
        <View className="flex-grow p-0 h-px bg-gray-400 "></View>
        <Text className="flex-shrink font-bold text-gray-500 text-2xl">OR</Text>
        <View className="flex-grow h-px p-0 bg-gray-400 "></View>
      </View>

        <TouchableOpacity className="flex flex-row justify-center items-center p-3 rounded-[50px] my-3 shadow shadow-gray-500 bg-white w-[100%]">
          <Image
            source={require('../../assets/foods/google.png')}
            className="w-[10vw] h-[5vh]"
          />
          <Text className="text-2xl text-center ml-5 font-bold text-black">
            Sign Up With Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-center items-center p-3 rounded-[50px] w-[100%] my-3">
          <Text className="text-gray-500 font-medium mb-3 text-2xl">Already Have an Account?</Text>
          <Text className="text-[#ff7356] font-bold text-2xl ml-2 mb-3">Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
