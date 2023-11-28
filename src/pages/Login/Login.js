import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Input, Password } from "../../components/Inputs";
import { Button } from "../../components/Button";
// IMPOTRAÇÃO DE ESTILOS
import { PagesStyles } from "../../styles/PagesStyles";
import { Cores } from "../../styles/Cores";
// IMPORTAÇÃO DOS DADOS DOS USUÁRIOS
import users from '../../../database/usuarios.json'

export default function Login(props) {

    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    const verificarSenha = () => {
        users.find(user => {
            if(user.nome == usuario && user.senha == senha) {
                return (
                    props.navigation.navigate('Home', {nome: usuario}),
                    setUsuario(''), setSenha('')
                )
            }
            return
        })
        
    } 

    return (
        <View style={PagesStyles.pages}>
            <Image 
                source={require('../../../assets/MusicBox-banner.png')}
                style={{ width: '100%', height: 100 }}
            />
            <Text style={[PagesStyles.label, {color: Cores.azul}]}>Usuário</Text>
            <Input
                placeholder="Nome do Usuário"
                dado={usuario}
                pegaDados={(txt) => setUsuario(txt)}
                borders={Cores.azul}
                TextColor={Cores.azul}
                placeholderTextColor={Cores.azul_transparente}
            />
            <Text style={[PagesStyles.label, {color: Cores.azul}]}>Senha</Text>
            <Password
                placeholder="Senha do Usuário"
                dado={senha}
                pegaDados={(txt) => setSenha(txt)}
                borders={Cores.azul}
                TextColor={Cores.azul}
                placeholderTextColor={Cores.azul_transparente}
            />
            <Button
                // funcao={verificarSenha}
                funcao={() => props.navigation.navigate('Home', {nome: usuario})}
                titulo="Entrar" borders={Cores.azul} colors={Cores.azul}
            />
            <TouchableOpacity onPress={() => { return props.navigation.navigate('Novo Usuário') }}>
                <Text style={{ color: Cores.azul, fontSize: 18, fontWeight: 'bold'}}>Novo Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}