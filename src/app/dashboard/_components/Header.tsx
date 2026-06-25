import Image from 'next/image'
import aiPNG from '@/assets/ai.png'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='py-3 px-5 flex justify-between items-center shadow-md'>
        <div className='flex gap-3 items-center'>
            <Image src={aiPNG} width={30} height={30} alt="AI Icon"/>
            <h2 className='font-bold text-xl'>AI Short Vid</h2>
        </div>
        <div className='flex items-center gap-3'>
            <Button>Dashboard</Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header