import { View, Text, TouchableOpacity } from "react-native";
import { PagesStyles } from "../../styles/PagesStyles";

export default function Aulas() {

    const opcoes = [
        'Todas as Aulas', 'Aulas Atrasadas',
        'Aulas Finalizadas', 'Reposição de Aula'
    ]

    return(
        <View style={{
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            flexWrap: 'wrap',
            gap: 20,
            marginVertical: '25%',
        }}>
        {/* <View style={[PagesStyles.pages, { flex: 2, position: 'absolute', width: '100%', height: '100%', top: -100, zIndex: 999}]}> */}
            {
                opcoes.map(opcao => (
                    <>
                        <TouchableOpacity style={{
                            width: '45%', height: 200, borderWidth: 1,
                            borderRadius: 10, alignItems: "center", justifyContent: "center",

                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: "bold",
                                textAlign: "center"
                            }}>
                                {opcao}
                            </Text>
                        </TouchableOpacity>
                    </>
                ))
            }
        </View>
    )
}