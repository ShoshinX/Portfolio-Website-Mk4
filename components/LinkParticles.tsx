import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Container, Engine } from "tsparticles-engine";

export const ParticlesContainer = () => {
  const particlesInit = async (main: Engine) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadLinksPreset(main);
  };

  const particlesLoaded = (container: Container) => {
    return new Promise<void>(() => {
      console.log(container);
    });
  };

  const options = {
    preset: "links",
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    background: {
      color: "#000000",
    },
    particles: {
      number: {
        value: 20,
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      init={particlesInit}
      loaded={particlesLoaded}
      height="50vh"
    />
  );
};
