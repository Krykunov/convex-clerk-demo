import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const getForCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error('Not authenticated');
    }

    // First, get the user from our users table
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', (q) => q.eq('clerkId', identity.subject))
      .first();

    if (!user) {
      return [];
    }

    return await ctx.db
      .query('messages')
      .withIndex('by_user', (q) => q.eq('userId', user._id))
      .collect();
  },
});

export const getAllMessages = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('messages').collect();
  },
});

export const createMessage = mutation({
  args: {
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error('Not authenticated');
    }

    // Get the user from our users table
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', (q) => q.eq('clerkId', identity.subject))
      .first();

    if (!user) {
      throw new Error('User not found. Please sign in again.');
    }

    const messageId = await ctx.db.insert('messages', {
      content: args.content,
      author: identity.email || '',
      userId: user._id,
      createdAt: Date.now(),
    });

    return messageId;
  },
});
