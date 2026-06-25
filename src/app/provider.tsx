'use client';
import db from '@/configs/db';
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({ children }: { children: React.ReactNode }) {
  const {user} = useUser();

  const isNewUser = async () => {
    const result = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress as string))

    if (result.length === 0) {
      await db.insert(Users).values({
        email: user?.primaryEmailAddress?.emailAddress as string,
        name: user?.fullName as string,
        imageUrl: user?.imageUrl as string,
      })
    }
  }

  useEffect(() => {
    user&&isNewUser()
  }, [user])

  return (
    <div>
        {children}
    </div>
  )
}

export default Provider