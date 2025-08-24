'use client';

import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useEffect } from 'react';

/**
 * Component that syncs the Clerk user with our Convex users table
 * This should be rendered when the user is authenticated
 */
export default function UserSync() {
  const { user, isLoaded } = useUser();
  const createOrUpdateUser = useMutation(api.users.createOrUpdateUser);

  useEffect(() => {
    if (isLoaded && user) {
      // Sync user data with Convex
      createOrUpdateUser({
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        firstName: user.firstName || undefined,
        lastName: user.lastName || undefined,
        imageUrl: user.imageUrl || undefined,
      }).catch((error) => {
        console.error('Failed to sync user with Convex:', error);
      });
    }
  }, [isLoaded, user, createOrUpdateUser]);

  // This component doesn't render anything
  return null;
}
