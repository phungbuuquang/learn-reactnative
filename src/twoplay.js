import React, {Component} from 'react'
import {Text, View, StyleSheet,TextInput, Button} from 'react-native'
import {StackNavigator} from 'react-navigation'
import DetailTwoPlayer from './detailTwoplayer'


export default class TwoPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {text1: 'ten nguoi choi 1',
                        text2: 'ten nguoi choi 2'
    }
    }
    static navigationOptions=({navigation})=>({
        title: `Che do ${navigation.state.params.mode}`,
    })
    render(){
        const {navigate} = this.props.navigation
        const {params} = this.props.navigation.state
        return(
            <View>
                <Text>
                    Day la che do {params.mode}
                </Text>
                <Text>Moi ban nhap ten nguoi choi thu nhat</Text>
                <TextInput style={style.inputStyle}
                onChangeText={(text1)=>this.setState({text1})}
                placeholder={this.state.text1}
                />
                <Text>Moi ban nhap ten nguoi choi thu hai</Text>
                <TextInput style={style.inputStyle}
                onChangeText={(text2)=>this.setState({text2})}
                placeholder={this.state.text2}
                />
                <Button  onPress={()=>navigate('DetailTwoPlayer', {name1: this.state.text1, name2:this.state.text2})}
                    title="Submit"
                    color="#841584"
                />
            </View>
        )
    }
}
// const ChildStack=StackNavigator({
//     Home: {screen: TwoPlayer},
//     DetailTwoPlayer: {screen: DetailTwoPlayer}
// })
const style = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor: 'gray',
        width: 200
    }
})