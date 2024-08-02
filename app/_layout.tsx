import 'react-native-gesture-handler'
import {Drawer} from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/CustomDrawerContent';


const DrawerLayout=()=>{
  return(
    <GestureHandlerRootView style={{flex:1}}>
      <Drawer drawerContent={CustomDrawerContent} screenOptions={{headerShown:false}}>
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel:'Home',
            headerTitle:'',
            drawerIcon:({size,color})=>(
              <Ionicons name='home-outline' size={size} color={color}/>
            )
          }}
        >

        </Drawer.Screen>
      </Drawer>
    </GestureHandlerRootView>
  )
}
export default DrawerLayout