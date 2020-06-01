import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  search: {
    position: 'absolute',
    right: 16,
  },
  modalContent: {
    flex: 1,
    marginVertical: 20,
    padding: 10,
  },
  modalToggle: {
    marginBottom: 10,
    padding: 10,
    alignSelf: 'flex-end',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});

export default styles;
