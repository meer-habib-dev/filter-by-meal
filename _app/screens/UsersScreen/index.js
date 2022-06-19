import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import UsersCard from "./sections/UsersCard";
import { usersData } from "../../utils/config/users";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { _setMealAndDateId } from "../../utils/_helpers/_setMealAndDateIds";

const UsersScreen = () => {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");

  const status = useSelector((state) => state.input);
  const { active, superActive, bored, dateRange } = status;

  const navigation = useNavigation();

  const updatedUserData = _setMealAndDateId(dateRange);

  console.log("users", updatedUserData[0]);

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredUser =
        typeof updatedUserData[0] !== "undefined" &&
        updatedUserData.filter((user) =>
          Object.values(user.profile.name)
            .join("")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
      setUsers(filteredUser);
    } else {
      setUsers(updatedUserData);
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search and filter */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search By Name"
          style={styles.input}
          onChangeText={(e) => setSearchTerm(e)}
        />
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Feather name="edit" size={24} color="black" />
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      {/* Users Card  */}
      <ScrollView style={{ marginTop: 10 }}>
        {users.map((user, index) => {
          return bored !== 0 && bored > user.mealTaken ? (
            <UsersCard key={index} user={user} />
          ) : active !== 0 && active > user.mealTaken && user.mealTaken >= 5 ? (
            <UsersCard key={index} user={user} />
          ) : superActive !== 0 && user.mealTaken >= superActive ? (
            <UsersCard key={index} user={user} />
          ) : null;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsersScreen;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    // marginRight: 5,
    padding: 10,
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginLeft: -0.5,
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
