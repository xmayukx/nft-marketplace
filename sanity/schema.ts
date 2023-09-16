import { type SchemaTypeDefinition } from "sanity";

import creator from "./schemas/creator";
import collection from "./schemas/collection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collection, creator],
};
