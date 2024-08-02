import React from 'react';
import { View, Image, FlatList, ListRenderItem, Text } from 'react-native';

const Partners = () => {
  const Icons: string[] = [
    'https://www.angara.in/cdn/shop/files/ajio_adjusted_f65c36f1-c14a-4cd2-9fec-752ec9cd464c_300x.png?v=1699345106',
    'https://www.angara.in/cdn/shop/files/Amazon_logo_svg_300x.png?v=1693815505',
    'https://www.angara.in/cdn/shop/files/bluedart_adjusted_c3db01bb-569f-44e2-ab95-e6fcdc53db80_300x.png?v=1699345045',
    'https://www.angara.in/cdn/shop/files/bis_adjusted_300x.png?v=1699344858',
    'https://www.angara.in/cdn/shop/files/igi_adjusted_2363171c-5141-40df-8d37-caf13710058e_300x.png?v=1699345173',
    'https://www.angara.in/cdn/shop/files/sgl_adjusted_300x.png?v=1699344895'
  ];

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <View className={`px-4 py-2`}>
      <Image
        source={{ uri: item }}
        className={`w-24 h-24`}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <View className={`p-6 bg-white`}>
        <Text className='text-center font-mdedium text-lg'>Our Partners</Text>
      <FlatList
        horizontal
        data={Icons}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        snapToAlignment='center'
      />
    </View>
  );
}

export default Partners;
