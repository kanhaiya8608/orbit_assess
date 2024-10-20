import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

const topNomads = Array.from({ length: 50 }, (_, i) => ({
  id: i.toString(),
  name: `Nomad ${i + 1}`,
  designation: 'Travel Blogger',
  image: `https://picsum.photos/seed/person${i}/100/100`,
}));

const TopNomads = () => (
  <FlatList
    horizontal
    data={topNomads}
    renderItem={({ item }) => (
      <View style={styles.nomadContainer}>
        <Image source={{ uri: item.image }} style={styles.nomadImage} />
        <Text style={styles.nomadName}>{item.name}</Text>
        <Text style={styles.nomadDesignation}>{item.designation}</Text>
      </View>
    )}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
  />
);

const styles = StyleSheet.create({
  nomadContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  nomadImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nomadName: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  nomadDesignation: {
    color: 'green',
    fontSize: 12,
  },
});

export default TopNomads;
