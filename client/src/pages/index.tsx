import dynamic from "next/dynamic";
const IndexPage = dynamic(() => import("@/components/pages/IndexPage/index"));

export default function Home() {
  return (
    <>
      {/* We can add auth here later for the time being there is no auth in this project*/}
      <IndexPage />
    </>
  );
}
