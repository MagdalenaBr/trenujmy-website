import SpinnerSmall from "./_components/SpinnerSmall";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <SpinnerSmall />
        <h1>Ładowanie danych...</h1>
      </div>
    </div>
  );
}
