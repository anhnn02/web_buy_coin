import React from 'react'

const SearchForm = () => {
    return (
        <div className="tw-flex tw-justify-center tw-flex-1 lg:tw-mr-32">
            <div className="tw-relative tw-w-full tw-max-w-xl tw-mr-6 focus-within:tw-text-purple-500">
                <div className="tw-absolute tw-inset-y-0 tw-flex tw-items-center tw-pl-2">
                    <svg className="tw-w-4 tw-h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <input
                    className="tw-w-full tw-pl-8 tw-p-2 tw-text-sm tw-text-gray-700 tw-placeholder-gray-600 tw-bg-gray-100 tw-border-0 tw-rounded-md :tw-placeholder-gray-500 :focus:tw-shadow-outline-gray :focus:tw-placeholder-gray-600 :tw-bg-gray-700 :tw-text-gray-200 focus:tw-placeholder-gray-500 focus:tw-bg-white focus:tw-border-purple-300 focus:tw-outline-none focus:tw-shadow-outline-purple tw-form-input"
                    type="text" placeholder="Search..." aria-label="Search" />
            </div>
        </div>
    )
}

export default SearchForm