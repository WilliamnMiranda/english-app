import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as C from './style'
const routes = [
  {
    name: 'Home',
    icon: <FontAwesome name="home" size={25} />
  },
  {
    name: 'CreateClass',
    icon: <FontAwesome name="plus" size={17} />
  },
  {
    name: 'Profile',
    icon: <FontAwesome name="user" size={25} />
  }
]

function MyTabBar({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) {
  return (
    <C.ContainerTabBar>
      <C.TabBar>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const currentRoute = descriptors[route.key].route.name
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (currentRoute === 'CreateClass')
            return (
              <C.ButtonCreate
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                activeOpacity={1}
              >
                <Text>{routes[1].icon}</Text>
              </C.ButtonCreate>
            )

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{ textAlign: 'center', color: isFocused ? '#673ab7' : '#222' }}>
                {routes.map((item) => {
                  if (item.name === currentRoute)
                    return item.icon
                })}
              </Text>
            </TouchableOpacity>
          )
        })}

      </C.TabBar>
    </C.ContainerTabBar>
  );
}

export default MyTabBar