import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import ConfiguredRoutes from '@/routes'
import { store } from '@/app/store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfiguredRoutes />
      </Provider>
    </BrowserRouter>
  )
}

export default App
