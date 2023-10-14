import { InforMensual } from "../../components/InforMensual"
import { Sidebar } from "../../components/SidebarRecords"

export const Informes = () => {
  return (
    <div>
        <div className='row'>   
                <div className='col-5'>
                    <Sidebar/>
                </div>
                <div className='col-7'>
                    <InforMensual/>
                </div>
        </div>
    </div>
  )
}