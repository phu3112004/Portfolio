import "./GlobalStyle.module.scss";

interface IProps {
  children: React.ReactNode;
}

function GlobalStyle({ children }: IProps) {
  return <>{children}</>;
}

export default GlobalStyle;
