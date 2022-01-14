const QueryBuilder = require("./QueryBuilder");


class API_Handler{
    constructor(credentials){
        this.credentials = credentials;
        this.QueryFunc = new QueryBuilder(credentials);
    }

    getQueryData(queryString, count = 100){
        return this.QueryFunc.get(queryString).top(parseInt(count)).filter("Sell_to_Customer_Name eq 'Micromedia Beheer b.v.'").send();
    }

};

module.exports = API_Handler;