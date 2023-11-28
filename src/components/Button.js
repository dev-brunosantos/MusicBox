import { StyleSheet, TouchableOpacity, Text } from "react-native"

export const Button = ({ titulo, funcao, borders, colors, background }) => {
    return (
        <TouchableOpacity
            onPress={funcao}
            style={[styles.button, {borderColor: borders, backgroundColor: background}]}
        >
            <Text style={[styles.txt, {color: colors}]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    }
})