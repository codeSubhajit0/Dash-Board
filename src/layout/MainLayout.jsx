import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import { useState } from 'react';

const MainLayout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleSidebar = () => {
        setIsSidebarOpen( isSidebarOpen => !isSidebarOpen );
    }
    setTimeout(()=>{setIsSidebarOpen(false)},4000);

  return (
        < div className="h-screen w-full bg-green-400">
        <Header toggleSidebar = {toggleSidebar}/>
        <div className="flex flex-1 overflow-hidden">
            <Sidebar isOpen = {isSidebarOpen} toggle = {toggleSidebar} />
            <div className="flex-1 h-full overflow-auto">
                <Outlet/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout
