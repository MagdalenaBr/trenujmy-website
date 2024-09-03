"use client";

import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer
} from "recharts";
import { BookingsDataType } from "../_lib/types";

export default function UserPieChart({
  memberBookings,
}: {
  memberBookings: BookingsDataType[];
}) {
  const unconfirmedClasses = memberBookings.filter(
    (el) => el.status === "niepotwierdzona",
  ).length;
  const complitedClasses = memberBookings.filter(
    (el) => el.status === "zrealizowana",
  ).length;
  const canceledClasses = memberBookings.filter(
    (el) => el.status === "anulowana",
  ).length;

  const data = [
    { name: "niepotwierdzona", value: unconfirmedClasses },
    { name: "zrealizowana", value: complitedClasses },
    { name: "anulowana", value: canceledClasses },
  ];

  const colors = ["#484172", "#5db324", "#8a1616"];
  const checkIfDataExists = Boolean(
    unconfirmedClasses > 0 || complitedClasses > 0 || canceledClasses > 0,
  );

  return (
    <div className="h-80 text-sm uppercase">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {checkIfDataExists ? (
            <>
              <Legend
                height={0}
                layout="vertical"
                align={"center"}
                verticalAlign={"bottom"}
                iconType="circle"
              />
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
                fill="#13c51c9d"
                nameKey="name"
                dataKey="value"
                label
                innerRadius={70}
                outerRadius={90}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
            </>
          ) : (
            <>
              <Legend
                height={36}
                layout="vertical"
                align="center"
                verticalAlign="bottom"
                iconType="circle"
              />
              <Pie
                data={[{ name: "brak rezerwacji", value: 100 }]}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill={"#475569"}
                nameKey="name"
                dataKey="value"
              >
                <Cell key={`cell`} fill={"#475569"} />
              </Pie>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
