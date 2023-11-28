
import { StyleSheet, View, Image } from "react-native"
import { Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// IMPORTAÇÃO DAS TELAS
import Inicio from "./Inicio"
import Alunos from "./Alunos"
import Turmas from "./Turmas"
// IMPORTAÇÃO DE ESTILOS / CORES
import { Cores } from "../../styles/Cores"

const bottomTab = createBottomTabNavigator()

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <bottomTab.Navigator
                initialRouteName="Inicio"
                screenOptions={{
                    tabBarStyle: { height: 70, backgroundColor: Cores.azul },
                    headerStyle: { backgroundColor: Cores.azul },
                    headerShown: false, headerShadowVisible: false,
                    headerStatusBarHeight: 50, headerTintColor: Cores.branco,
                    headerTitleStyle: { fontSize: 22 },
                    tabBarLabelStyle: {
                        color: Cores.branco, fontSize: 20, fontWeight: "bold",
                        width: 70, height: '50%', marginRight: 20
                    },
                    tabBarIcon: (({ focused }) => { if (focused) return }),
                    tabBarLabelPosition: "beside-icon",
                }}
            >
                <bottomTab.Screen name="Alunos" component={Alunos}
                    options={{ headerShown: true }}
                />

                <bottomTab.Screen name="Inicio" component={Inicio}
                    options={{
                        headerBackground: () => (
                            <View style={styles.banner}>
                                <Image source={require('../../../assets/MusicBox-banner-branco.png')}
                                    style={styles.imagem}
                                />
                            </View>
                        ),
                        headerShown: true, title: '', tabBarLabel: '',
                        tabBarIcon: (({ focused }) => {
                            if (focused) {
                                return <Entypo name="home" size={55} color={Cores.azul} />
                            }
                            return <Entypo name="home" size={55} color={Cores.preto_trasparente} />
                        }),
                        tabBarIconStyle: {
                            borderWidth: 5, borderColor: Cores.azul, borderRadius: 200,
                            width: 80, height: 80,
                            position: "absolute", left: 25, bottom: 10,
                            backgroundColor: Cores.branco
                        }
                    }}
                />

                <bottomTab.Screen name="Turmas" component={Turmas}
                    options={{ headerShown: true }}
                />
            </bottomTab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: '100%', height: '100%',
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: Cores.azul
    },
    imagem: {
        width: '90%', height: '80%',
        position: 'absolute', top: 30, left: 4
    }
})