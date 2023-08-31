

export const HomePage = () =>{
  return (
    <>
      <div className="mt-3 w-[80%] mx-auto">
        <h1 className="mt-3 text-center text-red-600 font-medium text-[30px]">Not yet login
        <br/>
        Please login with Google!
        </h1>
          <div className="item-center justify-center flex">
          <span className="border-b-[1px] border-black mt-6 text-center text-[20px] text-blue-300"> Random Picture </span>
          </div>
          <div className="items-center justify-center flex mt-4">
            <img src="https://picsum.photos/200/300" width={200} alt="heloo.." />
          </div>
      </div>
    </>
  )
}