import { FC } from "react";

export type SkillScoreRowProps = {
  name: string;
  score: number;
  topics: string[];
};
export const SkillScoreRow: FC<SkillScoreRowProps> = ({
  name,
  score,
  topics,
}) => {
  return (
    <div className="flex items-center justify-between w-full mb-1">
      <div className="flex  justify-between  items-center w-1/2">
        <h4 className="mb-1 text-sm font-mon font-semibold  uppercase">
          {name}
        </h4>
        <div className="mb-1 flex">
          {[...Array(score).keys()].map(() => (
            <ScoreDot isHighlight={true} />
          ))}
          {[...Array(10 - score).keys()].map(() => (
            <ScoreDot isHighlight={false} />
          ))}
        </div>
      </div>

      <div className="flex">
        {topics.map((topic) => (
          <div className="bg-pri/20 rounded-xl text-xs font-robo  mr-2 px-2 py-1">
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

type ScoreDotProps = {
  isHighlight: boolean;
};

const ScoreDot: FC<ScoreDotProps> = ({ isHighlight }) => {
  return isHighlight ? (
    <span className="bg-pri mr-1 h-2 w-2 rounded-full"></span>
  ) : (
    <span className="bg-pri/20 mr-1 h-2 w-2 rounded-full"></span>
  );
};
