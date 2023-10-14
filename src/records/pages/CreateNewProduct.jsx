import React from 'react';
import { Sidebar } from '../../components/SidebarRecords';
import { CreateProducts } from '../../components/CreateProducts'

export const CreateNewProduct = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <CreateProducts />
        </div>
      </div>
    </div>
  )
}
