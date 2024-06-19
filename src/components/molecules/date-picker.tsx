import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function CustomDate() {
  return (
    <Calendar
      aria-label="Date (Max Date Value)"
      defaultValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone())}
    />
  );
}
