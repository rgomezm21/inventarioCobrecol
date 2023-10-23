import { InforMensual } from "../../components/InforMensual"
import { Sidebar } from "../../components/SidebarRecords"

export const Informes = () => {
  return (
    <div>
        <div className='row'>   
                <div className='col-3'>
                    <Sidebar/>
                </div>
                <div className='col-9'>
                    <InforMensual/>
                </div>
        </div>
    </div>
  )
}