import React from 'react';
import {TouchableHighlight,StyleSheet, Button, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'black',
      fontSize: 20
    }
  });

class BuildYourOwn extends React.Component {
  static navigationOptions = { headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>PROGRAMS</Text>
        <Button title="HOME" onPress={()=>this.props.navigation.navigate('Home')}/>
        <Button title="BACK" onPress={() => this.props.navigation.goBack()} />
        <Button title="BACK" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default BuildYourOwn