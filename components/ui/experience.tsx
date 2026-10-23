"use client";

import { useSyncExternalStore } from "react";
import { profile } from "@/data/profile";

/** ระยะเวลาตั้งแต่ careerStart ถึงวันนี้ เช่น "2 ปี 9 เดือน" */
function formatExperience(now: Date) {
  const { year, month } = profile.careerStart;
  const totalMonths =
    (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return [years > 0 && `${years} ปี`, months > 0 && `${months} เดือน`]
    .filter(Boolean)
    .join(" ") || "น้อยกว่า 1 เดือน";
}

// ค่าตอน build ใช้แสดงก่อน แล้วคำนวณใหม่ในเบราว์เซอร์ ตัวเลขจึงอัปเดตเองโดยไม่ต้อง deploy ใหม่
const builtValue = formatExperience(new Date());
const subscribe = () => () => {};

export function Experience() {
  return useSyncExternalStore(
    subscribe,
    () => formatExperience(new Date()),
    () => builtValue,
  );
}
