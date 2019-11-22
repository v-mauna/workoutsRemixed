import React from 'react';
import {TouchableOpacity,StyleSheet, View, Text, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'black',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  image: {
    width: '100%',
    height: '100%'
},
button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10,
  width: 180,
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: 20,
  marginBottom: 3,
  opacity: 0.8
},
header: {
  fontSize: 25,
  textTransform: 'uppercase',
  color: 'black',
  fontWeight: '800'
},
footer: {
  fontSize: 25,
  textTransform: 'uppercase',
  color: 'black',
  fontWeight: '800',
  marginTop: 2
}
});


class SelectedLibrary extends React.Component {
  static navigationOptions = { title : 'LIBRARY',  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    return (
      <ImageBackground style={styles.image} source={require('./images/track.jpg')}>
      <View style={styles.container}>
            <Text style={styles.footer} >Library </Text>
      </View>
      </ImageBackground>
    )
  }
}

export default SelectedLibrary