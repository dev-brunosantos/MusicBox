import { View, Text } from 'react-native'
import dados from '../../../database/alunos.json'
import { PagesStyles } from '../../styles/PagesStyles'
import { BtnIconeAlunos } from '../../components/btnIcone'

export default function Teclado() {

    function teste() {
        dados.forEach(dado => {
            if (dado.turma == 'Teclado') {
                return console.log(dado.nome)
            }
            return
        })
    }

    teste()

    return (
        <View style={PagesStyles.pages}>
            <Text style={PagesStyles.label}> Teclado </Text>

            {
                dados.map(dado => (
                    <>
                        {
                            dado.turma == 'Teclado' ? (
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
