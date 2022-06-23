import { Title } from "../components/title";
import { workExperiences } from "../data/experience";
import { WorkExperience } from "../components/workExperience";

export const WorkExperiencesSection = () => {
  return (
    <div className="px-12 mt-8">
      <Title title="work experience" />
      {workExperiences.map((experience) => {
        const { start, end, position, corporation, description } = experience;
        return (
          <WorkExperience
            start={start}
            end={end}
            position={position}
            corporation={corporation}
            description={description}
          />
        );
      })}
    </div>
  );
};
