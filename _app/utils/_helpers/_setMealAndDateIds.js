import { usersData } from "../config/users";

export const _setMealAndDateId = (dateRange) => {
  const mealDays = usersData.map((user) => user.calendar.dateToDayId);
  const dateId =
    dateRange && mealDays.map((dt) => dateRange?.map((dd) => dt[dd]));

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
  sum && sum.map((sm, i) => (usersData[i].mealTaken = sm));
  return usersData;
};



// let updatedUserData = [];
  // useEffect(() => {
  // const mealDays = usersData.map((user) => user.calendar.dateToDayId);
  // const dateId =
  //   dateRange && mealDays.map((dt) => dateRange?.map((dd) => dt[dd]));

  // const meals = usersData.map((user) => user.calendar.daysWithDetails);
  // const meal =
  //   dateId && meals.map((meal) => dateId.map((i) => i?.map((a) => meal[a])));
  // const output =
  //   dateRange &&
  //   meal.map((i) =>
  //     i.map((j) =>
  //       j.map(
  //         (k) =>
  //           Object.keys(
  //             typeof k !== "undefined" && k?.details?.mealsWithDetails
  //           ).length
  //       )
  //     )
  //   );
  // const sum =
  //   output && output.map((a, index) => a[index]?.reduce((a, b) => a + b, 0));
  // sum && sum.map((sm, i) => (usersData[i].mealTaken = sm));