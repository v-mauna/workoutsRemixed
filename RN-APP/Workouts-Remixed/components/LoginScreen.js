import React from 'react';
import {TouchableHighlight,StyleSheet, Button, View, Text,ImageBackground } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'white',
      fontSize: 30
    },
    image: {
      width: '100%',
      height: '100%'
  }
  });

class LoginScreen extends React.Component {
  static navigationOptions = {title: 'LOGIN', headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    return (
      <ImageBackground style={styles.image} source={require('./images/weightRack.jpg')}>
      <View style={styles.container}>
        <Text style={styles.text}>LOGIN</Text>
        <Button title="HOME" onPress={()=>this.props.navigation.navigate('Home')}/>
        <Button title="BACK" onPress={() => this.props.navigation.goBack()} />
      </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen