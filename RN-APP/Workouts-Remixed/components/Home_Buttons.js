import React from 'react';
import {TouchableHighlight,StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
   buttonContainer: {
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    button: {
        backgroundColor: '#737473',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    text: {
        color:'white',
        fontSize: 20,
        fontWeight: '600',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform:'uppercase'
    }
})

 const HomeButtons = props => {
     return(
         <View style={styles.buttonContainer}>
             <TouchableHighlight style={styles.button} onPress={props.addWorkout}>
                 <View>
                 <Text style={styles.text}>{props.workouts}</Text>
                 </View>
                 </TouchableHighlight>
                
             <TouchableHighlight style={styles.button} onPress={props.addCustom} >
             <View>
             <Text style={styles.text}>{props.custom}</Text>
             </View>
             </TouchableHighlight>
             </View>
     )
 }

export default HomeButtons