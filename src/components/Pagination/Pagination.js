import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber, setPageNumber}) => {
  // el ? lo ponemos porque como es una api se demora haciendo el request
  return( <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4'
  forcePage={pageNumber === 1? 0 : pageNumber -1}
  nextLabel="Next"
  previousLabel="Prev"
  nextClassName='btn btn-outline-primary'
  previousClassName='btn btn-outline-primary '
  pageClassName='page-item '
  pageLinkClassName= "page-link"
  activeClassName='active'
  onPageChange={(data) => {
    setPageNumber(data.selected + 1)
  }}
  pageCount={info?.pages}/>
  )
};

export {Pagination}