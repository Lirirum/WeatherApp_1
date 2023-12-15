import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const WeatherScreen = ({ route }) => {
  const { city } = route.params;
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const apiKey = '2d5a56c16e8b912744f1693b848107f7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [city]);

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const temperature = weather.main.temp;
  const humidity = weather.main.humidity;
  const description = weather.weather[0].description;
  const windSpeed = weather.wind.speed;
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
  const weatherIconCode = weather.weather[0].icon; 

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case '01d':
        return 'sun-o';
      case '01n':
        return 'moon-o';
      case '02d':
      case '02n':
        return 'cloud';
      case '03d':
      case '03n':
        return 'cloud';
      case '04d':
      case '04n':
        return 'cloud';
      case '09d':
      case '09n':
        return 'tint';
      case '10d':
      case '10n':
        return 'umbrella';
      case '11d':
      case '11n':
        return 'bolt';
      case '13d':
      case '13n':
        return 'snowflake-o';
      case '50d':
      case '50n':
        return 'fog';
      default:
        return 'question';
    }
  };

  c

  const backgroundImage = require('./img/4.jpg');
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View  style={styles.container}>

    <View style={styles.mainInfo}>
    <View style={styles.city_container}>
      <Text style={styles.city}>{weather.name}</Text>
      <Image src={`https://openweathermap.org/img/wn/${weatherIconCode}.png`}  style={styles.weatherIcon} />
    </View>
      <Text style={styles.temperature}>{temperature}°C</Text>
      </View>

        <View style={styles.weather}>
     
      <Text style={styles.text_details}>Вологість: {humidity}%</Text>
      <Text style={styles.text_details}>Опис: {description}</Text>
      <Text style={styles.text_details}>Швидкість вітру: {windSpeed} м/с</Text>
      <Text style={styles.text_details}>Схід сонця: {sunrise}</Text>
      <Text style={styles.text_details}>Захід сонця: {sunset}</Text>

      </View>
    </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   
   
   
    
  },
  weather:{
 
    marginTop:150,
    padding: 16,
    borderRadius:15,

    backgroundColor:"rgba(219, 219, 219,0.6)"

  },
  mainInfo:{
    marginTop:40,
    padding: 16,
    borderRadius:25,

    backgroundColor:"rgba(255, 255, 255,0.2)"

  },
  city: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white"
  },
  city_container:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
  },
  temperature: {
    fontSize: 55,
    marginBottom: 10,
    color:"white",
    fontWeight: '600',
    opacity:0.8
  },
  text_details: {
    fontSize: 18,
    marginBottom: 8,
    color:"white",
    fontWeight: '600',
 
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  listItemText: {
    fontSize: 16,
  },
  weatherIcon: {
    width: 60,
    height: 60,
   
    marginLeft: 10,
   
  },
  forecastList: {
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default WeatherScreen;