export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-darkGray">
      <div className="flex flex-col items-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-accentColor motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <span className="text-slate-400">Ładowanie strony...</span>
      </div>
    </div>
  );
}
