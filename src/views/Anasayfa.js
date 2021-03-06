import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import Resim from '../components/Resim';
import tlfonH from '../help/tlfonH';
import { anasayfaStyle } from './stil';
import anasayfaC from '../controller/anasayfaC';
import { View as ViewA } from 'react-native-animatable';
import Ikon from '../components/Ikon';
import temaH from '../help/temaH';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Splash from './Splash';
import UyelikM from '../models/UyelikM';


class Anasayfa extends React.Component {

    componentDidMount = anasayfaC.cDMount;

    componentDidUpdat = anasayfaC.cDUpdate;

    componentWillUnmount = anasayfaC.cDUMount;

    ustAlan() {
        const sa = anasayfaC.spalshAktif;
        return (
            <View style={[anasayfaStyle.ustAlan, { display: sa ? 'none' : 'flex' }]}>
                <Text style={anasayfaStyle.ustAlanY}>Hello {UyelikM.isim}</Text>
                <Text style={anasayfaStyle.ustAlanY}>Test</Text>
                <Text style={anasayfaStyle.ustAlanY}>Test</Text>

            </View>
        );
    }

    notlar() {
        return (
            <View style={anasayfaStyle.notlar}>
                {this.not(0)}
                {this.not(1)}
                {this.not(2)}
            </View>
        );
    }

    not(i) {

        const btnOpen = anasayfaC.notButonlarAcik === i;

        return (
            <ViewA key={i} animation={'bounceInLeft'} delay={250} style={anasayfaStyle.not}>
                <Text style={anasayfaStyle.notTxt}>Sunt adipisicing sunt dolor sit est.</Text>
                <Text>{anasayfaC.notButonlarAcik}</Text>



                <View style={anasayfaStyle.notBtnsC}>

                    <TouchableOpacity style={anasayfaStyle.btnOpen} onPress={() => anasayfaC.setNotButtonlarAcik(i)}>
                        <Ikon
                            is={'AntDesign'}
                            i={btnOpen ? 'right' : 'left'}
                            c={temaH.renkler.r4}
                            s={tlfonH.W(5)}
                        />
                    </TouchableOpacity>

                    <View style={[anasayfaStyle.notBtnOpen,{display: btnOpen ? 'flex' : 'none'}]}>
                        {this.notBtn()}
                        {this.notBtn()}
                        {this.notBtn()}
                    </View>
                </View>

            </ViewA>
        );
    }

    notBtn() {
        return (
            <TouchableOpacity style={anasayfaStyle.notBtnC}>
                <Ikon
                    is={'AntDesign'}
                    i={'delete'}
                    c={temaH.renkler.r4}
                    s={tlfonH.W(7)}
                />
            </TouchableOpacity>
        );

    }

    render() {
        const sa = anasayfaC.spalshAktif;

        return (
            <View style={[anasayfaStyle.Container, sa && anasayfaStyle.Container2]}>

                {!sa && this.ustAlan()}

                {!sa && this.notlar()}


                <Splash />

            </View>
        );
    }
}

export default observer(Anasayfa);