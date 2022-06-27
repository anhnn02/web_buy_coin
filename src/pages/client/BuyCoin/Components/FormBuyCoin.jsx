import React from 'react'

const FormBuyCoin = () => {
    return (
        <div className="md:tw-col-span-2 tw-bg-thi tw-rounded-[var(--rd-pri)] tw-p-8 tw-px-9 sm:tw-px-12 md:tw-px-16">
            <div className="tw-text-center ">
                <h3 className="size-larger">Mua Coin Tự Động</h3>
                <span className="tw-block size-smallest tw-text-danger tw-font-bold">Bạn đang nạp coin vào tài khoản</span>
                <span className="tw-block size-smallest tw-text-danger tw-font-[900]">HinaLink</span>
            </div>
            <form action="" className="tw-block tw-m-auto tw-mt-3 tw-space-y-4">
                <select className="form__input tw-text-pri-text" name="" id="">
                    <option value="" className="tw-py-2">Chọn loại thẻ</option>
                    <option value="" className="tw-py-2">Chọn loại thẻ</option>
                    <option value="" className="tw-py-2">Chọn loại thẻ</option>
                    <option value="" className="tw-py-2">Chọn loại thẻ</option>
                    <option value="" className="tw-py-2">Chọn loại thẻ</option>
                </select>
                <select className="form__input tw-text-pri-text" name="" id="">
                    <option value="" className="tw-py-2">Chọn mệnh giá</option>
                    <option value="" className="tw-py-2">Chọn mệnh giá</option>
                    <option value="" className="tw-py-2">Chọn mệnh giá</option>
                    <option value="" className="tw-py-2">Chọn mệnh giá</option>
                    <option value="" className="tw-py-2">Chọn mệnh giá</option>
                </select>
                <div className="tw-relative">
                    <input className="form__input" type="password" />
                    <label for="name" className="form__label">Số Seri</label>
                </div>
                <div className="tw-relative">
                    <input className="form__input" type="password" />
                    <label for="name" className="form__label">Mã thẻ</label>
                </div>
                <button className="btn-primary size-small">
                    NẠP COIN
                </button>
            </form>
        </div>
    )
}

export default FormBuyCoin