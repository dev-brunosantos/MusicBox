import { View, Text } from 'react-native'
import dados from '../../../database/alunos.json'
import { PagesStyles } from '../../styles/PagesStyles'
import { BtnIconeAlunos } from '../../components/btnIcone'

export default function Guitarra() {

    function teste() {
        dados.forEach(dado => {
            if (dado.turma == 'Guitarra') {
                return console.log(dado.nome)
            }
            return
        })
    }

    teste()

    return (
        <View style={PagesStyles.pages}>
            <Text style={PagesStyles.label}> Guitarra </Text>

            {
                dados.map(dado => (
                    <>
                        {
                            dado.turma == 'Guitarra' ? (
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
