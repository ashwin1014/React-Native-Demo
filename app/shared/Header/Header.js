import React from 'react';
import {View, Text, ImageBackground, Modal} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HEADER_BACKGROUND} from '../../assets/images/images';

import headerStyles from './Header.styles';
import globalStyles from '../../styles/globalStyles';
import SearchPlace from '../../screens/SearchPlace/SearchPlace';

const Header = ({navigation}) => {
  const {name} = useRoute();
  const [visible, setVisible] = React.useState(false);
  const selectedLocation = useSelector(
    state => state.userLocation.selectedLocation,
  );
  const drawerHandler = () => {
    navigation.toggleDrawer();
  };

  const locationHandler = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <>
      <ImageBackground
        source={HEADER_BACKGROUND}
        style={{
          ...globalStyles.verticalHorizontalAlign,
          ...headerStyles.header,
        }}>
        <Icon
          name="menu"
          size={28}
          onPress={drawerHandler}
          style={headerStyles.icon}
        />
        <View>
          <Text style={headerStyles.headerText}>{name}</Text>
          {selectedLocation && (
            <Text style={headerStyles.locationText}>
              {selectedLocation || ''}
            </Text>
          )}
        </View>
        <Icon
          name="edit-location"
          size={28}
          style={headerStyles.search}
          onPress={() => setVisible(true)}
        />
      </ImageBackground>
      <Modal animationType="fade" visible={visible}>
        <Icon
          name="close"
          size={24}
          style={{...headerStyles.modalToggle, ...headerStyles.modalClose}}
          onPress={locationHandler}
        />
        <View style={headerStyles.modalContent}>
          <SearchPlace toggleModal={locationHandler} />
        </View>
      </Modal>
    </>
  );
};

export default Header;
