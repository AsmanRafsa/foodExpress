import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { data } from '../data';
export default function Categoryscreen({route, navigation}) {
  const {foods} = route.params;
  return (
    <ScrollView>
     
      <View className="flex flex-row flex-wrap gap-5 items-center justify-center mt-5">
        {foods.map(items => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Singlefood', {singlefood: items});
              }}>
              <View className="shadow shadow-gray-500 p-7 w-[40vw] rounded-xl">
                <Image className="h-[15vh] w-[30vw]" source={items.image} />
                <Text className="text-black text-center">{items.foodName}</Text>
                <Text className="text-black text-center font-bold">
                  Ksh {items.price}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
