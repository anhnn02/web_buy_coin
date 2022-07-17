import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
  return (
      <div className="tw-h-screen tw-flex tw-bg-bgr">
          <div className="container p-[50px] tw-m-auto">
              <div className="tw-text-center w-[200px]">
                  <img  src="https://mineahihi.com/wp-content/uploads/2019/09/khangggggggggggggggggg.png" className="tw-w-96 tw-inline-block" alt="" />
              </div>
              <div className="tw-text-center">
                  <span className="tw-inline-block tw-text-7xl tw-mt-7 tw-mx-0 tw-mb-3">40<span className="tw-text-sec">4</span></span>
                  <h3 className="tw-text-4xl">Có vẻ như bạn bị lạc rồi!</h3>
                  <span className="tw-text-lg tw-my-3 tw-mx-0 tw-block">Chúng tôi không thể tìm thấy trang này</span>
                  <NavLink className="btn-primary tw-py-2 tw-px-3" to="/">Về trang chủ
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                  </NavLink>
                  <img src="./asset/images/undraw_Alert_re_j2op.png" alt="" className="img-404" />
              </div>
          </div>
      </div>
  )
}

export default Page404