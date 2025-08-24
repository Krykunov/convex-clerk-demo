'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Users, Activity } from 'lucide-react';

export default function Dashboard() {
  const messages = useQuery(api.messages.getForCurrentUser);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1% from last month',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+180.1% from last month',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Growth Rate',
      value: '12.5%',
      change: '+19% from last month',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
    {
      title: 'Messages',
      value: messages?.length?.toString() || '0',
      change: 'Real-time from Convex',
      icon: Activity,
      color: 'text-orange-600',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Dashboard</h1>
        <p className='text-gray-600'>Welcome to your Get Rich demo dashboard!</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-gray-600'>{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{stat.value}</div>
              <p className='text-xs text-gray-500 mt-1'>{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Recent Activity */}
        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='flex items-center space-x-4 p-4 border rounded-lg'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                  <div className='flex-1'>
                    <p className='font-medium'>Activity item #{item}</p>
                    <p className='text-sm text-gray-500'>Some description about this activity</p>
                  </div>
                  <Badge variant='secondary'>New</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button className='w-full' variant='default'>
              Add New Item
            </Button>
            <Button className='w-full' variant='outline'>
              Generate Report
            </Button>
            <Button className='w-full' variant='outline'>
              Export Data
            </Button>
            <Button className='w-full' variant='outline'>
              Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Convex Integration Demo */}
      <Card className='mt-6'>
        <CardHeader>
          <CardTitle className='flex items-center space-x-2'>
            <span>Convex Integration</span>
            <Badge variant='outline'>Live Data</Badge>
          </CardTitle>
          <CardDescription>Real-time data from your Convex backend</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
            <div>
              <p className='font-medium'>Messages in Database</p>
              <p className='text-sm text-gray-500'>Connected to your Convex deployment</p>
            </div>
            <div className='text-right'>
              <p className='text-2xl font-bold text-blue-600'>{messages?.length || 0}</p>
              <p className='text-xs text-gray-500'>Total messages</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
