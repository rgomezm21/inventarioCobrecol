import { Navigate, Route, Routes } from "react-router-dom"
import { RecordsPage } from "../pages/RecordsPage"
import  CreateProducts  from "../../components/CreateProducts";
import EditProducts from "../../components/EditProducts";

export const RecordsRoute = () => {
  return (
    <Routes>
        <Route path="/" element= {<RecordsPage/>}/>
        <Route path="/create" element= {<CreateProducts/>}/>
        <Route path='/edit/:id' element={<EditProducts />}/>

        <Route path="/*" element= {<Navigate to="/" />}/>
    </Routes>
  )
}
