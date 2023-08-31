import { useRouter } from "next/router"

export const Navbar = () =>{
  const router = useRouter()

  return(
    <>
      <header className="w-full sticky top-0 left-0 bg-white border-b-[1.5px] z-10">
        <div className="w-[80%] mx-auto flex justify-between">
          <div>
            <img src="https://img.freepik.com/free-vector/gradient-code-development-logo_23-2148809625.jpg?t=st=1693379311~exp=1693379911~hmac=08618bcca4f8ede1ecb13566453b410365bcb1e10fec96f13dcad3f0a6921e21" width={80} alt="" />
          </div>
          <div className="items-center justify-center flex">
            <span className="flex">
                <button className="mr-2 border-[1px] border-red-400 px-3 py-1 bg-slate-100 rounded-lg hover:bg-red-400 hover:text-white" onClick={()=> router.push(`/api/auth/login`)}>Login</button>
                <button className="ml-2 border-[1px] border-red-400 px-3 py-1 bg-white rounded-lg hover:border-blue-300" onClick={()=> router.push(`/api/auth/logout`)}>Logout</button>
            </span>
          </div>
        </div>
      </header>
    </>
  )
}