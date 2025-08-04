
export interface StaffMember {
  id: number;
  name: string;
  designation: string;
  subject: string;
}

export interface Result {
  total: number | string;
  passed: number | string;
  failed?: number | string;
  compartment?: number | string;
  passPercentage: string;
  toppers: { name: string; score: string; }[];
}

export interface YearResult {
  class10: Result;
  class12: Result;
}

export interface ResultsData {
  [year: string]: YearResult;
}
