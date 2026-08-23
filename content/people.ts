import { generatedPeople } from "@/content/people.generated";

export type Person = {
  name: string;
  role: string;
  image: string;
  alt: string;
  email?: string;
  bio?: string;
};

// Generated automatically from portrait filenames before each deployment.
export const people: Person[] = [...generatedPeople];
