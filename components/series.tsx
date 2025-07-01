import { icons } from "@/constants/icons"
import { Link } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"

const Series = ({ name, startDate, endDate, odi, t20, test, squads, matches }) => {
    return (
        <Link href={`/`} asChild className=" border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <TouchableOpacity className="w-[30%]">
                <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
                    {name}
                </Text>
                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} className="size-4" />
                    <Text className="text-xs text-white font-bold uppercase">
                        {startDate}
                    </Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-xs text-light-300 font-medium mt-1">
                        {odi}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default Series