import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, FontAwesome5, Ionicons  } from '@expo/vector-icons';

import Feed from '../screens/Feed';
import New from '../screens/New';
import Profile from '../screens/Profile'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title: '', headerStyle: {backgroundColor: "transparent"}}}>
            <Drawer.Screen
                name="home"
                component={Feed}
                options={{
                    drawerIcon:({ color, size}) => <FontAwesome5 nome="bars" color={color} size={size}/>,
                    drawerLabel: 'Inicio'
                }}
            />
            <Drawer.Screen
                name="profile"
                component={New}
                options={{
                    drawerIcon:({ color, size}) => <FontAwesome5 nome="use" color={color} size={size}/>,
                    drawerLabel: 'Gráficos'
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon:({ color, size}) => <FontAwesome5 nome="use" color={color} size={size}/>,
                    drawerLabel: 'Qualidade'
                }}
            />
        </Drawer.Navigator>
    )
}

