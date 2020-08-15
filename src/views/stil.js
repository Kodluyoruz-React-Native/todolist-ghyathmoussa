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
    notTxt:{
        color:temaH.renkler.r4,
        fontSize:16
    },
    notBtns:{
        flexDirection:'row',
        position:'absolute',
        right:0,
    },
    notBtnC:{
        padding:tlfonH.W(1),
        paddingTop:0,
        alignItems:'center',
        justifyContent:'center',
        bottom:-30
    },
    btnOpenClose:{
        borderWidth:1,
        borderColor:'#fff',
        right:tlfonH.W(-60),
        borderRadius:999
    },
    
});
