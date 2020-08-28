import { observable, decorate, action } from 'mobx';
import { Dimensions, Platform, Keyboard } from 'react-native';


class tlfonH {

    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    W = d => (this.w * d / 100);
    H = d => (this.h * d / 100);

    and = Platform.OS === 'android';
    ios = Platform.OS === 'ios';

    klaviye = { durum: false, h: 0 };

    klaviyeAcik = d => this.klaviye = { durum: true, h: d.endCoordinates.h }
    klaviyeKapandi = d => this.klaviye = { durum: false, h:0 }

}

decorate(
    tlfonH,
    {
        w: observable,
        h: observable,
        and: observable,
        ios: observable,
        klaviye:observable,
        
        klaviyeAcik:action,
        klaviyeKapandi:action,
        W: action,
        H: action,
    }
);

export default new tlfonH;