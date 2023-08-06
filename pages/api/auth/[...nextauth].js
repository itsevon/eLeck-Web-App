import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";
import { signIn, signOut } from "next-auth/react";

export default NextAuth({
    providers: [
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
        })
    ],

//     pages: {
//     signIn: 'auth/signin',
//     signOut: 'auth/signout'
// }
});

