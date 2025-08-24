'use client';

import { SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Database, Zap, Users } from 'lucide-react';

export default function Welcome() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Powered by Clerk for enterprise-grade security',
    },
    {
      icon: Database,
      title: 'Real-time Database',
      description: 'Convex provides instant data synchronization',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with Next.js for optimal performance',
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete user profiles and management',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>Welcome to Get Rich Demo</h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            A modern web application built with Next.js, Convex, and Clerk. Experience the power of real-time data and secure authentication.
          </p>
          <SignInButton mode='modal'>
            <Button size='lg' className='text-lg px-8 py-4'>
              Get Started - Sign In
            </Button>
          </SignInButton>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {features.map((feature, index) => (
            <Card key={index} className='text-center hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  <feature.icon className='h-6 w-6 text-blue-600' />
                </div>
                <CardTitle className='text-lg'>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <Card className='max-w-4xl mx-auto'>
          <CardHeader className='text-center'>
            <CardTitle className='text-2xl'>Tech Stack</CardTitle>
            <CardDescription>Built with modern technologies for the best developer experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div>
                <div className='bg-black text-white rounded-lg p-4 mb-4 inline-block'>
                  <span className='font-bold'>Next.js</span>
                </div>
                <p className='text-sm text-gray-600'>React framework for production-ready applications</p>
              </div>
              <div>
                <div className='bg-orange-500 text-white rounded-lg p-4 mb-4 inline-block'>
                  <span className='font-bold'>Convex</span>
                </div>
                <p className='text-sm text-gray-600'>Real-time backend with automatic data synchronization</p>
              </div>
              <div>
                <div className='bg-purple-600 text-white rounded-lg p-4 mb-4 inline-block'>
                  <span className='font-bold'>Clerk</span>
                </div>
                <p className='text-sm text-gray-600'>Complete authentication and user management</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
