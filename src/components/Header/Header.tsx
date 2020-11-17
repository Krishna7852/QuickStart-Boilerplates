// @flow
import * as React from "react";
type Props = {
  children: React.ReactNode;
};
export const Header = (props: Props) => {
  return <div>{props.children}</div>;
};
