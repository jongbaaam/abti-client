import useAuth from "../../hooks/useAuth";

import Button from "../common/Button";
import UserThumbnail from "../common/UserThumbnail";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  const { isLoggedIn, userInfo, handleSignIn, handleSignOut } = useAuth();

  return (
    <header className="h-[100px] px-6 py-4 border-b-[1px] border-border-color-gray shadow-md flex justify-between items-center">
      <HeaderLogo />
      <div className="flex justify-center items-center">
        <Button
          className="p-2 text-xl font-semibold rounded-lg hover:bg-color-black-5 transition"
          onClick={isLoggedIn ? handleSignOut : handleSignIn}
          text={isLoggedIn ? "로그아웃" : "로그인"}
        />
        {isLoggedIn && (
          <UserThumbnail className="ml-2" photoUrl={userInfo.photoUrl} />
        )}
      </div>
    </header>
  );
}
