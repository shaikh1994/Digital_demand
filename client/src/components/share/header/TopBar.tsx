import { Header, Title } from "@mantine/core";

const Topbar = () => {
  return (
    <Header
      height={{ base: 50, md: 70 }}
      p="md"
      className="flex select-none items-center justify-between mb-3"
    >
      <div className="flex h-full items-center">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="mr-12 flex items-center gap-x-2 no-underline transition-all hover:saturate-150"
        >
          <img src="/logo.png" alt="Logo" className="h-8" />
          <Title order={3} color="cyan">
            Digital Dashboard
          </Title>
        </a>
      </div>
    </Header>
  );
};

export default Topbar;
