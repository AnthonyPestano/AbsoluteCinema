import React, {useEffect, useState}  from 'react';
import AbsoluteCinema from './components/AbsoluteCinema';
import api from './services/api';


import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, } from 'react-native';

export default function App() {

  const [movies, setmovies] = useState([]);
  useEffect(() => {
    loadmovies();
  }, []);
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2ZmOWM5YWJkODc5MWYxMGNhOGMzY2Q2OTI1YjM3YyIsIm5iZiI6MTc3NzQwMzUwMC44MzEsInN1YiI6IjY5ZjEwNjZjOWNjMjUxZjU4YzlkMmZmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EdzII959j1UcJA0Y-Y2oLB97SU4sDcwbXbFlqKJKOSo

// b3ff9c9abd8791f10ca8c3cd6925b37c

  const loadmovies = async () => {
    try {
      const response = await api.get('movies');
      setmovies(response.data.items);
      console.log(response.data.items);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text> ABSOLUTE CINEMA </Text>

      {movies.length > 0 ? (
        <AbsoluteCinema movies={movies} />
      ) : (
        <Text>No movies found.</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
