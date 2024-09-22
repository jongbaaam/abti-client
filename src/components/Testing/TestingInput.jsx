import IconSearch from "../../assets/icon/ico_search.svg?react";

export default function TestingInput() {
  return (
    <div className="flex justify-center items-center mr-2 p-2 bg-color-black-5 rounded-md grow h-full">
      <IconSearch className="fill-text-color-gray-light mr-1" />
      <input
        className="bg-transparent text-text-color-gray-light font-semibold grow"
        placeholder="검색할 테스트 명을 입력해주세요."
      />
    </div>
  );
}
