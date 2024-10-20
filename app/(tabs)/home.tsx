import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';


const { width, height } = Dimensions.get('window');

// Example array of image URLs from Picsum
const images = Array.from({ length: 50 }, (_, index) => ({
  id: index.toString(),
  uri: `https://picsum.photos/${Math.floor(Math.random() * 100) + 200}/800`,
  caption: `Caption for image ${index + 1}`,
  hashtags: `#hashtag${index + 1} #example`,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
}));

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height - 100}
        data={images}
        vertical={true}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />

          
            <Text style={styles.overlayTextTop}>For You</Text>

            {/* Bottom Overlay for Description, Hashtags, and Buttons */}
            <View style={styles.overlayBottom}>
              <View style={styles.textContainer}>
                
              <Text style={styles.overlayTextBottom}>{item.caption}</Text>

                <Text style={styles.overlayTextBottom}>{item.description}</Text>
                <Text style={styles.overlayTextBottom}>{item.hashtags}</Text>
              </View>
              <View style={styles.buttonsContainer}>
      
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="person-add-alt" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="chat-outline" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="favorite-outline" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="share-outline" size={40} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="paper-plane-outline" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayTextTop: {
    position: 'absolute',
    top: 30,
    width: '100%',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'condensedBold',
    textAlign: 'center',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between text and buttons
    alignItems: 'flex-end', // Align text and buttons to the bottom
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align text to the bottom of its container
    marginRight: 20, // Space between text and buttons
  },
  overlayTextBottom: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end', // Align buttons to the right
  },
  button: {
    marginBottom: 15, // Space between buttons
  },
});
