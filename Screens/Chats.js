import { StyleSheet, Platform } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import ListHeader from "../components/ListHeader";
import { FlashList } from "@shopify/flash-list";
import ChatRoomCard from "../components/ChatRoomCard";
import { View } from "../components/theme/Themed";
import { Text } from "react-native";
import MyText from "../components/MyText";

const Chats = () => {
  const { chatRooms } = useSelector((state) => state.chatRooms);
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
       <ListHeader
              title="Chats"
              iconName="add-circle-sharp"
              handleNavigation={() => {
                navigation.navigate("NewChat");
              }}
            />
      {
        chatRooms.length > 0 ? (
          <FlashList
          data={chatRooms}
          renderItem={({ item }) => <ChatRoomCard {...item} /> }
          contentContainerStyle={Platform.OS === "ios" && { paddingVertical: 30 }}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
        /> 
        ) : (
          <View style={styles.noChats}>
            <MyText style={styles.noChatsText}>No chats yet</MyText>
          </View>
        )
      }
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noChats: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noChatsText: {
    fontSize: 15,
        textAlign:"center",
        // backgroundColor: "#f0f0f0",
        fontFamily:"sans-serif-condensed"
  }
  
});
