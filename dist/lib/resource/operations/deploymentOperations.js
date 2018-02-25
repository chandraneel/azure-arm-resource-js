/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as msRest from "ms-rest-js";
import * as Mappers from "../models/mappers";
var WebResource = msRest.WebResource;
/** Class representing a DeploymentOperations. */
var DeploymentOperations = /** @class */ (function () {
    /**
     * Create a DeploymentOperations.
     * @param {ResourceManagementClient} client Reference to the service client.
     */
    function DeploymentOperations(client) {
        this.client = client;
    }
    /**
     * Gets a deployments operation.
     *
     * @param {string} resourceGroupName The name of the resource group. The name
     * is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {string} operationId The ID of the operation to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    DeploymentOperations.prototype.getWithHttpOperationResponse = function (resourceGroupName, deploymentName, operationId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
                                throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceGroupName !== null && resourceGroupName !== undefined) {
                                if (resourceGroupName.length > 90) {
                                    throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
                                }
                                if (resourceGroupName.length < 1) {
                                    throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
                                }
                                if (resourceGroupName.match(/^[-\w\._\(\)]+$/) === null) {
                                    throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
                                }
                            }
                            if (deploymentName === null || deploymentName === undefined || typeof deploymentName.valueOf() !== 'string') {
                                throw new Error('deploymentName cannot be null or undefined and it must be of type string.');
                            }
                            if (deploymentName !== null && deploymentName !== undefined) {
                                if (deploymentName.length > 64) {
                                    throw new Error('"deploymentName" should satisfy the constraint - "MaxLength": 64');
                                }
                                if (deploymentName.length < 1) {
                                    throw new Error('"deploymentName" should satisfy the constraint - "MinLength": 1');
                                }
                                if (deploymentName.match(/^[-\w\._\(\)]+$/) === null) {
                                    throw new Error('"deploymentName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
                                }
                            }
                            if (operationId === null || operationId === undefined || typeof operationId.valueOf() !== 'string') {
                                throw new Error('operationId cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                                throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
                                throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{operationId}', encodeURIComponent(operationId));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'GET';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
                        }
                        if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                            httpRequest.headers['accept-language'] = this.client.acceptLanguage;
                        }
                        if (options && options.customHeaders) {
                            for (headerName in options.customHeaders) {
                                if (options.customHeaders.hasOwnProperty(headerName)) {
                                    httpRequest.headers[headerName] = options.customHeaders[headerName];
                                }
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200) {
                            error = new msRest.RestError(operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = msRest.stripRequest(httpRequest);
                            error.response = msRest.stripResponse(response);
                            parsedErrorResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedErrorResponse) {
                                    if (parsedErrorResponse.error)
                                        parsedErrorResponse = parsedErrorResponse.error;
                                    if (parsedErrorResponse.code)
                                        error.code = parsedErrorResponse.code;
                                    if (parsedErrorResponse.message)
                                        error.message = parsedErrorResponse.message;
                                }
                                if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                                    resultMapper = Mappers.CloudError;
                                    error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                                }
                            }
                            catch (defaultError) {
                                error.message = "Error \"" + defaultError.message + "\" occurred in deserializing the responseBody " +
                                    ("- \"" + operationRes.bodyAsText + "\" for the default response.");
                                return [2 /*return*/, Promise.reject(error)];
                            }
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        // Deserialize Response
                        if (statusCode === 200) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = Mappers.DeploymentOperation;
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = msRest.stripRequest(httpRequest);
                                deserializationError.response = msRest.stripResponse(response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets all deployments operations for a deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name
     * is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment with the operation
     * to get.
     *
     * @param {DeploymentOperationsListOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    DeploymentOperations.prototype.listWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, top, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        top = (options && options.top !== undefined) ? options.top : undefined;
                        // Validate
                        try {
                            if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
                                throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceGroupName !== null && resourceGroupName !== undefined) {
                                if (resourceGroupName.length > 90) {
                                    throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
                                }
                                if (resourceGroupName.length < 1) {
                                    throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
                                }
                                if (resourceGroupName.match(/^[-\w\._\(\)]+$/) === null) {
                                    throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
                                }
                            }
                            if (deploymentName === null || deploymentName === undefined || typeof deploymentName.valueOf() !== 'string') {
                                throw new Error('deploymentName cannot be null or undefined and it must be of type string.');
                            }
                            if (deploymentName !== null && deploymentName !== undefined) {
                                if (deploymentName.length > 64) {
                                    throw new Error('"deploymentName" should satisfy the constraint - "MaxLength": 64');
                                }
                                if (deploymentName.length < 1) {
                                    throw new Error('"deploymentName" should satisfy the constraint - "MinLength": 1');
                                }
                                if (deploymentName.match(/^[-\w\._\(\)]+$/) === null) {
                                    throw new Error('"deploymentName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
                                }
                            }
                            if (top !== null && top !== undefined && typeof top !== 'number') {
                                throw new Error('top must be of type number.');
                            }
                            if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                                throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
                                throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (top !== null && top !== undefined) {
                            queryParamsArray.push('$top=' + encodeURIComponent(top.toString()));
                        }
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'GET';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
                        }
                        if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                            httpRequest.headers['accept-language'] = this.client.acceptLanguage;
                        }
                        if (options && options.customHeaders) {
                            for (headerName in options.customHeaders) {
                                if (options.customHeaders.hasOwnProperty(headerName)) {
                                    httpRequest.headers[headerName] = options.customHeaders[headerName];
                                }
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200) {
                            error = new msRest.RestError(operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = msRest.stripRequest(httpRequest);
                            error.response = msRest.stripResponse(response);
                            parsedErrorResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedErrorResponse) {
                                    if (parsedErrorResponse.error)
                                        parsedErrorResponse = parsedErrorResponse.error;
                                    if (parsedErrorResponse.code)
                                        error.code = parsedErrorResponse.code;
                                    if (parsedErrorResponse.message)
                                        error.message = parsedErrorResponse.message;
                                }
                                if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                                    resultMapper = Mappers.CloudError;
                                    error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                                }
                            }
                            catch (defaultError) {
                                error.message = "Error \"" + defaultError.message + "\" occurred in deserializing the responseBody " +
                                    ("- \"" + operationRes.bodyAsText + "\" for the default response.");
                                return [2 /*return*/, Promise.reject(error)];
                            }
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        // Deserialize Response
                        if (statusCode === 200) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = Mappers.DeploymentOperationsListResult;
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = msRest.stripRequest(httpRequest);
                                deserializationError.response = msRest.stripResponse(response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets all deployments operations for a deployment.
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
    DeploymentOperations.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (nextPageLink === null || nextPageLink === undefined || typeof nextPageLink.valueOf() !== 'string') {
                                throw new Error('nextPageLink cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        requestUrl = '{nextLink}';
                        requestUrl = requestUrl.replace('{nextLink}', nextPageLink);
                        httpRequest = new WebResource();
                        httpRequest.method = 'GET';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
                        }
                        if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                            httpRequest.headers['accept-language'] = this.client.acceptLanguage;
                        }
                        if (options && options.customHeaders) {
                            for (headerName in options.customHeaders) {
                                if (options.customHeaders.hasOwnProperty(headerName)) {
                                    httpRequest.headers[headerName] = options.customHeaders[headerName];
                                }
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200) {
                            error = new msRest.RestError(operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = msRest.stripRequest(httpRequest);
                            error.response = msRest.stripResponse(response);
                            parsedErrorResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedErrorResponse) {
                                    if (parsedErrorResponse.error)
                                        parsedErrorResponse = parsedErrorResponse.error;
                                    if (parsedErrorResponse.code)
                                        error.code = parsedErrorResponse.code;
                                    if (parsedErrorResponse.message)
                                        error.message = parsedErrorResponse.message;
                                }
                                if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                                    resultMapper = Mappers.CloudError;
                                    error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                                }
                            }
                            catch (defaultError) {
                                error.message = "Error \"" + defaultError.message + "\" occurred in deserializing the responseBody " +
                                    ("- \"" + operationRes.bodyAsText + "\" for the default response.");
                                return [2 /*return*/, Promise.reject(error)];
                            }
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        // Deserialize Response
                        if (statusCode === 200) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = Mappers.DeploymentOperationsListResult;
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = msRest.stripRequest(httpRequest);
                                deserializationError.response = msRest.stripResponse(response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    DeploymentOperations.prototype.get = function (resourceGroupName, deploymentName, operationId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(resourceGroupName, deploymentName, operationId, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getWithHttpOperationResponse(resourceGroupName, deploymentName, operationId, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    DeploymentOperations.prototype.list = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    DeploymentOperations.prototype.listNext = function (nextPageLink, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listNextWithHttpOperationResponse(nextPageLink, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return DeploymentOperations;
}());
export { DeploymentOperations };
//# sourceMappingURL=deploymentOperations.js.map