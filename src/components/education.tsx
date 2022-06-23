import { FC } from "react";

export type EducationProps = {
  start: string;
  end: string;
  major: string;
  school: string;
  degree: string;
};

export const Education: FC<EducationProps> = ({
  start,
  end,
  major,
  school,
  degree,
}) => {
  return (
    <div className="flex items-start w-full mb-4">
      <div className="flex flex-col justify-start font-mon text-sm mr-4 capitalize text-xs ">
        <div>{start}</div>
        <div>{end}</div>
      </div>
      <div className="flex flex-col justify-start  text-sm mr-4 capitalize flex-1">
        <div className="font-semibold font-kanit text-lg -translate-y-1.5  capitalize">
          {school}
        </div>
        <h2 className="font-mon text-sm -translate-y-1">{major}</h2>
        <h2 className="font-mon text-sm -translate-y-1">{degree}</h2>
      </div>
    </div>
  );
};
