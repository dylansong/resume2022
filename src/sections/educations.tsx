import { Title } from "../components/title";
import { workExperiences } from "../data/experience";
import { WorkExperience } from "../components/workExperience";
import { educations } from "../data/education";
import { Education } from "../components/education";

export const EducationsSection = () => {
  return (
    <div className="px-12 mt-8">
      <Title title="Education" />
      {educations.map((education) => {
        const { start, end, degree, school, major } = education;
        return (
          <Education
            start={start}
            end={end}
            degree={degree}
            school={school}
            major={major}
          />
        );
      })}
    </div>
  );
};
