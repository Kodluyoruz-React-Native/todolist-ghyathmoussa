import React from 'react';
import { View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { Input, Button } from 'react-native-elements';

import oturumC from '../controller/oturumC';
import splashC from '../controller/splashC';

import { oturumS as anasayfaStyle, oturumS } from './stil';
import Ikon from '../components/Ikon';
import tlfnH from '../helper/tlfnH';

class Oturum extends React.Component {
    componentDidMount = oturumC.cDMount;
    componentDidUpdate = oturumC.cDUpdate;
    componentWillUnmount = oturumC.cWUnmount;

    render() {
        const durum = splashC.durum;

        const inputProps = {
            leftIcon: <Ikon is={'MaterialCommunityIcons'} i={'form-textbox-password'} c={'black'} />,
            secureTextEntry: true,
            keyboardType: 'number-pad',
            containerStyle: S.input,
            contextMenuHidden: true,
            maxLength: 8,
        };

        return (
            <View style={[anasayfaStyle.Container, durum === 2 && tlfnH.klavye.durum && { flex: 1 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        placeholder={'E-Posta'}
                        leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'email-open'} c={'black'} />}
                        containerStyle={S.input}
                        value={C.email}
                        keyboardType={'email-address'}
                        onChangeText={d => C.set('email', d)}
                        maxLength={60}
                    />

                    {
                        durum === 2 &&
                        <Input
                            placeholder={'Adınız soyadınız'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                            containerStyle={oturumS.input}
                            value={C.isim}
                            onChangeText={d => oturumC.set('isim', d)}
                            maxLength={50}
                        />
                    }

                    {
                        durum === 2 &&
                        <Input
                            placeholder={'kullanıcı adınız'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                            containerStyle={S.input}
                            value={C.kullaniciAdi}
                            onChangeText={d => C.set('kullaniciAdi', d)}
                            maxLength={50}
                        />
                    }

                    <Input
                        {...inputProps}
                        placeholder={'Şifre'}
                        value={C.sifre}
                        onChangeText={d => C.set('sifre', d)}
                    />

                    {
                        durum === 2 &&
                        <Input
                            {...inputProps}
                            placeholder={'Şifre tekrar'}
                            value={C.sifreTekrar}
                            onChangeText={d => C.set('sifreTekrar', d)}
                        />
                    }
                </ScrollView>


                <Button
                    type={'solid'}
                    raised
                    //icon={}
                    title={durum === 1 ? 'Oturum Aç' : 'Üye Ol'}
                    containerStyle={[S.buton, tlfnH.klavye.durum && S.butonKlavyeAcik]}
                    onPress={C.OTURUM}
                    loading={C.loading}
                />


                {
                    !tlfnH.klavye.durum &&
                    <Button
                        type={'clear'}
                        //raised
                        //icon={}
                        title={durum === 2 ? 'Oturum Aç' : 'Üye Olmak için dokunun'}
                        containerStyle={[S.uyeOlButon]}
                        titleStyle={S.uyeOlButonY}
                        onPress={C.uyeOlButon}
                    />
                }
            </View>
        );
    }
}

export default observer(Oturum);