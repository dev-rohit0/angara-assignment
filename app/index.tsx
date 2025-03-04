import React from "react";
import "nativewind/types.d";
import { View, Text, ScrollView } from "react-native";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategorySection from "@/components/Category";
import Home from "@/components/Home";
import Featured from "@/components/Featured";
import { SafeAreaView } from "react-native-safe-area-context";
import Partners from "@/components/Partners";
import Inside from "@/components/Inside";
import FAQ from "@/components/FAQ";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Navratan from "@/components/Navratan";
import Jewellery from "@/components/Jewellery";

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navbar />
        <SearchBar />
        <CategorySection />
        <Home />
        <Featured />
        <Navratan/>
        <Jewellery/>
        <Partners />
        {/* <Inside />  It is making app slow*/}
        <FAQ/>
        <Email/>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
