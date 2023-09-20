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
      <View>
        <View>
          <Image
            source={require('../../assets/foods/avatar-2.png')}
            className="w-[20vw] h-[10vh]"
          />
          <Text className="text-black">Hi,Doe</Text>
          <Text className="text-black">Let's grab your food!</Text>
          <View>
            <Image
              source={require('../../assets/foods/cart.png')}
              className="w-[20vw] h-[10vh]"
            />
          </View>
          <TextInput
            className="border-black border w-[50%] mx-auto my-[2em]"
            placeholderTextColor={'black'}
            placeholder="Search for food"
          />
          <Text className="text-black">Food Categories</Text>
        </View>
        {data.map(foodItems => {
          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Category', {foods: foodItems.foods})
                }>
                <View>
                  <Text className="text-black font-bold">
                    {foodItems.categoryName}
                  </Text>
                  <Image
                    source={foodItems.categoryImage}
                    className="h-[7.5vh] w-[15vw] m-4 p-[6em] bg-[#e2dede] rounded-full"
                  />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
        <View>
          <Text className="text-black">Food For You</Text>
          <Image
            source={require('../../assets/foods/githeri.jpg')}
            className="w-[20vw] h-[10vh]"
          />
          <Text className="text-black">Githeri Curry</Text>
          <Image source={require('../../assets/foods/clock-icon.png')} className="w-[6vw] h-[3vh]"/>
          <Text className="text-gray-400">20 mins</Text>
          <Image source={require('../../assets/foods/star.png')} className="w-[6vw] h-[3vh]"/>
          <Text className="text-gray-400">5.7</Text>
          
          <Image
            source={require('../../assets/foods/african-pilau.jpg')}
            className="w-[20vw] h-[10vh]"
          />
          <Text className="text-black">Beef Pilau</Text>
          <Image source={require('../../assets/foods/clock-icon.png')} className="w-[6vw] h-[3vh]"/>
          <Text className="text-gray-400">20 mins</Text>
          <Image source={require('../../assets/foods/star.png')} className="w-[6vw] h-[3vh]"/>
          <Text className="text-gray-400">5.7</Text>
        </View>
      </View>
    </ScrollView>
  );
}
