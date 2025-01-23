import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
        <div className='flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>high</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut expedita provident accusantium esse perferendis repellat voluptates, quod quas temporibus autem eos voluptatibus. Accusamus, nobis vel repudiandae quasi laudantium tenetur ducimus.
            </p>
        </div>
        <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>high</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut expedita provident accusantium esse perferendis repellat voluptates, quod quas temporibus autem eos voluptatibus. Accusamus, nobis vel repudiandae quasi laudantium tenetur ducimus.
            </p>
        </div>
        <div className='flex-shrink-0 p-5 h-full w-[300px] bg-orange-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>high</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut expedita provident accusantium esse perferendis repellat voluptates, quod quas temporibus autem eos voluptatibus. Accusamus, nobis vel repudiandae quasi laudantium tenetur ducimus.
            </p>
        </div>
        <div className='flex-shrink-0 p-5 h-full w-[300px] bg-amber-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>high</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut expedita provident accusantium esse perferendis repellat voluptates, quod quas temporibus autem eos voluptatibus. Accusamus, nobis vel repudiandae quasi laudantium tenetur ducimus.
            </p>
        </div>
        
        
    </div>
  )
}

export default TaskList