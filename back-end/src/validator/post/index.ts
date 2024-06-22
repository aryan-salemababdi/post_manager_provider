import { upsertPostSchema } from "../../db/schema";

export const postValidators = {
    upsert: <T>(body:T) =>upsertPostSchema.parse(body),
}