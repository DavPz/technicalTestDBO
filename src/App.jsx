
import { Provider } from 'react-redux'
import './App.css'
import { PublicRoutes } from './routes/PublicRoutes'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  )
}

export default App
