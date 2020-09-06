import { observable, action, decorate } from 'mobx';
import splashC from './splashC';
import fbH from '../help/fbH';
import strgH from '../help/strgH';

class oturumC {
    cDMount = async () => { }
    cDUpdate = () => {
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { }

    uyeOlButon = () => { splashC.set('durum', splashC.durum === 1 ? 2 : 1); }


    email = '';
    isim = '';
    kullaniciAdi = '';
    sifre = '';
    sifreTekrar = '';


    loading = false;
    OTURUM = async () => {
        this.loading = true;
        if (splashC.durum === 1) await this.oturumAc();
        else if (splashC.durum === 2) await this.ekleUye();
        this.loading = false;
    }
    ekleUye = async () => {
        const sonuc = await uyelikM.ekleUye(this.kullaniciAdi, this.sifre);
        if (x.sonuc) {
            const veri = {
                isim=this.isim,
                sifre = this.sifre,
                kullaniciAdi = this.kullaniciAdi,
                email = this.email
            }
            const y = await uyelikM.guncelleKullanciAdi(veri);

            console.log(x.veri);
        }else{
            console.log(x,hata)
        }

    }
    oturumAc = async () => {
        const sonuc = await uyelikM.ekleUye(this.kullaniciAdi, this.sifre);
        if (x.sonuc) {
            
            splashC.set('durum',3);
            
            
        }else{
            console.log(x,hata)
        }
    }


    uyelikKapat = () => {
        this.isim = '';
        this.sifre = '';
        this.sifreTekrar = '';

        splashC.set('durum', 1);
    }


    set = (k, v) => this[k] = v;
}

decorate(
    oturumC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        uyeOlButon: action,

        email: observable,
        isim: observable,
        kullaniciAdi: observable,
        sifre: observable,
        sifreTekrar: observable,


        loading: observable,
        OTURUM: action,
        oturumAc: action,
        ekleUye: action,

        uyelikKapat: action,

        set: action,
    }
);


export default new oturumC();