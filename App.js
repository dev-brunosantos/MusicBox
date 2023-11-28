import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Drawer from './src/routes/Drawer'
import Login from './src/pages/Login/Login'
import NewUser from './src/pages/Login/NewUser'
import Todos from './src/pages/Alunos/Todos'
import Teclado from './src/pages/Turmas/Teclado'
import TeoriaMusical from './src/pages/Turmas/TeoriaMusical'
import Sax from './src/pages/Turmas/Sax'
import Violao from './src/pages/Turmas/Violao'
import Guitarra from './src/pages/Turmas/Guitarra'
import Perfil from './src/pages/Perfil'

const stack = createStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='inverted' translucent={true} />
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <stack.Screen
            name='Login'
            component={Login}
          />
          <stack.Screen
            name='Novo Usuário'
            component={NewUser}
          />
          <stack.Screen 
            name='Perfil'
            component={Perfil}
          />
          <stack.Screen
            name='Home'
            component={Drawer}
          />

          <stack.Screen
            name='Todos'
            component={Todos}
          />
          {/* IMPORTAÇÃO DAS PAGINAS DE TURMAS */}
          <stack.Screen
            name='Sax'
            component={Sax}
          />
          <stack.Screen
            name='Teclado'
            component={Teclado}
          />
          <stack.Screen
            name='Violão'
            component={Violao}
          />
          <stack.Screen
            name='Guitarra'
            component={Guitarra}
          />
        </stack.Navigator>
        {/* <Drawer /> */}
      </NavigationContainer>
    </>
  )
}