import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

import DatePicker from "react-native-styled-datepicker";
import { _dateRange } from "../../../utils/_helpers/_dates";
import { useDispatch, useSelector } from "react-redux";
import {
  setDateRanges,
  setEndDate,
  setStartDate,
} from "../../../redux/slices/inputSlice";

const InputCalendarField = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [endcalendar, setEndcalendar] = useState(false);
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.input);
  const { startDate, endDate } = status;
  useEffect(() => {
    const range =
      typeof startingDate !== "undefined" &&
      typeof endingDate !== "undefined" &&
      _dateRange(startingDate, endingDate);

    const orderedRange =
      range &&
      range?.map(
        (date, i) =>
          new Date(date).getFullYear() +
          "-" +
          new Date(date).getMonth() +
          "-" +
          new Date(date).getDate()
        //   new Date(date).toLocaleDateString();
      );
    console.log("order", orderedRange);
    dispatch(setDateRanges(orderedRange));
  }, [startingDate, endingDate]);
  return (
    <View>
      <View style={styles.startContainer}>
        <View style={styles.formDate}>
          <TextInput
            // onFocus={() => setOpenCalendar(true)}
            onPressIn={() => setOpenCalendar(!openCalendar)}
            onBlur={() => {
              setOpenCalendar(false);
            }}
            style={styles.input}
            placeholder="From"
            // editable
            defaultValue={startingDate}
          />
        </View>
        {openCalendar && (
          <View style={styles.calendar}>
            <DatePicker
              selectedDateStyles={{
                backgroundColor: "orange",
                borderColor: "orange",
              }}
              calendarHeaderWrapperStyles={{ backgroundColor: "orange" }}
              selectedMonthWrapperStyles={{ backgroundColor: "orange" }}
              validWeekendDateStyles={{ backgroundColor: "#f9f5f7" }}
              initialSelectedDate={startDate}
              onChange={(e) => {
                dispatch(setStartDate(e));
                setStartingDate(e);
                setOpenCalendar(false);
                console.log("getting current date", e);
              }}
            />
          </View>
        )}
      </View>
      <View style={styles.endContainer}>
        {!openCalendar && (
          <View style={[styles.formDate]}>
            <TextInput
              //   onFocus={() => setEndcalendar(true)}
              onPressIn={() => setEndcalendar(!endcalendar)}
              onBlur={() => {
                setEndcalendar(false);
              }}
              style={[styles.input, { zIndex: -999 }]}
              placeholder="To"
              //   editable
              defaultValue={endingDate}
            />
          </View>
        )}

        {endcalendar && (
          <View style={styles.calendar}>
            <DatePicker
              selectedDateStyles={{
                backgroundColor: "orange",
                borderColor: "orange",
              }}
              calendarHeaderWrapperStyles={{ backgroundColor: "orange" }}
              selectedMonthWrapperStyles={{ backgroundColor: "orange" }}
              validWeekendDateStyles={{ backgroundColor: "#f9f5f7" }}
              initialSelectedDate={endDate}
              onChange={(e) => {
                dispatch(setEndDate(e));
                setEndingDate(e);
                setEndcalendar(false);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default InputCalendarField;

const styles = StyleSheet.create({
  startContainer: {
    position: "relative",
  },
  endContainer: {
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10,
    zIndex: -999,
  },
  calendar: {
    backgroundColor: "#EFEDEF",
    borderRadius: 10,
    position: "absolute",
    right: 0,
    left: 0,
    top: 60,
    width: "100%",
    zIndex: 9999,
  },
  formDate: {
    marginVertical: 10,
    zIndex: -1,
  },
});
