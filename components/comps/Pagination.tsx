import React from 'react'
import { Button } from '../ui/button'

const Pagination = () => {
  return (
    <div className='flex justify-between mt-9'>
      <Button className='w-24 bg-inherit border'>Prev</Button>
      <Button className='w-24 bg-inherit border'>Next</Button>
    </div>
  )
}

export default Pagination
