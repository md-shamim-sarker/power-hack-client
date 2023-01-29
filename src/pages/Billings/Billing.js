import React from 'react';

const Billing = ({billing, setBilling, handleDelete}) => {
    return (
        <>
            <tr className='hover cursor-pointer' key={billing.billing_id}>
                <th>{billing.billing_id}</th>
                <td>{billing.full_name}</td>
                <td>{billing.email}</td>
                <td>{billing.phone}</td>
                <td>{billing.paid_amount}</td>
                <td>
                    <label onClick={() => setBilling(billing)} htmlFor="new-bill2" className='text-blue-800 underline'>Update</label> | <span onClick={() => handleDelete(billing)} className='text-blue-800 underline'>Delete</span>
                </td>
            </tr>
        </>
    );
};

export default Billing;