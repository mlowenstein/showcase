/** Error entity for consistent error-handling. */
export interface AppError {
  message: string;
  header: string;
  type: string;
}

/** Entity representing an Contact instance */
export interface Contact {
  id: string;
  first: string;
  last: string;
  email: string;
  mobile: string;
}

/** Entity representing an Education instance */
export interface Education {
  id: string;
  name: string;
  to: Date | string;
  from: Date | string;
}

/** Entity representing an Experience instance */
export interface Experience {
  id: string;
  title: string;
  details: string;
  to?: Date | string;
  from?: Date | string;
}

export enum SkillCategory {
  NonTechnical = 0,
  Technical = 1,
}

/** Entity representing an Skills instance */
export interface Skill {
  id: string;
  name: string;
  details: string;
  strength: number;
  type: SkillCategory;
}

/** Entity representing an Project instance */
export interface Project {
  id: string;
  name: string;
  description: string;
  frameworks: string[];
  screenshots?: string[];
}

export interface IconLink {
  path: string;
  name: string;
  type?: string;
  display?: string;
  redirect?: string;
}
