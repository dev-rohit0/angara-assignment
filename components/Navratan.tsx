import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Navratan = () => {
  return (
  <View style={{backgroundColor:'#fff'}}>

      <Text style={{fontWeight:'500', fontSize:16,textAlign:'center'}}>Explore Navaratnas</Text>
    <View style={styles.container}>
      <View style={styles.cardContainer}>
      <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://assets.angara.com/cms/catalog/filter/Carat05.jpg",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Diamond</Text>
            <Text style={styles.cardSubText}>Heera</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://assets.angara.com/cms/catalog/filter/BO-Round-Faceted-AAA.png",
            }}
            />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Blue Sapphire</Text>
            <Text style={styles.cardSubText}>Neelam</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://assets.angara.com/cms/catalog/filter/Carat05.jpg",
            }}
            />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Ruby</Text>
            <Text style={styles.cardSubText}>Manikya</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://assets.angara.com/cms/catalog/filter/YS-Round-Faceted-AAAA.png",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Yellow Sapphire</Text>
            <Text style={styles.cardSubText}>Pukhraj</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://assets.angara.com/cms/catalog/filter/FWPR-Round-Cabochon-AAAA.png",
            }}
            />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Freshwater Cultured Pearl</Text>
            <Text style={styles.cardSubText}>Moti</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://assets.angara.com/cms/catalog/filter/S-Round-Faceted-AAAA.png",
            }}
            />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Blue Sapphire</Text>
            <Text style={styles.cardSubText}>Neelam</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop:20,marginBottom:20, width:'100%',height:180,overflow:"hidden"}}>
        <Image
          source={{uri:'https://s3.ap-south-1.amazonaws.com/assets.vedicgems.com/banners/promotional/Pooja-Mobile.jpg'}}
          style={{flex:1,objectFit:"contain",borderRadius:40}}

        />
      </View>
    </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 40,
    backgroundColor:'#fff'
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 40,
  },
  card: {
    height: 86,
    width: 130,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(183, 183, 188, 0.1)",
    borderBottomColor: "rgba(183, 183, 188, 0.4)",
    borderTopColor: "rgba(183, 183, 188, 0.4)",
    backgroundColor: "rgb(250, 250, 251)",
    padding: 8,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "400",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
  },
  cardImage: {
    position: "absolute",
    top: -25,
    left: 38,
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  textContainer: {
    marginTop:10
  },
  cardText: {
    fontWeight: "400",
    fontSize:12,
    textAlign: 'center',
  },
  cardSubText: {
    fontWeight: "200",
    fontSize:10,
    textAlign: 'center'
  },
});

export default Navratan;
