import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const trendingHashtags = Array.from({ length: 50 }, (_, i) => ({
  id: i.toString(),
  hashtag: `#hashtag${i + 1}`,
  distance: `${(Math.random() * 10).toFixed(1)} m`,
  image: `https://picsum.photos/seed/trending${i}/200/300`,
}));

const TrendingHashtags = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
    {trendingHashtags.map((item) => (
      <View key={item.id} style={styles.hashtagContainer}>
        <Image source={{ uri: item.image }} style={styles.hashtagImage} />
        <Text style={styles.imageOverlayTextLeft}>{item.hashtag}</Text>
        <Text style={styles.imageOverlayTextRight}>{item.distance}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
  },
  hashtagContainer: {
    marginRight: 10,
    alignItems: 'center',
    position: 'relative',
  },
  hashtagImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imageOverlayTextLeft: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageOverlayTextRight: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TrendingHashtags;
