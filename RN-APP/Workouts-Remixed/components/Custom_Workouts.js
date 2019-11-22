import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View} from 'react-native';


const rows = [
  { id: 0, text: 'LEGS' },
  { id: 1, text: 'CHEST' },
  { id: 2, text: 'BACK' },
  { id: 3, text: 'ARMS' },
  { id: 4, text: 'SHOULDERS' },
  { id: 5, text: 'CORE' }
]

const extractKey = ({ id }) => id

export default class CustomWorkouts extends Component {
   
    renderItem = ({ item }) => {
        return (
          <Text style={styles.row}>
            {item.text}
          </Text>
        )
      }
    
      render() {
        return (
          <FlatList
            style={styles.container}
            data={rows}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
          />
        );
      }
    }