import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

type JewelleryItem = {
  id: string;
  name: string;
  price: string;
  url: string;
};

type ItemsType = {
  rings: JewelleryItem[];
  pendants: JewelleryItem[];
  bracelets: JewelleryItem[];
};

const items: ItemsType = {
  rings: [
    {
      id: "1",
      name: "Princess Diana Inspired Blue Sapphire Ring with Diamond Halo",
      price: "₹909-₹148,149",
      url: "https://assets.angara.com/ring/sr0169s/8x6mm-aaa-blue-sapphire-white-gold-ring.jpg",
    },
    {
      id: "2",
      name: "Round Opal Cathedral Ring with Diamond Halo",
      price: "₹649-₹1,809",
      url: "https://assets.angara.com/ring/sr1077opd/8mm-aaaa-opal-white-gold-ring.jpg",
    },
    {
      id: "3",
      name: "Solitaire Round Diamond Infinity Promise Ring",
      price: "₹169-₹108,149",
      url: "https://assets.angara.com/ring/sr1437d/2.8mm-gvs2-diamond-18k-white-gold-ring.jpg",
    },
    {
      id: "4",
      name: "Emerald and Diamond Three Stone Ring",
      price: "₹1319-₹142,099",
      url: "https://assets.angara.com/ring/sr0217ed/7x5mm-aaa-emerald-yellow-gold-ring.jpg",
    },
  ],
  pendants: [
    {
      id: "1",
      name: "Aquamarine Infinity Heart Pendant with Diamonds",
      price: "₹239-₹1,059",
      url: "https://assets.angara.com/pendant/sp1084aqd/6mm-aaaa-aquamarine-white-gold-pendant.jpg",
    },
    {
      id: "2",
      name: "Blue Sapphire Teardrop Pendant with Diamond",
      price: "₹219-₹112,409",
      url: "https://assets.angara.com/pendant/sp0169s/7x5mm-aaa-blue-sapphire-white-gold-pendant.jpg",
    },
    {
      id: "3",
      name: "Bezel-Set Solitaire Heart Ruby Pendant",
      price: "₹459-₹4,079",
      url: "https://assets.angara.com/pendant/sp0152r/5mm-aaa-ruby-white-gold-pendant.jpg",
    },
    {
      id: "4",
      name: "Emerald and Diamond Three Stone Ring",
      price: "₹619-₹3,989",
      url: "https://assets.angara.com/pendant/sp1749am/10x8mm-aaaa-amethyst-white-gold-pendant.jpg",
    },
  ],
  bracelets: [
    {
      id: "1",
      name: "Bezel-Set Round Opal Chain Bracelet",
      price: "₹309-₹359",
      url: "https://assets.angara.com/bracelet/sb0299op/4mm-aaaa-opal-yellow-gold-bracelet.jpg",
    },
    {
      id: "2",
      name: "Graduated Bezel-Set Diamond Bolo Bracelet",
      price: "₹1,049-₹3,809",
      url: "https://assets.angara.com/bracelet/sb0425d/2.6mm-hsi2-diamond-yellow-gold-bracelet.jpg",
    },
    {
      id: "3",
      name: "Vintage Style Bezel-Set Ruby and Diamond Bracelet",
      price: "₹719-₹1,729",
      url: "https://assets.angara.com/bracelet/sb0371rd/3.5mm-aaa-ruby-yellow-gold-bracelet.jpg",
    },
    {
      id: "4",
      name: "Round Opal Cathedral Ring with Diamond Halo",
      price: "₹469-₹3,869",
      url: "https://assets.angara.com/bracelet/sb0305sd/3.5mm-aaa-blue-sapphire-white-gold-bracelet.jpg",
    },
  ],
};

const Jewellery = () => {
  const [activeTab, setActiveTab] = useState<
    "rings" | "pendants" | "bracelets"
  >("rings");

  const renderItem = ({ item }: { item: JewelleryItem }) => (
    <View style={styles.itemContainer}>
      <Image
        style={{ width: 200, height: 218, borderRadius: 15 }}
        source={{ uri: item.url }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "200",
          paddingVertical: 16,
          marginHorizontal: 8,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: "100",
          marginBottom: 16,
          marginHorizontal: 8,
        }}
      >
        {item.price}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={{marginVertical:20, fontSize:16, fontWeight:'600'}}>Find Your Favorite</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "rings" && styles.activeTab]}
          onPress={() => setActiveTab("rings")}
        >
          <Text style={styles.tabText}>Rings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "pendants" && styles.activeTab]}
          onPress={() => setActiveTab("pendants")}
        >
          <Text style={styles.tabText}>Pendants</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "bracelets" && styles.activeTab]}
          onPress={() => setActiveTab("bracelets")}
        >
          <Text style={styles.tabText}>Bracelets</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items[activeTab]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#fff'
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 14,
    marginBottom: 16,
  },
  tab: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#e6e6e7",
  },
  activeTab: {
    borderColor: "#f4c93e",
    borderWidth: 1,
  },
  tabText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "100",
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: "#ccc",
    maxWidth: 215,
    borderTopColor: "#ccc",
    borderLeftColor: "#ccc",
    borderRightColor: "#ccc",
    borderRadius: 15,
    margin: 4,
    backgroundColor:'#fff'
  },
});

export default Jewellery;
