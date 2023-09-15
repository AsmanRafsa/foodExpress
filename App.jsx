import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Homescreen from './src/screens/Homescreen';
import Signupscreen from './src/screens/Signupscreen';
import Categoryscreen from './src/screens/Categoryscreen';
import Singlefood from './src/screens/Singlefood';

const slides = [
  {
    id: 1,
    title: 'Choose a tasty dish',
    description: 'Get the tastiest and best dishes from different cuisines',
    image: require('./assets/onboarding/onboardingscreen1.jpg'),
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description:
      'Enjoy the best food delivery services as you bring meals to your door',
    image: require('./assets/onboarding/onboardingscreen2.jpg'),
  },
  {
    id: 3,
    title: 'Easy payment',
    description:
      'No need to struggle moving to your bank as foodExpress got your back!',
    image: require('./assets/onboarding/onboardingscreen3.jpg'),
  },
];

export default function App() {
  const Stack = createNativeStackNavigator();
  const [showHomePage, setShowHomePage] = useState(false);
  function showLabel(label) {
    return (
      <Text className="bg-[#ff7356] py-3 px-6 font-semibold rounded-3xl">
        {label}
      </Text>
    );
  }
  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View className="bg-white flex items-center p-10 h-[100vh]">
              <Image
                source={item.image}
                alt="onboarding image"
                className="h-[50vh]"
                resizeMode="contain"
              />
              <Text className="text-black font-bold text-6xl mt-10 text-center">
                {item.title}
              </Text>
              <Text className="text-black text-[30px] text-center">
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{backgroundColor: '#ff7356'}}
        onDone={() => {
          setShowHomePage(true);
        }}
        showSkipButton
        onSkip={() => {
          setShowHomePage(true);
        }}
        renderNextButton={() => {
          return showLabel('Next');
        }}
        renderSkipButton={() => {
          return showLabel('Skip');
        }}
        renderDoneButton={() => {
          return showLabel('Done');
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen component={Homescreen} name='Home' />
        <Stack.Screen component={Signupscreen} name='Signup'/>
        <Stack.Screen component={Categoryscreen} name='Category'/>
        <Stack.Screen component={Singlefood} name='Singlefood'/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
