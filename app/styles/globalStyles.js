import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  verticalHorizontalAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalAlign: {
    flex: 1,
    alignItems: 'center',
  },
  inline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default globalStyles;
