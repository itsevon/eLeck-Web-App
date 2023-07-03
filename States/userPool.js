import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolDate = {
    userPoolId: process.env.POOL_ID,
    ClientId: process.env.APP_CLIENT_ID
}

export default new CognitoUserPool(poolData);