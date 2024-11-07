import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counterServices";
import CoverParticles from "@/components/coverParticles";
import TimeLine from "@/components/timeLine";
import TransitionPage from "@/components/transitionPage";

const AboutMe = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
          Toda mi{" "}
          <span className="font-bold text-secondary">
            trayectoria profesional
          </span>
        </h1>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default AboutMe;
