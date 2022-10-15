export type SessionLead = {
  id?: number;
  name: string;
};

export type Student = {
  id?: number;
  name: string;
  session_lead_id: number;
};

export type Session = {
  id?: number;
  title: string;
  session_date: Date;
};

export type SessionStudent = {
  id?: number;
  session_id: number;
  student_id: number;
};
