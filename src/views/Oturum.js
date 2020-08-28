import React from 'react';
import { View, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { Input, Button } from 'react-native-elements';

import oturumC from '../controller/oturumC';
import splashC from '../controller/splashC';

import { oturumS as anasayfaStyle, oturumS } from './stil';
import Ikon from '../components/Ikon';
import tlfonH from '../help/tlfonH';

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
            containerStyle: oturumS.input,
            contextMenuHidden: true,
            maxLength: 8,
        };

        return (
            <View style={[anasayfaStyle.Container, durum === 2 && tlfonH.klavye.durum && { flex: 1 }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        placeholder={'E-Posta'}
                        leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'email-open'} c={'black'} />}
                        containerStyle={oturumS.input}
                        value={oturumC.email}
                        keyboardType={'email-address'}
                        onChangeText={d => oturumC.set('email', d)}
                        maxLength={60}
                    />

                    {
                        durum === 2 &&
                        <Input
                            placeholder={'Adınız soyadınız'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                            containerStyle={oturumS.input}
                            value={oturumC.isim}
                            onChangeText={d => oturumC.set('isim', d)}
                            maxLength={50}
                        />
                    }

                    {
                        durum === 2 &&
                        <Input
                            placeholder={'kullanıcı adınız'}
                            leftIcon={<Ikon is={'MaterialCommunityIcons'} i={'account'} c={'black'} />}
                            containerStyle={oturumS.input}
                            value={oturumC.kullaniciAdi}
                            onChangeText={d => oturumC.set('kullaniciAdi', d)}
                            maxLength={50}
                        />
                    }

                    <Input
                        {...inputProps}
                        placeholder={'Şifre'}
                        value={oturumC.sifre}
                        onChangeText={d => oturumC.set('sifre', d)}
                    />

                    {
                        durum === 2 &&
                        <Input
                            {...inputProps}
                            placeholder={'Şifre tekrar'}
                            value={oturumC.sifreTekrar}
                            onChangeText={d => oturumC.set('sifreTekrar', d)}
                        />
                    }
                </ScrollView>


                <Button
                    type={'solid'}
                    raised
                    //icon={}
                    title={durum === 1 ? 'Oturum Aç' : 'Üye Ol'}
                    containerStyle={[oturumS.buton, tlfnH.klavye.durum && oturumS.butonKlavyeAcik]}
                    onPress={oturumC.OTURUM}
                    loading={oturumC.loading}
                />


                {
                    !tlfnH.klavye.durum &&
                    <Button
                        type={'clear'}
                        //raised
                        //icon={}
                        title={durum === 2 ? 'Oturum Aç' : 'Üye Olmak için dokunun'}
                        containerStyle={[oturumS.uyeOlButon]}
                        titleStyle={oturumS.uyeOlButonY}
                        onPress={oturumC.uyeOlButon}
                    />
                }
            </View>
        );
    }
}

export default observer(Oturum);