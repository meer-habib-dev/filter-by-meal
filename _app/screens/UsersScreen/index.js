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
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/slices/inputSlice";

const UsersScreen = () => {
  const [users, setUsers] = useState(usersData);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.input);
  const { active, superActive, bored, dateRange, searchTerm } = status;

  const navigation = useNavigation();

  useEffect(() => {
    const d = [
      "2016-09-01",
      "2016-09-02",
      "2016-09-03",
      "2016-09-04",
      "2016-09-05",
      "2016-09-06",
      "2016-09-07",
      "2016-09-08",
    ];
    console.log(
      "date range",
      dateRange,
      searchTerm
    );
    const mealDays = usersData.map((user) => user.calendar.dateToDayId);
    const dateId =
      dateRange && mealDays.map((dt) => dateRange?.map((dd) => dt[dd]));
    // console.log("dateId", dateRange);
    const meals = usersData.map((user) => user.calendar.daysWithDetails);
    const meal =
      dateId && meals.map((meal) => dateId.map((i) => i?.map((a) => meal[a])));
    const output =
      dateRange &&
      meal.map((i) =>
        i.map((j) =>
          j.map(
            (k) =>
              Object.keys(
                typeof k !== "undefined" && k?.details?.mealsWithDetails
              ).length
          )
        )
      );
    const sum =
      output && output.map((a, index) => a[index]?.reduce((a, b) => a + b, 0));
    const sm = sum && sum.map((sm, i) => (usersData[i].mealTaken = sm));
    // console.log("meal num", usersData[0].mealTaken);
  }, [dateRange]);

  useEffect(() => {
    // const filtered = user.filter(us => )
    if (searchTerm !== "") {
      const filter = usersData.filter((user) =>
        Object.values(user.profile.name)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setUsers(filter);
    } else {
      setUsers(usersData);
    }
    // console.log("besi naki kom", filter);
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search and filter */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search By Name"
          style={styles.input}
          onChangeText={(e) => dispatch(setSearchTerm(e))}
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
