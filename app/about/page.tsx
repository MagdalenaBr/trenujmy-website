import Image from "next/image";
// import img from "../../public/about-main-large.jpg";
import img from "../../public/about-large.jpg";
import TextContainer from "../_components/TextContainer";
import yogaImg from "../../public/yoga-about.jpg";
import poleDanceImg from "../../public/poledance-about.jpg";
import aerobicImg from "../../public/aerobic-about.jpg";
import SectionContainer from "../_components/SectionContainer";
import SportAactivityContainer from "../_components/SportActivityContainer";
import personalTrainerImg from "../../public/personal-trainer-about.jpg";
import sectionImg from "../../public/about-section-image.jpg";
import { imbue } from "../fonts";
import Footer from "../_components/Footer";

export default function Page() {
  const sportActivities = [
    {
      label: "Aerobik",
      text: "Zajęcia pełne energii i rytmu, które pomogą Ci spalić kalorie, poprawić kondycję i wyrzeźbić sylwetkę. Nasze profesjonalne instruktorki i instruktorzy zadbają o to, abyś czerpał maksimum korzyści i radości z każdego treningu.",
      img: (
        <Image
          src={aerobicImg}
          fill
          alt="Kobieta ćwicząca aerobik"
          className="z-[-20] object-cover object-right"
        />
      ),
    },
    {
      label: "Pole dance",
      text: "To nie tylko taniec, ale również intensywny trening całego ciała, który łączy elementy akrobatyki, gimnastyki i fitnessu. Pole Dance rozwija siłę, elastyczność oraz pewność siebie. Nasi wykwalifikowani instruktorzy pomogą Ci odkryć piękno i moc tej wyjątkowej formy aktywności.",
      img: (
        <Image
          src={poleDanceImg}
          fill
          alt="Kobieta ćwicząca pole dance"
          className="z-[-20] object-cover object-right"
        />
      ),
    },
    {
      label: "Joga",
      text: "Wycisz się i znajdź wewnętrzny spokój podczas naszych sesji jogi. Oferujemy różne style jogi, dostosowane do różnych poziomów zaawansowania, aby każdy mógł znaleźć coś dla siebie. Joga to nie tylko doskonały sposób na poprawę elastyczności i równowagi, ale także na redukcję stresu i poprawę samopoczucia.",
      img: (
        <Image
          src={yogaImg}
          fill
          alt="Kobieta ćwicząca jogę"
          className="z-[-20] object-cover object-center"
        />
      ),
    },
  ];

  return (
    <>
      <div className="relative z-[-20] h-64 w-screen bg-parallax bg-cover bg-fixed bg-bottom md:h-[40rem]">
        {/* <Image
          src={img}
          alt="Sala siłowni na której ustawione są rowerki stacjonarne"
          fill
          className="z-[-50] bg-fixed object-cover object-center"
        /> */}
      </div>
      <div className="bg-textLight">
        <h1
          className={`py-12 text-center text-8xl uppercase text-darkGray ${imbue.className}`}
        >
          O nas
        </h1>
        <SectionContainer>
          <TextContainer>
            <span className="font-bold text-accentColor">Trenuj|My</span> to
            miejsce, gdzie zdrowie, siła i harmonia spotykają się, by stworzyć
            doskonałe warunki do pracy nad sobą. Jesteśmy dumni, że możemy
            oferować kompleksowe usługi, które pomogą Ci osiągnąć Twoje cele,
            niezależnie od tego, czy dopiero zaczynasz swoją przygodę ze
            sportem, czy jesteś już doświadczonym entuzjastą aktywności
            fizycznej.
          </TextContainer>
          <TextContainer>
            Nasza siłownia to nie tylko nowoczesny sprzęt i doskonałe warunki do
            treningu siłowego. Dbamy o to, aby każdy mógł znaleźć coś dla
            siebie. Dlatego oferujemy szeroki wachlarz zajęć grupowych, które
            pozwalają na zróżnicowaną i angażującą aktywność fizyczną:
          </TextContainer>
        </SectionContainer>
        <SectionContainer maxWidth="max-w-[1000px]" flexDirection="flex-row">
          {sportActivities.map((sportActivity) => (
            <SportAactivityContainer
              key={sportActivity.label}
              label={sportActivity.label}
              text={sportActivity.text}
            >
              {sportActivity.img}
            </SportAactivityContainer>
          ))}
        </SectionContainer>
        <div className="relative h-[50rem] bg-sectionAboutImg bg-cover bg-fixed"></div>
        <div className="bg-textLight pb-20 pt-20">
          <SectionContainer>
            <div className="flex w-full justify-around">
              <div className="max-w-[40rem]">
                <TextContainer>
                  W Trenuj|My stawiamy na profesjonalizm i indywidualne
                  podejście do każdego klienta. Nasi trenerzy personalni są
                  gotowi pomóc Ci opracować spersonalizowany plan treningowy,
                  który będzie dostosowany do Twoich potrzeb i celów.
                </TextContainer>
              </div>
              <button className="border-2 border-darkGray px-8 py-2 font-semibold uppercase tracking-widest shadow-md shadow-darkGray transition-all hover:scale-110 lg:text-lg self-center">
                Kadra
              </button>
            </div>
            <div className="flex w-full justify-around">
              <div className="max-w-[40rem]">
                <TextContainer>
                  Dołącz do nas i stań się częścią naszej społeczności, która
                  wspiera się nawzajem w dążeniu do zdrowego i aktywnego stylu
                  życia. Zapraszamy do Trenuj|My – miejsca, gdzie Twoje zdrowie
                  i dobre samopoczucie są dla nas najważniejsze.
                </TextContainer>
              </div>
              <button className="border-2 border-darkGray px-8 py-2 font-semibold uppercase tracking-widest shadow-md shadow-darkGray transition-all hover:scale-110 lg:text-lg self-center">
                Dołącz
              </button>
            </div>
          </SectionContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
