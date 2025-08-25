/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Image } from 'react-native/types_generated/index';
*/

import React from "react";
import {View, Text, ScrollView, Image, Linking, TouchableOpacity, StyleShhet} from 'react-native';
import { StyleSheet } from "react-native/types_generated/index";

const App = () => {
 
    const OpenLinkFiap = () => {
      Linking.openURL('https://www.fiap.com.br/graduacao/bacharelado/engenharia-de-software/');
    };
    const OpenLink = () => {
      Linking.openURL('https://www.fiap.com.br/');
    };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center', // verticalmente
      alignItems: 'center', // horizontal
      margin: 5,
      padding: 7,
      borderWidth: 1,
      dorderColor: '#f0f',
      gap: 20,
      }}>
      
      <ScrollView horizontal={false} style={stylesHome.containerTow}>
          <TouchableOpacity onPress={OpenLinkFiap}>
            <Image
            source={{}}
            style={stylesHome.img}
            resizeMode="contain"
            />
          </TouchableOpacity>
      </ScrollView>
      <ScrollView horizontal={false} style={stylesHome.containerOne}>

        <Text style={stylesHome.textHead}>FIAP</Text>
        <Text style={stylesHome.text}> 1 - Item | FIAP - ES - Engenharia de Software </Text>
        <Text style={stylesHome.text}> 2 - Item</Text>
        <Text style={stylesHome.text}> 3 - Item</Text>
        <Text> 4 - Item </Text>
        <Text> 5 - Item </Text>
        <Text> 6 - Item </Text>
        <Text> 7 - Item </Text>
        <Text style={stylesHome.text}> 8 - Item </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
        <Text> 9 - Bem Vindo a aula </Text>
      </ScrollView>
      <ScrollView horizontal={false} style={stylesHome.containerTwo}>
        <TouchableOpacity>
        <Image source={{'https://imgs.search.brave.com/QLiu1aFmqaSw08LB7TnN3cEWW4FzhAM2OD2-YTlxCOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWN1/cmUubWVldHVwc3Rh/dGljLmNvbS9waG90/b3MvZXZlbnQvYS8w/LzUvMC9jbGVhbl80/ODgyMDEwNDAud2Vi/cA'}}
        style={stylesHome.img}
        resizeMode="contain"
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const stylesHome = StyleSheet.creat({

  containerOne: {
    flex: 1,
  },

  containerTwo: {

  }
});

export default App;