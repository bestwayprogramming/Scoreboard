import UpcomingMatches from "@/components/matches/upcoming";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchCricketData } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {

  const { data: circket,
    loading: cricketLoading,
    error: cricketError
  } = useFetch(() => fetchCricketData());

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        <Image source={icons.trophy} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <>
            <Text className="text-lg text-white font-bold mt-5 mb-3">Upcoming Matches</Text>
            <UpcomingMatches />
          </>
        </View>

        {/* {cricketLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : cricketError ? (
          <Text>
            Error: {cricketError.message}
          </Text>
        ) : (
          <View className="flex-1 mt-5">
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">Upcoming Matches</Text>

              <FlatList
                data={circket}
                renderItem={({ item }) => (
                  // <Text className="text-white text-sm">{item.name}</Text>
                  <UpcomingMatches {...item}/>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingBottom: 10,
                  paddingRight: 5
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )} */}
      </ScrollView>
    </View>
  );
}
