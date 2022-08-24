import * as React from 'react'
import LoadingScreen from './navigation/screens/LoadingScreen'
import LoginScreen from './navigation/screens/LoginScreen'
import RegisterScreen from './navigation/screens/RegisterScreen'
import MainScreen from './navigation/screens/MainScreen'
import MainStacks from "./navigation/stacks/MainStacks"
export const AppUserContext = React.createContext()
export const AppSetUserContext = React.createContext()
export const AppURLContext = React.createContext();
export const AppDataJSon = {
  users: {
    "HJojhhHFGUHFHUcGDCY": {},
    "JHOIUGOIUGFYUDFRXTRDXWRD": {},
    "UIU0IYOIHGOGOCDfdxyUGFCU": {}
  },
  posts: {
    "OIHUOIHJKJMLKGDU": {
      title: "",
      text: ""
    }
  },

}
const port = process.env.PORT || 5555
const backurl=`http://192.168.1.49:${port}/`
export default function App ()
{
  const [ loading, setLoading ] = React.useState( true );
  const [ isLoggedIn, setIsLoggedIn ] = React.useState( false );
  const [ jsx, setJsx ] = React.useState( <></> )
  const [ user, setUser ] = React.useState("" );

  React.useEffect( () =>
  {
    setTimeout( () => setLoading( false ), 2000 )
    if ( loading )
    {
      setJsx( <LoadingScreen /> )
    } else
    {
      if ( isLoggedIn )
      {
        setJsx( <AppUserContext.Provider value={ user }>
          <AppSetUserContext.Provider value={ setUser }>
            <AppURLContext.Provider value={backurl}>
              <MainScreen />
            </AppURLContext.Provider>
          </AppSetUserContext.Provider>
        </AppUserContext.Provider> )
      }
      else
      {
        setJsx( <AppUserContext.Provider value={ user }>
          <AppSetUserContext.Provider value={ setUser }>
            <AppURLContext.Provider value={ backurl}>
              <MainStacks />
            </AppURLContext.Provider>
          </AppSetUserContext.Provider>
        </AppUserContext.Provider> )
      }
    }

  }, [ setJsx, setLoading, isLoggedIn, loading ] )

  return jsx;
}
