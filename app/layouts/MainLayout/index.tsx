import { FC } from "react";

const MainLayout: FC = ({ children }) => {
  return (
    <div data-testid={"main-layout"}>
      <header></header>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
};

export default MainLayout;
