import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  endText: string;
};

// export const MoneLike = ({ text }: Props): ReactNode => {
//   return <div>もねちは{text}が好き</div>;
// };

export const MoneLike: React.FC<Props> = ({ endText, children }) => {
  return (
    <div>
      <p>もねちは</p>
      {children}
      <p>好き</p>
      <p>{endText}</p>
    </div>
  );
};
