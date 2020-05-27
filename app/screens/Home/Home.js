import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import globalStyles from '../../styles/globalStyles';
import homeStyles from './Home.style';

import Card from '../../shared/Card/Card';

const DUMMY_ITEMS = [
  {id: '1', name: 'Item 1', desc: 'Lorem ipsum dolor set amet'},
  {id: '2', name: 'Item 2', desc: 'Lorem ipsum dolor set amet'},
  {id: '3', name: 'Item 3', desc: 'Lorem ipsum dolor set amet'},
  {id: '4', name: 'Item 4', desc: 'Lorem ipsum dolor set amet'},
  {id: '5', name: 'Item 5', desc: 'Lorem ipsum dolor set amet'},
];

const Home = ({navigation}) => {
  const isDrawerOpen = useIsDrawerOpen();
  const itemPressHandler = data => {
    if (data.id === '5') {
      navigation.navigate('Tabs');
      return;
    }
    navigation.navigate('Details', data);
  };

  React.useEffect(() => {
    if (isDrawerOpen) {
      navigation.closeDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{...globalStyles.container, ...homeStyles.container}}>
      <Text style={homeStyles.title}>Home Items</Text>
      <SafeAreaView style={homeStyles.cardWrapper}>
        <FlatList
          data={DUMMY_ITEMS}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => itemPressHandler(item)}>
              <Card>
                <Text>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
