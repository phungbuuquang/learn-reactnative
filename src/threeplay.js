import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'

export default class ThreePlayer extends Component{
    static navigationOptions=({navigation})=>({
        title: `Che do ${navigation.state.params.mode}`,
    })
    render(){
        const {params} = this.props.navigation.state
        return(
            <View>
                <Text>
                    Day la che do {params.mode}
                </Text>
                <Text>Moi ban nhap ten nguoi choi</Text>
                <TextInput />
            </View>
        )
    }
}