import {useContext} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {CartContext} from '../context/state';

export default function Cart() {
  const {cart, setCart} = useContext(CartContext);
  console.log(cart);

  return (
    <ScrollView>
      <View className="w-[90%] mx-auto">
        {cart.map(addedFood => {
          return (
            <View className="flex flex-row justify-between items-center shadow shadow-gray-700 rounded my-4 p-4">
              <View>
                <Image
                  source={addedFood.image}
                  className="w-[30vw] h-[15vh] mb-5"
                />
              </View>
              <View className="flex flex-col justify-center items-start">
                <Text className="text-black text-xl text-right font-medium">
                  {addedFood.foodName}
                </Text>
                <Text className="text-black text-xl mt-1 font-medium">
                  Ksh {addedFood.price}{' '}
                </Text>
                <View className="flex flex-row gap-3 justify-center items-center bg-gray-200 pb-[6.6px] mt-4 pr-2  rounded-[30px] self-center">
                  <View>
                    <Text className="text-white bg-[#ff7356] font-bold text-xl py-2 px-4 rounded-[100px]">
                      -
                    </Text>
                  </View>

                  <View>
                    <Text className="text-black text-2xl font-semibold">0</Text>
                  </View>
                  <View>
                    <Text className="bg-[#ff7356] font-bold py-2 px-4 rounded-[100px] text-xl">
                      +
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Image
                  source={require('../../assets/foods/delete.png')}
                  className="w-[6vw] h-[3vh] mb-24"
                />
              </View>
            </View>
          );
        })}
        <View className="flex flex-row justify-between">
          <Text className="text-black text-2xl">Total Amount</Text>
          <View className="flex flex-row gap-2">
            <Text className="text-black font-bold text-2xl">Ksh</Text>
            <Text className="text-black font-bold text-2xl">4100</Text>
          </View>
        </View>
        <View>

      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Cart');
        }}>
        <Text className="my-5 bg-[#ff7356] p-5 text-center rounded-[50px] text-xl font-semibold text-white w-[30%] mx-auto">
          Checkout
        </Text>
      </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
