import * as React from 'react';
import { View, StyleSheet, Image, ActivityIndicator} from 'react-native';

export default class Splash extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/icon.png')} />
        <ActivityIndicator size="large" color="#004aad" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logo: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  }
});
