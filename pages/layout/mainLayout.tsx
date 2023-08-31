import { Navbar } from "../../components/Navbar"
import { useUser } from "@auth0/nextjs-auth0/client"
import { Profile } from "../../components/Profile"
import { HomePage } from "../../components/HomePage"



export const MainLayout = ({children}:any) =>{
  const {user, error, isLoading } = useUser()
  // if(error) return <h1>Error Page</h1>
  return(
    <>
      <Navbar/>
      {children}
      {user?<Profile user={user} />:<HomePage/>}
    </>
  )
}

export default MainLayout