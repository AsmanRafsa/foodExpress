import {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {CartContext} from '../context/state';

export default function Cart() {
  const {cart, setCart} = useContext(CartContext);
  console.log(cart);

  return (
    <ScrollView>
    <View className="">
      {cart.map(addedFood => {
        return (
          <View>
            <Image source={addedFood.image} />
            <Text className="text-black">{addedFood.foodName}</Text>
            <Text className='text-black'>{addedFood.price} </Text>
          </View>
        );
      })}
    </View>
    </ScrollView>
  );
}
