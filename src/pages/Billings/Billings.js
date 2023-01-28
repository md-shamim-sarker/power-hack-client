import React, {useEffect, useState} from 'react';

const Billings = () => {
    const [billings, setBillings] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setBillings(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-3 w-full lg:w-4/5 mx-auto justify-between items-stretch lg:items-center p-2 m-2 bg-slate-400 rounded-md'>
                <div className='flex gap-3 items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Billings</h2>
                    <input type="text" placeholder="Search" className="input input-bordered input-sm" />
                </div>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='text-lg font-semibold'>Paid Total: 0</p>
                    <button className='btn btn-primary btn-sm'>Add New Bill</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            billings.map(billing =>
                                <tr className='hover cursor-pointer' key={billing.billing_id}>
                                    <th>{billing.billing_id}</th>
                                    <td>{billing.full_name}</td>
                                    <td>{billing.email}</td>
                                    <td>{billing.phone}</td>
                                    <td>{billing.paid_amount}</td>
                                    <td>Update | Delete</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Billings;