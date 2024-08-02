import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define a type for the props
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onPress: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.toggle}>{isOpen ? '-' : '+'}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  toggle: {
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '300',
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Accordion;
