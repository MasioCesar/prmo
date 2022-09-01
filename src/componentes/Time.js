import { Image, Text, View } from "react-native-web";
import { CaretRight } from "phosphor-react-native";

export function Time() {
    return(
        <View>
            <View className="flex flex-row justify-between items-center px-[7.5%] pt-10 pb-4">
                <Text className="font-semibold text-lg">Today</Text>
                <View className="flex flex-row items-center">
                    <Text className="text-lg pr-4 text-gray-500">Next 7 Days</Text>
                    <CaretRight size={20} color="#696969" />
                </View>
            </View>

            <View className="flex flex-row items-center justify-center gap-4">
                <View className="bg-blue-500 rounded-md p-1 flex items-center">
                    <Text className="text-white py-1">12:00</Text>
                    <Image style= {{height:45, width:45}}
                        source={require('../../assets/nuvem.png')} />
                    <Text className="text-white py-1 text-lg font-semibold">Now</Text>
                </View>
                
                <View className="bg-white rounded-md p-1 flex items-center border border-gray-300">
                    <Text className="text-black py-1">14:00</Text>
                    <Image style= {{height:45, width:45}}
                        source={require('../../assets/chovendo.png')} />
                    <Text className="text-black py-1 text-lg font-semibold">22°</Text>
                </View>

                <View className="bg-white rounded-md p-1 flex items-center border border-gray-300">
                    <Text className="text-black py-1">16:00</Text>
                    <Image style= {{height:45, width:45}}
                        source={require('../../assets/nubladoAzul.png')} />
                    <Text className="text-black py-1 text-lg font-semibold">26°</Text>
                </View>

                <View className="bg-white rounded-md p-1 flex items-center border border-gray-300">
                    <Text className="text-black py-1">18:00</Text>
                    <Image style= {{height:45, width:45}}
                        source={require('../../assets/nubladoAzul.png')} />
                    <Text className="text-black py-1 text-lg font-semibold">25°</Text>
                </View>

                <View className="bg-white rounded-md p-1 flex items-center border border-gray-300">
                    <Text className="text-black py-1">20:00</Text>
                    <Image style= {{height:45, width:45}}
                        source={require('../../assets/sol.png')} />
                    <Text className="text-black py-1 text-lg font-semibold">31°</Text>
                </View>
            </View>
        </View>
    )
}