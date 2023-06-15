import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.restaurant.tab) {
    iconName = "explore";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "favorite";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star";
  }

  if (route.name === screen.search.tab) {
    iconName = "search";
  }

  if (route.name === screen.account.tab) {
    iconName = "person";
  }

  return (
    <Icon type="material-comunity" name={iconName} color={color} size={size} />
  );
}
