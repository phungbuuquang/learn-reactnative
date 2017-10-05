import React, {Component} from 'react'
import {Text, View, StyleSheet,TextInput, Button, TouchableOpacity, Platform} from 'react-native'

export default class DetailFourPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {
            score1:[0, " "],
            score2:[0, " "],
            score3:[0, " "],
            score4:[0, " "],
            start: 0,
            plus: 1,
            stateHeoCo: 1,
            scoreWin: this.props.navigation.state.params.score
        }
    }
    plusScore1(){
        stateStart=this.state.start
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+3, " ")
            this.setState({score1: pushWin1er1})
        }
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+3, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+3, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+3, " ")
            this.setState({score4: pushWin1er1})
        }
        
    }
    plusScore2(){
        stateStart=this.state.start
        
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+2, " ")
            this.setState({score1: pushWin1er1})
        }
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+2, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+2, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+2, " ")
            this.setState({score4: pushWin1er1})
        }
        
        
    }
    plusScore3(){
        stateStart=this.state.start
        
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+1, " ")
            this.setState({score1: pushWin1er1})
        }
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+1, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+1, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+1, " ")
            this.setState({score4: pushWin1er1})
        }
        
        
    }
    onDelete(){
        stateStart=this.state.start
        if(stateStart==1){
            deleteScore1=this.state.score1
            if(deleteScore1.length>2){
                deleteScore1.pop()
                deleteScore1.pop()
                this.setState({score1: deleteScore1})
            }
        }
        if(stateStart==2){
            deleteScore1=this.state.score2
            if(deleteScore1.length>2){
                deleteScore1.pop()
                deleteScore1.pop()
                this.setState({score2: deleteScore1})
            }
        }
        if(stateStart==3){
            deleteScore1=this.state.score3
            if(deleteScore1.length>2){
                deleteScore1.pop()
                deleteScore1.pop()
                this.setState({score3: deleteScore1})
            }
        }
        if(stateStart==4){
            deleteScore1=this.state.score4
            if(deleteScore1.length>2){
                deleteScore1.pop()
                deleteScore1.pop()
                this.setState({score4: deleteScore1})
            }
        }
        
    }
   
    
    plusHaiCo(){
        stateStart=this.state.start
       
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+4, " ")
            this.setState({score1: pushWin1er1})
        }
        
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+4, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+4, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+4, " ")
            this.setState({score4: pushWin1er1})
        }
        
    }
    subHaiCo(){
        stateStart=this.state.start
        
         if(stateStart==1){
             pushWin1er1 = this.state.score1
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-4, " ")
             this.setState({score1: pushWin1er1})
         }
         
         if(stateStart==2){
             pushWin1er1 = this.state.score2
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-4, " ")
             this.setState({score2: pushWin1er1})
         }
         if(stateStart==3){
             pushWin1er1 = this.state.score3
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-4, " ")
             this.setState({score3: pushWin1er1})
         }
         if(stateStart==4){
             pushWin1er1 = this.state.score4
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-4, " ")
             this.setState({score4: pushWin1er1})
         }
         
     }

    subHaiRo(){
        stateStart=this.state.start
        
         if(stateStart==1){
             pushWin1er1 = this.state.score1
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-3, " ")
             this.setState({score1: pushWin1er1})
         }
         
         if(stateStart==2){
             pushWin1er1 = this.state.score2
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-3, " ")
             this.setState({score2: pushWin1er1})
         }
         if(stateStart==3){
             pushWin1er1 = this.state.score3
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-3, " ")
             this.setState({score3: pushWin1er1})
         }
         if(stateStart==4){
             pushWin1er1 = this.state.score4
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-3, " ")
             this.setState({score4: pushWin1er1})
         }
         
     }
     subHaiChuon(){
        stateStart=this.state.start
        
         if(stateStart==1){
             pushWin1er1 = this.state.score1
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-2, " ")
             this.setState({score1: pushWin1er1})
         }
         
         if(stateStart==2){
             pushWin1er1 = this.state.score2
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-2, " ")
             this.setState({score2: pushWin1er1})
         }
         if(stateStart==3){
             pushWin1er1 = this.state.score3
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-2, " ")
             this.setState({score3: pushWin1er1})
         }
         if(stateStart==4){
             pushWin1er1 = this.state.score4
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-2, " ")
             this.setState({score4: pushWin1er1})
         }
         
     }
     subHaiBich(){
        stateStart=this.state.start
        
         if(stateStart==1){
             pushWin1er1 = this.state.score1
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-1, " ")
             this.setState({score1: pushWin1er1})
         }
         
         if(stateStart==2){
             pushWin1er1 = this.state.score2
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-1, " ")
             this.setState({score2: pushWin1er1})
         }
         if(stateStart==3){
             pushWin1er1 = this.state.score3
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-1, " ")
             this.setState({score3: pushWin1er1})
         }
         if(stateStart==4){
             pushWin1er1 = this.state.score4
             pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-1, " ")
             this.setState({score4: pushWin1er1})
         }
         
     }
     plusAnTrang(){
        stateStart=this.state.start
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+9, " ")
            this.setState({score1: pushWin1er1})
        }
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+9, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+9, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+9, " ")
            this.setState({score4: pushWin1er1})
        }
     }
     plus13La(){
        score=this.state.scoreWin
        alert(score)
        stateStart=this.state.start
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+6, " ")
            this.setState({score1: pushWin1er1})
        }
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+6, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+6, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]+6, " ")
            this.setState({score4: pushWin1er1})
        }
     }
     sub13La(){
        stateStart=this.state.start
        if(stateStart==1){
            pushWin1er1 = this.state.score1
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-6, " ")
            this.setState({score1: pushWin1er1})
        }
        if(stateStart==2){
            pushWin1er1 = this.state.score2
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-6, " ")
            this.setState({score2: pushWin1er1})
        }
        if(stateStart==3){
            pushWin1er1 = this.state.score3
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-6, " ")
            this.setState({score3: pushWin1er1})
        }
        if(stateStart==4){
            pushWin1er1 = this.state.score4
            pushWin1er1.push(pushWin1er1[pushWin1er1.length-2]-6, " ")
            this.setState({score4: pushWin1er1})
        }
     }
     alertWin(){
         score=this.state.scoreWin
         score1= this.state.score1
         score2= this.state.score2
         score3= this.state.score3
         score4= this.state.score4
         if(score1>=score||score2>=score||score3>=score||score4>=score){
             alert("Chuc mung ban da thang")
         }

     }
    
     static navigationOptions=({navigation})=>({
        title: `${navigation.state.params.score} điểm nha mấy bạn `,
    })
    render(){
        const {params} = this.props.navigation.state
        return(
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#B3E5FC'}}>
            
                <TouchableOpacity onPress={()=>{this.setState({start: 1})}}>
                <Text style={styles.textPlayer}>{params.name1.toUpperCase()}: {this.state.score1}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({start: 2})}}>
                <Text style={styles.textPlayer}>{params.name2.toUpperCase()}: {this.state.score2}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({start: 3})}}>
                <Text style={styles.textPlayer}>{params.name3.toUpperCase()}: {this.state.score3}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({start: 4})}}>
                <Text style={styles.textPlayer}>{params.name4.toUpperCase()}: {this.state.score4}</Text>
                </TouchableOpacity>
                {/* </View> */}
                
             <View style={styles.viewPlus1}>
                 <TouchableOpacity onPress={this.plusScore1.bind(this)} style={styles.styleLine}><Text style={styles.styleWin}>NHAT</Text></TouchableOpacity>
                 <TouchableOpacity onPress={this.plusScore2.bind(this)} style={styles.styleLine}><Text style={styles.styleWin}>NHI</Text></TouchableOpacity>
                 <TouchableOpacity onPress={this.plusScore3.bind(this)} style={styles.styleLine}><Text style={styles.styleWin}>BA</Text></TouchableOpacity>
                 <TouchableOpacity onPress={this.onDelete.bind(this)} style={styles.styleLine}><Text style={{fontSize: 18, color: 'red'}}>DELETE</Text></TouchableOpacity>
            </View>
            <View style={styles.viewPlus2}>
                    <TouchableOpacity onPress={this.plusAnTrang.bind(this)} style={styles.styleAnTrang}>
                        <Text style={styles.textAnTrang}>ĂN TRẮNG</Text>
                    </TouchableOpacity>   
                <View style={{paddingLeft: 20}}>
                    <TouchableOpacity style={styles.styleLine} onPress={this.plus13La.bind(this)}><Text>+</Text></TouchableOpacity>    
                        <Text style={{fontSize: 16}}>CHÁY 13 LÁ</Text>    
                    <TouchableOpacity style={styles.styleLine} onPress={this.sub13La.bind(this)}><Text>-</Text></TouchableOpacity>
                </View>        
            </View>
              
            <View style={{flex: 8, flexDirection: 'row', marginTop:5, paddingLeft: 10,}}>
                    
                <View style={styles.haiCoStyle}>
                <TouchableOpacity onPress={this.plusHaiCo.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>+</Text></TouchableOpacity>
                <Text style={{textAlign: 'center', color: 'red', fontSize: 16}}>HAI CƠ</Text>
                <TouchableOpacity  onPress={this.subHaiCo.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>-</Text></TouchableOpacity>
                </View>
                
                <View style={styles.haiCoStyle}>
                <TouchableOpacity onPress={this.plusScore1.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>+</Text></TouchableOpacity>
                <Text style={{textAlign: 'center', color: 'red', fontSize: 16}}>HAI RÔ</Text>
                <TouchableOpacity onPress={this.subHaiRo.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>-</Text></TouchableOpacity>
                </View>

                <View style={styles.haiCoStyle}>
                <TouchableOpacity onPress={this.plusScore2.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>+</Text></TouchableOpacity>
                <Text style={{textAlign: 'center',fontSize: 16}}>HAI CHUỒN</Text>
                <TouchableOpacity onPress={this.subHaiChuon.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>-</Text></TouchableOpacity>
                </View>

                <View style={styles.haiCoStyle}>
                <TouchableOpacity onPress={this.plusScore3.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>+</Text></TouchableOpacity>
                <Text style={{textAlign: 'center',fontSize: 16}}>HAI BÍCH</Text>
                <TouchableOpacity onPress={this.subHaiBich.bind(this)} style={styles.styleLine}><Text style={styles.styleText}>-</Text></TouchableOpacity>
                </View>
                
            
                
            </View>
            
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    styleLine:{
        marginLeft: 10,
        borderWidth: 1,
        height:30,
        width: 70,
        alignItems:'center',
        justifyContent: 'center'
    },
    styleText:{
       
    },
    textPlayer:{
        fontSize: 18,
        color: "#841584"
    },
    styleDelete:{
        paddingLeft: 10,
        color: 'red',
        fontSize: 20
    },
    viewPlus1:{
        flex: 1, 
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 30
    },
    styleWin:{
        fontSize: 18
    }, 
    styleAnTrang:{
        height:30,
        width: 100,
        borderWidth: 1,
        paddingLeft: (Platform.OS=='ios')? 5 : 0,
        paddingTop: (Platform.OS=='ios')? 5 : 5,
        // paddingTop: 10, 
        marginLeft: 19,
    },
    textAnTrang:{
        textAlign: 'center',
        fontSize: 16
    },
    viewPlus2:{
        flex: (Platform.OS=='ios')? 2 : 3,
        flexDirection: 'row',
        alignItems:'center'
    }
})