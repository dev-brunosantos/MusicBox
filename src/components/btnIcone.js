import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import { Cores } from "../styles/Cores";

export const BtnIconeAlunos = ({children, icone, titulo, chave, funcao}) => {
    return (
        <TouchableOpacity id={chave} key={chave} style={styles.btn} onPress={funcao}>
            <FontAwesome name={icone} size={70} color={Cores.branco} />
            <Text style={styles.txt}>{titulo}</Text>
            {children}
        </TouchableOpacity>
    )
}

export const BtnIconeTurmas = ({icone, titulo, funcao, background}) => {
    return (
        <TouchableOpacity onPress={funcao} style={[styles.btn, {backgroundColor: background}]}>
            <MaterialCommunityIcons name={icone} size={70} color={Cores.azul} />
            <Text style={[styles.txt, {color: Cores.azul}]}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '48%', height: 180, marginVertical: 10,
        borderWidth: 2, borderColor: Cores.azul,
        borderRadius: 10, paddingHorizontal: 10,
        alignItems: 'center', justifyContent: 'space-evenly',
        backgroundColor: Cores.azul
    },
    txt: {
        fontSize: 22, fontWeight: 'bold',
        textAlign: 'center', color: Cores.branco
    }
})
