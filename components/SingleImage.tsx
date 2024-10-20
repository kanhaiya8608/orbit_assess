// components/SingleImage.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SingleImage = ({ source, text }: { source: string; text: string }) => (
  <View style={styles.imageContainer}>
    <Image source={{ uri: source }} style={styles.mainImage} />
    <Text style={styles.imageText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 15,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SingleImage;
