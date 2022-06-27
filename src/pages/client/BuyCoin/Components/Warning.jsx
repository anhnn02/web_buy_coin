import React from 'react'

const Warning = () => {
  return (
      <div className="tw-bg-white tw-text-danger tw-p-3 tw-rounded-[var(--rd-pri)] size-small">
          <p className="tw-text-danger tw-font-bold">
              * Chú ý:
          </p>
          <p className="tw-text-danger tw-font-bold">
              - Tên nhân vật phải trùng với tên trong game kể cả ký tự viết HOA
          </p>
          <p className="tw-text-danger tw-font-bold">
              - Người chơi <span className="tw-text-danger tw-font-[900] tw-italic">phải vào game</span> trước khi nạp coin
          </p>
          <p className="tw-text-danger tw-font-bold">
              - Ghi sai Nickname sẽ bị nạp vào Nick khác bạn sẽ không nhận được Coin
          </p>
          <p className="tw-text-danger tw-font-bold">
              - Chọn sai mệnh giá mất thẻ, các bạn nhớ chọn đúng nhé.
          </p>
      </div>
  )
}

export default Warning