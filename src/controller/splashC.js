import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Keyboard } from 'react-native';
import tlfnH from '../help/tlfonH';
import strgH from '../help/strgH';
import oturumC from './oturumC';

class splashC {
    cDMount = async () => {
        Keyboard.addListener('keyboardDidShow', tlfonH.klaviyeAcik);
        Keyboard.addListener('keyboardDidHide', tlfonH.klaviyeKapandi);

        const x = await strgH.getirOturumBilgileri();
        if (x && x.oturumDurumu === 'acik') {
            oturumC.set('email', x.email);
            oturumC.set('sifre', x.sifre);
            await oturumC.oturumAc();
        }
        else setTimeout(() => this.durum = 1, 1000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }


    durum = 0; //0: splash, 1: oturumaç, 2: üyeol, 3:anasayfa


    set = (k, v) => this[k] = v;
}

decorate(
    splashC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        durum: observable,

        set: action,
    }
);


export default new splashC();