import { useDispatch } from "react-redux";
import {Footer, Header, Loader} from "./components/index"
import {useState,useEffect} from "react"
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

    useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
      .finally(()=>{setLoading(false)})
    },[])

  return loading ? null :  (<><Header/> <Footer/></>)
}

export default App
