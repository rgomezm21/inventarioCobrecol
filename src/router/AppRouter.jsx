import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RecordsRoute } from "../records/routes/RecordsRoute"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        <Route  path="/*" element={<RecordsRoute/>}/>
    </Routes>
  )
}
