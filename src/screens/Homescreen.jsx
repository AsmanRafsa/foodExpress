import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {data} from '../data';

export default function Homescreen({navigation}) {
  // console.log(data);
  return (
    <ScrollView>
      <View className="w-[90% mx-auto]">
        <View className="flex flex-row justify-between items-center">
          <View className="flex flex-row justify-center items-center gap-2">
            <Image
              source={require('../../assets/foods/avatar-2.png')}
              className="w-[10vw] h-[5vh]"
            />
            <View>
              <Text className="text-black">Hi,Doe</Text>
              <Text className="text-black">Let's grab your food!</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/foods/cart.png')}
              className="w-[10vw] h-[5vh] bg-gray-200 rounded-full m-4"
            />
          </View>
        </View>
        <TextInput
          className="border-black border w-[50%] mx-auto my-[2em]"
          placeholderTextColor={'black'}
          placeholder="Search for food"
        />
        <Text className="text-black font-bold text-2xl my-5 mx-3">
          Food Categories
        </Text>
        <View className="flex flex-row flex-wrap gap-12 justify-center items-center">
          {data.map(foodItems => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Category', {foods: foodItems.foods})
                  }>
                  <View>
                    <Image
                      source={foodItems.categoryImage}
                      className="h-[9.5vh] w-[19vw] m-4 p-[6em] bg-[#e2dede] rounded-full"
                    />
                    <Text className="text-black font-bold text-center">
                      {foodItems.categoryName}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View>
          <View className="flex flex-row justify-between items-center my-5">
            <Text className="text-black font-bold text-2xl">Food For You</Text>
            <View className="flex flex-row gap-3">
              <View className="bg-orange-400  w-[2vw] h-[1vh] rounded-full"></View>
              <View className="bg-gray-400  w-[2vw] h-[1vh] rounded-full"></View>
              <View className="bg-gray-400  w-[2vw] h-[1vh] rounded-full"></View>
            </View>
          </View>
          <View className="flex flex-row mb-20">
            <View className="h-[50vw] w-[60vw] m-5 pb-7 shadow shadow-gray-500 border border-white">
              <Image
                source={require('../../assets/foods/githeri.jpg')}
                className="w-[58vw] h-[26vh]"
              />
              <Text className="text-black">Githeri Curry</Text>
              <View className="flex flex-row justify-between">
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require('../../assets/foods/clock-icon.png')}
                    className="w-[6vw] h-[3vh]"
                  />
                  <Text className="text-gray-400">20 mins</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require('../../assets/foods/star.png')}
                    className="w-[6vw] h-[3vh]"
                  />
                  <Text className="text-gray-400">5.7</Text>
                </View>
              </View>
              <Text className="text-black">Ksh 300</Text>
            </View>
            <View className="h-[50vw] w-[60vw] mt-3 shadow shadow-gray-500 border border-white">
              <Image
                source={require('../../assets/foods/african-pilau.jpg')}
                className="w-[58vw] h-[26vh]"
              />
              <Text className="text-black">Beef Pilau</Text>
              <View className="flex flex-row justify-between">
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require('../../assets/foods/clock-icon.png')}
                    className="w-[6vw] h-[3vh]"
                  />
                  <Text className="text-gray-400">20 mins</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require('../../assets/foods/star.png')}
                    className="w-[6vw] h-[3vh]"
                  />
                  <Text className="text-gray-400">5.7</Text>
                </View>
              </View>
              <Text className="text-black">Ksh 300</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
