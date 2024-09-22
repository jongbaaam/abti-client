import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <ul className="w-full h-full mb-2 border-b flex flex-col items-center overflow-scroll">
      <ProjectItem />
    </ul>
  );
}
