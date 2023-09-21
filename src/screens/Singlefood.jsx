import {useContext} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {CartContext} from '../context/state';

export default function Singlefood({route, navigation}) {
  const {singlefood} = route.params;
  const {cart, setCart} = useContext(CartContext);

  function addToCart(food) {
    setCart([...cart, food]);
  }
  // console.log(cart);

  return (
    <View className="my-5 w-[90%] mx-auto">
      <Image
        source={singlefood.image}
        className="h-[15vh] w-[30vw] self-center"
      />
      <Text className="text-black text-center font-bold text-4xl mt-7">
        {singlefood.foodName}
      </Text>
      <View className="flex flex-row justify-between items-center border-b border-gray-700 my-5 p-3">
        <View className="flex flex-row items-center gap-2">
          <Image
            source={require('../../assets/foods/clock-icon.png')}
            className="w-[8vw] h-[4vh]"
          />
          <Text className="text-gray-500 text-2xl font-semibold">20 mins</Text>
        </View>
        <View className="flex flex-row items-center gap-2">
          <Image
            source={require('../../assets/foods/star.png')}
            className="w-[8vw] h-[4vh]"
          />
          <Text className="text-gray-500 text-2xl font-semibold">5.7</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between my-5 items-center">
        <View>
          <Text className="text-[#ff7356] font-bold text-3xl">
            Ksh {singlefood.price}
          </Text>
        </View>
        <View className="flex flex-row gap-3 justify-center items-center bg-white pb-[6.6px] pr-3 rounded-[30px]">
          <View>
            <Text className="bg-gray-400 font-bold py-2 px-4 rounded-[100px] text-xl">
              +
            </Text>
          </View>
          <View>
            <Text className="text-black text-2xl font-semibold">0</Text>
          </View>
          <View>
            <Text className="text-white bg-[#ff7356] font-bold text-xl py-2 px-4 rounded-[100px]">
              -
            </Text>
          </View>
        </View>
      </View>
      <Text className="text-black font-bold text-3xl">About Food</Text>
      <Text className="text-black my-2 text-2xl">{singlefood.description}</Text>

      {/* <Button
        title="Add To Order"
        className="my-5 bg-[#ff7356] rounded-[50px] text-white"
        onPress={() => {
          addToCart(singlefood);
        }}
      /> */}
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Cart');
          addToCart(singlefood);
        }}>
        <Text className="my-5 bg-[#ff7356] p-5 text-2xl text-center rounded-[50px] text-white w-[90%] mx-auto">
          Add To Order
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text className="my-5 bg-gray-500 p-5 text-center rounded-[50px] text-white w-[30%] mx-auto">
          Navigate To Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}
