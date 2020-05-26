import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

// import globalStyles from '../../styles/globalStyles';
import detailStyles from './Details.style';
import Card from '../../shared/Card/Card';

const Details = () => {
  const {params} = useRoute();
  return (
    <View style={detailStyles.container}>
      <Card>
        <Text style={detailStyles.title}>{params.name || ''}</Text>
        <Text style={detailStyles.desc}>{params.desc || ''}</Text>
      </Card>
    </View>
  );
};

export default Details;
