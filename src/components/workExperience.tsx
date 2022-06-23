import { FC } from "react";

export type WorkExperienceProps = {
  start: string;
  end: string;
  position: string;
  corporation: string;
  description: string[];
};

export const WorkExperience: FC<WorkExperienceProps> = ({
  start,
  end,
  position,
  corporation,
  description,
}) => {
  return (
    <div className="flex items-start w-full mb-4">
      <div className="flex flex-col justify-start font-mon text-sm mr-4 capitalize text-xs ">
        <div>{start}</div>
        <div>{end}</div>
      </div>
      <div className="flex flex-col justify-start  text-sm mr-4 capitalize flex-1">
        <div className="font-semibold font-kanit text-lg -translate-y-1.5  capitalize">
          {position}
        </div>
        <h2 className="font-mon text-sm -translate-y-1">{corporation}</h2>
        <ul className="font-robo text-xs list-disc mt-1 bg-grb pl-6 pr-4 py-4 rounded-tl-lg rounded-br-lg leading-[1.7] w-full text-pri">
          {description.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
