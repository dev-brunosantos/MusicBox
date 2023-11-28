import { View, Text } from "react-native";
import { PagesStyles } from "../../styles/PagesStyles";

export default function Perfil(props) {
    return(
        <View style={PagesStyles.pages}>
            <Text style={{fontSize: 50, fontWeight: "bold", textAlign: "center"}}>
                {
                    props.route.params.usuario
                }
            </Text>
        </View>
    )
}