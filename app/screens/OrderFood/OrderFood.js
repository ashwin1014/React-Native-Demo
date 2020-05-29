import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import globalStyles from '../../styles/globalStyles';
import styles from './OrderFood.style';
import ItemCard from './Components/ItemCard/ItemCard';

import {DUMMY_DATA} from './sampleData';

const OrderFood = ({navigation}) => {
  const data = DUMMY_DATA;
  const slicedItems = data.slice(0, 4);

  const viewMoreHandler = () => {
    const dataToSend = {
      data,
      name: 'Breakfast Combo',
    };
    navigation.navigate('View More', dataToSend);
  };

  const RenderFooter = () => {
    if (data.length < 4) {
      return null;
    }
    return (
      <TouchableOpacity onPress={viewMoreHandler}>
        <View style={styles.listFooterWrap}>
          <Text style={styles.viewMore}>
            +{data.length - slicedItems.length}
          </Text>
          <Text style={styles.viewMore}>More</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{...globalStyles.container, ...styles.container}}>
      <Text style={styles.title}>BREAKFAST COMBO</Text>
      <View style={styles.itemList}>
        <FlatList
          horizontal
          data={slicedItems}
          keyExtractor={item => item.id}
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
          ListFooterComponent={<RenderFooter />}
          ListFooterComponentStyle={styles.listFooter}
        />
      </View>
    </View>
  );
};

export default OrderFood;
