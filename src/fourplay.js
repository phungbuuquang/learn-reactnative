import React, {Component} from 'react'
import {Text, View, StyleSheet,TextInput, Button, Platform} from 'react-native'

export default class FourPlayer extends Component{
    static navigationOptions=({navigation})=>({
        title: `Che do ${navigation.state.params.mode}`,
    })
    constructor(props){
        super(props)
        this.state = {
            text1: "Player 1",
            text2: "Player 2",
            text3: "Player 3",
            text4: "Player 4",
            myScore: ''

        }
        this.onChangedNum=this.onChangedNum.bind(this)
    }
    onChangedNum(text){
        let newText =''
        let numbers = '0123456789'
        for(var i = 0; i<text.length; i++){
            if(numbers.indexOf(text[i])>-1){
                newText= newText+text[i];
            }
            else{
                alert("Nhập số dùm cái ")
            }
        }
        this.setState({myScore: newText})
    }
    render(){
        const {navigate} = this.props.navigation
        const {params} = this.props.navigation.state
        return(
            <View style={styles.wrapView}>
                <Text style={styles.styleText1}>Đây là chế độ {params.mode}</Text>
                <View style={{flex: 1, alignItems: 'center'}}> 
                    <Text style={styles.styleText2}>Mời nhập tên người chơi</Text>
               
                    <TextInput style={styles.inputStyle}
                        underlineColorAndroid="transparent"
                        onChangeText={(text1)=>this.setState({text1})}
                        placeholder={this.state.text1}
                    />
                    <TextInput style={styles.inputStyle}
                        underlineColorAndroid="transparent"
                        onChangeText={(text2)=>this.setState({text2})}
                        placeholder={this.state.text2}
                    />
                    <TextInput style={styles.inputStyle}
                        underlineColorAndroid="transparent"
                        onChangeText={(text3)=>this.setState({text3})}
                        placeholder={this.state.text3}
                    />
                    <TextInput style={styles.inputStyle}
                        underlineColorAndroid="transparent"
                        onChangeText={(text4)=>this.setState({text4})}
                        placeholder={this.state.text4}
                    />
                    <Text>Nhập điểm đích mà các bạn muốn</Text>
                    <TextInput style={styles.inputStyle}
                        keyboardType='numeric'
                        onChangeText={(text)=>this.onChangedNum(text)}
                    />
                    <Button onPress={()=>navigate('DetailFourPlayer', {name1: this.state.text1, name2: this.state.text2,
                                                name3: this.state.text3, name4: this.state.text4, score: this.state.myScore
                    })}
                    title = "Submit"
                    color="#841584"
                    
                />
                </View>    
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapView:{
        flex : 1,
        backgroundColor: '#B3E5FC'
    },
    inputStyle:{
        borderWidth: 1,
        borderColor: 'gray',
        width: 200,
        height: 30,
        marginTop: 10,
        ...Platform.select({
            android:{
                paddingBottom: 5
            }
        }),
        borderRadius: 5
    },
    styleText1:{
        fontSize: 20,
        color: '#673AB7'
    },
    styleText2:{
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },

})