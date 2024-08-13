import LoginForm from "../_components/LoginForm";
import SignUpForm from "../_components/SignUpForm";
import { imbue } from "../fonts";

export default function Page() {
  return (
    <>
      <div className="h-24 bg-darkGray md:min-h-[11%]"></div>
      <div className="bg-textLight md:min-h-[89%]">
        <h1
          className={`py-12 text-center text-3xl uppercase text-darkGray ${imbue.className}`}
        >
          Rejestracja{" "}
        </h1>
        <SignUpForm />
      </div>
    </>
  );
}
