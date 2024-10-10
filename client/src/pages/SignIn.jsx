import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

export default function SignIn() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value.trim()});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!formData.email || !formData.password){
            return setErrorMessage('Please Fill out all fields');
        }
        try{
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if(res.ok){
                navigate('/')
            }
        }catch(error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    }

  return (
    <div className='min-h-screen mt-20'>
        <div className='flex flex-col max-w-3xl gap-6 p-3 mx-auto md:items-center md:flex-row'>
            {/* left */}
            <div className='flex-1'>
                <Link to="/" className='text-4xl font-bold dark:text-white'>
                    <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Sidd's</span>Blog
                </Link>
                <p className='mt-10 text-sm'>
                    Join our community of writers and readers – Sign in today to share your thoughts and discover new ideas!
                    <br/>
                    You can sign in with your username and email or with Google.
                </p>
            </div>
            {/* right */}
            <div className='flex-1'>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div>
                        <Label value='Your email' />
                        <TextInput 
                            type='email'
                            placeholder='name@company.com'
                            id='email'
                            onChange={handleChange}
                        /> 
                    </div>
                    <div>
                        <Label value='Your password' />
                        <TextInput 
                            type='password'
                            placeholder='***********'
                            id='password'
                            onChange={handleChange}
                        /> 
                    </div>
                    <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                        {
                            loading ? (
                                <>
                                    <Spinner size='sm' />
                                    <span className='pl-3'>Loading...</span>
                                </>
                            ) : 'Sign In'
                        }
                    </Button>
                </form>
                <div className='flex gap-2 mt-5 text-sm'>
                    <span>Haven't an account?</span>
                    <Link to='/signup' className='text-blue-500'>
                        Sign Up
                    </Link>
                </div>
                {
                    errorMessage && (
                        <Alert className='mt-5' color='failure'>
                            {errorMessage}
                        </Alert>
                    )
                }
            </div>
        </div>
    </div>
  )
}
