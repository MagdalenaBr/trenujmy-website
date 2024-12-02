import { getGroupTrainers } from "../_lib/data";

export default async function SelectTrainer() {
  const groupTrainers = await getGroupTrainers();

  const trainers = groupTrainers;
  return (
    <div className="flex items-center gap-4 border border-darkGray shadow-md shadow-darkGray">
      <select className="bg-transparent px-2 text-xl uppercase">
        <option hidden>Trener</option>
        {trainers.map((trainer) => (
          <option key={trainer.id} value={trainer.name}>
            {trainer.name}
          </option>
        ))}
      </select>
    </div>
  );
}
