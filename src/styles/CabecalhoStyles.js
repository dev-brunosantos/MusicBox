import { StyleSheet } from "react-native";
import { Cores } from "./Cores";

export const CabecalhoStyles = StyleSheet.create({
    container: {
        minHeight: 200,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    btnImg: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        width: '50%',
        height: 140,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Cores.branco,
        marginTop: 20
    },
    saudacao: {
        color: Cores.branco,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20
    },
    containerBtn: {
        position: 'absolute',
        bottom: 40, width: '100%',
        paddingHorizontal: 20
    }
})