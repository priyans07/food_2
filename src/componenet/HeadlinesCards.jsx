import React from 'react'

const HeadlinesCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/* Cards */}
      <div className='rounded-xl relative'>
        {/* Overlays */}
<div className='w-full h-full bg-black/50 absolute rounded-xl text-white' >
    <p className='font bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
    <p className='px-2'>Through 8/26</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
</div>
      
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/15082377/pexels-photo-15082377/free-photo-of-burger-and-fries-on-restaurant-table.jpeg" alt="" />
    </div>
      <div className='rounded-xl relative'>
        {/* Overlays */}
<div className='w-full h-full bg-black/50 absolute rounded-xl text-white' >
    <p className='font bold text-2xl px-2 pt-4'>New Restraunts</p>
    <p className='px-2'>Added Daily</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
</div>
      
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/7497227/pexels-photo-7497227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
      <div className='rounded-xl relative'>
        {/* Overlays */}
<div className='w-full h-full bg-black/50 absolute rounded-xl text-white' >
    <p className='font bold text-2xl px-2 pt-4'>We Delivers Deserts Too</p>
    <p className='px-2'>At Home</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
</div>
      
      <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/15010292/pexels-photo-15010292/free-photo-of-close-up-photo-of-burget.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    </div>
  )
}

export default HeadlinesCards
