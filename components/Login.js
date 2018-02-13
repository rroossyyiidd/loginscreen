import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import MyForm from './MyForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
            >
                <View style={styles.logocontainer}>
                    <Image
                        style={styles.logo}
                        source={require('./images/lcologo.png')}
                    />
                    <Text style={styles.title}>A simple login App</Text>
                </View>
                <View style={styles.myform}>
                    <MyForm/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2D7D3',
        width: Dimensions.get('window').width
    },
    logocontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    myform: {
        flex: 1
    },
    title: {
        color: '#fff',
        marginTop: 10
    }
});
