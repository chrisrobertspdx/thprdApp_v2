import React from 'react';
import { Text, View, WebView } from 'react-native';

export class VideoDetail extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let tubeID = this.props.navigation.getParam('youTubeId','NO VIDEO');
    let tubeURL = `https://youtu.be/${tubeID}`;
    return (

      
      <WebView
        style={{marginTop: 20}}
        javaScriptEnabled={true}
        source={{uri: tubeURL}}
      />

    )
  }
}
