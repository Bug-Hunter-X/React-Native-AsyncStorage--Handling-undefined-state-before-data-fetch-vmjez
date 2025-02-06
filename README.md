# React Native AsyncStorage: Handling undefined state before data fetch

This repository demonstrates a common error in React Native applications when dealing with asynchronous data fetching, specifically using AsyncStorage. The error, "Cannot read properties of undefined (reading 'name')", arises when a component attempts to access a state variable before it has been populated with data from an asynchronous operation.

## The Problem
The `bug.js` file showcases the problematic code.  The component fetches user data from AsyncStorage using `useEffect`. However, the component renders before the data is fetched, leading to an attempt to access `userData.name` while `userData` is still `null`. This results in the error.

## The Solution
The `bugSolution.js` file provides a corrected version. The solution involves checking if `userData` is null before attempting to access its properties.  A conditional rendering approach is used to prevent the error until the data is loaded.  Alternative solutions, such as using optional chaining, are equally valid.