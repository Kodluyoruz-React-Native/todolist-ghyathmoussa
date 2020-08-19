import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';


class anasayfaC {

    spalshAktif = true;

    cDMount = () => { //Screen Starting
        setTimeout(() => this.spalshAktif = false, 2000);
    }

    cDUpdate = () => { //after the updating
        LayoutAnimation.easeInEaseOut();
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
        set: action,
        setNotButtonlarAcik:action,
        spalshAktif: observable,
        notButonlarAcik: observable,
        
    }
);

export default new anasayfaC;