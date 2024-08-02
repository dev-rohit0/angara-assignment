import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    
  };

  return (
    <View style={styles.searchMain}>
      <View style={styles.searchHeader}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name='search-sharp' size={24}/>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Products....."
          value={searchText}
          onChangeText={handleSearchChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchMain: {
    padding: 10,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: 'gray', 
    borderRadius: 12, 
  },
});

export default SearchBar;
