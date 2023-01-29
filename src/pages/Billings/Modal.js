import React from 'react';
import Form from './Form';

const Modal = () => {
    return (
        <>
            <input type="checkbox" id="new-bill" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="new-bill" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Form></Form>
                </div>
            </div>
        </>
    );
};

export default Modal;