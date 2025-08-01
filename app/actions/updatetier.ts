'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

export async function updateUserTier(newTier: 'free' | 'silver' | 'gold' | 'platinum') {
  const { userId } = await auth()
  if (!userId) {
    throw new Error("User not authenticated")
  }
  
  const clerk = await clerkClient()
  await clerk.users.updateUser(userId, {
    publicMetadata: { tier: newTier },
  })
}
