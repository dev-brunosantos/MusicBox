import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Cores } from "../styles/Cores";

import { Fontisto } from '@expo/vector-icons'

export const BtnInfor = ({ aluno, turma, dia, numero, excluir, background, ativar, checar }) => {
    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <TouchableOpacity onPress={excluir} style={styles.check}>
                <Fontisto name={checar} style={[styles.txt, { fontSize: 30 }]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={excluir} style={styles.lixeira}>
                <Fontisto name="trash" style={[styles.txt, { fontSize: 40 }]} />
            </TouchableOpacity>

            <Text style={styles.aluno}>{aluno} </Text>
            <Text style={styles.txt}>{turma} </Text>
            <View style={styles.viewContainer}>
                <Text style={styles.txt}>{dia} </Text>
                <Text style={styles.txt}>{numero}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: 320, height: 200, marginHorizontal: 5,
        borderWidth: 2, borderRadius: 10,
        borderColor: Cores.preto_trasparente,
        alignItems: "center", justifyContent: "space-evenly",
    },
    check: { position: 'absolute', top: 20, left: 5 },
    lixeira: { position: 'absolute', top: 10, right: 5 },
    aluno: {
        color: Cores.branco, fontSize: 35, fontWeight: 'bold',
        textAlign: "center", textDecorationLine: 'underline',
    },
    viewContainer: {
        padding: 10,
        flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly"
    },
    txt: {
        color: Cores.branco, fontSize: 25, fontWeight: "bold",
        textTransform: "uppercase", marginHorizontal: 10,
    }
})