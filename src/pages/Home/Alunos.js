import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { PagesStyles } from "../../styles/PagesStyles";

import { FontAwesome5, MaterialIcons, Octicons, Entypo, AntDesign } from '@expo/vector-icons'
import { Cores } from "../../styles/Cores";
import { BtnIconeAlunos } from "../../components/btnIcone";

import btnOpcoes from '../../../database/btnAlunos.json'

export default function Alunos(props) {

    return (
        <View style={[PagesStyles.pages, { flex: 2, position: 'absolute', width: '100%', height: '100%', }]}>
            <ScrollView>
                <View style={styles.container}>
                    {
                        btnOpcoes.map(opcao => (
                            <>
                                <BtnIconeAlunos
                                    key={ opcao.titulo}
                                    icone={opcao.icone}
                                    titulo={opcao.titulo}
                                />
                            </>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        // width: '100%', 
        minHeight: '100%', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: "space-evenly",
        paddingVertical: '20%',
        // backgroundColor: Cores.preto
    },
    btn: {
        width: '45%',
        height: 150,
        borderWidth: 2,
        borderColor: Cores.azul,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Cores.azul
    },
    txt: {
        fontSize: 22, fontWeight: 'bold',
        textAlign: 'center', color: Cores.branco
    }
})