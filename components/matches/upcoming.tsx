import { Image, Text, TouchableOpacity, View } from "react-native";
import upcoming from './../../localData/upcoming.json';

const UpcomingMatches = () => {
    console.log(upcoming);
    
    return (
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
    )
}

export default UpcomingMatches