import React from 'react';
import {ImageBackground,StyleSheet, Button, View, Text,ScrollView ,Picker} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'

const Exercises = [{
  "name": "Bench Press",
  "type": ["upper body", "chest","full body"]
},{
  "name": "Barbell Deadlift",
  "type": ["legs", "full body"]
},{
  "name": "Double Kettlebell Bottoms-Up Squat",
  "type": ["legs", "lower body","full body"]
},{
  "name": "Hanging Leg Raise",
  "type": ["upper body", "core"]
},
{
  "name": "Ab Wheel Rollout",
  "type": ["upper body", "core"]
},
{
  "name": "Kettlebell Clean and Press",
  "type": ["upper body", "core","arms","shoulders"]
},{
  "name": "Dumbbell Alternate Bicep Curl",
  "type": ["upper body", "arms"]
},{
  "name": "Dumbbell Tricep Extension",
  "type": ["upper body", "arms"]
},{
  "name": "Dumbbell Side Raise",
  "name": "Cable Rope Push Downs",
  "type": ["upper body", "arms"]
}, {
  "name": "Cable Rear Delts",
  "type": ["upper body","shoulders","arms","core"]
},{
  "name": "Dumbbell Split Squat",
  "type": ["lower body","full body","legs"]
},{
  "name": "Dumbbell RDL",
  "type": ["lower body","full body","legs"]
},{
  "name": "Lateral Lunge",
  "type": ["lower body","full body","legs"]
},{
  "name": "Walking Lunges",
  "type": ["lower body","full body","legs"]
},
{
  "name": "Lying Leg Curl",
  "type": ["lower body","full body","legs"]
},
{
  "name": "Leg Extensions",
  "type": ["lower body","full body","legs"]
},
{
  "name": "Kettlebell Swings",
  "type": ["lower body","full body","legs"]
},{
  "name": "RFES Squats",
  "type": ["lower body","full body","legs"]
},
{
  "name": "Incline Dumbbell Press",
  "type": ["upper body","full body","chest"]
},{
  "name": "chest Supported Row",
  "type": ["upper body","full body","back"]
},{
  "name":"Cable Flye",
  "type": ["upper body","full body","chest"]
},{
  "name":"Lateral Pulldown",
  "type": ["upper body","full body","back"]
},{
  "name":"Seated Cable Row",
  "type": ["upper body","full body","back"]
},{
  "name":"Skull Crusher",
  "type": ["upper body","full body","arms"]
},
{
  "name":"Pendlay Row",
  "type": ["upper body","full body","back"]
},{
  "name":"Pull Ups",
  "type": ["upper body","full body","back"]
},{
  "name":"Shoulder Press",
  "type": ["upper body","full body","shoulders","core"]
},{
  "name":"Kettlebell Front Squat",
  "type": ["lower body","full body","legs"]
},{
  "name": "Straight Arm Pulldown",
  "type": ["upper body","full body","back"]
},{
  "name":"Dumbbell Hammer Curls",
  "type": ["upper body","arms"]
},{
  "name":"Good Mornings",
  "type": ["full body","legs"]
},{
  "name": "Incline Chest Press",
  "type": ["chest", "upper body"]
},{
  "name": "Decline Chest Press",
  "type": ["chest", "upper body"]
},{
  "name": "Pushups",
  "type": ["chest", "upper body"]
}

]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    text:{
      color:'white',
      fontSize: 20,
      textTransform: 'uppercase',
      marginBottom: 25,
      fontWeight:'800'
    },
    header: {
      fontSize: 35,
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

class TargetArea extends React.Component {
  static navigationOptions = { title: 'WORKOUTS REMIXED', headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    const {navigation} = this.props
    const targetArea = navigation.getParam('targetArea')
    console.log(targetArea)
    return (
      <ImageBackground style={styles.image} source={require('./images/weightStack.jpg')}>
      <View style={styles.container}>
        <Text style={styles.header}>{targetArea}</Text>
        {Exercises.filter((exercise) => exercise.type.includes(targetArea)).map((exercise,idx)=>(
          <View key={idx}>
          <Text style={styles.text}>{exercise.name}</Text>
          <ModalDropdown value="ADD TO" options={['Add To']} onSelect={()=>hide()}>
            <ModalDropdown options={['Libary 1','Library2','Library3','Library 4']}>
            </ModalDropdown>
            </ModalDropdown>
          </View>
        ))}
      </View>
       </ImageBackground>
    );
  }
}

export default TargetArea