import React, {useEffect, useState} from 'react';
import Modal from './Modal';
import Pagination from './Pagination';

const Billings = () => {
    const [billings, setBillings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResult, setSearchResult] = useState('');
    const billingsPerPage = 10;

    useEffect(() => {
        if(searchResult !== '') {
            fetch(`http://localhost:5000/api/search/${searchResult}`)
                .then(response => response.json())
                .then(json => setBillings(json))
                .catch(error => console.log(error));
        }
        if(searchResult === '') {
            fetch('http://localhost:5000/api/billing-list')
                .then(response => response.json())
                .then(json => setBillings(json))
                .catch(error => console.log(error));
        }
    }, [searchResult, billings]);

    function searchFunction(event) {
        const searchValue = event.target.value;
        setSearchResult(searchValue);
    }

    const lastPostIndex = currentPage * billingsPerPage;
    const firstPostIndex = lastPostIndex - billingsPerPage;
    const currentPosts = billings.slice(firstPostIndex, lastPostIndex);

    console.log(currentPosts);

    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-3 w-full lg:w-4/5 mx-auto justify-between items-stretch lg:items-center p-2 m-2 bg-slate-400 rounded-md'>
                <div className='flex gap-3 items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Billings</h2>
                    <input onKeyUp={searchFunction} type="search" placeholder="Search" className="input input-bordered input-sm" />
                </div>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='text-lg font-semibold'>Paid Total: 0</p>
                    <label htmlFor="new-bill" className='btn btn-primary btn-sm'>Add New Bill</label>
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
                            currentPosts.map(billing =>
                                <tr className='hover cursor-pointer' key={billing.billing_id}>
                                    <th>{billing.billing_id}</th>
                                    <td>{billing.full_name}</td>
                                    <td>{billing.email}</td>
                                    <td>{billing.phone}</td>
                                    <td>{billing.paid_amount}</td>
                                    <td>
                                        <label htmlFor="new-bill" className='text-blue-800 underline'>Update</label> | Delete
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center gap-5 items-center mt-5 px-3'>
                <button onClick={() => setCurrentPage(currentPage > 2 ? currentPage - 1 : 1)} className="btn btn-primary btn-outline btn-sm">Previous</button>
                <Pagination
                    totalBillings={billings.length}
                    billingsPerPage={billingsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <button onClick={() => setCurrentPage(currentPage < billings.length / 10 ? currentPage + 1 : currentPage)} className="btn btn-primary btn-outline btn-sm">Next</button>
            </div>

            <Modal></Modal>


        </div>
    );
};

export default Billings;