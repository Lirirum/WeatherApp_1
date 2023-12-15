// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');



  const handleSearch = () => {

    navigation.navigate('Weather', { city });
  };

  const backgroundImage = require('./img/3.jpg');
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
            

    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    appTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      
      
    },
    input: {
      height: 40,
      paddingLeft:10,
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 10,
      padding: 5,
      width: '80%',
      backgroundColor:"rgba(255,255,255,0.9)"
    },
    searchButton: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      marginLeft: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
  });

export default HomeScreen;