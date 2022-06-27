import React from 'react'
import FormBuyCoin from './Components/FormBuyCoin'
import TableBuyCoin from './Components/TableBuyCoin'
import TopBuyCoin from './Components/TopBuyCoin'
import Warning from './Components/Warning'

const BuyCoin = () => {
    return (
        <div className="tw-bg-bgr tw-rounded-[var(--rd-pri)] tw-p-10 tw-space-y-8">
            <div className="">
                <h2 className="page__title size-largest tw-text-white">Nạp coin</h2>
            </div>
            <Warning />
            <div className="md:tw-grid md:tw-grid-cols-3 tw-gap-10 tw-space-y-3 md:tw-space-y-0">
                <FormBuyCoin />
                <TopBuyCoin />
            </div>
            <div className="">
                <h4 className="tw-text-danger tw-text-[16px] tw-text-center">VUI LÒNG ĐỌC KỸ</h4>
                <ul className="size-small tw-list-disc tw-pl-4">
                    <li className="!tw-font-bold">
                        Để biết thêm chi tiết về thanh toán, liên hệ tại Page Facebook
                    </li>
                    <li className="!tw-font-bold">
                        Khi nạp nhớ đọc kỹ thông báo. Nhớ giữ lại thẻ cào, phòng trường hợp cần đối chiếu.
                    </li>
                    <li className="!tw-font-bold">
                        Nhớ chọn đúng mệnh giá thẻ của bạn. Chọn sai thẻ nạp sẽ bị lỗi và không được cộng tiền, mất tiền mất thẻ Admin không chịu trách nhiệm.
                    </li>
                    <li className="!tw-font-bold">
                        Ghi đúng tên người quyên góp, viết liền không dấu và không dấu cách, Danh sách sẽ cập nhật đúng tên bạn.
                    </li>
                    <li className="!tw-font-bold">
                        Minecraft PE không hỗ trợ nạp coin cho các server mobile các bạn lưu ý nhé.
                    </li>
                </ul>
            </div>
           <TableBuyCoin />
        </div>
    )
}

export default BuyCoin