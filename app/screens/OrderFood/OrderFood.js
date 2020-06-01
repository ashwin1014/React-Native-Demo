import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {uid} from '../../utils/common';

import globalStyles from '../../styles/globalStyles';
import styles from './OrderFood.style';
import ItemCard from './Components/ItemCard/ItemCard';

import {DUMMY_DATA} from './sampleData';
import IconButton from '../../shared/IconButton/IconButton';
import ImageButton from '../../shared/ImageButton/ImageButton';

const foodIcon = require('../../assets/images/dinner.png');

const DUMMY_CATEGORY = [
  'New Arrivals',
  'Pure Veg',
  'Great Offers',
  'Trending Places',
  'Vegan',
  'Wine & Dine',
];

const DUMMY_TYPES = [
  {id: '1', type: 'North Indian', img: DUMMY_DATA[0].img},
  {id: '2', type: 'South Indian', img: DUMMY_DATA[1].img},
  {id: '3', type: 'Fast Food', img: DUMMY_DATA[2].img},
  {id: '4', type: 'Healthy Food', img: DUMMY_DATA[3].img},
];

const OrderFood = ({navigation}) => {
  const data = DUMMY_DATA;
  const slicedItems = data.length >= 5 ? data.slice(0, 4) : data;

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
      <View style={styles.iconBtnsList}>
        <FlatList
          horizontal
          data={DUMMY_CATEGORY}
          keyExtractor={_item => uid()}
          renderItem={({item}) => (
            <IconButton
              text={item}
              icon={foodIcon}
              style={styles.categoryBtn}
            />
          )}
        />
      </View>
      <View style={styles.iconBtnsList}>
        <FlatList
          data={DUMMY_TYPES}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => (
            <ImageButton
              img={item.img}
              text={item.type}
              style={styles.categoryBtn}
            />
          )}
        />
      </View>
    </View>
  );
};

export default OrderFood;
