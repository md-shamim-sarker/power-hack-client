import React, {useEffect, useState} from 'react';
import {toast} from 'react-hot-toast';
import Swal from 'sweetalert2';
import Billing from './Billing';
import Modal from './Modal';
import Pagination from './Pagination';

const Billings = () => {
    const [billings, setBillings] = useState([]);
    const [totalBillings, setTotalBillings] = useState([]);
    const [billing2, setBilling] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResult, setSearchResult] = useState('');
    const billingsPerPage = 10;
    const [render, setRender] = useState(false);
    const [modal, setModal] = useState(false);

    const billingInfo = (billing) => {
        setBilling(billing);
        setModal(true);
    };

    useEffect(() => {
        if(searchResult !== '') {
            fetch(`https://power-hack-server-three.vercel.app/api/search/${searchResult}`)
                .then(response => response.json())
                .then(json => setBillings(json))
                .catch(error => console.log(error));
        }

        if(searchResult === '') {
            fetch('https://power-hack-server-three.vercel.app/api/billing-list')
                .then(response => response.json())
                .then(json => {
                    setBillings(json);
                    setTotalBillings(json);
                })
                .catch(error => console.log(error));
        }
    }, [searchResult, render]);

    function searchFunction(event) {
        const searchValue = event.target.value;
        setSearchResult(searchValue);
    }

    const lastPostIndex = currentPage * billingsPerPage;
    const firstPostIndex = lastPostIndex - billingsPerPage;
    const currentPosts = billings.slice(firstPostIndex, lastPostIndex);

    const onSubmitHandler = event => {
        event.preventDefault();
        const form = event.target;
        const full_name = form.full_name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const paid_amount = form.payable_amount.value;
        const billing = {full_name, email, phone, paid_amount};

        fetch(`https://power-hack-server-three.vercel.app/api/update-billing/${billing2._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(billing)
        }).then((result) => {
            setRender(!render);
            setModal(false);
            toast('Data updated successfully!.');
        }).catch(err => console.log(err));
    };

    const handleDelete = (deleteBilling) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(result.isConfirmed) {
                fetch(`https://power-hack-server-three.vercel.app/api/delete-billing/${deleteBilling._id}`, {
                    method: 'DELETE'
                })
                    .then(result => {
                        console.log(result);
                        setRender(!render);
                        Swal.fire(
                            'Delete Successfull!',
                            'Data has been deleted.',
                            'success'
                        );
                    })
                    .then((json) => console.log(json));
            }
        });
    };


    let totalArr = [];
    let sum = 0;
    totalBillings.map(billing => totalArr.push(Number(billing.paid_amount)));
    for(let index = 0; index < totalArr.length; index++) {
        sum += totalArr[index];
    }


    return (
        <>
            <div className='flex flex-col lg:flex-row gap-3 w-full lg:w-4/5 mx-auto justify-between items-stretch lg:items-center p-2 m-2 bg-slate-400 rounded-md'>
                <div className='flex gap-3 items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Billings</h2>
                    <input onKeyUp={searchFunction} type="search" placeholder="Search" className="input input-bordered input-sm" />
                </div>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='text-lg font-semibold'>Paid Total: {sum}</p>
                    <label onClick={() => setModal(true)} htmlFor="new-bill" className='btn btn-primary btn-sm'>Add New Bill</label>
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
                            searchResult === '' &&
                            currentPosts.map(billing => <Billing
                                key={billing._id}
                                billing={billing}
                                setBilling={setBilling}
                                handleDelete={handleDelete}
                                billingInfo={billingInfo}
                            ></Billing>)
                        }
                        {
                            searchResult !== '' &&
                            billings.map(billing => <Billing
                                key={billing._id}
                                billing={billing}
                                setBilling={setBilling}
                                handleDelete={handleDelete}
                                billingInfo={billingInfo}
                            ></Billing>)
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

            {
                modal &&
                <Modal
                    render={render}
                    setRender={setRender}
                    setModal={setModal}
                ></Modal>
            }


            {
                modal &&
                <>
                    <input type="checkbox" id="new-bill2" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <h1 className="text-2xl text-center font-bold">Billing Information</h1>
                            <label htmlFor="new-bill2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <form onSubmit={onSubmitHandler} className="card-body">
                                <div className="form-control">
                                    <input type="text" name="full_name" className="input input-bordered" defaultValue={billing2.full_name} />
                                </div>
                                <div className="form-control">
                                    <input type="email" name="email" className="input input-bordered" defaultValue={billing2.email} />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="phone" className="input input-bordered" defaultValue={billing2.phone} />
                                </div>
                                <div className="form-control">
                                    <input type="text" name="payable_amount" className="input input-bordered" defaultValue={billing2.paid_amount} />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default Billings;