"use client"; 
import Input from '../../../components/Input';
import React from 'react';
import { useRouter } from 'next/navigation'; 
import Button from '../../../components/Button';
const SignUp = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="bg-[#F0F0F0] p-5 shadow-md w-full max-w-xl">
        <h1 className="text-Text font-semibold text-4xl font-heading text-center py-5">SignUp</h1>
        <p className='text-center text-Text text-md mt-2 font-medium'>
          Already Have an account?{' '}
          <span onClick={() => router.push('/account/Login')} className=" font-semibold mx-1 cursor-pointer">
            Sign In
          </span>
        </p>
        <div className=' flex flex-col justify-start items-center gap-4 mt-5'>
          <Input placeholder={'Fisrt Name'} />
          <Input placeholder={'Last Name'} />
          <Input placeholder={'Email'} />
          <Input placeholder={'Password'} />
          <Input placeholder={'Confirm Password'} />
          <Button className={`! w-96 mt-4 mb-10 !bg-`}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
