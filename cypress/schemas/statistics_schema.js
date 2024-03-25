export const statisticsSchema = 
{
    "type": "object",
    "properties": {
      "errors": {
        "type": "array"
      },
      "get": {
        "type": "string"
      },
      "parameters": {
        "type": "array"
      },
      "response": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "cases": {
              "type": "object"
            },
            "country": {
              "type": "string"
            },
            "day": {
              "format": "date",
              "type": "string"
            },
            "deaths": {
              "type": "object"
            },
            "tests": {
              "type": "object"
            },
            "time": {
              "format": "date-time",
              "type": "string"
            }
          }
        }
      },
      "results": {
        "type": "integer"
      }
    }
  }