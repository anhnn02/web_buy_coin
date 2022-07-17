import React from 'react'
import {Link} from 'react-router-dom'

const ActionAccount = () => {
    return (
        <ul className="tw-flex tw-items-center tw-flex-shrink-0 tw-space-x-6">
            <li className="tw-flex">
                <button className=" tw-rounded-md focus:tw-outline-none focus:tw-shadow-outline-purple"
                    aria-label="Toggle color mode">
                    <template x-if="!">
                        <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="#32354C" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                            </path>
                        </svg>
                    </template>
                    <template x-if="">
                        <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </template>
                </button>
            </li>
            <li className="tw-relative">
                <button
                    className="tw-relative tw-align-middle tw-rounded-md focus:tw-outline-none focus:tw-shadow-outline-purple"
                >
                    <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
                        </path>
                    </svg>
                    <span aria-hidden="true"
                        className="tw-absolute tw-top-0 tw-right-0 tw-inline-block tw-w-3 tw-h-3 tw-transform tw-translate-x-1 tw--translate-y-1 tw-bg-red-600 tw-border-2 tw-border-white tw-rounded-full :tw-border-gray-800"></span>
                </button>
                <template x-if="isNotificationsMenuOpen">
                    <ul
                        className="tw-absolute tw-right-0 tw-w-56 tw-p-2 tw-mt-2 tw-space-y-2 tw-text-gray-600 tw-bg-white tw-border tw-border-gray-100 tw-rounded-md tw-shadow-md :tw-text-gray-300 :tw-border-gray-700 :tw-bg-gray-700">
                        <li className="tw-flex">
                            <Link className="tw-inline-flex tw-items-center tw-justify-between tw-w-full tw-px-2 tw-py-1 tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 tw-rounded-md hover:tw-bg-gray-100 hover:tw-text-gray-800 :hover:tw-bg-gray-800 :hover:tw-text-gray-200"
                                to="#">
                                <span>Messages</span>
                                <span
                                    className="tw-inline-flex tw-items-center tw-justify-center tw-px-2 tw-py-1 tw-text-xs tw-font-bold tw-leading-none tw-text-red-600 tw-bg-red-100 tw-rounded-full :tw-text-red-100 :tw-bg-red-600">
                                    13
                                </span>
                            </Link>
                        </li>
                        <li className="tw-flex">
                            <Link className="tw-inline-flex tw-items-center tw-justify-between tw-w-full tw-px-2 tw-py-1 tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 tw-rounded-md hover:tw-bg-gray-100 hover:tw-text-gray-800 :hover:tw-bg-gray-800 :hover:tw-text-gray-200"
                                to="#">
                                <span>Sales</span>
                                <span
                                    className="tw-inline-flex tw-items-center tw-justify-center tw-px-2 tw-py-1 tw-text-xs tw-font-bold tw-leading-none tw-text-red-600 tw-bg-red-100 tw-rounded-full :tw-text-red-100 :tw-bg-red-600">
                                    2
                                </span>
                            </Link>
                        </li>
                        <li className="tw-flex">
                            <Link className="tw-inline-flex tw-items-center tw-justify-between tw-w-full tw-px-2 tw-py-1 tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 tw-rounded-md hover:tw-bg-gray-100 hover:tw-text-gray-800 :hover:tw-bg-gray-800 :hover:tw-text-gray-200"
                                to="#">
                                <span>Alerts</span>
                            </Link>
                        </li>
                    </ul>
                </template>
            </li >
            <li className="tw-relative">
                <button className="tw-align-middle tw-rounded-full focus:tw-shadow-outline-purple focus:tw-outline-none"
                >
                    <img className="tw-object-cover tw-w-8 tw-h-8 tw-rounded-full"
                        src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                        alt="" aria-hidden="true" />
                </button>
                <template >
                    <ul
                        className="tw-absolute tw-right-0 tw-w-56 tw-p-2 tw-mt-2 tw-space-y-2 tw-text-gray-600 tw-bg-white tw-border tw-border-gray-100 tw-rounded-md tw-shadow-md :tw-border-gray-700 :tw-text-gray-300 :tw-bg-gray-700"
                    >
                        <li className="tw-flex">
                            <Link className="tw-inline-flex tw-items-center tw-w-full tw-px-2 tw-py-1 tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 tw-rounded-md hover:tw-bg-gray-100 hover:tw-text-gray-800 :hover:tw-bg-gray-800 :hover:tw-text-gray-200"
                                to="#">
                                <svg className="tw-w-4 tw-h-4 tw-mr-3" aria-hidden="true" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                    </path>
                                </svg>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className="tw-flex">
                            <Link className="tw-inline-flex tw-items-center tw-w-full tw-px-2 tw-py-1 tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 tw-rounded-md hover:tw-bg-gray-100 hover:tw-text-gray-800 :hover:tw-bg-gray-800 :hover:tw-text-gray-200"
                                to="#">
                                <svg className="tw-w-4 tw-h-4 tw-mr-3" aria-hidden="true" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                    </path>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className="tw-flex">
                            <Link className="tw-inline-flex tw-items-center tw-w-full tw-px-2 tw-py-1 tw-text-sm tw-font-semibold tw-transition-colors tw-duration-150 tw-rounded-md hover:tw-bg-gray-100 hover:tw-text-gray-800 :hover:tw-bg-gray-800 :hover:tw-text-gray-200"
                                to="#">
                                <svg className="tw-w-4 tw-h-4 tw-mr-3" aria-hidden="true" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                    </path>
                                </svg>
                                <span>Log out</span>
                            </Link>
                        </li>
                    </ul>
                </template >
            </li >
        </ul >
    )
}

export default ActionAccount