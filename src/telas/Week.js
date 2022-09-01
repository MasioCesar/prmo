import { StyleSheet, View } from "react-native-web";
import { Days } from "../componentes/Days";
import { Title } from "../componentes/Title";

export function Week() {
    return(
        <View>
            <Title />
            <Days />
        </View>
    )
}