import Image from "next/image";
// import img from "../../public/about-main-large.jpg";
import aerobicImg from "../../public/aerobic-about.jpg";
import poleDanceImg from "../../public/poledance-about.jpg";
import yogaImg from "../../public/yoga-about.jpg";
import Footer from "../_components/Footer";
import MainHeading from "../_components/MainHeading";
import SectionContainer from "../_components/SectionContainer";
import SportAactivityContainer from "../_components/SportActivityContainer";
import TextContainer from "../_components/TextContainer";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();
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
      <div className="relative z-[-20] h-[30rem] w-screen bg-parallaxSm bg-cover bg-fixed bg-center md:h-[40rem] lg:bg-parallax"></div>
      <div className="bg-textLight">
        <MainHeading> O nas</MainHeading>
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
        <SectionContainer
          maxWidth="max-w-[1000px]"
          flexDirection="flex-col md:flex-row"
        >
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
        <div className="relative h-[35rem] bg-sectionAboutImgSm bg-cover bg-fixed md:h-[50rem] md:bg-sectionAboutImg"></div>
        <div className="bg-textLight pb-20 pt-20">
          <SectionContainer>
            <div className="flex w-full flex-col justify-around gap-4 md:flex-row">
              <div className="max-w-[40rem]">
                <TextContainer>
                  W Trenuj|My stawiamy na profesjonalizm i indywidualne
                  podejście do każdego klienta. Nasi trenerzy personalni są
                  gotowi pomóc Ci opracować spersonalizowany plan treningowy,
                  który będzie dostosowany do Twoich potrzeb i celów.
                </TextContainer>
              </div>
              <Link
                href="/trainers"
                className="self-center border-2 border-darkGray px-8 py-2 font-semibold uppercase tracking-widest shadow-md shadow-darkGray transition-all hover:scale-110 lg:text-lg"
              >
                Kadra
              </Link>
            </div>
            <div className="flex w-full flex-col justify-around gap-4 md:flex-row">
              <div className="max-w-[40rem]">
                <TextContainer>
                  Dołącz do nas i stań się częścią naszej społeczności, która
                  wspiera się nawzajem w dążeniu do zdrowego i aktywnego stylu
                  życia. Zapraszamy do Trenuj|My – miejsca, gdzie Twoje zdrowie
                  i dobre samopoczucie są dla nas najważniejsze.
                </TextContainer>
              </div>
              <Link
                href={session ? "/user/bookings" : "/login"}
                className="self-center border-2 border-darkGray px-8 py-2 font-semibold uppercase tracking-widest shadow-md shadow-darkGray transition-all hover:scale-110 lg:text-lg"
              >
                Dołącz
              </Link>
            </div>
          </SectionContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}
