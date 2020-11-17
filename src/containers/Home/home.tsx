// @flow
import * as React from "react";
import { Toast } from "../../components";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <h1>Home page..!!</h1>
      <Toast message="success" />
    </div>
  );
};

export default Home;
