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
    <View>
      <Text className="text-black">{singlefood.description}</Text>
      <Text className="text-black">{singlefood.foodname}</Text>
      <Text className="text-black">{singlefood.price}</Text>
      <Image source={singlefood.image} className="h-[30vh] w-[30vh]" />
      <Button
        title="Order"
        className="my-5"
        onPress={() => {
          addToCart(singlefood);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text className='text-white m-6 bg-orange-300 text-center p-3'>Navigate To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
