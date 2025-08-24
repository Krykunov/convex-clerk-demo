'use client';

import { UserButton, SignInButton } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='border-b bg-white shadow-sm'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-2xl font-bold text-gray-900'>Get Rich Demo</h1>
          <span className='text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded'>Convex + Clerk</span>
        </div>

        <div className='flex items-center space-x-4'>
          <Authenticated>
            <UserButton afterSignOutUrl='/' />
          </Authenticated>
          <Unauthenticated>
            <SignInButton mode='modal'>
              <Button>Sign In</Button>
            </SignInButton>
          </Unauthenticated>
        </div>
      </div>
    </header>
  );
}
