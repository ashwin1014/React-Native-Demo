import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2d2d2d',
  },
  itemList: {
    marginVertical: 15.1,
  },
  viewMore: {
    color: '#00a8c3',
    fontSize: 14,
  },
  listFooter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  },
  listFooterWrap: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default styles;
