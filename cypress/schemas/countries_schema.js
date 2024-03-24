export const countriesSchema = 
{
    $id: "getCountriesSchema",
    "type": "object",
    "properties": {
      "get": {
        "type": "string"
      },
      "parameters": {
        "type": "array"
      },
      "errors": {
        "type": "array"
      },
      "results": {
        "type": "integer"
      },
      "response": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  }