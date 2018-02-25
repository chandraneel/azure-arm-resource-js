import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as operations from "./operations";
declare class SubscriptionClient extends msRestAzure.AzureServiceClient {
    credentials: msRest.ServiceClientCredentials;
    apiVersion: string;
    acceptLanguage: string;
    longRunningOperationRetryTimeout: number;
    generateClientRequestId: boolean;
    baseUri: string;
    subscriptions: operations.Subscriptions;
    tenants: operations.Tenants;
    serializer: msRest.Serializer;
    /**
     * @class
     * Initializes a new instance of the SubscriptionClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
     * {@link https://github.github.io/fetch/#Request Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions);
}
export { SubscriptionClient, Models as SubscriptionModels, Mappers as SubscriptionMappers };
