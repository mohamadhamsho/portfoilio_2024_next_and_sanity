import { type SchemaTypeDefinition } from "sanity";
import skills from "./schemas/skills";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills],
};
