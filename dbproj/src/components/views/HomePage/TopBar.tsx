import React from "react";
import "./TopBar.css"
import TemporaryDrawer from "./Drawer";

//<img src={$logo} alt={$mall_name} />
//.topArea__logo
// 카테고리명 부분 -> {$name_or_img_tag}
const TopBar = () => {
    return (
        <nav className="navigation">
            <button type="button" className="btnNav eNavFold"><i aria-hidden="true" className="icon icoNav"><TemporaryDrawer /></i>네비게이션
            </button>
            <div className="navigation__util">
                <button type="button" className="menu btnSearch eSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                         className="icon" role="img">
                        <path stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                              d="M11 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/>
                        <path stroke="#f5f5f5" stroke-linejoin="round" stroke-width="1.5" d="M22 22l-5-5"/>
                    </svg>
                    검색
                </button>
                <a href="/mypage" className="menu RW">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                         className="icon" role="img">
                        <circle cx="11.5" cy="6.5" r="3.75" stroke="#f5f5f5" stroke-width="1.5"/>
                        <path stroke="#f5f5f5" stroke-width="1.5"
                              d="M1.78 21.25c.382-4.758 4.364-8.5 9.22-8.5h1c4.856 0 8.838 3.742 9.22 8.5H1.78z"/>
                    </svg>
                    마이쇼핑
                </a>
                <a href="/wishpage" className="menu RW">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                         className="icon" role="img">
                        <path fill="#f5f5f5"
                              d="M21.304 4.653l-.524.537.524-.537zM17.209 3v.75V3zm-4.094 1.653l.524.537-.524-.537zM12 5.74l-.524.538.524.51.523-.51L12 5.74zm-1.116-1.087l-.523.537.523-.537zm-8.188 7.98l-.524.537.524-.537zM3.81 13.72l-.523.537.523-.537zM12 21.7l-.524.537.524.51.523-.51L12 21.7zm8.188-7.98l.523.537-.523-.537zm1.116-1.087l-.524-.537.524.537zm.523-8.517c-.608-.593-1.329-1.062-2.12-1.382l-.563 1.391c.613.248 1.169.61 1.636 1.065l1.047-1.074zm-2.12-1.382c-.793-.32-1.641-.484-2.498-.484v1.5c.665 0 1.323.128 1.936.375l.561-1.39zm-2.498-.484c-.856 0-1.704.164-2.496.484l.562 1.391c.612-.247 1.27-.375 1.934-.375v-1.5zm-2.496.484c-.792.32-1.513.79-2.121 1.382l1.047 1.074c.467-.455 1.023-.817 1.636-1.065l-.562-1.39zm-2.121 1.382l-1.116 1.087 1.047 1.075L13.64 5.19l-1.047-1.074zm-.069 1.087l-1.115-1.087L10.36 5.19l1.115 1.088 1.047-1.075zm-1.115-1.087C10.18 2.92 8.518 2.251 6.79 2.251v1.5c1.343 0 2.627.52 3.57 1.44l1.048-1.075zM6.79 2.251c-1.728 0-3.39.668-4.618 1.865L3.22 5.19c.944-.92 2.228-1.44 3.571-1.44v-1.5zM2.172 4.116C.944 5.313.25 6.941.25 8.643h1.5c0-1.291.526-2.534 1.47-3.453L2.171 4.116zM.25 8.643c0 1.702.694 3.33 1.922 4.527l1.047-1.074c-.943-.92-1.469-2.162-1.469-3.453H.25zm1.922 4.527l1.116 1.087 1.047-1.074-1.116-1.087-1.047 1.074zm1.116 1.087l8.188 7.98 1.047-1.074-8.188-7.98-1.047 1.074zm9.235 7.98l8.188-7.98-1.046-1.074-8.189 7.98 1.047 1.074zm8.188-7.98l1.116-1.087-1.047-1.074-1.116 1.087 1.047 1.074zm1.116-1.087c.608-.592 1.092-1.297 1.422-2.074l-1.38-.587c-.252.592-.622 1.132-1.089 1.587l1.047 1.074zm1.422-2.074c.33-.777.501-1.61.501-2.453h-1.5c0 .64-.13 1.274-.381 1.866l1.38.587zm.501-2.453c0-.842-.17-1.676-.5-2.453l-1.381.587c.252.592.381 1.226.381 1.866h1.5zm-.5-2.453c-.331-.777-.815-1.481-1.423-2.074L20.78 5.19c.467.456.837.995 1.089 1.587l1.38-.587z"/>
                    </svg>
                    관심상품
                </a>
            </div>
            <div className="navigation__category RW">
                <div className="category item1">
                    <a href="/category/all">ALL</a>
                </div>
                <div className="category item2">
                    <a href="/category/outer">OUTER</a>
                </div>
                <div className="category item3">
                    <a href="/category/dress">DRESS</a>
                </div>
                <div className="category item4">
                    <a href="/category/bag">BAG</a>
                </div>
                <div className="category item5">
                    <a href="/category/boots">BOOTS</a>
                </div>
                <div className="category item6">
                    <a href="/category/skirt">SKIRT</a>
                </div>
                <div className="category item7">
                    <a href="/category/cap">CAP</a>
                </div>
                <div className="category item8">
                    <a href="/category/tshirt">TSHIRT</a>
                </div>
                <div className="category item10">
                    <a href="/category/watch">WATCH</a>
                </div>

            </div>
        </nav>
    );
}
export default TopBar;