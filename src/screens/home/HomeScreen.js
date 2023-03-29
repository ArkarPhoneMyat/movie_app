import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {myColor, sizes} from '../../constants';
import {CustomFlatlist} from '../../components';
import {homeController} from '../../controllers';

const HomeScreen = props => {
  const [moviesData, setMoviesData] = useState({
    action: [],
    crime: [],
    drama: [],
    biography: [],
    history: [],
    animation: [],
    adventure: [],
    sciFi: [],
    romance: [],
    family: [],
    thriller: [],
    war: [],
    mystery: [],
  });

  useEffect(() => {
    getMovies();
    return () => {
      setMoviesData({
        action: [],
        crime: [],
        drama: [],
        biography: [],
        history: [],
        animation: [],
        adventure: [],
        sciFi: [],
        romance: [],
        family: [],
        thriller: [],
        war: [],
        mystery: [],
      });
    };
  }, []);

  const getMovies = () => {
    var action = [];
    var crime = [];
    var drama = [];
    var biography = [];
    var history = [];
    var animation = [];
    var adventure = [];
    var sciFi = [];
    var romance = [];
    var family = [];
    var thriller = [];
    var war = [];
    var mystery = [];
    homeController.getMovies(data => {
      data.movies.map((v, i) => {
        v.genres.map(a => {
          switch (a) {
            case 'Action':
              action.push(v);
              break;
            case 'Crime':
              crime.push(v);
              break;
            case 'Drama':
              drama.push(v);
              break;
            case 'Biography':
              biography.push(v);
              break;
            case 'History':
              history.push(v);
              break;
            case 'Animation':
              animation.push(v);
              break;
            case 'Adventure':
              adventure.push(v);
              break;
            case 'Sci-Fi':
              sciFi.push(v);
              break;
            case 'Romance':
              romance.push(v);
              break;
            case 'Family':
              family.push(v);
              break;
            case 'Thriller':
              thriller.push(v);
              break;
            case 'War':
              war.push(v);
              break;
            case 'Mystery':
              mystery.push(v);
              break;
            default:
              break;
          }
        });
      });
      setMoviesData({
        action,
        crime,
        drama,
        biography,
        history,
        animation,
        adventure,
        sciFi,
        romance,
        family,
        thriller,
        war,
        mystery,
      });
    });
  };

  const onClickPoster = (item) => {
    props.navigation.navigate('detail', {detailData: item});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>WOOKIE</Text>
          <Text style={styles.headerText}>MOVIES</Text>
        </View>
        <View style={styles.bodyContainer}>
          <CustomFlatlist
            title={'Action'}
            data={moviesData.action}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Adventure'}
            data={moviesData.adventure}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Animation'}
            data={moviesData.animation}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Biography'}
            data={moviesData.biography}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Crime'}
            data={moviesData.crime}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Drama'}
            data={moviesData.drama}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Family'}
            data={moviesData.family}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'History'}
            data={moviesData.history}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Mystery'}
            data={moviesData.mystery}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Romance'}
            data={moviesData.romance}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Sci-Fi'}
            data={moviesData.sciFi}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'Thriller'}
            data={moviesData.thriller}
            onClick={onClickPoster}
          />
          <CustomFlatlist
            title={'War'}
            data={moviesData.war}
            onClick={onClickPoster}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: sizes.h1,
    fontWeight: 'bold',
    color: myColor.black,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
  },
});
