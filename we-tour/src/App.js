import './index.css';

function App() {
  return (
    <>
      <div className='flex h-full flex-row w-full '>
        <div className=' flex flex-col basis-1/2 border-2 bg-black'>
          <div className='border-red-400  bg-red-500 basis-1/2 '>fff</div>
          <div className='border-red-400  bg-blue-600 basis-1/4'>fff</div>
          <div className='border-red-400 bg-slate-400 basis-1/4'>fff</div>
        </div>

        <div className=' flex flex-col basis-1/4 border-2 bg-black'>
          <div className='border-red-400  bg-red-500 basis-1/2 '>fff</div>
          <div className='border-red-400  bg-blue-600 basis-1/4'>fff</div>
          <div className='border-red-400 bg-slate-400 basis-1/4'>fff</div>
        </div>

        <div className=' flex flex-col basis-1/4  border-2 bg-black'>
          <div className='border-red-400  bg-red-500 basis-1/2 '>fff</div>
          <div className='border-red-400  bg-blue-600 basis-1/4'>fff</div>
          <div className='border-red-400 bg-slate-400 basis-1/4'>fff</div>
        </div>
      </div>
    </>
  );
}

export default App;
