import {action, decorate } from 'mobx';
import auth from '@react-native-firebase/auth'

class fbH {
    ekleUye = (email,sifre) => new Promise((olumlu,olumsuz) => {
        auth().createUserWithEmailAndPassword(email,sifre)
        .then(d => olumlu(d))
        .catch(e => olumsuz(e));
    });

    oturumAc = (email,sifre) => new Promise((olumlu,olumsuz) => {
        auth().signInWithEmailAndPassword(email,sifre)
        .then(d => olumlu(d))
        .catch(e => olumsuz(e));
});
}
decorate(
    fbH,
    {
        ekleUye:action,
        oturumAc:action,
        

    }
);

export default new fbH();