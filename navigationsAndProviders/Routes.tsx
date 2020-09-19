import React, { useContext } from "react";
import { AppStorage } from "./APIprovider";
import Loading from "./../screens/Loading";
import MainApp from "./../screens/MainApp";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
  const { isAppLoading } = useContext(AppStorage);

  return <>{isAppLoading ? <Loading /> : <MainApp />}</>;
};

export default Routes;
