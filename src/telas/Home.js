import { TouchableOpacity, View } from "react-native";
import { Topbar } from "../componentes/Topbar";

import { Temperature } from "../componentes/Temperature";
import { Time } from "../componentes/Time";


export function Home({navigation}) {
    return(
        <View>
            <Topbar />
            <Temperature />
            <TouchableOpacity onPress={()=>navigation.navigate("Week")} activeOpacity={0.7}>
                <Time />
            </TouchableOpacity>
        </View>
    )
}