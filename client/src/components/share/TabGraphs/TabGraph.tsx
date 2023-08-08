import InputField from "@/components/share/InputField/InputField";
import {
  getFilterSearchData,
  getUniqueKeywords,
} from "@/components/hooks/globalHooks";
import { Loader, Tabs } from "@mantine/core";
import dynamic from "next/dynamic";
import { Data } from "plotly.js";
import React, { useState, useEffect } from "react";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

interface TabGraphProps {
  filteredData: any;
  data: any;
  setData: (value: any) => void;
  setFilteredData: (value: any) => void;
  dataLoading: boolean;
}

const TabGraph = ({
  data,
  filteredData,
  setFilteredData,
  dataLoading,
}: TabGraphProps) => {
  const [currTab, setCurrTab] = useState<string>("scatter");
  const [input, setInput] = useState("");
  const [traces, setTraces] = useState<Data[]>();
  let filteredKeywords: any;

  useEffect(() => {
    filteredKeywords = getUniqueKeywords(data);
  }, [filteredData]);

  useEffect(() => {
    setTraces(
      filteredKeywords?.map((keyword: any) => {
        const filteredVlValues = filteredData?.vl_value.filter(
          (value: any, index: number) => {
            return filteredData?.keywords[index] === keyword;
          }
        );
        return {
          x: filteredData?.dates,
          y: filteredVlValues,
          type: "scatter",
          mode: "lines+markers",
          name: keyword,
          hoverinfo: "y+name",
        };
      })
    );
  }, [filteredData, filteredKeywords, data]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilteredData(getFilterSearchData(filteredData, input));
  };

  return (
    <div>
      <Tabs value={currTab} onTabChange={(value: any) => setCurrTab(value)}>
        <Tabs.List>
          <Tabs.Tab value="scatter">Timeseries of Digital Demand</Tabs.Tab>
        </Tabs.List>
        <div className="py-3 flex justify-end">
          <InputField input={input} setInput={setInput} onSubmit={onSubmit} />
        </div>
        <Tabs.Panel value="scatter" pt="xs">
          {traces && !dataLoading ? (
            <Plot
              data={traces}
              layout={{
                title: "Digital Demand",
                yaxis: {
                  title: "Vl Value",
                  automargin: true,
                },
                xaxis: {
                  title: "Date",
                  automargin: true,
                },
                width: 1400,
                height: 900,
                autosize: true,
                margin: {
                  l: 80,
                  r: 100,
                  t: 100,
                  b: 80,
                },
                legend: {
                  font: {
                    size: 12,
                  },
                },
              }}
              config={{
                toImageButtonOptions: {
                  format: "svg",
                  width: 1900,
                  height: 1000,
                },
              }}
            />
          ) : (
            <Loader />
          )}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TabGraph;
