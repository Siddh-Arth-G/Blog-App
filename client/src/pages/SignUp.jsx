import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
        <div className='flex flex-col max-w-3xl gap-6 p-3 mx-auto md:items-center md:flex-row'>
            {/* left */}
            <div className='flex-1'>
                <Link to="/" className='text-4xl font-bold dark:text-white'>
                    <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Sidd's</span>Blog
                </Link>
                <p className='mt-10 text-sm'>
                    Join our community of writers and readers – Sign up today to share your thoughts and discover new ideas!
                    <br/>
                    You can sign up with your username and email or with Google.
                </p>
            </div>
            {/* right */}
            <div className='flex-1'>
                <form className='flex flex-col gap-4'>
                    <div>
                        <Label value='Your username' />
                        <TextInput 
                            type='text'
                            placeholder='Username'
                            id='username'
                        /> 
                    </div>
                    <div>
                        <Label value='Your email' />
                        <TextInput 
                            type='text'
                            placeholder='name@company.com'
                            id='email'
                        /> 
                    </div>
                    <div>
                        <Label value='Your password' />
                        <TextInput 
                            type='text'
                            placeholder='Password'
                            id='password'
                        /> 
                    </div>
                    <Button gradientDuoTone='purpleToPink' type='submit'>
                        Sign Up
                    </Button>
                </form>
                <div className='flex gap-2 mt-5 text-sm'>
                    <span>Have an account?</span>
                    <Link to='/signin' className='text-blue-500'>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
