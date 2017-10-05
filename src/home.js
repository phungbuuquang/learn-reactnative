import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity,FlatList} from 'react-native'


const listMode=['2 nguoi choi', '3 nguoi choi', '4 nguoi choi']
export default class HomeScreen extends Component{
    static navigationOptions=({navigation})=>({
        title: "Chào mừng đến với app tính điểm của Mon",
    })
    render(){
        const {navigate, state} = this.props.navigation        
        return(
           <View style={styles.HomeStyle}>
               <View style={styles.wrapText1}>
                    <Text style={styles.styleText1}>Mời bạn chọn chế độ chơi</Text>
               </View>

                <View style={styles.wrapChoose}>
                    <TouchableOpacity onPress={()=>navigate('Twoplayer',{mode: '2 nguoi choi'})} style={styles.frameChoose}>
                        <Text style={styles.styleText2}>2 Người chơi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigate('Threeplayer',{mode: '3 nguoi choi'})} style={styles.frameChoose}>
                        <Text style={styles.styleText2}>3 Người chơi</Text>
                    </TouchableOpacity><TouchableOpacity onPress={()=>navigate('Fourplayer',{mode: '4 người chơi'})} style={styles.frameChoose}>
                        <Text style={styles.styleText2}>4 Người chơi</Text>
                    </TouchableOpacity>
                </View>    

               
           </View> 
        )
    }
}
const styles = StyleSheet.create({
    HomeStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#B3E5FC'
    },
    styleText1:{
        fontSize: 20
    },
    wrapText1:{
        flex: 1
    },
    wrapChoose:{
        flex: 3,
    },
    frameChoose:{
        borderWidth: 1,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 15, 
        backgroundColor: '#673AB7'
    },
    styleText2:{
        fontSize: 18,
        color: 'white'
    }
})