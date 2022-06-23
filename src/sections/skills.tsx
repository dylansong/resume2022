import { Title } from "../components/title";
import { scoreData } from "../data/score";
import { SkillScoreRow } from "../components/skillScoreRow";
import { SkillNotes } from "../components/skillNotes";
import { skillNotes } from "../data/skillNotes";

export const SkillsSection = () => {
  return (
    <div className="px-12 mt-8">
      <Title title="skills" />
      {scoreData.map((scoreTopic) => {
        return (
          <SkillScoreRow
            score={scoreTopic.score}
            name={scoreTopic.name}
            topics={scoreTopic.topics}
          />
        );
      })}
      {skillNotes.map((item) => {
        return <SkillNotes name={item.name} content={item.content} />;
      })}
    </div>
  );
};
