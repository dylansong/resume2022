import { WorkExperienceProps } from "../components/workExperience";
import { EducationProps } from "../components/education";
import { SkillNotesProps } from "../components/skillNotes";

export const skillNotes: SkillNotesProps[] = [
  {
    name: "React.js",
    content:
      "I like the way React.js is coded and enjoy the process. I enjoy exploring the entire react.js ecosystem and have used libraries such as: xstate, jotai, react-query, apollo-client, urql, react-hook-form, and I have built a hobbyist application combining React and Phaser.js. project, which integrates codemirror as a code editor, to teach my son to learn programming using online games. This uses xstate to manage complex interaction states. Meanwhile, my other hobby project uses react+tonal.js to create a project that helps users practice music by automatically generating random chords in the background for guitar players to practice along with, which I wrapped in capacitor.js and installed on my iphone for on-the-go practice. In my company's project, I used react.js+graphql+xstate a lot to build a complex data management platform.\n",
  },
  {
    name: "Graphql",
    content:
      "Graphql gives us front-end engineers a chance to become full-stack engineers, two years ago I came across Hasura and used it to integrate postgresql to quickly build the back-end api of many of my projects, using the trigger function deployed on the aws lambda platform, Scheduled Triggers function combined with Remote Schemas of multiple data sources, you can achieve very complex logic.I am also exploring new possibilities to use prisma to better manage the project architecture and to model the data, which can be adapted to some specific scenarios.\n",
  },
  {
    name: "AWS",
    content:
      "In Aws platform is my main project deployment platform in the company, we use AWS CDK can easily manage the cloud resources through code. I also use the integration tools provided by AWS, like amplify, lambda function, appsync, dynamodb, rds to quickly implement project architectures, Also bind react for fast react component building. I use amplify to build many of my amateur projects.",
  },
  {
    name: "UI Design",
    content:
      "UI Design was originally just a hobby outside of my position as a front-end engineer, but I found that this hobby helped me a lot in my work as a front-end engineer, I could communicate better with UI designers, understand their intentions faster, and I could even do some of my work directly when they were too late, I used figma to prototype my personal projects. I also like to use tailwindcss to design directly through code. In fact, the layout of this resume was designed in half a day using tailwindcss.",
  },
];
