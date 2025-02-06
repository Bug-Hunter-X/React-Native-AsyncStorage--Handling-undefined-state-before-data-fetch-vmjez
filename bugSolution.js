```javascript
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        setUserData(JSON.parse(user));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {userData ? (
        <Text>{userData.name}</Text>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

export default MyComponent;
```