export type Project = {
  title: string;
  type?: "งานประจำ" | "Freelance";
  role?: string;
  duration?: string;
  description: string;
  modules?: string[];
  stack: string[];
  /** ไฟล์รูปใน public/ แนะนำอัตราส่วน 16:10 */
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "ระบบการเงินมหาวิทยาลัย",
    type: "งานประจำ",
    description:
      "พัฒนาโมดูลหลักของระบบบัญชีการเงินระดับองค์กร หน้าบ้านใช้ Angular หลังบ้านใช้ .NET Core และฐานข้อมูล PostgreSQL",
    modules: [
      "ระบบตั้งหนี้ (Debit Creation)",
      "ระบบลดหนี้ (Credit Adjustment)",
      "ระบบเพิ่มหนี้ (Debit Addition)",
    ],
    stack: ["Angular", ".NET", "PostgreSQL"],
    image: "/work/university-finance.svg",
  },
  {
    title: "ระบบซื้อขายรถบรรทุก",
    type: "Freelance",
    role: "Full Stack Developer",
    description: "แพลตฟอร์มซื้อขายรถบรรทุก พร้อมระบบจัดการหนี้",
    modules: ["ตั้งหนี้", "ลดหนี้", "เพิ่มหนี้", "เพิ่มรถ"],
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    image: "/work/truck-marketplace.svg",
  },
  {
    title: "ปรับแต่ง Label Studio (NECTEC)",
    type: "Freelance",
    description:
      "เพิ่มฟีเจอร์ให้ Annotation Tool ตีกรอบบทความ และ mapping ความสัมพันธ์แบบ Parent–Child",
    stack: ["Label Studio"],
    image: "/work/label-studio.svg",
  },
  {
    title: "โปรแกรมฝึกภาษาอังกฤษ",
    type: "Freelance",
    role: "Frontend",
    description:
      "เชื่อมต่อและจัดการข้อมูลระหว่าง Frontend และ Backend ผ่าน REST API เพื่อรองรับการอัปเดตความคืบหน้าการเรียนรู้แบบเรียลไทม์ รวมถึงระบบประเมินผลจากเสียงและข้อความ",
    modules: ["ฝึกการพูดภาษาอังกฤษ", "สรุปคะแนนการฝึก"],
    stack: ["Next.js", "TypeScript", "MongoDB", "REST API"],
    image: "/work/english-speaking.svg",
  },
  {
    title: "ระบบรับสมัครนักศึกษาพยาบาล",
    type: "งานประจำ",
    description:
      "พัฒนาแพลตฟอร์มระบบรับสมัครและลงทะเบียนนักศึกษา ส่วนติดต่อผู้ใช้งาน (UI) เป็นแบบ Server-Side Rendering ที่มีประสิทธิภาพ พร้อมพัฒนา Business Logic ฝั่ง Backend ด้วย ASP.NET MVC และ C#",
    modules: [
      "ระบบจัดการหลักสูตร",
      "คณะ/ภาควิชา",
      "รายวิชา",
      "การติดตามสถานะผู้สมัคร",
      "การจัดตารางสัมภาษณ์",
      "การคัดเลือกผู้สมัคร",
      "ระบบสร้างรหัสนักศึกษาอัตโนมัติ",
    ],
    stack: ["ASP.NET MVC", "Razor", "C#", "PostgreSQL"],
    image: "/work/nursing-admission.svg",
  },
  {
    title: "ระบบจองคิวของร้านค้า",
    description:
      "พัฒนาระบบ Dashboard สำหรับร้านค้า (Merchant) และผู้ดูแลระบบ (Admin) แบบครบวงจร รองรับการจัดการนัดหมายร้านเสริมสวย การจัดการบริการ และข้อมูลลูกค้า เชื่อมต่อ SlipOK API ตรวจสอบสลิปการโอนเงินอัตโนมัติแบบเรียลไทม์ เพื่อป้องกันการปลอมแปลงหลักฐานการชำระเงิน รวมถึงดูแลระบบ (Maintenance) ติดตามประสิทธิภาพ (Performance Monitoring) และพัฒนาฟีเจอร์ใหม่อย่างต่อเนื่อง",
    modules: [
      "Dashboard ร้านค้า (Merchant)",
      "Dashboard ผู้ดูแลระบบ (Admin)",
      "จัดการนัดหมาย",
      "จัดการบริการ",
      "ข้อมูลลูกค้า",
      "ตรวจสอบสลิปอัตโนมัติ",
    ],
    stack: ["Next.js", "NestJS", "MongoDB", "SlipOK API"],
    image: "/work/salon-booking.svg",
    href: "https://chatmana.ai/",
  },
];
