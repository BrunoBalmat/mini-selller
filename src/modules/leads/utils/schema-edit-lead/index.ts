import { z } from "zod";

export const schemaEditLead = z.object({
	email: z.email({ message: "Please enter a valid email address" }),
	status: z.string({ error: "Status is required" }),
});

export type SchemaEditLead = z.infer<typeof schemaEditLead>;
