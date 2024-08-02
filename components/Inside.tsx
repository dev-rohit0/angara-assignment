import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Inside = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainerHead}>
        <Text style={{fontWeight:'300',fontSize:16}}>Insider View</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/images/productImages/ethical-sourcing-&-production_2023.gif')} // Correct use of require() for local images
            style={styles.image}
          />
          <Text style={[styles.text,styles.spcl]}>Ethical Sourcing</Text>
        </View>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/images/productImages/design-and-development_2023.gif')} // Correct use of require() for local images
            style={styles.image}
          />
          <Text style={styles.text}>Handcrafted to Perfection</Text>
        </View>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/images/productImages/exceptional-quality_2023.gif')} // Correct use of require() for local images
            style={styles.image}
          />
          <Text style={styles.text}>Step By Step Inspection</Text>
        </View>
        <View style={styles.textContainer}>
          <Image
            source={require('../assets/images/productImages/fast-shipping_2023.gif')} // Correct use of require() for local images
            style={styles.image}
          />
          <Text style={styles.text}>High Speed Service</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  textContainer: {
    
    width: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'#e9e9e9' 
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '200',
    marginTop: 4, 
  },
  image: {
    width: 100,
    height: 100,
  },
  heading: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold', 
    fontSize: 20,
  },
  textContainerHead: {
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spcl:{
    paddingVertical: 11
  }
});

export default Inside;
