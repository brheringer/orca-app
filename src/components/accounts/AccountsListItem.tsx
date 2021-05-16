import React, { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountContext';
import { AccountContextType } from '../../contexts/AccountContextType';
import { Account } from '../../models/Account';

interface AccounstListItemProps {
    account: Account;
}

const AccounstListItem = (props: AccounstListItemProps) => {
    const { removeAccount } = useContext<AccountContextType>(AccountContext);

    const onRemove = (account: Account) => {
        removeAccount(account);
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">{props.account.id}</td>
            <td className="uk-width-auto">{props.account.structure}</td>
            <td className="uk-width-expand">{props.account.name}</td>
            <td className="uk-width-expand">{props.account.kind}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    onClick={() => onRemove(props.account)}></button>
            </td>
        </tr>    
    );
}

export default AccounstListItem;