import MainHeading from "../_components/MainHeading";
import SectionContainer from "../_components/SectionContainer";
import Footer from "../_components/Footer";
import { getGymMembershipPrices } from "../_lib/data";
import MembershipOption from "../_components/MembershipOption";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Page({ searchParams }: SearchParamProps) {
  const gymMembershipPrices = await getGymMembershipPrices();
  return (
    <>
      <div className="relative z-[-20] h-[30rem] w-screen bg-sectionPricesMainSm bg-cover bg-fixed bg-top md:h-[40rem] md:bg-sectionPricesMain"></div>
      <div className="bg-textLight">
        <MainHeading>Cennik</MainHeading>
        <SectionContainer>
          <div className="flex flex-wrap justify-center gap-16">
            {gymMembershipPrices.map((gymMembership) => (
              <MembershipOption
                key={gymMembership.id}
                gymMembership={gymMembership}
              />
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
