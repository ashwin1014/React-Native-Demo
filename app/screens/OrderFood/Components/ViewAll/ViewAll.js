import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

import ItemCard from '../ItemCard/ItemCard';
import Center from '../../../../shared/Center/Center';

const ViewAll = () => {
  const {
    params: {data},
  } = useRoute();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <ItemCard
            img={item.img}
            cost={item.cost}
            discount={item.discountCost}
            name={item.name}
            restaurant={item.restaurant}
            type={item.type}
          />
        )}
      />
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
