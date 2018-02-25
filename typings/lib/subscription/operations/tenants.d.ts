import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { SubscriptionClient } from "../subscriptionClient";
/** Class representing a Tenants. */
export declare class Tenants {
    private readonly client;
    /**
     * Create a Tenants.
     * @param {SubscriptionClient} client Reference to the service client.
     */
    constructor(client: SubscriptionClient);
    /**
     * Gets the tenants for your account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the tenants for your account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the tenants for your account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TenantListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TenantListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.TenantListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.TenantListResult>;
    list(callback: msRest.ServiceCallback<Models.TenantListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TenantListResult>): void;
    /**
     * Gets the tenants for your account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.TenantListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TenantListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.TenantListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.TenantListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TenantListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TenantListResult>): void;
}
