import { observable, action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth';
import fbH from '../help/fbH'

class uyelkM {

    uid = '';
    isim = '';
    kuaniciAdi = '';

    ekleUye = () => {

        const kullaniciAdi = oturumC.kullaniciAdi;
        const sifre = oturumC.sifre;

        try {
            const x = await fbH.ekleUye(kullaniciAdi, sifre);
            this.uid = x.user.uid;
            return { sonuc: true, veri: x }
        }
        catch (e) {
            return { sonuc = false, veri: e }
        }
    }

    oturumAc = async (kullaniciAdi,sifre) => {
        try {
            const x = await fbH.ekleUye(kullaniciAdi, sifre);
            this.uid = x.user.uid;
            
            const kullaniciGiris = await fbH.getirKullanciAdi(this.uid);
            this.isim = kullaniciGiris.isim;
            this.kuaniciAdi = kullaniciGiris.kuaniciAdi;

            return { sonuc: true, veri: kullaniciGiris }
        }
        catch (e) {
            return { sonuc = false, veri: e }
        }
    }

    guncelleKullanciAdi = async veri => {
        try {return { sonuc: true, veri: await fbH.guncelleKullanciAdi(this.uid, veri)};}
        catch (e) {return { sonuc = false, veri: e }}
    }

}

decorate(
    uyelkM,
    {
        ekleUye: action,
        oturumAc: action,
        guncelleKullanciAdi:action,

    }
);

export default new uyelkM();