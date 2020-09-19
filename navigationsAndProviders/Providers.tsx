import React from "react";
import { APIprovider } from "./APIprovider";
import Routes from "./Routes";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <APIprovider>
      <Routes />
    </APIprovider>
  );
};
