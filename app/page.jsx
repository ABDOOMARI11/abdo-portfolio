import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span>Software Developer</span>
            <h1 className="h1 mb-4">
              Hello I&apos;m <br />
              <span className="text-accent">El Aoumari Abdelmoughith</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/cv/abdelmoughith-cv.pdf" download="abdelmoughith-cv.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none  mb-4  xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
