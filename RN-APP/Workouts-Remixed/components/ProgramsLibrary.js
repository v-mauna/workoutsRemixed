import React from 'react';
import {StyleSheet, View, Text ,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'white',
      fontSize: 30,
      fontWeight: '800',
      textTransform:'uppercase',
      marginBottom: 15
    },
    view: {
      backgroundColor: 'white',
      borderColor: '#465775',
      padding: 5
    },
    image: {
      width: '100%',
      height: '100%'
  },header: {
    color: 'white',
    marginBottom: 30,
    color:'white',
    fontSize: 30,
    fontWeight: '800',
    textTransform:'uppercase'
  }
  });

  const programNames = ['Signature Series', 'Tone Up','Suit Up',]

class ProgramsLibrary extends React.Component {
  static navigationOptions = { title: 'WORKOUTS REMIXED', headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },}
  render() {
    return (
      
        <ImageBackground style={styles.image} source={require('./images/weights.jpg')}>
          <View style={styles.container}>
            <Text style={styles.header}>Workouts</Text>
          {programNames.map((program,idx)=>{
          return (
            <TouchableOpacity key={idx} style={styles.button} onPress={()=>this.props.navigation.navigate('SelectedProgram',{program})}>
              <Text key={idx} style={styles.text}>{program}</Text>
              </TouchableOpacity>
          )
        })}
         <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('CustomLibrary')}>
              <Text style={styles.text}>View Library</Text>
              </TouchableOpacity>
        </View>
      </ImageBackground>
      
    );
  }
}

export default ProgramsLibrary