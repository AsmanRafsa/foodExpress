import {Image, Text, TouchableOpacity, View} from 'react-native';
import {data} from '../data';

export default function Homescreen({navigation}) {
  // console.log(data);
  return (
    <View>
      {data.map(foodItems => {
        return (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Category',{foods:foodItems.foods})}>
              <View>
                <Text className="text-black font-bold">
                  {foodItems.categoryName}
                </Text>
                <Image
                  source={foodItems.categoryImage}
                  className="h-[25vh] my-3 p-10"
                />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
