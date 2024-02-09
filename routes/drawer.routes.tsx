import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, FontAwesome5, Ionicons  } from '@expo/vector-icons';

import TabRoutes from './tab.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title: '' }}>
            <Drawer.Screen
                name="home"
                component={TabRoutes}
                options={{
                    drawerIcon:({ color, size}) => <FontAwesome5 nome="bars" color={"block"} size={size}/>,
                    drawerLabel: 'Inicio'
                }}
            />
        </Drawer.Navigator>
    )
}

