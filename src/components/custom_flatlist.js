import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {myColor, sizes} from '../constants';

const CustomFlatlist = ({title, data, onClick}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemContainer}
        onPress={() => {
          onClick(item);
        }}>
        <Image source={{uri: item.poster}} style={styles.imageSize} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.flatlistContainer}>
      <Text style={styles.flatlistText}>{title}</Text>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CustomFlatlist;

const styles = StyleSheet.create({
  flatlistContainer: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },
  flatlistText: {fontSize: sizes.h3, marginLeft: 10, color: myColor.black},
  itemContainer: {
    width: 120,
    height: 200, 
    margin: 10,
  },
  imageSize: {
    width: '100%',
    height: '100%',
  },
});
