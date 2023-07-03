import React from 'react';
import AccountContext from '@/Context/AccountContext';

const AccountState = (props) => {
    //////////

    return (
        <AccountContext.Provider>
            {props.children}
        </AccountContext.Provider>
    )

}

export default AccountContext;