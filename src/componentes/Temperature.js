import { Activity, Sun, ThermometerSimple, Wind } from "phosphor-react-native";
import { Image, Text, View } from "react-native-web";

export function Temperature() {
    return(
        <View className="px-[7.5%]">
            <Text className="py-6">
                <Text className="font-semibold text-2xl">
                    Bandung,
                </Text>
                <Text className="text-xl"> Indonesia</Text>
            </Text>
            <View className="flex items-center">
        
                <View className="w-full bg-blue-500 rounded-2xl flex justify-center items-center pt-6">
                    <Image style= {{height:80, width:80}}
                        source={require('../../assets/nubladoBranco.png')} />
                    <Text className="text-white text-2xl">Heavy Rain</Text>
                    <Text className="text-slate-400 text-xs m-2">Sunday, 02 Oct</Text>
                    <Text className="text-white text-8xl p-6">24°</Text>

                    <View className="flex flex-row w-full justify-between ">
                        <View className="flex items-center w-[50%] border-y border-gray-300">
                            <View className="flex-1 flex-row items-center pr-4">
                                <Wind className="pr-4" size={28} color="#f0efef" weight="duotone" />
                                <View>
                                    <Text className="text-slate-300 pt-3 pb-1">WIND</Text>
                                    <Text className="text-white pb-3">19.2km/j</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex items-center w-[50%] border-y border-l border-gray-300">
                            <View className="flex-1 flex-row items-center pr-4">
                                <ThermometerSimple className="pr-4" size={28} color="#f0efef" weight="duotone" />
                                <View>
                                    <Text className="text-slate-300 pt-3 pb-1">FEELS LIKE</Text>
                                    <Text className="text-white pb-3">25°</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View className="flex flex-row w-full justify-between">
                        <View className="flex items-center w-[50%]">
                            <View className="flex-1 flex-row items-center pr-4">
                                <Sun className="pr-4" size={28} color="#f0efef" weight="light" />
                                <View>
                                    <Text className="text-slate-300 pt-3 pb-1">INDEX UV</Text>
                                    <Text className="text-white pb-4">2</Text>
                                </View>
                            </View>
                        </View>
                        <View className="flex items-center w-[50%] border-l border-gray-300">
                            <View className="flex-1 flex-row items-center pr-4">
                                <Activity className="pr-4" size={28} color="#f0efef" weight="light" />
                                <View>
                                    <Text className="text-slate-300 pt-3 pb-1">PRESSURE</Text>
                                    <Text className="text-white pb-4">1014 mbar</Text>
                                </View>
                            </View>
                        </View>

                    </View>
            </View>
            </View>

        </View>
    )
}