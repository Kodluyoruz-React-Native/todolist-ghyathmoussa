import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';


class anasayfaC {

    spalshAktif = true;

    cDMount = () => { //Screen Starting
        setTimeout(() => this.spalshAktif = false, 2000);
    }

    cDUpdate = () => { //after the updating
        LayoutAnimation.spring();
    }

    cDUMount = () => { //Screen out

    }


    notBtnOpenClose = 1; //for open and close the buttons

    setNotButtomnOpen = i => {
        this.notBtnOpenClose = this.notBtnOpenClose === 1 ? i : -1;
        alert('Test')
    }

    set = (k, v) => this[k] = v;

}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cDUMount: action,
        spalshAktif: observable,
        notBtnOpenClose: observable,
        set: action
    }
);

export default new anasayfaC;