import TopNavigation from "./TopNavigation"


function App() {
  return (
    <>
      <div className=' relative bg-cover bg-slate-900'>
        <TopNavigation />
        <section className="flex items-center h-screen px-20">
          <div className="flex flex-col justify-center items-start h-screen">
            <h3 className="text-white text-xl">
              Hello there, I'm Kent! 👋
            </h3>
            <h1 className='text-white text-4xl font-bold '>
              A Full Stack Developer
            </h1>
            <p className="text-slate-600 text-thin">
              Mobile and Web
            </p>
            <div>
              
            </div>
          </div>
        </section>
        <section className="h-36"></section>
      </div>
    </>
  )
}

export default App
