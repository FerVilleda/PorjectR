import React from 'react'
import Login from './views/Login'
import View from './components/View'
//importar el contexto donde se detecta el usuario

function App() {
  //Este estado se reemplazara por el que venga del context.
  const [usuario, setUsuario] = React.useState(true)

  return usuario ? (
    <div>  
      <View></View>
    </div>
  ): (
    <div>
      <Login></Login>
    </div>
  )
}

export default App;
