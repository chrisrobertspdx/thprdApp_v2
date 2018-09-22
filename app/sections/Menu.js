import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component {
  onPress = () => { 
    Alert.alert('You tapped the button!');
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('Lessons')}>
            <Text style={styles.buttonText}>LESSONS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('Contact')}>
            <Text style={styles.buttonText}>CONTACT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>QUIZ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
            <Text style={styles.buttonText}>ABOUT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStylesAlt} 
                            onPress={()=>this.props.navigate('Card',{name: 'Hegel Roberts'})}>
            <Text style={styles.buttonText}>THPRD ID CARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:8,
    backgroundColor: '#005EAD'
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderBottomWidth: 1
  },
  buttonStyles: {
    backgroundColor: '#005EAD',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStylesAlt: {
    backgroundColor: '#0D9648',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18
  }
})

