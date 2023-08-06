import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    clientId: process.env.COGNITO_CLIENT_ID,
    clientSecret: process.env.COGNITO_CLIENT_SECRET,
    issuer: process.env.COGNITO_ISSUER,
}

export default new CognitoUserPool(poolData);