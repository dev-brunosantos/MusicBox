import { View, Image, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { Input, Password } from "../../components/Inputs";
import { Button } from "../../components/Button";

import { PagesStyles } from "../../styles/PagesStyles";
import { Cores } from '../../styles/Cores'

export default function NewUser(props) {
    return (
        <View style={PagesStyles.pages}>

            <TouchableOpacity
                onPress={() => { return props.navigation.goBack() }}
                style={{ position: 'absolute', top: 50, right: 20, borderWidth: 1, borderColor: Cores.azul, borderRadius: 200, zIndex: 999 }}
            >
                <Entypo
                    name="arrow-left"
                    size={40}
                    color={Cores.azul}
                />
            </TouchableOpacity>

            <Image
                source={require('../../../assets/MusicBox-banner.png')}
                style={{ width: '100%', height: 100 }}
            />

            <Input
                placeholder="Nome do Usuário"
            />
            <Password
                placeholder="Senha do Usuário"
            />
            <Password
                placeholder="Confirmar Senha"
            />
            <Button
                titulo="Cadastrar novo Usuário"
            />
        </View>
    )
}