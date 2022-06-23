import { FC } from "react";

type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-pri text-2xl font-semibold uppercase font-kanit mb-4">
      {title}
    </h1>
  );
};
