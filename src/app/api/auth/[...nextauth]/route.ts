/* eslint-disable unused-imports/no-unused-vars */
import { Account, NextAuthOptions, Profile, Session, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'default_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'default_client_secret',
    }),
  ],

  callbacks: {
    redirect() {
      return '/';
    },
    async jwt({
      token,
      account,
      user,
      profile,
    }: {
      token: JWT;
      account: Account | null;
      user: User | AdapterUser;
      profile?: Profile;
    }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && token.user) {
        session.user = token.user;
      }
      return session;
    },
  },

  pages: {},
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
