import { Ajv } from "ajv";

const ajv = new Ajv({ allErrors: true });

const schema = {
    type: "object",
    properties: {
        team: { type: "string", minLength: 2 },
        service: { type: "string", minLength: 2 },
        name: { type: "string", minLength: 2 },
        version: { type: "string", minLength: 2 },
        env: { type: "string", minLength: 3 },
        cost_center: { type: "string", minLength: 1 },
        contact: { type: "string", minLength: 6 },
    },
    required: ["team", "service", "name", "version", "env", "cost_center", "contact"],
    additionalProperties: true,
}

export const validate = ajv.compile(schema)
