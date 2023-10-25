import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RecordsRoute } from "../records/routes/RecordsRoute"
import { CheckingAuth } from "../components/CheckingAuth"
import { useCheckAuth } from "../hooks"

export const AppRouter = () => {
  const status = useCheckAuth();
  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path="/*" element={<RecordsRoute />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
