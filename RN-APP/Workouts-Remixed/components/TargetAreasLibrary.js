import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity,ImageBackground} from 'react-native';


const targetAreas = ['chest','shoulders','back','arms','legs','upper body','core']

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
  color: 'white',
  fontWeight: '800',
  marginTop: 2
}
});


export default class TargetAreasLibrary extends React.Component{
  static navigationOptions = { title : 'WORKOUTS REMIXED',  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  constructor(){
    super()
    this.state={
      targetAreas: targetAreas
    }
  }

  render(){
    const targets = this.state.targetAreas
    console.log('Targets',targets)
  return (
      <ImageBackground style={styles.image} source={require('./images/forms.jpg')}>
        <View style={styles.container}>
        <Text style={styles.header}> Target Areas</Text> 
        {targets.map((targetArea, i)=>(
          <TouchableOpacity style={styles.button} key={i} style={styles.button} onPress={()=>this.props.navigation.navigate('TargetArea',{targetArea})}>
            <Text style={styles.text} >{targetArea}</Text>
            </TouchableOpacity>))}       
            <TouchableOpacity style={styles.footer} onPress={()=>this.props.navigation.navigate('ProgramLibrary')}>
            <Text style={styles.footer} >See Programs</Text>
            </TouchableOpacity>  
       </View>
      </ImageBackground>
    );
  }
}

