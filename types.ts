export interface Bilingual {
  en: string;
  hi: string;
}

export interface StaffMember {
  id: number;
  name: string;
  designation: Bilingual;
  subject: Bilingual;
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

export interface NavLink {
    href: string;
    label: Bilingual;
}

export interface Facility {
    title: Bilingual;
    description: Bilingual;
    imageUrl: string;
    icon: string;
}

export interface GalleryImage {
    src: string;
    alt: Bilingual;
}