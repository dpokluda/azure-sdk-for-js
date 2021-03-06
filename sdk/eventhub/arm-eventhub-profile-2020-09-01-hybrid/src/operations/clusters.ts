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
import * as Mappers from "../models/clustersMappers";
import * as Parameters from "../models/parameters";
import { EventHubManagementClientContext } from "../eventHubManagementClientContext";

/** Class representing a Clusters. */
export class Clusters {
  private readonly client: EventHubManagementClientContext;

  /**
   * Create a Clusters.
   * @param {EventHubManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventHubManagementClientContext) {
    this.client = client;
  }

  /**
   * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListAvailableClusterRegionResponse>
   */
  listAvailableClusterRegion(options?: msRest.RequestOptionsBase): Promise<Models.ClustersListAvailableClusterRegionResponse>;
  /**
   * @param callback The callback
   */
  listAvailableClusterRegion(callback: msRest.ServiceCallback<Models.AvailableClustersList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAvailableClusterRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableClustersList>): void;
  listAvailableClusterRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailableClustersList>, callback?: msRest.ServiceCallback<Models.AvailableClustersList>): Promise<Models.ClustersListAvailableClusterRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAvailableClusterRegionOperationSpec,
      callback) as Promise<Models.ClustersListAvailableClusterRegionResponse>;
  }

  /**
   * Lists the available Event Hubs Clusters within an ARM resource group
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ClustersListByResourceGroupResponse>;
  }

  /**
   * Gets the resource description of the specified Event Hubs Cluster.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.Cluster>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Cluster>): void;
  get(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Cluster>, callback?: msRest.ServiceCallback<Models.Cluster>): Promise<Models.ClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ClustersGetResponse>;
  }

  /**
   * Creates or updates an instance of an Event Hubs Cluster.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param parameters Parameters for creating a eventhub cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, clusterName: string, parameters: Models.Cluster, options?: msRest.RequestOptionsBase): Promise<Models.ClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersCreateOrUpdateResponse>;
  }

  /**
   * Modifies mutable properties on the Event Hubs Cluster. This operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param parameters The properties of the Event Hubs Cluster which should be updated.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersUpdateResponse>
   */
  update(resourceGroupName: string, clusterName: string, parameters: Models.Cluster, options?: msRest.RequestOptionsBase): Promise<Models.ClustersUpdateResponse> {
    return this.beginUpdate(resourceGroupName,clusterName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ClustersUpdateResponse>;
  }

  /**
   * Deletes an existing Event Hubs Cluster. This operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListNamespacesResponse>
   */
  listNamespaces(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListNamespacesResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param callback The callback
   */
  listNamespaces(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.EHNamespaceIdListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNamespaces(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EHNamespaceIdListResult>): void;
  listNamespaces(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EHNamespaceIdListResult>, callback?: msRest.ServiceCallback<Models.EHNamespaceIdListResult>): Promise<Models.ClustersListNamespacesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listNamespacesOperationSpec,
      callback) as Promise<Models.ClustersListNamespacesResponse>;
  }

  /**
   * Creates or updates an instance of an Event Hubs Cluster.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param parameters Parameters for creating a eventhub cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, clusterName: string, parameters: Models.Cluster, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Modifies mutable properties on the Event Hubs Cluster. This operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param parameters The properties of the Event Hubs Cluster which should be updated.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterName: string, parameters: Models.Cluster, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing Event Hubs Cluster. This operation is idempotent.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param clusterName The name of the Event Hubs Cluster.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists the available Event Hubs Clusters within an ARM resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ClustersListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ClustersListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterListResult>, callback?: msRest.ServiceCallback<Models.ClusterListResult>): Promise<Models.ClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ClustersListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAvailableClusterRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.EventHub/availableClusterRegions",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailableClustersList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNamespacesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/namespaces",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EHNamespaceIdListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Cluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Cluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Cluster
    },
    201: {
      bodyMapper: Mappers.Cluster
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
