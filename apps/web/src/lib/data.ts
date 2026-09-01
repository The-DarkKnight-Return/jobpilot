export type ApplicationStatus =
  | "applied"
  | "screening"
  | "interview"
  | "offer"
  | "rejected";

export type Application = {
  id: string;
  company: string;
  role: string;
  status: ApplicationStatus;
  date: string;
};

export const applications: Application[] = [
  {
    id: "1",
    company: "Google",
    role: "Frontend Developer",
    status: "interview",
    date: "2026-06-01",
  },
  {
    id: "2",
    company: "Amazon",
    role: "Full Stack Developer",
    status: "applied",
    date: "2026-05-28",
  },
  {
    id: "3",
    company: "Startup X",
    role: "React Developer",
    status: "rejected",
    date: "2026-05-20",
  },
];
