import { ReactNode } from "react";

type EmptyLayoutProps = {
  children?: ReactNode;
};

export const EmptyLayout: React.FC<EmptyLayoutProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};
