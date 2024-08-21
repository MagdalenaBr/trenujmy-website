import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import MainHeading from "../_components/MainHeading";
import SectionContainer from "../_components/SectionContainer";
import { imbue } from "../fonts";
import { CheckIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";
import { getGymMembershipPrices } from "../_lib/data";

export default async function Page() {
  const gymMembershipPrices = await getGymMembershipPrices();
  return (
    <>
      <div className="relative z-[-20] h-[30rem] w-screen bg-sectionPricesMainSm bg-cover bg-fixed bg-top md:h-[40rem] md:bg-sectionPricesMain"></div>
      <div className="bg-textLight">
        <MainHeading>Cennik</MainHeading>
        <SectionContainer>
          <div className="flex gap-16 flex-wrap justify-center">
            {gymMembershipPrices.map((gymMembership) => (
              <div
                key={gymMembership.gymMembershipName}
                className="flex max-w-[20rem] flex-col justify-center border-2 border-darkGray px-4 py-8 transition-all hover:scale-105"
              >
                <div className="text-center">
                  <h2 className={`text-3xl ${imbue.className}`}>
                    Karnet na {gymMembership.gymMembershipName}
                  </h2>
                  {gymMembership.gymMembershipName !== '1 dzień' && gymMembership.gymMembershipName !== '1 miesiąc' ? <p>płatny co miesiąc</p> : <p className="h-6"></p>}
                  
                </div>
                <p className={`py-10 text-center text-6xl ${imbue.className}`}>
                  {gymMembership.price} zł
                </p>
                <ul className="pb-6">
                  <li className="flex pb-4">
                    <span>
                      <CheckIcon className="h-5 px-2 text-accentColor" />
                    </span>
                    Jednorazowa godzinna konsultacja trenerska
                  </li>
                  <li className="flex pb-4">
                    <span>
                      <CheckIcon className="h-5 px-2 text-accentColor" />
                    </span>
                    Zajęcia grupowe w cenie karnetu
                  </li>
                  <li className="flex pb-4">
                    <span>
                      <CheckIcon className="h-5 px-2 text-accentColor" />
                    </span>
                    Możliwosć rezerwacji zajęć z 7-dniowym wyprzedzeniem
                  </li>
                </ul>
                <button className="bg-darkGray px-2 py-1 text-lg font-semibold uppercase tracking-wider text-textLight transition-all hover:scale-105 hover:bg-accentColor hover:text-darkGray">
                  Wybieram
                </button>
              </div>
            ))}
          </div>
        </SectionContainer>
        <p className="pb-10 text-center text-sm text-accentColor">
          Płatność za karnet dokonywana jest stacjonarnie w klubie.
        </p>
        <div className="relative h-[20rem] bg-pricesSectionSm bg-cover bg-fixed md:h-[30rem] md:bg-pricesSection"></div>
        <Footer />
      </div>
    </>
  );
}
