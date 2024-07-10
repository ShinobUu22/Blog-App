import Link from 'next/link'
import React from 'react'
import { FaRegCopyright, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='min-h-[13vh] w-full flex justify-center items-center p-4 bottom-0'>
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <div className='flex items-center space-x-2'>
          <FaRegCopyright />
          <h3>2024</h3>
        </div>
        <div className='flex space-x-4'>
          <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer' aria-label="Twitter">
            <span className='hover:text-blue-500'>
              <FaTwitter size={20} />
            </span>
          </Link>
          <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer' aria-label="LinkedIn">
            <span className='hover:text-blue-700'>
              <FaLinkedin size={20} />
            </span>
          </Link>
          <Link href='mailto:example@gmail.com' target='_blank' rel='noopener noreferrer' aria-label="Email">
            <span className='hover:text-red-500'>
              <FaEnvelope size={20} />
            </span>
          </Link>
          <Link href='https://github.com' target='_blank' rel='noopener noreferrer' aria-label="GitHub">
            <span className='hover:text-gray-500'>
              <FaGithub size={20} />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
