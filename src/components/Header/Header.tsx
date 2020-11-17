import * as React from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div>
      <Link to="/">Main page</Link>
      <Link to="/feature">Feature page</Link>
    </div>
  );
};
