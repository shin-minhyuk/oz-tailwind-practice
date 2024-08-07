import styled, { createGlobalStyle } from "styled-components";

export default function Header({ setDarkMode, darkMode }) {
  return (
    <header className="flex justify-between items-center py-[10px] px-[20px] bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-[20px]">
        <li className="list-none font-[400] text-[13px]">로그인</li>
        <li className="list-none font-[400] text-[13px]">회원가입</li>
        <li className="list-none font-[400] text-[13px]">내클래스</li>
        <li
          onClick={() => setDarkMode((prev) => !prev)}
          className="cursor-pointer border border-red-700 py-[6px] px-[10px]"
        >
          {darkMode ? "다크 모드" : "라이트 모드"}
        </li>
      </ul>
    </header>
  );
}
