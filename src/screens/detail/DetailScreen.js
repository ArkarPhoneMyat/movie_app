import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {icons, myColor, sizes} from '../../constants';
import StarRating from 'react-native-star-rating-widget';
import moment from 'moment';

const DetailScreen = props => {
  const {detailData} = props.route?.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Image source={icons.back} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.backImageContainer}>
      <Image source={{uri: detailData?.backdrop}} style={styles.backImage} />
      </View>
      
      <View style={styles.posterTitleContainer}>
        <View style={styles.posterContainer}>
          <View style={styles.imageContainer}>
            <Image source={{uri: detailData?.poster}} style={styles.imageSize} />
          </View>
        </View>
        <View style={styles.ratingTitleContainer}>
          <View style={styles.ratingTitleContainer1}>
            <Text
              style={[
                styles.titleText,
                {fontSize: detailData?.title.length > 28 ? sizes.h4 : sizes.h3},
              ]}>
              {detailData?.title} ({detailData?.imdb_rating})
            </Text>
          </View>
          <View style={styles.ratingTitleContainer1}>
            <StarRating
              rating={detailData?.imdb_rating / 2}
              onChange={() => null}
              style={styles.rating}
            />
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.yearLengthDirector}>
          <View style={styles.yearContainer}>
            <Text style={styles.yearLengthDirectorText}>
              {moment(detailData?.released_on).format('YYYY')}
            </Text>
          </View>
          <View style={styles.lengthContainer}>
            <Text style={styles.yearLengthDirectorText}>
              {detailData?.length}
            </Text>
          </View>
          <View style={styles.directorContainer}>
            {typeof(detailData.director) == 'object' ? detailData.director.map((value, index) => {
              return index == detailData.director.length - 1 ? (
                <Text key={index} style={styles.yearLengthDirectorText}>
                  {value}{' '}
                </Text>
              ) : (
                <Text key={index} style={styles.yearLengthDirectorText}>
                  {value},{' '}
                </Text>
              );
            }) : (
              <Text style={styles.yearLengthDirectorText}>{detailData.director}</Text>
            )}
          </View>
        </View>

        <View style={styles.castContainer}>
          <Text style={styles.castText}>Cast: {detailData?.cast.map((value, index) => {
              return index == detailData?.cast.length - 1 ? (
                <Text key={index} style={styles.castData}>
                  {value}{' '}
                </Text>
              ) : (
                <Text key={index} style={styles.castData}>
                  {value},{' '}
                </Text>
              );
            })}</Text>
        </View>

        <View style={styles.overviewContainer}>
          <Text style={styles.movieDescriptionText}>
            Movie Description:{' '}
            <Text style={styles.movieDescriptionData}>
              {detailData?.overview}
            </Text>
          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.white,
  },
  scrollContainer: {
    flex: 1
    // backgroundColor: 'red'
  },
  backImageContainer: {
    width: '100%',
    height: sizes.height/3.5,
    zIndex: 0,
    marginTop: sizes.width < 393 ? -45 : -50,
  },
  backImage: {
    width: '100%',
    height: '100%',
    opacity: 0.75,
  },
  backContainer: {
    width: sizes.width < 393 ? 30 : 35,
    height: sizes.width < 393 ? 30 : 35,
    backgroundColor: myColor.white,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backIcon: {
    width: sizes.width < 393 ? 25 : 30,
    height: sizes.width < 393 ? 25 : 30,
    tintColor: myColor.black,
    zIndex: 2,
  },
  posterTitleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: -100,
  },
  posterContainer: {
    width: '35%',
    height: 200,
    alignItems: 'flex-end',
  },
  imageContainer: {
    width: 120,
    height: 200,
  },
  imageSize: {
    width: '100%',
    height: '100%',
  },
  ratingTitleContainer: {
    width: '65%',
    height: 200,
  },
  ratingTitleContainer1: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: myColor.white,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 10,
  },
  rating: {marginBottom: 10},
  descriptionContainer: {
    flex: 1,
    marginTop: 20,
  },
  yearLengthDirector: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  yearContainer: {
    width: '17%',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: myColor.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lengthContainer: {
    width: '25%',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: myColor.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directorContainer: {
    width: '58%',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  yearLengthDirectorText: {
    color: myColor.black,
    fontSize: sizes.body2,
  },
  castContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
  },
  castData: {
    color: myColor.black,
    fontSize: sizes.body1,
    fontWeight: 'normal'
  },
  castText: {
    color: myColor.black,
    fontSize: sizes.body1,
    fontWeight: 'bold'
  },
  overviewContainer: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
  },
  movieDescriptionData: {
    color: myColor.black,
    fontSize: sizes.body1,
    fontWeight: 'normal',
  },
  movieDescriptionText: {
    color: myColor.black,
    fontSize: sizes.body1,
    fontWeight: 'bold',
  },
});
