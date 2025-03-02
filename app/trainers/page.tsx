import MainHeading from "../_components/MainHeading";
import SectionContainer from "../_components/SectionContainer";
import { getTrainers } from "../_lib/data";
import img from "../../public/main-page-small.jpg";
import Image from "next/image";
import { imbue } from "../fonts";
import TextContainer from "../_components/TextContainer";
import Footer from "../_components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadra",
};

export default async function Page() {
  const trainers = await getTrainers();
  return (
    /*trainer card*/
    <>
      <div className="relative z-[-20] h-[30rem] w-screen bg-sectionTrainersMainSm bg-cover bg-fixed bg-bottom md:h-[40rem] md:bg-sectionTrainersMain"></div>
      <div className="bg-textLight">
        <MainHeading>Kadra</MainHeading>
        <div className="pb-20">
          <TextContainer>
            W naszym klubie zajęcia i treningi personalne prowadzą trenerzy z
            wieloletnim doświadczeniem.
          </TextContainer>
        </div>
        <SectionContainer>
          <div className="flex flex-wrap justify-center gap-20 lg:gap-32">
            {trainers?.map((trainer) => (
              <div key={trainer.name} className="relative z-40 flex h-96 w-64">
                <Image
                  src={trainer.image}
                  alt={`trener ${trainer.name}`}
                  fill
                  className="-z-20 object-cover grayscale transition-all hover:scale-95 hover:grayscale-0"
                />
                <div className="self-end">
                  <h2
                    className={`z-60 inline-block bg-black/70 px-2 text-4xl font-bold uppercase tracking-wider text-accentColor ${imbue.className}`}
                  >
                    {trainer.name.split(" ").at(0)}
                  </h2>
                  <p className="px-2 pb-4 text-center text-lg text-textLight">
                    {trainer.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
      <Footer />
    </>
  );
}
