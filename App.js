/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import Toast from './src/components/ToastModule'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
const colors = [
  { id: "white", color: "#fff" },
  { id: "red", color: '#f28b82' },
  { id: "orange", color: '#fbbc04' },
  { id: "yellow", color: '#fff475' },
  { id: "green", color: '#ccff90' },
  { id: "cyan", color: '#a7ffeb' },
  { id: "lightblue", color: '#cbf0f8' },
  { id: "blue", color: '#aecbfa' },
  { id: "purple", color: '#d7aefb' },
  { id: "pink", color: '#fdcfe8' },
  { id: "brown", color: '#e6c9a8' },
  { id: "grey", color: '#e8eaed' },
];
let col = "";
class App extends Component {
  state = {
    color: "white",
    message: ""
  }
  render() {

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={this.state.color} />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{
              backgroundColor: this.state.color,
              height: "100%"
            }}>
            <View style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
              {colors.map(el => (
                <TouchableOpacity
                  onPress={() => {
                    col = el.color;
                    this.setState({
                      message: `${el.id} has lighten UP`
                    })

                  }}
                  style={{
                    height: 100,
                    width: "46%",
                    marginLeft: "2%",
                    backgroundColor: el.color,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                    borderRadius: 200,
                    elevation: 3
                  }} key={el.id}>
                  <Text>{el.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{
              marginVertical: 20,
              width: 150,
              alignSelf: "center",
            }}>
              <Button onPress={async () => {
                console.log(col, "color");

                await this.setState({
                  ...this.state,
                  color: col,
                })
                changeNavigationBarColor(col)
                this.state.message === "" ? Toast.show("Touch color from above", Toast.SHORT) : Toast.show(this.state.message, Toast.SHORT)
              }} title="Click me" color="lightgreen" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {

  },
});

export default App;
