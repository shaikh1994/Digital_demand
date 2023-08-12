import Topbar from "@/components/share/header/TopBar";
import React from "react";
import Head from "next/head";
import DashboardLayout from "@/components/share/Dashboard/DashboardLayout";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Digital Demand </title>
      </Head>
      <Topbar />
      <DashboardLayout />
    </>
  );
};

export default IndexPage;
