export const Footer = () => {
  return (
    <div className="px-12 mt-8 flex flex-col bg-gradient-to-br from-blue-600 to-green-500 py-2 rounded-lg items-center justify-center w-full">
      <div className="font-robo text-xs text-white">
        This resume was designed through React.js, tailwindcss, the online
        version is hosted at Aws Amplify
        <a
          href="https://main.d1kpwr4bmug99l.amplifyapp.com/"
          className="bg-white text-pri ml-1 px-2"
        >
          Click To Visit
        </a>{" "}
        , and the source code is at Github.{" "}
        <a
          href="https://github.com/dylansong/resume2022"
          className="bg-white text-pri m1-1 px-2"
        >
          Click To Visit
        </a>
      </div>
    </div>
  );
};
