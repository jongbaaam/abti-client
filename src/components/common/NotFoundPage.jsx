import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../store/store";
import Button from "./Button";

export default function NotFoundPage() {
  const { isLoggedIn } = useUserStore(state => state);
  const navigate = useNavigate();

  function handleHomeButtonClick() {
    if (isLoggedIn) {
      navigate("dashboard");
    } else {
      navigate("/");
    }
  }

  return (
    <section className="w-full h-full flex flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-6 text-3xl font-bold">
          <span className="text-color-blue">404</span> NOT FOUND
        </h1>
        <p className="mb-6 text-2xl font-bold">페이지를 찾을 수 없습니다.</p>
        <p className="mb-6 text-center font-semibold">
          홈페이지로 돌아가거나 다른 페이지를 탐색해보세요.
        </p>
        <Button
          className="bg-color-blue px-8 py-4 rounded-lg text-white font-semibold w-fit transition hover:bg-color-blue-hover"
          onClick={handleHomeButtonClick}
          text="홈으로"
        />
      </div>
      <div className="w-[700px] h-[350px] bg-not-found bg-no-repeat bg-cover"></div>
    </section>
  );
}
