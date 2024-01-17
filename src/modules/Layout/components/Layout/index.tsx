import React, { PropsWithChildren } from "react";
import Header from "../Header";
import NotificationBar from "../NotificationBar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NotificationBar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
