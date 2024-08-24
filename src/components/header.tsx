import { Contact } from "./contact";

export const Header = () => {
  return (
    <div className="relative bg-grb flex h-[300px] flex-col items-center justify-center">
      <Contact />
      <div>
        <h1 className="text-7xl font-extralight uppercase font-mon">
          Dylan (Xiaosong)
        </h1>
        <h1 className="mb-3 text-7xl font-semibold uppercase font-kanit">
          zhang
        </h1>
        <div className="bg-pri inline px-4 py-2 font-extralight text-white">
          Full Stack Developer
        </div>
      </div>
    </div>
  );
};
