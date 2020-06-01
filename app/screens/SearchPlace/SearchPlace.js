import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setSelectedLocation} from '../../commonActions/Location/Location.Actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './SearchPlace.style';

const API_KEY = 'xxxxx-xxxxx-xxxxx-xxxxx';

const SearchPlace = ({toggleModal}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search place"
          query={{
            key: API_KEY,
            language: 'en',
            components: 'country:in',
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
            console.log(
              'ADDRESS: ',
              data?.structured_formatting?.main_text ?? '',
            );
            dispatch(
              setSelectedLocation(data?.structured_formatting?.main_text ?? ''),
            );
            toggleModal();
          }}
          onFail={error => console.error(error)}
          autoFocus={true}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#333',
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
              borderBottomWidth: 1,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
        <Icon name="search" size={28} style={styles.icon} />
      </View>
    </View>
  );
};

export default SearchPlace;
