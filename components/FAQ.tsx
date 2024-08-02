import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Accordion from './Accordion'; // Update path if necessary

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Accordion
        title="Customer Service"
        isOpen={openIndex === 0}
        onPress={() => handlePress(0)}
      >
        <Text style={styles.text}>
            Gemstone Recommendation
        </Text>
        <Text style={styles.text}>
            FAQ
        </Text>
        <Text style={styles.text}>
            Order Status
        </Text>
        
        <Text style={styles.text}>
            Return & Exchange
        </Text>
        
        <Text style={styles.text}>
            Resize and Repair
        </Text>
      </Accordion>
      <Accordion
        title="About Us"
        isOpen={openIndex === 1}
        onPress={() => handlePress(1)}
      >
        <Text style={styles.text}>About Vedicgems</Text>
        <Text style={styles.text}>Blog</Text>
        <Text style={styles.text}>Terms and Conditions</Text>
        <Text style={styles.text}>Privacy Policy</Text>
      </Accordion>
      <Accordion
        title="Why Vedicgems?"
        isOpen={openIndex === 2}
        onPress={() => handlePress(2)}
      >
        <Text style={styles.text}>Pooja Energisation</Text>
        <Text style={styles.text}>Consultation</Text>
        <Text style={styles.text}>Free Shipping</Text>
        <Text style={styles.text}>Payment Options</Text>
        <Text style={styles.text}>Enhanced Warranty Plan</Text>
        <Text style={styles.text}>Certified Jewellery</Text>
      </Accordion>
      <Text style={styles.refer}>Refer a Friend</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    padding: 10,
    fontWeight:'200'
  },
  refer:{
    fontWeight:'600',
    fontSize:16,
    paddingHorizontal:10,
    marginVertical:10
  }
});

export default FAQ;
