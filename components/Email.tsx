import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";
import { SvgUri } from "react-native-svg";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (validateEmail(email)) {
      Alert.alert("Success", "Email submitted successfully!");
      setEmail(""); 
    } else {
      Alert.alert("Error", "Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.email}>Let's keep in touch!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit}>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socials}>
        <SvgUri
            uri={'https://assets.angara.com/assets/icons/facebook.svg'}
        />
        <SvgUri
            uri={'https://assets.angara.com/assets/icons/instagram.svg'}
        />
        <SvgUri
            uri={'https://assets.angara.com/assets/icons/pinterest.svg'}
        />
        <SvgUri
            uri={'https://assets.angara.com/assets/icons/youtube.svg'}
        />
        <SvgUri
            uri={'https://assets.angara.com/assets/icons/twitter.svg'}
        />
      </View>
      <View style={styles.paymentGateways}>
      <SvgUri
            uri={'https://assets.angara.com/assets/images/footer-icons/new-footer-icons/visa.svg'}
        />
        <SvgUri
            uri={'https://assets.angara.com/assets/images/footer-icons/new-footer-icons/mastercard.svg'}
        />
        <Image
        source={{uri:'https://www.angara.in/cdn/shop/files/Rupay_1.png?v=1693916001&width=100%'}}
        style={{width:48,height:48}}
        />
        <Image
        source={{uri:'https://www.angara.in/cdn/shop/files/UPI.png?v=1693916001&width=100%'}}
        style={{width:48,height:48}}
        />
        <Image
        source={{uri:'https://www.angara.in/cdn/shop/files/GooglePay.png?v=1693916001&width=100%'}}
        style={{width:48,height:48}}
        />
        <Image
        source={{uri:'https://www.angara.in/cdn/shop/files/BHIM.png?v=1693916001&width=100%'}}
        style={{width:48,height:48}}
        />
        <Image
        source={{uri:'https://www.angara.in/cdn/shop/files/paytm.png?v=1693916001&width=100%'}}
        style={{width:48,height:48}}
        />
        <Image
        source={{uri:'https://www.angara.in/cdn/shop/files/PhonePe.png?v=1693916001&width=100%'}}
        style={{width:48,height:48}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingBottom: 16,
  },
  email: {
    fontWeight: "600",
    fontSize: 16,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  btnContainer: {
    backgroundColor: "#f79036",
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  btn: {
    textAlign: "center",
    color: "#fff",
  },
  socials:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    gap: 24,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    backgroundColor:'#fff',
    paddingHorizontal: 10

  },
  paymentGateways:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    alignItems:'center',
    gap: 24,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    backgroundColor:'#fff',
    paddingHorizontal: 10
  }
});

export default Email;
