
type UsersProps={
  user ? :any | []
}

export const Profile = ({user}:UsersProps) =>{
  return (
    <>
      <div className="w-[80%] mx-auto mt-3">
          <h1 className="text-center text-[30px]">Congratulation you are login Successfully</h1>
          <div className="mt-8 w-full items-center justify-center flex">
          <div className=" w-[200px] h-[200px] rounded-[50%] md:mr-20">
            <img src={user?.picture} className="w-full object-fill rounded-[50%]" alt="had" />
          </div>
          <h2 className="text-center text-[50px] text-red-500 font-serif">{user.name}</h2>
          </div>
      </div>
    </>
  )
}