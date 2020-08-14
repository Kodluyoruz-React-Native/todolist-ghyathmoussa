import {StyleSheet} from 'react-native';
import tlfonH from '../help/tlfonH';
import temaH from '../help/temaH';

export const anasayfaStyle = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff'    
    },
    Container2:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoC:{
        position:'absolute',
        top:tlfonH.H(2),
        left:tlfonH.W(2)

    },
    ustAlan:{
        minHeight:tlfonH.W(25) + tlfonH.H(4),
        width:tlfonH.w,
        backgroundColor:temaH.renkler.r1,
        paddingLeft:tlfonH.H(24)
    },
    ustAlanY:{
        fontSize:15,
        fontWeight:'bold',
        paddingRight:tlfonH.H(2),
        color:'#000',
        textAlign:'right'
    },
    notlar:{
        marginTop:tlfonH.H(2),
        flex:1
    },
    not:{
        backgroundColor:temaH.renkler.r1,
        marginTop:tlfonH.H(2),
        marginBottom:tlfonH.H(2),
        padding:tlfonH.H(2)
    },
    notbtn:{
        padding:tlfonH.W(1)
    },
    
});
