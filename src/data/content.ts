import { csvToObjects } from "./csv";
import requirementsCsv from "./requirements.csv?raw";
import storiesCsv from "./user_stories.csv?raw";

export type RequirementType = "functional" | "non-functional";

export interface Requirement {
  id: string;
  type: RequirementType;
  description: string;
}

export interface UserStory {
  id: string;
  description: string;
  acceptanceCriteria: string[];
}

type RawRequirement = { Id: string; type: string; description: string } & Record<string, string>;
type RawStory = { ID: string; description: string; "acceptance criteria": string } & Record<string, string>;

export const requirements: Requirement[] = csvToObjects<RawRequirement>(
  requirementsCsv
).map((r) => ({
  id: r.Id,
  type:
    r.type.toLowerCase().includes("non") || r.type.toLowerCase() === "no funcional"
      ? "non-functional"
      : "functional",
  description: r.description,
}));

export const functionalRequirements = requirements.filter(
  (r) => r.type === "functional"
);
export const nonFunctionalRequirements = requirements.filter(
  (r) => r.type === "non-functional"
);

export const userStories: UserStory[] = csvToObjects<RawStory>(storiesCsv).map(
  (s) => ({
    id: s.ID,
    description: s.description,
    acceptanceCriteria: s["acceptance criteria"]
      .split(";")
      .map((c) => c.trim())
      .filter((c) => c.length > 0),
  })
);
