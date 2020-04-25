import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Button,
} from 'react-native';
import Toast from '../ToastModule'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import colorjson from '../../utils/colors.json'
import styles from './styles';
let col = "";
class Home extends Component {
    state = {
        color: "white",
        message: "",
        colorArray: []
    }
    componentWillMount() {
        this.setColor();
    }
    setColor = async () => {
        this.setState({
            colorArray: colorjson
        })
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
                        <View style={styles.view}>
                            {this.state.colorArray.map(el => (
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
                        <View style={styles.color}>
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
        )
    }
}
export default Home
