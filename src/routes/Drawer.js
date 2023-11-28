import { useState, useEffect } from "react"
import { SafeAreaView, View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import { Cores } from '../styles/Cores'
import Configuracoes from '../pages/Configuracoes'
// import { Button } from "../components/Button"
import Pagamentos from "../pages/Pagamentos/Pagamentos"
import { CabecalhoStyles } from "../styles/CabecalhoStyles"

const drawer = createDrawerNavigator()

// TESTE DE USUARIO -----------------------------------------
import usuarios from '../../database/usuarios.json'
// TESTE DE USUARIO -----------------------------------------

export default function Drawer(props) {
    const [nomeUsuario, setNomeUsuario] = useState(props.route.params.nome)

    const telaPerfil = () => {
        return( props.navigation.navigate('Perfil', { usuario: nomeUsuario }))
    }

    const Cabecalho = (props) => {
        return (
            <>
                <SafeAreaView>
                    <View style={CabecalhoStyles.container}>

                        <TouchableOpacity onPress={telaPerfil} style={CabecalhoStyles.btnImg}>
                            {
                                nomeUsuario.includes("Bruno") ? (
                                // nomeUsuario == "Bruno" ? (
                                    <Image source={require('../../assets/bruno.png')}
                                        style={CabecalhoStyles.img}
                                    />
                                ) : (
                                    <Image source={require('../../assets/usuario.png')}
                                        style={[CabecalhoStyles.img, { backgroundColor: Cores.branco }]}
                                    />
                                )
                            }
                        </TouchableOpacity>

                        <Text style={CabecalhoStyles.saudacao}> Olá, {nomeUsuario} </Text>
                    </View>
                </SafeAreaView>
                <DrawerItemList {...props} />

                <View style={CabecalhoStyles.containerBtn}>
                    <Button title="Sair"
                        onPress={() => props.navigation.navigate('Login')}
                    />
                </View>
            </>
        )
    }

    return (
        <drawer.Navigator
            drawerContent={Cabecalho}
            screenOptions={{
                drawerStyle: {
                    width: '70%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: Cores.preto_trasparente
                },
                headerLeftContainerStyle: {
                    position: 'absolute', right: 0,
                    bottom: -25, height: '100%'
                },
                title: '',
                drawerLabelStyle: { fontSize: 30, color: Cores.branco },
                headerStatusBarHeight: 20,
                drawerItemStyle: { marginTop: 30 },
                headerShadowVisible: false,
                headerTitleStyle: { fontSize: 50 },
                headerStyle: { backgroundColor: '#f0f0f0' }
            }}
        >
            <drawer.Screen name='Home' component={Home}
                options={{
                    drawerLabel: 'Home',
                    headerTransparent: true,
                    headerTintColor: Cores.branco
                }}
            />
            <drawer.Screen name='Pagamentos' component={Pagamentos}
                options={{
                    drawerLabel: 'Pagamentos',
                    // headerTransparent: true,
                    headerTintColor: Cores.branco,
                    headerShown: true,
                    headerStatusBarHeight: 50,
                    headerStyle: {
                        backgroundColor: Cores.preto
                    },
                    headerTitle: 'Pagamentos',
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerLeftContainerStyle: {
                        position: 'absolute',
                        top: '15%',
                        right: 0
                    }
                }}
            />
            <drawer.Screen name='Configurações' component={Configuracoes}
                options={{ drawerLabel: 'Configurações' }}
            />
        </drawer.Navigator>
    )
}