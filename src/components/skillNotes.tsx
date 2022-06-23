import { FC } from "react";

export type SkillNotesProps = {
  name: string;
  content: string;
};

export const SkillNotes: FC<SkillNotesProps> = ({ name, content }) => {
  return (
    <div className="relative my-8 bg-grb shadow-inner shadow-pri/0.1 rounded-tl-lg rounded-br-lg py-2 px-4  w-full h-300">
      <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-gradient-to-br from-blue-400  font-robo to-green-500 text-white w-100  text-sm p-1 ">
        {name}
      </div>
      <p className="font-robo text-pri/70 text-sm leading-[1.6]">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{content}
      </p>
    </div>
  );
};
