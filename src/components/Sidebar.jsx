import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="!tw-bg-bgr tw-z-20 tw-hidden tw-w-64 tw-overflow-y-auto md:tw-block tw-flex-shrink-0 tw-shadow-xl">
            <div className="tw-py-4 tw-text-gray-500 :tw-text-gray-400">
                <Link to="/"><img className="tw-w-32 tw-pl-5" src="https://mineahihi.com/wp-content/uploads/2019/09/khangggggggggggggggggg.png" alt="" /></Link>
                <ul className="tw-mt-6">
                    <li className="tw-relative tw-px-6 tw-py-1">
                        <NavLink className="nav-link-admin tw-inline-flex tw-items-center tw-w-full tw-text-sm 
                        tw-text-gray-600 tw-transition-colors tw-duration-150
                        hover:tw-bg-thi tw-rounded tw-p-2 :hover:tw-text-gray-200 :tw-text-gray-100"
                            to="/admin/dashboard">
                            <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                </path>
                            </svg>
                            <span className="tw-ml-4">Dashboard</span>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="tw-relative tw-px-6 tw-py-1">
                        <NavLink className="nav-link-admin tw-inline-flex tw-items-center tw-w-full tw-text-sm tw-text-gray-600 tw-transition-colors tw-duration-150
                         hover:tw-bg-thi tw-rounded tw-p-2 :hover:tw-text-gray-200"
                            to="/admin/danh-sach-nap-the">
                            <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                                </path>
                            </svg>
                            <span className="tw-ml-4">Danh sách nạp thẻ</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside >
    )
}

export default Sidebar