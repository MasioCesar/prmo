import { View } from "react-native-web";
import { Topbar } from "../componentes/Topbar";
import { Temperature } from "../componentes/temperature";
import { Time } from "../componentes/time";


export function Home() {
    return(
        <View>
            <Topbar />
            <Temperature />
            <Time />
        </View>
    )
}