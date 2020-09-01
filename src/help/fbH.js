import { action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const db = database();
const auth = auth_();

class fbH {
    ekleUye = (email, sifre) => new Promise((olumlu, olumsuz) => {
        auth.createUserWithEmailAndPassword(email, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });

    oturumAc = (email, sifre) => new Promise((olumlu, olumsuz) => {
        auth.signInWithEmailAndPassword(email, sifre)
            .then(d => olumlu(d))
            .catch(e => olumsuz(e));
    });

    guncelleKullanciAdi = (uid,veri) => new Promise((olumlu, olumsuz) => {
        db.ref(`/KULLANCILAR/${uid || 'Error'}`).set(veri).then(() => olumlu(true)).catch(e => olumsuz(e));
    });

}
decorate(
    fbH,
    {
        ekleUye: action,
        oturumAc: action,


    }
);

export default new fbH();