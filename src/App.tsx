import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SkillScoreRow } from "./components/skillScoreRow";
import { scoreData } from "./data/score";
import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { workExperiences } from "./data/experience";
import { WorkExperience } from "./components/workExperience";
import { SkillsSection } from "./sections/skills";
import { WorkExperiencesSection } from "./sections/workExperiences";
import { EducationsSection } from "./sections/educations";
import { Footer } from "./sections/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto max-w-5xl">
      <Header />
      {/*  skills.tsx */}
      <SkillsSection />
      {/*   work experience */}
      <WorkExperiencesSection />
      {/*    education*/}
      <EducationsSection />
      <Footer />
    </div>
  );
}

export default App;
