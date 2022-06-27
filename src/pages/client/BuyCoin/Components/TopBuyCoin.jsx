import React from 'react'

const TopBuyCoin = () => {
  return (
      <div className="">
          <div className="tw-mb-3">
              <h4 className="tw-text-sec size-smallest tw-border-b-2 tw-border-sec tw-pb-2">Top nạp coin</h4>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="tw-w-full text-left size-smallest">
                  <thead>
                      <tr className="">
                          <th className="tw-pr-1">Top</th>
                          <th className="tw-pr-1">Tên nhân vật</th>
                          <th className="tw-text-right">Tổng coin</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="tw-font-bold tw-text-center tw-py-2">1</td>
                          <td className="tw-font-bold tw-px-1 tw-py-1">
                              <div className="tw-tooltip" data-tip="Malcolm Lockyer aaa aaaa aa aa">
                                  <span className="tw-inline-block md:tw-w-[130px] lg:tw-w-[170px] tw-truncate tw-font-bold">Malcolm Lockyer aaa aaaa aa aa</span>
                              </div>
                          </td>
                          <td className="tw-text-right tw-py-2">1961</td>
                      </tr>
                      <tr>
                          <td className="tw-font-bold tw-text-center tw-py-2">1</td>
                          <td className="tw-font-bold tw-px-1 tw-py-1">
                              <div className="tw-tooltip" data-tip="Malcolm Lockyer aaa aaaa aa aa">
                                  <span className="tw-inline-block md:tw-w-[130px] lg:tw-w-[170px] tw-truncate tw-font-bold">Malcolm Lockyer aaa aaaa aa aa</span>
                              </div>
                          </td>
                          <td className="tw-text-right tw-py-2">1961</td>
                      </tr>
                      <tr>
                          <td className="tw-font-bold tw-text-center tw-py-2">1</td>
                          <td className="tw-font-bold tw-px-1 tw-py-1">
                              <div className="tw-tooltip" data-tip="Malcolm Lockyer aaa aaaa aa aa">
                                  <span className="tw-inline-block md:tw-w-[130px] lg:tw-w-[170px] tw-truncate tw-font-bold">Malcolm Lockyer aaa aaaa aa aa</span>
                              </div>
                          </td>
                          <td className="tw-text-right tw-py-2">1961</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default TopBuyCoin