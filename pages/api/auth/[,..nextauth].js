import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
    providers: [
        CognitoProvider({
            userPoolId: process.env.POOL_ID,
            ClientId: process.env.APP_CLIENT_ID,
            domain: process.env.CONGNITO_DOMAIN
        })
    ]
});