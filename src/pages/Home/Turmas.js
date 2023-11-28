import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { PagesStyles } from "../../styles/PagesStyles";
import { Cores } from "../../styles/Cores";
import { BtnIconeTurmas } from "../../components/btnIcone";

import turmas from '../../../database/turmas.json'

export default function Turmas(props) {
    return (
        <View style={[PagesStyles.pages, { backgroundColor: Cores.azul, paddingTop: 0 }]}>

            <ScrollView>
                <View style={styles.container}>
                    {
                        turmas.map(turma => (
                            <>
                                <BtnIconeTurmas
                                    key={turma.id}
                                    titulo={turma.nome}
                                    icone={turma.icone}
                                    background={Cores.branco}
                                    funcao={() => {
                                        return props.navigation.navigate(`${turma.nome}`)
                                    }}
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
        flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: "space-evenly", marginTop: 20
    },
    turmas: {
        width: '45%', height: 150,
        borderColor: Cores.branco, borderWidth: 2, borderRadius: 10,
        alignItems: "center", justifyContent: "space-evenly",
        marginVertical: 20
    },
    txt: {
        fontSize: 22, fontWeight: 'bold', color: Cores.branco, textTransform: "uppercase"
    }
})