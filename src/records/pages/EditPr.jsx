import React from 'react'
import { Sidebar } from '../../components/SidebarRecords'
import {EditProducts} from '../../components/EditProducts'

export const EditPr= () => {
    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <Sidebar />
                </div>
                <div className='col-8'>
                    <EditProducts />
                </div>
            </div>
        </div>
    )
}
