import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';
import { Header } from '../sections/Header.js';
import QRCode from 'react-native-qrcode';
import { Icon, List, ListItem } from 'react-native-elements'

export class Card extends React.Component {
  static navigationOptions = { 
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {id: 0, name:"Charlie Brown"}
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'No Name');
    const id = navigation.getParam('id', 0);
    
    const list = [
      {
        title: 'Chris Roberts',
        icon: 'person',
        id: 1
      },
      {
        title: 'Hegel Roberts',
        icon: 'person',
        id: 'hellojupiter'
      },
    ]
    
    return (
      <View style={styles.container}>
        <Header message = 'ID Card' />
        <View style={styles.qrcontainer}>
          { this.state.id !== 0 ?
            <View style={styles.innerqrcontainer}>
              <Text style={styles.qrtextstyle}>{this.state.name}</Text>
              <QRCode
                value={this.state.id}
                size={240}
                bgColor='black'
                fgColor='white'/>
            </View> : null
          }
        </View>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                chevron={false}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, size:30, color:'black' }}
                titleStyle={{fontSize: 20}}
                onPress={()=>this.setState({name:item.title,id:item.id})}
            />
            ))
          }
        </List>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  qrcontainer: {
    flex: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerqrcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrtextstyle: {
    fontSize: 30,
    marginBottom: 20
  },

  
})

