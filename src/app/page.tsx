import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='container max-w-screen-2xl mx-auto px-4'>
        <div className='mt-3'>
          <div className='flex justify-between items-center'>
            <div className='flex '>
               <img src="../Images/lorem.png" alt="" />
               <h4 className='text-white pl-2 text-base	font-medium'>Lorem</h4>
            </div>
              <img className='block md:hidden' src="../Images/menu.png" alt="" />
          </div>
        </div>
      </div>
      <div className='container max-w-5xl mt-14 md:mt-24 mx-auto px-4'>
        <div className='mt-4 mb-4'>
          <h1 className='text-4xl md:text-6xl text-white font-extrabold'>LOREM IPSUM</h1>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <h3 className='font-bold text-white'>DOLOR SIT</h3>
            <p className='text-white opacity-70 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img className='mt-6' src="../Images/users-plus.png" alt="" />
          </div>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <h3 className='font-bold text-white'>LOREM IPSUM DOLOR SIT</h3>
            <p className='text-white opacity-70 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <img className='mt-6' src="../Images/Icon.png" alt="" />
          </div>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <img className='mb-6' src="../Images/indit.png" alt="" />
            <h3 className='font-bold text-white'>LOREM IPSUM DOLOR SIT</h3>
            <p className='text-white opacity-70 font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <img className='mt-6' src="../Images/circle.png" alt="" />
          </div>
        </div>
        <div className='flex mt-8 flex-wrap'>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <h3 className='font-bold text-2xl text-white'>LOREM IPSUM</h3>
            <p className='text-white opacity-70 font-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <img className='mt-6' src="../Images/percent-03.png" alt="" />
          </div>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <h3 className='font-bold text-2xl text-white'>DOLOR SIT AMET</h3>
            <p className='text-white opacity-70 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum necessitatibus tenetur amet illum labore temporibus ut beatae rem maxime fugiat voluptatem voluptates, veniam sed doloribus perferendis quae pariatur alias.</p>
            <img className='mt-6' src="../Images/role.png" alt="" />
          </div>
        </div>
        <div className='flex flex-wrap mt-10 justify-end'>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <img src="../Images/Boy.png" alt="" />
          </div>
          <div className='w-full md:w-2/6  px-2 mb-10 md:mb-0'>
            <h3 className='font-bold text-2xl text-white'>LOREM IPSUM DOLOR</h3>
            <p className='text-white opacity-70 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsum necessitatibus tenetur amet illum labore temporibus ut beatae rem maxime fugiat voluptatem voluptates, veniam sed doloribus perferendis quae pariatur alias.</p>
            <img className='mt-6' src="../Images/cube-01.png" alt="" />
          </div>
        </div>

        <div className='flex mt-1 md:mt-24 h-0 md:h-cHeight'>
          <div className='w-1/2 px-3 relative hidden md:block'>
            <h1 className='text-8xl font-bold text-white'>ABOUT US</h1>
            <h4 className='pb-1 text-white opacity-70'>Lorem</h4>
            <h4 className='text-white opacity-70'>Lorem</h4>
            <div className='absolute w-full flex justify-center items-center top-[82px] left-[60px]'>
              <img src="../Images/Group.png" alt="" /></div>
          </div>
          <div className='w-1/2 px-3 hidden md:block'>
            <p className='pt-18 pl-8 text-white opacity-70' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className='block md:hidden'>
          <h1 className='text-4xl text-white font-bold mt-7'>LOREM IPSUM</h1>
          <h4 className='mt-1 mb-1 text-white opacity-70'>Instagram</h4>
          <h4 className='text-white opacity-70'>LinkedIn</h4>
          <p className='text-white opacity-70 mt-7 mb-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </div>
      <div className="bg-[url('/Images/goal.png')]">
        <div className='flex justify-between py-2 text-white whitespace-nowrap overflow-x-hidden'>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
          <h1>LOREM IPSUM</h1>
        </div>
      </div>

      <div className='container max-w-5xl mt-8 md:mt-24 mx-auto px-4'>
        <div className='mt-4 md:mt-10 mb-8'>
          <h1 className='text-3xl md:text-8xl text-white font-extrabold'>LOREM IPSUM DOLOR SET</h1>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <h3 className='font-bold mb-2 text-white'>LOREM IPSUM DOLOR</h3>
            <p className='text-white opacity-70 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className='mt-6' src="../Images/shield-tick.png" alt="" />
          </div>
          <div className='w-full md:w-2/6 px-2 mb-10 md:mb-0'>
            <h3 className='font-bold mb-2 text-white'> DOLOR SIT AMET</h3>
            <p className='text-white opacity-70 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className='mt-6' src="../Images/dataflow-03.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap mt-10 mb-5 justify-end">
          <div className="w-full md:w-2/6 px-2 mb-10 md:mb-0">
            <img src="../Images/deep.png" alt="" />
          </div>
          <div className="w-full md:w-2/6 px-2 mb-10 md:mb-0">
            <h3 className="font-bold text-2xl text-white">LOREM IPSUM</h3>
            <p className="text-white opacity-70 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="../Images/bar-chart.png" alt="" />
          </div>
        </div>


        <div className='mt-5 md:mt-24 mb-14'>
          <h1 className='text-3xl md:text-7xl font-extrabold text-left md:text-center mt-8 text-white'>LOREM IPSUM DOLOR</h1>
        </div>
      </div>

      <div className=" mb-5 bg-[url('/Images/goal.png')]">
        <div className='container max-w-5xl mt-4 mx-auto px-4'>
          <div className='flex justify-between items-center py-2'>
            <h3 className='text-white'>LOREM IPSUM DOLOR SIT AMET</h3>
            <img src="../Images/plus.png" alt="" />
          </div>
        </div>
      </div>

      <div className='container max-w-5xl mx-auto px-4'>
        <div className='mb-10'>
          <p className='text-white opacity-70 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='flex items-center justify-between mb-2'>
            <h2 className='text-white'>LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-white'>LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-white'>LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-white'>LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-white'>LOREM IPSUM DOLOR SIT AMET</h2>
            <img src="../Images/minus.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
