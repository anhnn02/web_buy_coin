import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/Nav'
import Sidebar from '../../components/Sidebar'

const AdminLayout = () => {
    return (
        <>
            <div className="tw-bg-[#32354C] tw-flex tw-h-screen">
                <Sidebar />
                {/* <div x-show="isSideMenuOpen" x-transition:enter="tw-transition tw-ease-in-out tw-duration-150"
              x-transition:enter-start="tw-opacity-0" x-transition:enter-end="tw-opacity-100"
              x-transition:leave="tw-transition tw-ease-in-out tw-duration-150" x-transition:leave-start="tw-opacity-100"
              x-transition:leave-end="tw-opacity-0"
              className="tw-fixed tw-inset-0 tw-z-10 tw-flex tw-items-end tw-bg-black tw-bg-opacity-50 sm:tw-items-center sm:tw-justify-center"></div>
         */}
                <div className="tw-flex tw-flex-col tw-flex-1 tw-w-full">
                    <NavAdmin />
                    <main className="tw-h-full tw-overflow-y-auto tw-p-3">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminLayout