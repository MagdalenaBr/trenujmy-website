import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import { Dispatch, SetStateAction } from "react";

export default function Sidebar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button onClick={() => setShowSidebar(!showSidebar)}>
      <Bars3BottomRightIcon className="w-8 text-textLight" />;
    </button>
  );
}
