import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import {icons, myColor} from '../../constants';
import {searchController} from '../../controllers';
import {useFocusEffect} from '@react-navigation/native';

const SearchScreen = props => {
  const [searchName, setSearchName] = useState('');
  const [searchData, setSearchData] = useState([]);
  const ref = useRef();

  useFocusEffect(
    useCallback(() => {
      ref.current.focus();
      return () => {
        setSearchData([]);
        setSearchName('');
      };
    }, []),
  );
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.itemContainer,
          {
            marginLeft: searchData.length < 3 ? '2%' : null,
          },
        ]}
        onPress={() => {
          props.navigation.navigate('detail', {detailData: item});
        }}>
        <Image source={{uri: item.poster}} style={styles.imageSize} />
      </TouchableOpacity>
    );
  };

  const onSearchClick = () => {
    searchController.getMoviesSearch(searchName, data => {
      setSearchData(data.movies);
      Keyboard.dismiss();
    });
  };

  const onClearClick = () => {
    ref.current.clear();
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.textInputContainer}>
          <View style={styles.inputBoxContainer}>
            <TextInput
              ref={ref}
              style={styles.textInputBox}
              value={searchName}
              onChangeText={setSearchName}
              placeholder={'Enter Movie Name...'}
              placeholderTextColor={myColor.grey}
              onSubmitEditing={() => onSearchClick()}
            />
            <TouchableOpacity style={styles.clearButton} onPress={() => {onClearClick()}}>
              <Image source={icons.close} style={styles.clearIcon}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              onSearchClick();
            }}>
            <Image source={icons.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={searchData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.scrollContainer}
          numColumns={3}
          columnWrapperStyle={
            searchData.length > 2 ? {justifyContent: 'space-evenly'} : {}
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
  },
  textInputContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: myColor.white,
  },
  inputBoxContainer: {
    width: '85%',
    height: 40,
    borderWidth: 1,
    borderColor: myColor.grey,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInputBox: {
    width: '80%',
    height: 35,
    color: myColor.black,
    backgroundColor: myColor.white
  },
  clearButton: {
    width: 15,
    height: 15,
  },
  searchButton: {
    width: 25,
    height: 25,
  },
  searchIcon: {
    width: '100%',
    height: '100%',
    tintColor: myColor.black,
  },
  clearIcon: {
    width: '100%',
    height: '100%',
    tintColor: myColor.grey,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
  },
  itemContainer: {
    width: 120,
    height: 200,
    marginVertical: 5,
  },
  imageSize: {
    width: '100%',
    height: '100%',
  },
});
