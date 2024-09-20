import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import Button from "../common/Button";
import HomeImage from "./HomeImage";

export default function Home() {
  const { handleSignIn } = useAuth();
  const navigate = useNavigate();

  async function handleStartButtonClick() {
    await handleSignIn();
    navigate("/dashboard");
  }

  return (
    <div className="px-6 py-4 w-full h-container-height flex justify-center">
      <main className="w-full max-w-screen-2xl h-full flex justify-around items-center flex-col md:flex-row">
        <aside className="flex justify-center items-center">
          <HomeImage />
        </aside>
        <section className="flex flex-col items-center md:order-first">
          <h1 className="mb-6 text-3xl font-bold">
            사용자에게 <span className="text-color-blue">더 나은 경험</span>을
            제공하세요.
          </h1>
          <p className="mb-6 text-center font-semibold">
            A/B 테스트로 전환율을 분석하고, <br />
            데이터 기반으로 더 나은 UX를 제공할 수 있습니다.
          </p>
          <Button
            className="bg-color-blue px-8 py-4 rounded-lg text-white font-semibold w-fit transition hover:bg-color-blue-hover"
            onClick={handleStartButtonClick}
            text="시작하기"
          />
        </section>
      </main>
    </div>
  );
}
