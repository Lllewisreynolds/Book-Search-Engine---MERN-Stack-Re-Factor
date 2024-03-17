// Imports: 
// Built-in error class
const { AuthenticationError } = require('apollo-server-express');
// Database model
const { User } = require('../models');
// Helper function for generating JWTs
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Retrieve current signed-in user's data (excl. sensitive field like password)
        me: async (parent, args, context) => {
            if (context.user) {
              data = await User.findOne({ _id: context.user._id }).select('-__v -password');
              return data;
            }
            throw new AuthenticationError('You must be logged in first!');
        },
    },

    Mutation: {
        // Data manipulation logic:
        // Add user, generate token and then return both
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        },
        // Find user by email, verify password, generate token and return both
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('User cannot be found at this time. Do you need to create an account?');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Credentials do not match');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
        // Add book to logged-in user's book catalogue
        saveBook: async (parent, { newBook }, context) => {
          if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedBooks: newBook }},
              { new: true }
            );
            return updatedUser;
          }
          throw new AuthenticationError('You must be logged in first!');
        },
        // Remove book from logged-in user's book catalogue
        removeBook: async (parent, { bookId }, context) => {
          if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $pull: { savedBooks: { bookId }}},
              { new: true }
            );
            return updatedUser;
          }
          throw new AuthenticationError('You must be logged in first!');
        },
    }
};

module.exports = resolvers;