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
        padding:tlfonH.H(2),
        paddingBottom:tlfonH.W(4.2)
    },
    notTxt:{
        color:temaH.renkler.r4,
        fontSize:16
    },
    notBtnsC:{
        flexDirection:'row',
        position:'absolute',
        bottom:1,
        right:10,
        backgroundColor:temaH.renkler.r1,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        paddingRight:tlfonH.W(2),
        paddingTop:tlfonH.W(2),
        paddingBottom:tlfonH.W(2)
    },
    notBtnC:{
        marginLeft:tlfonH.W(1),
        padding:tlfonH.W(1),
        paddingTop:0,
    },
    btnOpen:{
        alignSelf:'center'
    },
    notBtnOpen:{
        flexDirection:'row',
    },
    
});

export const oturumS = StyleSheet.create({
	K: {
		width: '100%',
		marginTop: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},

	input: {
		width: tlfonH.W(75),
	},
	buton: {
		width: tlfonH.W(65)
	},
	butonKlavyeAcik: {
		width: tlfonH.W(100)
	},
	uyeOlButon: {
		marginTop: '20%',
	},
	uyeOlButonY: {
		textDecorationLine: 'underline'
	}
});