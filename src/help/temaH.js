import { observable, action, decorate } from 'mobx';

class temaH {
    renkler = {
        r1: '#e74c3c',
        r2: '#130f40',
        r3: '#686de0',
        r4: '#fff'
    }
}

decorate(
    temaH,
    {
        renkler: observable,

    }

);

export default new temaH;