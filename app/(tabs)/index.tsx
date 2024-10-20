// Index.tsx
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SearchBox from '@/components/SearchBox';
import SingleImage from '@/components/SingleImage';
import SectionHeader from '@/components/SectionHeader';
import TrendingHashtags from '@/components/TrendingHashtags';
import TopCommunities from '@/components/TopCommunities';
import TopNomads from '@/components/TopNomads';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Discover the world</Text>
      <SearchBox />

      <SingleImage source="https://picsum.photos/500/300" text="Sample Text" />

      <SectionHeader title="Trending Hashtags" onPress={() => {}} />
      <TrendingHashtags />

      <SectionHeader title="Top Communities" onPress={() => {}} />
      <TopCommunities />

      <SectionHeader title="Top Nomads" onPress={() => {}} />
      <TopNomads />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f1f5f9',
    paddingTop: 100,
    paddingBottom: 50,
  },
  title: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
  },
});
