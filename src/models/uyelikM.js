import { observable, action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth';
import fbH from '../help/fbH'

class uyelkM {

    uid = '';

    ekleUye = () => {

        const kullaniciAdi = oturumC.kullaniciAdi;
        const sifre = oturumC.sifre;

        try {
            const x = await fbH.ekleUye(kullaniciAdi, sifre);
            this.uid = x.user.uid;
            return { sonuc: true, veri: x }
        }
        catch (e) {
            return {sonuc = false , veri : e}
        }
        oturumAc = async () => {

        }
    }

}

decorate(
    uyelkM,
    {
        ekleUye: action,
        oturumAc: action,
    }
);

export default new uyelkM();