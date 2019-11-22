import React from 'react';
import {StyleSheet, View, Text ,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown'

const Programs = [{
  name: "Signature Series",
  workouts: ["Full Body","Shoulders& Arms","Legs","Chest & Back","Optional Cardio Day","Rest Day"] 
},{
  name: "Suit Up",
  workouts: ["Upper Push", "Upper Pull", "Legs","Rest Day","Carry Day"]
},{
  name: "Tone Up",
  workouts: ["Push/Pull & Core", "Legs","Arms,Core & Cardio","Optional Cardio Day","Rest Day"]
}]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      color: 'white'
    },
    text:{
      color:'white',
      fontSize: 18,
      textTransform: 'uppercase',
      marginBottom: 15,
      fontWeight: '800'
    },
    header: {
      fontSize: 30,
      textTransform: "uppercase",
      marginBottom: 5,
      marginTop: 5,
      color: 'white',
      fontWeight: '800'
    },
    image: {
      width: '100%',
      height: '100%'
  }
  });

class TargetArea extends React.Component {
  static navigationOptions = { title : 'WORKOUTS REMIXED',  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    const {navigation} = this.props
    const programName = navigation.getParam('program')
    const workouts = Programs.filter(program=>program.name === programName)[0].workouts
    console.log('Workouts',workouts)
    return (
      <ImageBackground style={styles.image} source={require('./images/wall.jpg')}>
      <View style={styles.container}>
        <Text style={styles.header}>{programName}</Text>
          {workouts.map((workout,idx)=>(
            <TouchableOpacity style={styles.button} key={idx} style={styles.button}
            onPress={()=>this.props.navigation.navigate('ProgramWorkoutCard',{workout})}>
            <View key={idx}>
              <Text key={idx} style={styles.text}>{workout}</Text>
              <ModalDropdown value="ADD TO" options={['Add To']} onSelect={()=>hide()}>
            <ModalDropdown options={['Libary 1','Library2','Library3','Library 4']}>
            </ModalDropdown>
            </ModalDropdown>
            </View>
            </TouchableOpacity>
            )
          )
          }
      </View>
       </ImageBackground>
    )
  }
}

export default TargetArea