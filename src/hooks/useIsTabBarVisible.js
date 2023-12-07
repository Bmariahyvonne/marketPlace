// useIsTabBarVisible.js
import { useIsFocused } from '@react-navigation/native';

const useIsTabBarVisible = (routeName) => {
  const isFocused = useIsFocused();

  // Specify the screens where you want to hide the tab bar
  const hideTabBarScreens = ['SplashScreen', 'LogInScreen'];

  return !hideTabBarScreens.includes(routeName) && isFocused;
};

export default useIsTabBarVisible;
