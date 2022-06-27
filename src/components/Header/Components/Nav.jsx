import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../../Icons/Icons'

const Nav = () => {
    return (
        <div className="tw-bg-bgr tw-px-8 tw-rounded-[var(--rd-pri)]">
            <div className="tw-bl md:tw-hidden tw-navbar tw-p-0">
                <div className="tw-dropdown tw-w-full">
                    <label tabindex="0" className="tw-btn tw-btn-ghost lg:tw-hidden tw-w-full tw-flex tw-justify-between tw-items-center">
                        <Icon.ListMenu className={"size-largest"} /> <span> Menu</span>
                    </label>
                    <ul tabindex="0" className="tw-block tw-space-y-2 tw-menu-compact tw-dropdown-content tw-w-full tw-mt-3 tw-p-4 tw-shadow tw-bg-base-100 tw-rounded-box">
                        <li className="">
                            <NavLink to="" className="menu__item tw-inline-block tw-gap-1 tw-py-2 tw-w-full">
                                <Icon.HouseFill /> Trang chủ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/noi-quy" className="menu__item tw-inline-block tw-gap-1 tw-py-2 tw-w-full">
                                <Icon.Rule /> Nội quy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/huong-dan" className="menu__item tw-inline-block tw-gap-1 tw-py-2 tw-w-full">
                                <Icon.LightFill /> Hướng dẫn <Icon.ArrowDown />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/ho-tro" className="menu__item tw-inline-block tw-gap-1 tw-py-2 tw-w-full">
                                <Icon.Headset /> Hỗ trợ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/hoat-dong" className="menu__item tw-inline-block tw-gap-1 tw-py-2 tw-w-full">
                                <Icon.PeopleFill /> Hoạt động
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nap-the" className="menu__item tw-inline-block tw-gap-1 tw-py-2 tw-w-full">
                                <Icon.Coin /> Nạp thẻ
                            </NavLink>
                        </li>
                        <li>
                            <button className="tw-text-[#a6ade3] tw-duration-100 hover:tw-opacity-60">
                                Đăng xuất <Icon.DoorFill className="tw-text-[#a6ade3]" />
                            </button>
                        </li>
                        {/* <li tabindex="0">
                                <Link to="" className="tw-justify-between">
                                    Parent
                                    <svg className="tw-fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="tw-p-2">
                                    <li><Link to="">Submenu 1</Link></li>
                                    <li><Link to="">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link to="">Item 3</Link></li> */}
                    </ul>
                </div>
            </div>
            <ul className="tw-hidden md:tw-flex tw-justify-between tw-items-center">
                <li className="tw-py-7">
                    <NavLink to="" className="menu__item tw-gap-1">
                        <Icon.HouseFill /> Trang chủ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/noi-quy" className="menu__item tw-gap-1">
                        <Icon.Rule /> Nội quy
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/huong-dan" className="menu__item tw-gap-1">
                        <Icon.LightFill /> Hướng dẫn <Icon.ArrowDown />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ho-tro" className="menu__item tw-gap-1">
                        <Icon.Headset /> Hỗ trợ
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hoat-dong" className="menu__item tw-gap-1">
                        <Icon.PeopleFill /> Hoạt động
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/nap-the" className="menu__item tw-gap-1">
                        <Icon.Coin /> Nạp thẻ
                    </NavLink>
                </li>
                <li>
                    <button className="tw-text-[#a6ade3] tw-duration-100 hover:tw-opacity-60">
                        Đăng xuất <Icon.DoorFill className="tw-text-[#a6ade3]" />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Nav