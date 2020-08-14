import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';


class anasayfaC {

    spalshAktif = true;

    cDMount = () => { //Screen Starting
        setTimeout(()=>this.spalshAktif = false,2000);
    }

    cDUpdate = () => { //after the updating
        LayoutAnimation.spring();
    }

    cDUMount = () => { //Screen out

    }

    

}

decorate(
    anasayfaC,
    {
        cDMount:action,
        cDUpdate:action,
        cDUMount:action,
        spalshAktif: observable,
    }
);

export default new anasayfaC;