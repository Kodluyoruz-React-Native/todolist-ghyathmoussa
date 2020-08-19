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


    notButonlarAcik = -1; //for open and close the buttons

    setNotButtonlarAcik = i => {
        this.notButonlarAcik = this.notButonlarAcik === i ? -1 : i;
        
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
        notButonlarAcik: observable,
        set: action,
        setNotButtonlarAcik:action
    }
);

export default new anasayfaC;