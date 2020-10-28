/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/privateEndpointConnectionOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";

/** Class representing a PrivateEndpointConnectionOperations. */
export class PrivateEndpointConnectionOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Create a PrivateEndpointConnectionOperations.
   * @param {BatchManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the private endpoint connections in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionListByBatchAccountResponse>
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, options?: Models.PrivateEndpointConnectionListByBatchAccountOptionalParams): Promise<Models.PrivateEndpointConnectionListByBatchAccountResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param callback The callback
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, options: Models.PrivateEndpointConnectionListByBatchAccountOptionalParams, callback: msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>): void;
  listByBatchAccount(resourceGroupName: string, accountName: string, options?: Models.PrivateEndpointConnectionListByBatchAccountOptionalParams | msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>, callback?: msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>): Promise<Models.PrivateEndpointConnectionListByBatchAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listByBatchAccountOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionListByBatchAccountResponse>;
  }

  /**
   * Gets information about the specified private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   * within the account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionGetResponse>
   */
  get(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   * within the account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   * within the account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateEndpointConnection>): void;
  get(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateEndpointConnection>, callback?: msRest.ServiceCallback<Models.PrivateEndpointConnection>): Promise<Models.PrivateEndpointConnectionGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionGetResponse>;
  }

  /**
   * Updates the properties of an existing private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   * within the account.
   * @param parameters PrivateEndpointConnection properties that should be updated. Properties that
   * are supplied will be updated, any property not supplied will be unchanged.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, parameters: Models.PrivateEndpointConnection, options?: Models.PrivateEndpointConnectionUpdateOptionalParams): Promise<Models.PrivateEndpointConnectionUpdateResponse> {
    return this.beginUpdate(resourceGroupName,accountName,privateEndpointConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateEndpointConnectionUpdateResponse>;
  }

  /**
   * Updates the properties of an existing private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   * within the account.
   * @param parameters PrivateEndpointConnection properties that should be updated. Properties that
   * are supplied will be updated, any property not supplied will be unchanged.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, accountName: string, privateEndpointConnectionName: string, parameters: Models.PrivateEndpointConnection, options?: Models.PrivateEndpointConnectionBeginUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Lists all of the private endpoint connections in the specified account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateEndpointConnectionListByBatchAccountNextResponse>
   */
  listByBatchAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateEndpointConnectionListByBatchAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBatchAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBatchAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>): void;
  listByBatchAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>, callback?: msRest.ServiceCallback<Models.ListPrivateEndpointConnectionsResult>): Promise<Models.PrivateEndpointConnectionListByBatchAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBatchAccountNextOperationSpec,
      callback) as Promise<Models.PrivateEndpointConnectionListByBatchAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBatchAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxresults
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListPrivateEndpointConnectionsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.privateEndpointConnectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PrivateEndpointConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection,
      headersMapper: Mappers.PrivateEndpointConnectionUpdateHeaders
    },
    202: {
      headersMapper: Mappers.PrivateEndpointConnectionUpdateHeaders
    },
    204: {
      headersMapper: Mappers.PrivateEndpointConnectionUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PrivateEndpointConnectionUpdateHeaders
    }
  },
  serializer
};

const listByBatchAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListPrivateEndpointConnectionsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};