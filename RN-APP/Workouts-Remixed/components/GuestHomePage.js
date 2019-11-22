import React from 'react';
import {StyleSheet, View, Text,ImageBackground ,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      backgroundColor: 'white',
      color:'black',
      fontSize: 20,
      opacity: 0.8,
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
    marginBottom: 2,
    opacity: 0.8
  },
  header: {
    fontSize: 20,
    textTransform: 'uppercase',
    backgroundColor: 'white',
    color:'black',
    fontWeight: '800',
    opacity: .8,
    alignItems: "stretch"
  }
 
  });

class GuestHomePage extends React.Component {
  static navigationOptions = { title : 'WORKOUTS REMIXED',  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    return (
      <ImageBackground style={styles.image} source={require('./images/running.jpg')}>
        <View style={styles.container}>
        <Text style={styles.header}> HI.</Text>
        <Text style={styles.header}> WHAT WOULD YOU LIKE TO DO TODAY?</Text>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('ProgramLibrary')}>
        <Text > VIEW PROGRAMS</Text>
       </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('TargetAreaLibrary')}>
         <Text > BUILD MY WORKOUT</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('CustomLibrary')}>
         <Text > ACCESS MY LIBRARY</Text>
       </TouchableOpacity>
       </View>
      </ImageBackground>
    );
  }
}

export default GuestHomePage