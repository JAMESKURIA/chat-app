import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { chats } from "./data";

export default function App() {
  return (
    <SafeAreaProvider style={tw`flex-1 pt-10 bg-gray-50`}>
      <KeyboardAvoidingView style={tw`flex-1 px-4`}>
        {/* nav */}
        <View style={tw`flex-row justify-between items-center`}>
          <Icon name="chevron-thin-left" type="Entypo" size={25} />
          <Icon name="menufold" type="AntDesign" size={30} />
        </View>

        {/* text - messages */}
        <Text style={tw`text-3xl text-gray-500 font-semibold mb-4 mt-8`}>
          Messages
        </Text>

        {/* tabs */}
        <View style={tw`flex-row items-center my-5 rounded-lg bg-gray-200 p-2`}>
          <View
            style={tw`flex-1 items-center  rounded-lg bg-white p-2 px-4 mr-1 `}
          >
            <Text style={tw`text-lg text-gray-700 font-semibold`}>
              New Chats (6)
            </Text>
          </View>

          <View style={tw`flex-1 items-center rounded-lg p-2 px-4 ml-1`}>
            <Text style={tw`text-lg text-gray-700 font-semibold`}>
              Request (7)
            </Text>
          </View>
        </View>

        {/* chats */}
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={chats}
          renderItem={({ item, index }) => (
            <>
              {/* message */}
              <TouchableOpacity
                style={tw`flex-row  py-5 ${
                  index !== chats.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <Image
                  source={item.user.profile}
                  style={tw`rounded-full h-20 w-20 mr-4`}
                  resizeMode="contain"
                />
                <View style={tw`flex-1 justify-center`}>
                  <View style={tw`flex-row items-center justify-between pb-1`}>
                    <Text style={tw`text-lg text-gray-800 font-semibold`}>
                      {item.user.name}
                    </Text>
                    <Text style={tw`text-xs`}>
                      {item.user.messages[0].time}
                    </Text>
                  </View>
                  <Text style={tw`text-sm text-gray-600`}>
                    {item.user.messages[0].text}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
