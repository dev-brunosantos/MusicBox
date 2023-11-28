import { StyleSheet, View, ScrollView, Text } from "react-native";
import { BtnInfor } from "../../components/btnInformacoes";
// IMPORTAÇÃO DOS DADOS DOS ALUNOS
import { aulas } from '../../../database/infromacoes.json'
// IMPORTAÇÃO DOS ESTILOS ( CORES )
import { Cores } from "../../styles/Cores";

export default function Inicio() {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', heigth: '100%', marginVertical: 10 }}>
                <Text style={styles.txt}>Próximas Aulas</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.containerScrool}>
                        {
                            aulas.proximas.map(aula => (
                                <>
                                    <BtnInfor key={aula} aluno={aula.aluno}
                                        turma={aula.turma} dia={aula.dia}
                                        numero={aula.horario} background={Cores.azul}
                                    />
                                </>
                            ))
                        }
                    </View>
                </ScrollView>

                <Text style={styles.txt}>Aulas Pendentes</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.containerScrool}>
                        {
                            aulas.pendentes.map(aula => (
                                <>
                                    <BtnInfor key={aula} aluno={aula.aluno}
                                        turma={aula.turma} dia={aula.dia}
                                        numero={aula.horario} background={Cores.negativo}
                                    />
                                </>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerScrool: { width: '80%', flexDirection: 'row' },
    txt: {
        color: Cores.azul, fontSize: 32, fontWeight: "bold",
        textAlign: "center", textDecorationLine: 'underline',
        marginVertical: 20
    }
})