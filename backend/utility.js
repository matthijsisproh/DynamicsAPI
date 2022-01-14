module.exports = {
  isJson: (string) => {
    try {
      JSON.parse(string);
      return true;
    } catch (err) {
      return false;
    }
  },

  createMessage(code) {
    switch (code) {
      case "ECONNREFUSED":
        return {
          nl: "Verbinding geweigerd.",
          en: "Connection refused.",
        };
      case "www-authenticate":
        return {
          nl: "Server heeft niet kunnen authenticeren",
          en: "Server could not authenticate.",
        };
      case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        return {
          nl: "Server certificaat niet geldig",
          en: "Server's certificate is not valid.",
        };
      case "ETIMEDOUT":
        return {
          nl: "Verbinding verbroken.",
          en: "Connection timed out.",
        };
      case 200:
        return {
          nl: "Succesvolle verbinding.",
          en: "Operation has been completed successfully.",
        };
      case 201:
        return {
          nl: "Succesvolle verbinding.",
          en: "Operation has been completed successfully.",
        };

      case 204:
        return {
          nl: "Succesvolle verbinding.",
          en: "Operation has been completed successfully.",
        };
      case 400:
        return {
          nl: "De server heeft ongeldige data ontvangen.",
          en: "Invalid data has been sent to the server",
        };
      case 401:
        return {
          nl: "Authenticatie mislukt.",
          en: "Authentication failed.",
        };
      case 403:
        return {
          nl: "Je hebt geen rechten om deze actie uit te voeren.",
          en: "You have insufficient permission to apply your request.",
        };

      case 404:
        return {
          nl: "Opgegeven melding niet gevonden.",
          en: "Specified record not found.",
        };
      case 405:
        return {
          nl: "Ingediende verzoek is niet geldig.",
          en: "Your request is not valid.",
        };
      case 412:
        return {
          nl: "Ingediende verzoek kan niet worden toegepast.",
          en: "Your request cannot be applied.",
        };
      case 413:
        return {
          nl: "Ingediende verzoek is te groot om te verwerken.",
          en: "Request length is too large to process.",
        };
      case 429:
        return {
          nl: "Je hebt te veel verzoeken ingediend.",
          en: "You have sent too many requests.",
        };

      case 500:
        return {
          nl: "Interne serverfout opgetreden.",
          en: "Internal server error occurred.",
        };

      case 501:
        return {
          nl: "Jouw verzoek is niet geimplementeerd.",
          en: "Your request is not implemented.",
        };

      case 503:
        return {
          nl: "Web API service is niet beschikbaar.",
          en: "Web API service is not available.",
        };

      case "ENOTFOUND":
        return {
          nl: "Server adres is niet gevonden.",
          en: "Server address not found.",
        };
      default:
        return {
          nl: "Onverwachte fout opgetreden. ",
          en: "Unexpected error occurred.",
        };
    }
  },
};
