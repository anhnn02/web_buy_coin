import React from 'react'

const ListBuyCoin = () => {
  return (
    <div>
      <h2>List Buy Coin</h2>
      <div className="tw-my-3 tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
        <table className="tw-w-full tw-text-sm tw-text-left">
          <thead className="tw-bg-gray-500">
            <tr>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-white">
                #
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-white">
                Tên nhân vật
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-white">
                Seri
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-white">
                Thẻ
              </th>
              <th scope="col" className="tw-px-6 tw-py-3 tw-text-white">
                Tổng số tiền
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="tw-border-b">
              <th scope="row" className="tw-px-6 tw-py-4 tw-font-bold tw-whitespace-nowrap">
                1
              </th>
              <th scope="row" className="tw-px-6 tw-py-4 tw-font-bold tw-whitespace-nowrap">
                HinaLink
              </th>
              <td className="tw-px-6 tw-py-4 tw-font-bold tw-whitespace-nowrap">
                100091598491***
              </td>
              <td className="tw-px-6 tw-py-4 tw-font-bold tw-whitespace-nowrap">
                Vinaphone
              </td>
              <td className="tw-px-6 tw-py-4 tw-font-bold tw-whitespace-nowrap">
                <span className="tw-font-bold tw-bg-green-400 tw-p-1 tw-text-green-800 tw-rounded">100.000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBuyCoin