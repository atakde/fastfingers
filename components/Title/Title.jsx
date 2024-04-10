import { TitleWrapper } from "./ScTitle";

export const Title = ({ title, align = 'left' }) => {
  return (
    <TitleWrapper align={align}>
      {title}
    </TitleWrapper>
  );
};