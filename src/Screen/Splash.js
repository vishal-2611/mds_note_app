import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    }, 3000);
  }
  render() {
    return (
      <View style={styles.splashView}>
        <Text style={styles.splashText}> Splash </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  splashText: {
    fontSize: 34,
  },
});
