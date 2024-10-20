// components/SectionHeader.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const SectionHeader = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.title}>{title}</Text>
    <Pressable onPress={onPress}>
      <Text style={styles.seeAllText}>See All</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
  },
  seeAllText: {
    color: 'green',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SectionHeader;
