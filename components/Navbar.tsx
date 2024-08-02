import React from 'react';
import { View, TouchableOpacity, Text,Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16 }}>
      <View>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <SvgUri
            uri="https://assets.angara.com/assets/sds/icons/hamburger.svg"
            width="24"
            height="24"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {}}>
          <SvgUri
            width="140"
            height="58.38"
            uri="https://s3.ap-south-1.amazonaws.com/assets.vedicgems.com/common-images/Logo/VedicGems_Logo.svg"
          />
          
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <TouchableOpacity onPress={() => {}}>
          <Text><Ionicons name="person-outline" size={24} /></Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="bag-outline" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
