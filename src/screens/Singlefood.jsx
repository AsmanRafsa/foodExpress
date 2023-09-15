import {Image, Text, View} from 'react-native';

export default function Singlefood({route}) {
  const {singlefood} = route.params;
  console.log(singlefood);

  return (
    <View>
      <Text className="text-black">{singlefood.description}</Text>
      <Text className="text-black">{singlefood.foodname}</Text>
      <Text className="text-black">{singlefood.price}</Text>
      <Image source={singlefood.image} className="h-[30vh] w-[30vh]" />
    </View>
  );
}
