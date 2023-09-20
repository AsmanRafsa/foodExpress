import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
export default function Categoryscreen({route, navigation}) {
  const {foods} = route.params;
  return (
    <ScrollView>
      <View>
        {foods.map(items => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Singlefood', {singlefood:Z});
              }}>
              <View>
                <Text className="text-black">{items.foodName}</Text>
                <Text className="text-black">{items.price}</Text>
                <Image className="h-[30vh] w-[30vh]" source={items.image} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
