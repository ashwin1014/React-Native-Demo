import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 226,
    width: 160,
    borderRadius: 8,
    flexDirection: 'column',
    elevation: 3,
    backgroundColor: '#FFF',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  img: {
    width: 160,
    height: 90,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  foodType: {
    width: 12,
    height: 12,
  },
  cardInfo: {
    padding: 8,
    position: 'relative',
    flex: 1,
  },
  titleWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  title: {
    color: '#2d2d2d',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#9A9A9A',
    fontSize: 12,
    marginTop: 8,
  },
  footer: {
    height: 33,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    bottom: 16,
    left: 8,
  },
  itemCostWrapper: {
    flexDirection: 'column',
  },
  buyBtn: {
    marginLeft: 'auto',
  },
  discount: {
    color: '#9a9a9a',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  itemCost: {
    color: '#2d2d2d',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
