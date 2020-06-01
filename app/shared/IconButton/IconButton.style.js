import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnIcon: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#0c000000',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    height: 76,
    width: 76,
    padding: 8,
    alignItems: 'center',
  },
  img: {
    height: 24,
    width: 24,
  },
  text: {
    color: '#2d2d2d',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
