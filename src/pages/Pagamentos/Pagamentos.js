import { View, ScrollView, Text } from "react-native";
import { PagesStyles } from "../../styles/PagesStyles";

import { pagamentos } from '../../../database/infromacoes.json'
import { BtnInfor } from "../../components/btnInformacoes";
import { Cores } from "../../styles/Cores";

export default function Pagamentos() {
    return (
        <View style={PagesStyles.pages}>
            <Text style={[PagesStyles.label, { color: Cores.preto, margin: 20 }]}>PENDENTES</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }} >
                    {
                        pagamentos.pendentes.map(pagamento => (
                            <BtnInfor
                                checar="check"
                                aluno={pagamento.aluno}
                                turma={pagamento.turma}
                                dia={pagamento.dia}
                                numero={pagamento.valor}
                                background={Cores.preto_trasparente}
                            />
                        ))
                    }
                </View>
            </ScrollView>

            <Text style={[PagesStyles.label, { color: Cores.positivo, margin: 20 }]}>PENDENTES</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }} >
                    {
                        pagamentos.pendentes.map(pagamento => (
                            <BtnInfor
                                aluno={pagamento.aluno}
                                turma={pagamento.turma}
                                dia={pagamento.dia}
                                numero={pagamento.valor}
                                background={Cores.positivo}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}