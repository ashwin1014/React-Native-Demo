import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './ItemCard.style';

import {convertMoney} from '../../../../utils/common';
import Button from '../../../../shared/Button/Button';

const FOOD_TYPE = {
  veg: require('../../../../assets/images/veg.png'),
  'non-veg': require('../../../../assets/images/non-veg.png'),
};

const ItemCard = ({img, cost = 0, discount = null, name, restaurant, type}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={img} />
      <View style={styles.cardInfo}>
        <View style={styles.titleWrapper}>
          <Image style={styles.foodType} source={FOOD_TYPE[type]} />
          <Text style={styles.title}>{name || ''}</Text>
        </View>
        <Text style={styles.subTitle}>{restaurant || ''}</Text>
        <View style={styles.footer}>
          {discount ? (
            <View style={styles.itemCostWrapper}>
              <Text style={styles.discount}>{convertMoney(cost, 'rs')}</Text>
              <Text style={styles.itemCost}>
                {convertMoney(discount, 'rs')}
              </Text>
            </View>
          ) : (
            <Text style={styles.itemCost}>{convertMoney(cost, 'rs')}</Text>
          )}
          <Button title="BUY" style={styles.buyBtn} />
        </View>
      </View>
    </View>
  );
};

export default ItemCard;
