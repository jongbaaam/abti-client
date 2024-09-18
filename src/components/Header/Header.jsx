import Button from "../common/Button";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="h-[100px] px-6 py-4 border-b-[1px] border-border-color-gray shadow-md flex justify-between items-center">
      <HeaderLogo />
      <div>
        <Button
          className="p-2 text-xl font-semibold rounded-lg hover:bg-color-black-5 transition"
          onClick={() => console.log("로그인")}
          text="로그인"
        />
      </div>
    </header>
  );
}
