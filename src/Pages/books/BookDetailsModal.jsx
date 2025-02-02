import React from 'react';
import { Link } from 'react-router-dom';

const BookDetailsModal = ({ book, onClose, onCartAdd }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[784px]  max-h-[90vh] overflow-auto bg-white shadow-md dark:bg-[#12141D] rounded-2xl">
        <div className="bg-white modal-text shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr]  overflow-hidden">
          <img
            src={book?.cover}
            alt={book?.title}
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
          />
          <div className="p-5 lg:p-11">
            <div className="modal-text">
              <h2 className="text-base lg:text-[40px] mb-2 font-bold">
                {book?.title}
                          </h2>
                          <span className='block text-base  text-[#9fa0a4] dark:text-[#575A6E] my-3'>{book?.genre}</span>
             <div></div>
                      </div>
                    
                      <p className='text-sm lg:text-base mb-8 lg:mb-16'>{book?.description}</p>
                      <div className=' grid lg:grid-cols-2 gap-2'>
                          <Link to="#" className='bg-primary rounded-lg py-2 px-5 flex items-center gap-2 justify-center text-[#171923] font-semibold text-sm' onClick={(e)=>onCartAdd(e,book)}>
                          <button
                      >
                     <span>${book?.price} Add to Cart</span>
                  </button>
                          </Link>
                          <Link to="#" className='border  border-[#74766F] rounded-lg py-2 px-5 flex items-center gap-2 justify-center text-[#171923] font-semibold text-sm' onClick={onClose}>
                          <button 
                      >
                     Cancel
                  </button>
                          </Link>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;
