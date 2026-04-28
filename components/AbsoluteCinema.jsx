import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const AbsoluteCinema = ({ movies }) => {
  return (
    <View>
    
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
              <Text>{item.title}</Text>
              <Text>{item.releasedate}</Text>
              <Text>{item.vote_average}</Text>
            </View>
          )}

        />
    </View>
  );
};

export default AbsoluteCinema;
