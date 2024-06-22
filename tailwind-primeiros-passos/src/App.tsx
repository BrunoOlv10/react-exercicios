function App() {

  return (
    <>
    <div className="flex flex-col items-center p-10 m-10">
      <div className="sm:bg-gray-400 hover:bg-gray-500 md:bg-indigo-500 text-red-500 text-9xl m-10 p-10 h-96 w-96">Teste</div>
      <h2 className="text-red-500 text-2xl font-bold">Traffic Signal</h2>
      <div className="m-5 p-5 bg-gray-800 flex flex-col gap-4">
        <div className="rounded-full h-10 w-10 bg-red-500"></div>
        <div className="rounded-full h-10 w-10 bg-yellow-500"></div>
        <div className="rounded-full h-10 w-10 bg-green-500"></div>
      </div>
      <div className="mb-5 p-5 grid grid-cols-2 gap-4">
        <div className="col-span-2 h-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="col-span-2 h-10 bg-red-500"></div>
      </div>
        <div className="bg-purple-500 h-quad w-quad hover:w-20 hover:h-20 transition-all"></div>
        <div className="bg-primary-200 h-quad w-quad m-5"></div>
    </div>
    </>
  )
}

export default App
