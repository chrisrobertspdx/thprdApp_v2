import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false}
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn }
    });
  }

  render() {
    let display = this.state.isLoggedIn ? 'Chris Roberts' : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image style={styles.logoStyle}
               source={require('./img/thprd_logo4.png')} />
        <Text style={styles.headText} 
              onPress={this.toggleUser}>{display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headStyle: {
    flex: 6 / 5 ,
    flexDirection: 'row',
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: Platform.OS === 'android' ? '#005EAD' : '#005EAD',
    borderBottomWidth: 2,
    borderColor: '#000000'
  },
  headText: {
    flex: 3,
    alignSelf: 'center',
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20
  },
  logoStyle: {
    flex: 2,
    width: undefined,
    height: undefined,
    paddingBottom: 5
  }
})