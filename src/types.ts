export interface ProjectInfo {
  name: string;
  email: string;
  subject: string;
  projectTitle: string;
  description: string;
  sem: string;
  plan: string;
  collegeName?: string;
  customizations?: string;
  teamInfo?: string;
  status: "pending" | "completed" | "cancelled";
  id?: string;
  googleDriveLink?: string;
}
