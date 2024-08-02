import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import 'nativewind/types.d';

const CategorySection = () => {
  return (
    <View className="my-4">
      <View className="flex flex-row w-full overflow-x-auto px-[15px] py-0 scrollable hide-scrollbar justify-between items-center">
        <View className="flex  w-[48%] overflow-hidden px-1 py-2 bg-custom-gradient ">
          <ImageBackground
            className="category-container text-center  bg-no-repeat overflow-hidden py-2 px-2 relative rounded-lg h-[70px]"
            source={{ uri: 'https://i.ibb.co/nk8rmXm/gems.png' }}
            style={{ width: '100%' }} // Adjust width and height as needed
          >
            <TouchableOpacity className="category-inner">
              <Text className="heading font-semibold text-[14px]">Navaratna</Text>
              <Text className="text text-[12px]">Jewellery</Text>
              <View className="line" />
              <Text className="shop text-[6px]">SHOP NOW</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View className="gap-space w-[48%] overflow-hidden p-[1px] bg-custom-gradient">
          <ImageBackground
            className="category-container text-center  bg-no-repeat overflow-hidden py-2 px-2 relative rounded-lg h-[70px] bg-custom-gradient"
            source={{ uri: 'https://i.ibb.co/dkjfr0G/ring.png' }}
            style={{ width: '100%' }} // Adjust width and height as needed
          >
            <TouchableOpacity className="category-inner">
              <Text className="heading font-semibold text-[14px]">Gemstone</Text>
              <Text className="text text-[12px]">Recommendation</Text>
              <View className="line" />
              <Text className="shop text-[6px]">EXPLORE NOW</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default CategorySection;
