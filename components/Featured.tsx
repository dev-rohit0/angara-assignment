import React, { useEffect } from "react";
import { Text, View, Image, Dimensions, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Featured = () => {
  const width = Dimensions.get("window").width;
  const [loaded, error] = useFonts({
    custom: require("../assets/fonts/custom.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className={`p-6 bg-white`}>
      <Text className={`text-center font-semibold text-lg mb-4`}>Featured in</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className={`flex-row flex space-x-4`}
        snapToInterval={10}
        snapToAlignment="start"
        decelerationRate="normal"
      >
        
          <Image
            source={{ uri: 'https://i.ibb.co/xCNwtsr/askmen.webp' }}
            className={`w-36 h-10 mx-1`}
          />
          <Image
            source={{ uri: 'https://i.ibb.co/bQdv79m/byride.webp' }}
            className={`w-36 h-10 mx-1`}
          />
          <Image
            source={{ uri: 'https://i.ibb.co/Wtzcfs9/cbs-news.webp' }}
            className={`w-36 h-10 mx-1`}
          />
        
        
          <Image
            source={{ uri: 'https://i.ibb.co/brLgzpY/forbes.webp' }}
            className={`w-36 h-10 mx-1`}
          />
          <Image
            source={{ uri: 'https://i.ibb.co/k94d5YM/hello.webp' }}
            className={`w-36 h-10 mx-1`}
          />
          <Image
            source={{ uri: 'https://i.ibb.co/cTnjSJv/the-knot.webp' }}
            className={`w-36 h-10 mx-1`}
          />
        
        
          <Image
            source={{ uri: 'https://i.ibb.co/vPBNvhg/vogue.webp' }}
            className={`w-36 h-10 mx-1`}
          />
        
      </ScrollView>
    </View>
  );
};

export default Featured;
