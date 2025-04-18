"use client";

import { useScheduleContext } from "../_context/ScheduleContext";
import { TrainerTypes } from "../_lib/types";

export default function SelectTrainer({
  groupTrainers,
}: {
  groupTrainers: TrainerTypes[];
}) {
  const { trainer, setTrainer } = useScheduleContext();

  return (
    <div className="flex items-center justify-center border border-darkGray shadow-md shadow-darkGray">
      <select
        value={trainer}
        onChange={(e) => setTrainer(e.target.value)}
        className="bg-transparent px-2 text-center text-xl uppercase"
        aria-label="Wybierz trenera"
      >
        <option className="text-base" value="all">
          trener
        </option>
        {groupTrainers.map((trainer) => (
          <option className="text-base" key={trainer.id} value={trainer.name}>
            {trainer.name}
          </option>
        ))}
      </select>
    </div>
  );
}
