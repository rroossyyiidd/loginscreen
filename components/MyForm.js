import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class MyForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="password"
                />
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        paddingLeft: 10,
        marginBottom: 15
    },
    buttonLogin: {
        backgroundColor: '#27ae60',
        paddingVertical: 15
    },
    textLogin: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
});
