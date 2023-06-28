import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <div className='min-h-screen flex'>
      <div className='bg-blue-50 w-1/2 '>
        First Half
        <h1 className='bg-red-500 rounded text-2xl'>WELCOME TO INDIA</h1>
      </div>
      <div className=' bg-orange-50 w-1/2 '>
        Second Half
      </div>
    </div>
    </>
  )
}

export default page