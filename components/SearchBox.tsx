// components/SearchBox.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBox = () => (
  <TextInput style={styles.searchBox} placeholder="Search..." placeholderTextColor="#aaa" />
);

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    color: '#333',
    padding: 10,
    marginVertical: 10,
  },
});

export default SearchBox;
