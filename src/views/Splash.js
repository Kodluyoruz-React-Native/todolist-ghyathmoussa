import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';


import Resim from '../components/Resim';

import tlfonH from '../help/tlfonH';

import Oturum from './Oturum';

import splashC from '../controller/splashC';


import { splashS  } from './stil';


class Splash extends React.Component {
    componentDidMount = splashC.cDMount;
    componentDidUpdate = splashC.cDUpdate;
    componentWillUnmount = splashC.cWUnmount;

    render() {
        const durum = splashC.durum;

        let logoH;

        if (durum === 0) logoH = 60;
        else if (durum === 1) logoH = 35;
        else if (durum === 2) logoH = 35;
        else if (durum === 3) logoH = 20;


        return (
            <View
                style={[
                    splashS.K,
                    durum === 3 && splashS.K2,
                    (durum === 1 || durum === 2) && tlfonH.klavye.durum && { justifyContent: 'flex-end' }
                ]}
            >
                <TouchableOpacity>
                    <Resim
                        source={require('../../asset/android/playstore-icon.png')}
                        height={tlfonH.W(logoH)}
                    />
                </TouchableOpacity>

                {(durum === 1 || durum === 2) && <Oturum />}
            </View>
        );
    }
}

export default observer(Splash);