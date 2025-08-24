'use client';

import { Authenticated, Unauthenticated } from 'convex/react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Welcome from '@/components/Welcome';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Authenticated>
        <Header />
        <Dashboard />
      </Authenticated>
      <Unauthenticated>
        <Welcome />
      </Unauthenticated>
    </div>
  );
}
