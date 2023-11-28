import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'

export const Input = ({ placeholder, pegaDados, dado, borders, placeholderTextColor, TextColor }) => {
    return (
        <View style={[styles.container, { borderColor: borders }]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={dado}
                onChangeText={pegaDados}
                style={[styles.input, {color: TextColor}]}
            />
        </View>
    )
}

export const Password = ({ placeholder, pegaDados, dado, borders, placeholderTextColor, TextColor }) => {

    const [verSenha, setVerSenha] = useState('eye')
    const [naoVerSenha, setNaoVerSenha] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(true)

    const verificarSenha = () => {
        setSeguranca(!seguranca)
        setVerSenha(naoVerSenha)
        setNaoVerSenha(verSenha)
    }

    return (
        <View style={[styles.container, { borderColor: borders, }]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={dado}
                onChangeText={pegaDados}
                style={[styles.input, {color: TextColor}]}
                secureTextEntry={seguranca}
            />
            <TouchableOpacity
                onPress={verificarSenha}
                style={styles.btnIcone}
            >
                <Entypo
                    name={naoVerSenha}
                    size={30}
                    color={TextColor}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        position: "relative"
    },
    input: {
        width: '100%',
        height: '100%',
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    btnIcone: {
        height: '100%',
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 15
    }
})