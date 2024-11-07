import AvatarPortfolio from "@/components/avatarPortfolio";
import CircleImage from "@/components/circleImage";
import ContainerPage from "@/components/container";
import CoverParticles from "@/components/coverParticles";
import PortfolioBox from "@/components/protfolioBox";
import TransitionPage from "@/components/transitionPage";
import { dataPortfolio } from "@/data";

const Portfolio = () => {
  return (
    <>
      <CoverParticles />
      <ContainerPage>
        <TransitionPage />
        <AvatarPortfolio />
        <CircleImage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 ">
            Mis trabajos{" "}
            <span className="text-secondary font-bold">realizados</span>
          </h1>
          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </ContainerPage>
    </>
  );
};

export default Portfolio;
