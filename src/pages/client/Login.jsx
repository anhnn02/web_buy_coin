import React from 'react'

const Login = () => {
    return (
        <div className="tw-bg-bgr tw-rounded-[var(--rd-pri)] tw-py-6 tw-px-8 md:tw-py-10 md:tw-px-32">
            <div className="tw-bg-thi tw-py-6 tw-px-10 tw-rounded-[var(--rd-pri)]">
                <form action="" className="tw-space-y-3">
                    <label htmlFor="" className="tw-block">Hãy nhập username của bạn để tiếp tục</label>
                    <div className="md:tw-flex tw-space-y-2 md:tw-space-y-0 md:tw-space-x-4">
                        <input type="text" className="form__input tw-bg-[#D9D9D9] tw-text-thi tw-w-full tw-rounded-[var(--rd-pri)] focus:tw-bg-[#D9D9D9]" />
                        <button className="tw-inline md:tw-w-fit tw-min-w-[100px] btn-primary size-smallest">Tiếp tục</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login