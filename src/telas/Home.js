import { View } from "react-native-web";
import { Header } from "../componentes/Header";
import { Temperature } from "../componentes/temperature";
import { Time } from "../componentes/time";

export function Home() {
    return(
        <View>
            <Header />
            <Temperature />
            <Time />
        </View>
    )
}