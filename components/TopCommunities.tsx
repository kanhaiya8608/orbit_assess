import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

const topCommunities = Array.from({ length: 50 }, (_, i) => ({
  id: i.toString(),
  title: `Places of France`,
  posts: `${Math.floor(Math.random() * 200 + 50)} posts/day`,
  image: `https://picsum.photos/seed/community${i}/200/300`,
}));

const TopCommunities = () => (
  <FlatList
    horizontal
    data={topCommunities}
    renderItem={({ item }) => (
      <View style={styles.communityContainer}>
        <Image source={{ uri: item.image }} style={styles.communityImage} />
        <Text style={styles.imageOverlayTextLeft}>{item.title}</Text>
        <Text style={styles.imageOverlayTextRightTop}>{item.posts}</Text>
      </View>
    )}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
  />
);

const styles = StyleSheet.create({
  communityContainer: {
    marginRight: 10,
    position: 'relative',
  },
  communityImage: {
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
  imageOverlayTextRightTop: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TopCommunities;
