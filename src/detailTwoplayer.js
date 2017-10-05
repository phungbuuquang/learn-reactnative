import React, {Component} from 'react'
import {Text, View, StyleSheet,TextInput, Button, TouchableOpacity} from 'react-native'


export default class DetailTwoPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {score1:[0, " "],
                      score2: [0," "],
                    start: ''                 }
    
    }
    click1(){
        this.setState({start:true})
    }
    plusScore1(){
        if(this.state.start==true){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+3, " ")
            this.setState({score1: pushWin1er1})
        }
        else{
            pushWin1er2 = this.state.score2
            pushWin1er2.push(pushWin1er2[pushWin1er2.length-2]+3, " ")
            this.setState({score2: pushWin1er2})
        }
        
    }
    plusScore2(){
        if(this.state.start==true){
            pushWin2er1 = this.state.score1
            pushWin2er1.push(pushWin2er1[pushWin2er1.length-2]+2, " ")
            this.setState({score1: pushWin2er1})
        }
        else{
            pushWin2er2=this.state.score2
            pushWin2er2.push(pushWin2er2[pushWin2er2.length-2]+2, " ")
            this.setState({score2: pushWin2er2})
        }
        
    }
    onDelete(){
        if(this.state.start==true){
            deleteScore1=this.state.score1
            if(deleteScore1.length>2){
                deleteScore1.pop()
                deleteScore1.pop()
                this.setState({score1: deleteScore1})
            }
        }
        else{
            deleteScore2=this.state.score2
            if(deleteScore2.length>2){
                deleteScore2.pop()
                deleteScore2.pop()
                this.setState({score2: deleteScore2})

            }
        
        }
    }
    
    render(){
        const {params} = this.props.navigation.state
        return(
            <View>
              <TouchableOpacity onPress={this.click1.bind(this)}>  
               <Text>{params.name1}: {this.state.score1}</Text>
               </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({start:false})}> 
               <Text>{params.name2}: {this.state.score2}</Text>
              </TouchableOpacity>  
                <Button onPress={this.plusScore1.bind(this)}
                    title="Nhat"
                />
                <Button onPress={this.plusScore2.bind(this)}
                    title="Nhi"
                />
                <Button onPress={this.onDelete.bind(this)}
                    title="Delete"
                />
                
            </View>
        )
    }
}