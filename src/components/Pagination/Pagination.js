import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';

function MyPagination({dataperPage,totaldata,paginate}) {
    const pages=[];
    for(let i=1; i<=Math.ceil(totaldata/dataperPage);i++){
        pages.push(i)
    }
    return (
        <div>
            <Pagination count={pages.length} onChange={(event,val)=> paginate(val)} variant="outlined" shape="rounded" />
        </div>
    )
}

export default MyPagination
