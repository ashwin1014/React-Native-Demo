import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: '#ecf0f1',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: screenWidth - 15,
  },
  icon: {
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
});

export default styles;
