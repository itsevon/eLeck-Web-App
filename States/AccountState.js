import React from 'react';
import AccountContext from '@/Context/AccountContext';

const AccountState = (props) => {
    //////////user registrastion

    const signup = async (email, password) => {
        return await new Promise((resolve, reject) => {
            var attributeList = [];

            var dataEmail = {
                Name: "email",
                value: email
            };

            var atttributeEmail = new AmazonCongnitoIdentity.CongnitoUserAttribute(dataEmail);

            attributeList.push(atttributeEmail);

            userPool.signup(email, password, attributeList, null, function (err, user) {
                if (err) {
                    console.log("Failed to register", err.message);
                    reject();
                } else {
                    console.log("Account created successfully", data);
                    resolve();
                }

            })
         })
    };


    return (
        <AccountContext.Provider value={{signup}}>
            {props.children}
        </AccountContext.Provider>
    )

}

export default AccountState;