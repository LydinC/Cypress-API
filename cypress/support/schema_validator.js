import Ajv from "ajv";

export const validateSchema = (schema, response) => {
    const ajv = new Ajv();

    const validate = ajv.compile(schema);
    const isValid = validate(response.body);
  
    return isValid;
  };