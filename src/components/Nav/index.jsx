import React from 'react'
import ActionAccount from './ActionAccount'
import SearchForm from './SearchForm'

const NavAdmin = () => {
    return (
        <nav className="tw-z-10 tw-py-4 tw-shadow-md">
            <div
                className="container tw-flex tw-items-center tw-justify-between tw-h-full tw-px-6 tw-mx-auto tw-text-purple-600 :tw-text-purple-300">
                <SearchForm />
                <ActionAccount />
            </div >
        </nav >
    )
}

export default NavAdmin