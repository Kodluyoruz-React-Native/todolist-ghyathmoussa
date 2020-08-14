import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import Resim from '../components/Resim';
import tlfonH from '../help/tlfonH';
import { anasayfaStyle } from './stil';
import anasayfaC from '../controller/anasayfaC';
import { View as ViewA } from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ikon from '../components/Ikon';
import temaH from '../help/temaH';

class Anasayfa extends React.Component {

    componentDidMount = anasayfaC.cDMount;

    componentDidUpdat = anasayfaC.cDUpdate;

    componentWillUnmount = anasayfaC.cDUMount;

    ustAlan() {
        const sa = anasayfaC.spalshAktif;

        return (
            <View style={[anasayfaStyle.ustAlan, { display: sa ? 'none' : 'flex' }]}>
                <Text style={anasayfaStyle.ustAlanY}>Test</Text>
                <Text style={anasayfaStyle.ustAlanY}>Test</Text>
                <Text style={anasayfaStyle.ustAlanY}>Test</Text>

            </View>
        );
    }

    notlar() {
        return (
            <View style={anasayfaStyle.notlar}>
                {this.not()}
                {this.not()}
                {this.not()}
            </View>
        );
    }

    not() {
        return (
            <ViewA animation={'bounceInLeft'} delay={250} style={anasayfaStyle.not}>
                <Text>Sunt adipisicing sunt dolor sit est.</Text>
                <View style={anasayfaStyle.notbtn}>

                    <Ikon
                        is={'AntDesign'}
                        i={'delete'}
                        c={temaH.renkler.r2}
                        s={32}

                    />

                </View>


            </ViewA>
        );
    }

    render() {
        const sa = anasayfaC.spalshAktif;

        return (
            <View style={[anasayfaStyle.Container, sa && anasayfaStyle.Container2]}>

                {!sa && this.ustAlan()}

                {!sa && this.notlar()}


                <View style={!sa && anasayfaStyle.logoC}>
                    <Resim
                        source={require('../../asset/android/playstore-icon.png')}
                        heghit={tlfonH.W(sa ? 50 : 10)}
                    />
                </View>

            </View>
        );
    }
}

export default observer(Anasayfa);