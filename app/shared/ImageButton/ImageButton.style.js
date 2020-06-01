import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    width: 76,
    height: 76,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowColor: '#0c000000',
    shadowRadius: 2,
    borderColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  img: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  imgStyle: {
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    height: '100%',
    paddingBottom: 12,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
