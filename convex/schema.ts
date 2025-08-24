import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    // Clerk user ID
    clerkId: v.string(),
    // User profile information
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    // Additional user data
    createdAt: v.number(),
    lastActiveAt: v.number(),
    // User preferences
    preferences: v.optional(
      v.object({
        theme: v.optional(v.string()),
        notifications: v.optional(v.boolean()),
      })
    ),
  })
    .index('by_clerk_id', ['clerkId'])
    .index('by_email', ['email']),

  messages: defineTable({
    content: v.string(),
    author: v.string(),
    userId: v.optional(v.id('users')),
    createdAt: v.number(),
  })
    .index('by_author', ['author'])
    .index('by_user', ['userId']),
});
