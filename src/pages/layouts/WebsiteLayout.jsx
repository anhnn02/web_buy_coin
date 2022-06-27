import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const WebsiteLayout = () => {
    return (
        <>
            <div className="bgr-img">
                <div className="tw-w-[980px] tw-max-w-full tw-m-auto tw-pb-[100px]">
                    <Header />
                    <main className="tw-my-4">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default WebsiteLayout