import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Divider } from "@mantine/core";
import { getData } from "@/components/hooks/getData";
import TabGraph from "@/components/share/TabGraphs/TabGraph";
import { getFilterKeywords } from "@/components/hooks/globalHooks";
import { initalGraph } from "@/libs/global";

const DashboardLayout = () => {
  const [apiData, setApiData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [dataLoading, setDataLoading] = useState(true);

  const graphData = async () => {
    const response = await getData(setDataLoading);
    setApiData(response.data);
    setFilteredData(response.data);
    setDataLoading(false);
    setFilteredData(getFilterKeywords(initalGraph, response.data));
  };

  useEffect(() => {
    graphData();
  }, []);

  return (
    <div className="flex gap-2 items-start">
      <SideBar
        data={apiData}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
      />
      <Divider orientation="vertical" />
      <TabGraph
        data={apiData}
        filteredData={filteredData}
        setData={setApiData}
        setFilteredData={setFilteredData}
        dataLoading={dataLoading}
      />
    </div>
  );
};

export default DashboardLayout;
