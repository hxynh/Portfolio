import { Outlet } from "react-router-dom"
import TopNavBar from "../components/TopNavBar"

export default function RootLayout() {
  return (
    <>
        <TopNavBar />
        <Outlet />
    
    </>
  )
}
