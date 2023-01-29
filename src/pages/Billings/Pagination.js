import React from "react";

const Pagination = ({
    totalBillings,
    billingsPerPage,
    setCurrentPage,
    currentPage,
}) => {

    let pages = [];

    for(let i = 1; i <= Math.ceil(totalBillings / billingsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='flex gap-3'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`btn btn-outline btn-primary btn-sm btn-circle ${page === currentPage ? "btn-active" : ""}`}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;