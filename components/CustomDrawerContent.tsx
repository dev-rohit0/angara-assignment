import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props: any) {
  const router = useRouter;
  const{top,bottom} = useSafeAreaInsets()
  return(

      <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label={"Navratna Jewellery"} onPress={() => {}} />
      <DrawerItem label={"Gem Recommendation"} onPress={() => {}} />
      <DrawerItem label={"Blog"} onPress={() => {}} />
    </DrawerContentScrollView>
    <View
        style={{
            borderTopColor:'#f9f9f9',
            borderTopWidth:1,
            padding:20,
            paddingBottom:20+bottom
        }}
    >
        <Text style={{fontWeight:'600',fontSize:16,paddingVertical:4}}>Login/sign up</Text>
        <Text style={{textDecorationLine:"underline", fontWeight:'100',paddingVertical:4}}>My Orders</Text>
        <Text style={{textDecorationLine:"underline", fontWeight:'100',paddingVertical:4}}>Contact Us</Text>
    </View>
  </View>
)
}
