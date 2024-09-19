import useAuth from "../../hooks/useAuth";

import Button from "../common/Button";
import UserThumbnail from "../common/UserThumbnail";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  const { isLoggedIn, userInfo, handleSignOut } = useAuth();

  return (
    <header className="h-[100px] px-6 py-4 border-b-[1px] border-border-color-gray shadow-md flex justify-between items-center">
      <HeaderLogo />
      <div className="flex justify-center items-center">
        {isLoggedIn && (
          <>
            <Button
              className="p-2 text-xl font-semibold rounded-lg hover:bg-color-black-5 transition"
              onClick={handleSignOut}
              text="로그아웃"
            />
            <UserThumbnail className="ml-2" photoUrl={userInfo.photoUrl} />
          </>
        )}
      </div>
    </header>
  );
}
