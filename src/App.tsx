import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { MsalProvider } from "@azure/msal-react"
import ConfiguredRoutes from '@/routes'
import { store } from '@/app/store'
import { msalInstance } from "@/lib/msal/auth.ts"
import "@/i18n/i18n.ts";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MsalProvider instance={msalInstance}>
          <ConfiguredRoutes />
        </MsalProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
