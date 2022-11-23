import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { Component, useState } from 'react';
export default function Favourite({ navigation }) {
  const [click, setcick] = useState()
  const DATA1 = [
    {
      title: "Strawbery",
      gt: "Fresh Fruits",
      price: "4.53",
      img: require("../../image/qua1.png")

    },
    {
      title: "Mango",
      gt: "Fresh Fruits",
      price: "3.9",
      img: require("../../image/qua2.png")

    },
    {
      title: "Graperfruit",
      gt: "Fresh Fruits",
      price: "4.53",
      img: require("../../image/qua3.png")
    },
    {
      title: "Pomegranate",
      gt: "Fresh Fruits",
      price: "4.53",
      img: require("../../image/qua4.png")
    },
  ];

  const Item1 = ({ item, click, onPress, backgroundColor, textColor, index }) => (
    <View>
      <ImageBackground style={{ width: 350, marginLeft: 20, marginTop: 25, height: 130, flexDirection: 'row' }} source={require("../../image/border2.png")}>
        <View style={{ flex: 0.4, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image style={{ width: 120, height: 90, resizeMode: 'contain' }} source={item.img}></Image>
        </View>
        <View style={{ flex: 0.5, width: "100%", height: "100%", alignItems: "center", justifyContent: 'center' }}>
          <View style={{ width: "100%", height: "100%", justifyContent: 'space-between', paddingTop: 15, paddingBottom: 15 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ fontSize: 18, color: "gray", fontStyle: 'italic' }}>{item.gt}</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", color:'#32cd32' }}>${item.price}</Text>
          </View>
        </View>
        <View style={{ flex: 0.15, alignItems: "center", justifyContent: "space-between", paddingTop: 10, paddingBottom: 15 }}>
          <TouchableOpacity>
            <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={require("../../image/daux.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <ImageBackground style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center" }} source={require("../../image/icon1_1.png")}>
              <Image style={{ width: 13, height: 20, justifyContent: "center", alignItems: "center" }} source={require("../../image/btngiohang.png")}></Image>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
  const renderItem1 = ({ item, index }) => {
    return (
      <Item1
        item={item}
        index={index}
        click={click}
      // onPress={() => {
      //        setcick(DATA.indexOf(item))
      //     }
      // }  
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
        <View style={{ flex: 0.15, width: "100%", height: "100%", alignItems: "center", justifyContent: "flex-end" }}>
          <View style={{ width: "90%", height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                <Image style={{ width: 20, height: 20 }} source={require("../../image/icon2.png")}></Image>
              </ImageBackground>
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Favourite</Text>
            <TouchableOpacity>
              <ImageBackground style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center" }} source={require("../../image/icon1.png")}>
                <Image style={{ width: "100%", height: "100%",marginLeft:10 }} source={require("../../image/avt.png")}></Image>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.085, width: "90%", justifyContent: "space-between" }}>

          <View style={{ width: "100%", paddingLeft: 15, height: "80%", flexDirection: "row", backgroundColor: "#F2EFEF", borderRadius: 10, alignItems: "center", justifyContent: "flex-start" }}>
            <Image style={{ width: 35, height: 35, paddingLeft: 10 }} source={require("../../image/iconsearch.png")}></Image>
            <TextInput style={{ width: "70%", height: "100%", paddingLeft: 20, fontSize: 20 }} placeholder={"Search favourate now"}></TextInput>
          </View>
          <View>

          </View>
        </View>
        <View style={{ flex: 0.665, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "100%", height: "100%" }}>
            <FlatList
              data={DATA1}
              renderItem={renderItem1}

            />
          </View>
        </View>
        <View style={{ flex: 0.1, width: "100%", height: "100%", justifyContent: "flex-end" }}>
          <View style={{ width: "100%", height: "70%", backgroundColor: "#EAB1B1", alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 15, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/btn4.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
              <Image style={{ width: 17, height: 28 }} source={require("../../image/btn2.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/icongiohang.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OrderDetail")}>
              <Image style={{ width: 30, height: 30 }} source={require("../../image/iconchuong.png")}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
