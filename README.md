# DynamicsAPI
Commissioned by GROW Labs, CloudPrimero and De Klok Logistics.

## Description
This repository is the backend of De Klok Logistics Customer Portal. De Klok Logistics uses Microsoft Dynamics NAV to store their data of transport, documents, bills etcetera.
With this code we can use NTLM Authentication to connect to the API via url, username and password. In addition there is the possibility to GET, POST, CREATE and UPDATE data of the API.

The data is stored on the server that can run locally. 

## Installation
Make sure you have installed node V16.13.0.
Existing libraries required:
- httpntlm 1.7.7
- body-parser 1.19.1


## Usage
Fill in the right API credentials in routeHandler.js.
```javascript
credential = new Credential(
    url="url",
    username= "username",
    password= "password*", 
    domain="", 
    version="", 
    workstation=""
    );
```
After you did this you can run index.js inside your terminal.
```bash
node index.js
```
Output should be:
"Server is running on xxxx."

You can now type in your browser "https://localhost:xxxx/"

## Support
If there are any problems in the code or running.
Don't be afraid to send me an email: matthijskoelewijn@gmail.com

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache 2.0 License](https://github.com/matthijsisproh/DynamicsAPI/blob/main/LICENSE)
