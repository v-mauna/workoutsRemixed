import React from 'react';
import { Button, View, Text, StyleSheet,ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'white',
      flexDirection: 'row',
      textTransform:'uppercase',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '45%',
      marginLeft:'30%',
      fontSize: 35,
      fontWeight: '600'
    },
    image: {
        width: '100%',
        height: '100%'
    }
  });


export default class HomeScreen extends React.Component {
    static navigationOptions = { title : 'WORKOUTS REMIXED',  headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}

    render() {
      return (
        <View style={styles.container}>  
        <ImageBackground style={styles.image} source={require('./images/mark-adriane-xQghSLXYD3M-unsplash.jpg')}>
          <Text style={styles.text}>WELCOME</Text>
          <Button title="SIGN IN" onPress={()=>this.props.navigation.navigate('Login')}/>
          <Button title="REGISTER" onPress={()=>this.props.navigation.navigate('REGISTER')}/>
          <Button title="CONTINUE AS GUEST" onPress={()=>this.props.navigation.navigate('Guest')}/>
          </ImageBackground>

        </View>
      );
    }
  }