import Footer from "../_components/Footer";
import ContactForm from "../_components/ContactForm";
import MainHeading from "../_components/MainHeading";
import SectionContainer from "../_components/SectionContainer";

export default function Page() {
  return (
    <>
      <div className="relative z-[-20] h-[30rem] w-screen bg-contactMainSm bg-cover bg-fixed bg-bottom grayscale md:h-[40rem] md:bg-contactMain"></div>
      <div className="bg-textLight">
        <MainHeading>Kontakt</MainHeading>
        <SectionContainer>
          <ContactForm />
        </SectionContainer>
        <Footer/>
      </div>
    </>
  );
}
