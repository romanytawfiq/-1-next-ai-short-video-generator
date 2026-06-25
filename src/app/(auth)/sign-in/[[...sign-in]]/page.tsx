import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';
import robotJPG from '@/assets/robot.jpg'

export default function SignInPage() {
  return <div className='h-screen grid grid-cols-1 md:grid-cols-2'>
    <figure className='h-screen overflow-hidden'>
        <Image src={robotJPG} alt="Robot CloseUp Shot" className='w-full object-center object-cover' />
    </figure>
    <div className='flex items-center justify-center'><SignIn /></div>
  </div>
}