import React from 'react';
import {ImageBackground,StyleSheet, Button, View, Text} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    text:{
      color:'white',
      fontSize: 12,
      textTransform: 'uppercase',
      marginBottom: 25,
      fontWeight:'800'
    },
    header: {
      fontSize: 20,
      textTransform: "uppercase",
      marginBottom: 15,
      marginTop: 15,
      color: 'white',
      fontWeight: '800'
    },
    image: {
      width: '100%',
      height: '100%',
      opacity: .8
  },
  modal:{
    color: 'white',
    fontSize: 12

  }
  });

class ProgramWorkoutCard extends React.Component {
    static navigationOptions = { title: 'WORKOUTS REMIXED', headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}
    render() {
      const {navigation} = this.props
      const workout = navigation.getParam('workout')
      console.log(workout)
      return (
        <ImageBackground style={styles.image} source={require('./images/weightStack.jpg')}>
        <View style={styles.container}>
          <Text style={styles.header}>{workout}</Text>
          <Text style={styles.header}>Circuit 1</Text>
          <Text style={styles.header}>Exercises</Text>
          <ModalDropdown value="ADD TO" options={['Add To']} onSelect={()=>hide()}>
            <ModalDropdown options={['Libary 1','Library2','Library3','Library 4']}>
            </ModalDropdown>
            </ModalDropdown>
          <Text style={styles.header}>Circuit 2</Text>
          <Text style={styles.header}>Exercises</Text>
          <ModalDropdown value="ADD TO" options={['Add To']} onSelect={()=>hide()}>
            <ModalDropdown options={['Libary 1','Library2','Library3','Library 4']}>
            </ModalDropdown>
            </ModalDropdown>
          <Text style={styles.header}>Circuit 3</Text>
          <Text style={styles.header}>Exercises</Text>
          <ModalDropdown value="ADD TO" options={['Add To']} onSelect={()=>hide()}>
            <ModalDropdown options={['Libary 1','Library2','Library3','Library 4']}>
            </ModalDropdown>
            </ModalDropdown>
        </View>
         </ImageBackground>
      );
    }
  }
  
  export default ProgramWorkoutCard