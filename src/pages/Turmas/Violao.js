import { View, Text } from 'react-native'
import dados from '../../../database/alunos.json'
import { PagesStyles } from '../../styles/PagesStyles'
import { BtnIconeAlunos } from '../../components/btnIcone'

export default function Violao() {

    function teste() {
        dados.forEach(dado => {
            if (dado.turma == 'Violão') {
                return console.log(dado.nome)
            }
            return
        })
    }

    teste()

    return (
        <View style={PagesStyles.pages}>
            <Text style={PagesStyles.label}> Violao </Text>

            {
                dados.map(dado => (
                    <>
                        {
                            dado.turma == 'Violão' ? (
                                <>
                                    <BtnIconeAlunos
                                        titulo={dado.nome}
                                        funcao={() => {
                                            alert(dado.nome)
                                        }}
                                    />
                                </>
                            ):(
                                <View />
                            )
                        }
                    </>
                ))
            }
        </View>
    )
}
