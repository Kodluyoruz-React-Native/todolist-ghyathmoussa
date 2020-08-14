import { observable, decorate, action } from 'mobx';
import { Dimensions, Platform } from 'react-native';


class tlfonH {

    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    W = d => (this.w * d / 100);
    H = d => (this.h * d / 100);

    and = Platform.OS === 'android';
    ios = Platform.OS === 'ios';

}

decorate(
    tlfonH,
    {
        w: observable,
        h:observable,
        and:observable,
        ios:observable,

        W:action,
        H:action,
    }
);

export default new tlfonH;