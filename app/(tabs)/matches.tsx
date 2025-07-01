import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import upcoming from './../../localData/upcoming.json';

const Matches = () => {

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <ScrollView className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
                <Image source={icons.trophy} className="w-12 h-10 mt-20 mb-5 mx-auto" />
                <Text className="text-3xl text-white font-bold mt-5 mb-3">Matches</Text>
                <View className="flex flex-row items-center">
                    <Pressable
                        className="bg-blue-500 py-3 px-6 rounded-full items-center justify-center ml-3">
                        <Text className="text-white font-bold text-lg">Live</Text>
                        {/* onPress={} */}
                    </Pressable>
                    <Pressable
                        className="bg-blue-500 py-3 px-6 rounded-full items-center justify-center ml-3">
                        <Text className="text-white font-bold text-lg">Upcoming</Text>
                    </Pressable>
                    <Pressable
                        className="bg-blue-500 py-3 px-6 rounded-full items-center justify-center ml-3">
                        <Text className="text-white font-bold text-lg">Recent</Text>
                    </Pressable>
                </View>

                <View className="m-4" style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 10 }} />

                <View>
                    {upcoming.map((item) => (
                        <TouchableOpacity className="bg-orange-50 rounded-lg shadow-md m-4 p-4">
                            {item && (
                                <Image
                                    source={{ uri: item.Images }}
                                    className="w-full mb-3 h-40 object-cover blur-md"
                                    resizeMode="cover"
                                />
                            )}
                            <Text className="text-xl font-bold mb-2">{item.Name}</Text>
                            <Text className="text-gray-600">{item.Date}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default Matches