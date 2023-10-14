import { Navigate, Route, Routes } from "react-router-dom"
import { Products } from "../pages/Products";
import { CreateNewProduct } from "../pages/CreateNewProduct";
import {EditPr} from "../pages/EditPr"
import { Informes } from "../pages/Informes";


export const RecordsRoute = () => {
  return (
    <Routes>
        <Route path="/" element= {<Products/>}/>
        <Route path="/create" element= {<CreateNewProduct/>}/>
        <Route path='/edit/:id' element={<EditPr />}/>
        <Route path="/inform" element={<Informes />} />

        <Route path="/*" element= {<Navigate to="/" />}/>
    </Routes>
  )
}
