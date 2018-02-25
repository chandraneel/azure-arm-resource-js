/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";
import { RequestOptionsBase } from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing DeploymentExtendedFilter.
 * Deployment filter.
 *
 */
export interface DeploymentExtendedFilter {
  /**
   * @member {string} [provisioningState] The provisioning state.
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing GenericResourceFilter.
 * Resource filter.
 *
 */
export interface GenericResourceFilter {
  /**
   * @member {string} [resourceType] The resource type.
   */
  resourceType?: string;
  /**
   * @member {string} [tagname] The tag name.
   */
  tagname?: string;
  /**
   * @member {string} [tagvalue] The tag value.
   */
  tagvalue?: string;
}

/**
 * @interface
 * An interface representing ResourceGroupFilter.
 * Resource group filter.
 *
 */
export interface ResourceGroupFilter {
  /**
   * @member {string} [tagName] The tag name.
   */
  tagName?: string;
  /**
   * @member {string} [tagValue] The tag value.
   */
  tagValue?: string;
}

/**
 * @interface
 * An interface representing TemplateLink.
 * Entity representing the reference to the template.
 *
 */
export interface TemplateLink {
  /**
   * @member {string} uri The URI of the template to deploy.
   */
  uri: string;
  /**
   * @member {string} [contentVersion] If included, must match the
   * ContentVersion in the template.
   */
  contentVersion?: string;
}

/**
 * @interface
 * An interface representing ParametersLink.
 * Entity representing the reference to the deployment paramaters.
 *
 */
export interface ParametersLink {
  /**
   * @member {string} uri The URI of the parameters file.
   */
  uri: string;
  /**
   * @member {string} [contentVersion] If included, must match the
   * ContentVersion in the template.
   */
  contentVersion?: string;
}

/**
 * @interface
 * An interface representing DebugSetting.
 */
export interface DebugSetting {
  /**
   * @member {string} [detailLevel] Specifies the type of information to log
   * for debugging. The permitted values are none, requestContent,
   * responseContent, or both requestContent and responseContent separated by a
   * comma. The default is none. When setting this value, carefully consider
   * the type of information you are passing in during deployment. By logging
   * information about the request or response, you could potentially expose
   * sensitive data that is retrieved through the deployment operations.
   */
  detailLevel?: string;
}

/**
 * @interface
 * An interface representing DeploymentProperties.
 * Deployment properties.
 *
 */
export interface DeploymentProperties {
  /**
   * @member {any} [template] The template content. You use this element when
   * you want to pass the template syntax directly in the request rather than
   * link to an existing template. It can be a JObject or well-formed JSON
   * string. Use either the templateLink property or the template property, but
   * not both.
   */
  template?: any;
  /**
   * @member {TemplateLink} [templateLink] The URI of the template. Use either
   * the templateLink property or the template property, but not both.
   */
  templateLink?: TemplateLink;
  /**
   * @member {any} [parameters] Name and value pairs that define the deployment
   * parameters for the template. You use this element when you want to provide
   * the parameter values directly in the request rather than link to an
   * existing parameter file. Use either the parametersLink property or the
   * parameters property, but not both. It can be a JObject or a well formed
   * JSON string.
   */
  parameters?: any;
  /**
   * @member {ParametersLink} [parametersLink] The URI of parameters file. You
   * use this element to link to an existing parameters file. Use either the
   * parametersLink property or the parameters property, but not both.
   */
  parametersLink?: ParametersLink;
  /**
   * @member {DeploymentMode} mode The mode that is used to deploy resources.
   * This value can be either Incremental or Complete. In Incremental mode,
   * resources are deployed without deleting existing resources that are not
   * included in the template. In Complete mode, resources are deployed and
   * existing resources in the resource group that are not included in the
   * template are deleted. Be careful when using Complete mode as you may
   * unintentionally delete resources. Possible values include: 'Incremental',
   * 'Complete'
   */
  mode: DeploymentMode;
  /**
   * @member {DebugSetting} [debugSetting] The debug setting of the deployment.
   */
  debugSetting?: DebugSetting;
}

/**
 * @interface
 * An interface representing Deployment.
 * Deployment operation parameters.
 *
 */
export interface Deployment {
  /**
   * @member {DeploymentProperties} properties The deployment properties.
   */
  properties: DeploymentProperties;
}

/**
 * @interface
 * An interface representing DeploymentExportResult.
 * The deployment export result.
 *
 */
export interface DeploymentExportResult {
  /**
   * @member {any} [template] The template content.
   */
  template?: any;
}

/**
 * @interface
 * An interface representing ResourceManagementErrorWithDetails.
 * The detailed error message of resource management.
 *
 */
export interface ResourceManagementErrorWithDetails {
  /**
   * @member {string} [code] The error code returned when exporting the
   * template.
   */
  readonly code?: string;
  /**
   * @member {string} [message] The error message describing the export error.
   */
  readonly message?: string;
  /**
   * @member {string} [target] The target of the error.
   */
  readonly target?: string;
  /**
   * @member {ResourceManagementErrorWithDetails[]} [details] Validation error.
   */
  readonly details?: ResourceManagementErrorWithDetails[];
}

/**
 * @interface
 * An interface representing AliasPathType.
 * The type of the paths for alias.
 *
 */
export interface AliasPathType {
  /**
   * @member {string} [path] The path of an alias.
   */
  path?: string;
  /**
   * @member {string[]} [apiVersions] The API versions.
   */
  apiVersions?: string[];
}

/**
 * @interface
 * An interface representing AliasType.
 * The alias type.
 *
 */
export interface AliasType {
  /**
   * @member {string} [name] The alias name.
   */
  name?: string;
  /**
   * @member {AliasPathType[]} [paths] The paths for an alias.
   */
  paths?: AliasPathType[];
}

/**
 * @interface
 * An interface representing ProviderResourceType.
 * Resource type managed by the resource provider.
 *
 */
export interface ProviderResourceType {
  /**
   * @member {string} [resourceType] The resource type.
   */
  resourceType?: string;
  /**
   * @member {string[]} [locations] The collection of locations where this
   * resource type can be created.
   */
  locations?: string[];
  /**
   * @member {AliasType[]} [aliases] The aliases that are supported by this
   * resource type.
   */
  aliases?: AliasType[];
  /**
   * @member {string[]} [apiVersions] The API version.
   */
  apiVersions?: string[];
  /**
   * @member {{ [propertyName: string]: string }} [properties] The properties.
   */
  properties?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing Provider.
 * Resource provider information.
 *
 */
export interface Provider {
  /**
   * @member {string} [id] The provider ID.
   */
  readonly id?: string;
  /**
   * @member {string} [namespace] The namespace of the resource provider.
   */
  namespace?: string;
  /**
   * @member {string} [registrationState] The registration state of the
   * provider.
   */
  readonly registrationState?: string;
  /**
   * @member {ProviderResourceType[]} [resourceTypes] The collection of
   * provider resource types.
   */
  readonly resourceTypes?: ProviderResourceType[];
}

/**
 * @interface
 * An interface representing BasicDependency.
 * Deployment dependency information.
 *
 */
export interface BasicDependency {
  /**
   * @member {string} [id] The ID of the dependency.
   */
  id?: string;
  /**
   * @member {string} [resourceType] The dependency resource type.
   */
  resourceType?: string;
  /**
   * @member {string} [resourceName] The dependency resource name.
   */
  resourceName?: string;
}

/**
 * @interface
 * An interface representing Dependency.
 * Deployment dependency information.
 *
 */
export interface Dependency {
  /**
   * @member {BasicDependency[]} [dependsOn] The list of dependencies.
   */
  dependsOn?: BasicDependency[];
  /**
   * @member {string} [id] The ID of the dependency.
   */
  id?: string;
  /**
   * @member {string} [resourceType] The dependency resource type.
   */
  resourceType?: string;
  /**
   * @member {string} [resourceName] The dependency resource name.
   */
  resourceName?: string;
}

/**
 * @interface
 * An interface representing DeploymentPropertiesExtended.
 * Deployment properties with additional details.
 *
 */
export interface DeploymentPropertiesExtended {
  /**
   * @member {string} [provisioningState] The state of the provisioning.
   */
  readonly provisioningState?: string;
  /**
   * @member {string} [correlationId] The correlation ID of the deployment.
   */
  readonly correlationId?: string;
  /**
   * @member {Date} [timestamp] The timestamp of the template deployment.
   */
  readonly timestamp?: Date;
  /**
   * @member {any} [outputs] Key/value pairs that represent deploymentoutput.
   */
  outputs?: any;
  /**
   * @member {Provider[]} [providers] The list of resource providers needed for
   * the deployment.
   */
  providers?: Provider[];
  /**
   * @member {Dependency[]} [dependencies] The list of deployment dependencies.
   */
  dependencies?: Dependency[];
  /**
   * @member {any} [template] The template content. Use only one of Template or
   * TemplateLink.
   */
  template?: any;
  /**
   * @member {TemplateLink} [templateLink] The URI referencing the template.
   * Use only one of Template or TemplateLink.
   */
  templateLink?: TemplateLink;
  /**
   * @member {any} [parameters] Deployment parameters. Use only one of
   * Parameters or ParametersLink.
   */
  parameters?: any;
  /**
   * @member {ParametersLink} [parametersLink] The URI referencing the
   * parameters. Use only one of Parameters or ParametersLink.
   */
  parametersLink?: ParametersLink;
  /**
   * @member {DeploymentMode} [mode] The deployment mode. Possible values are
   * Incremental and Complete. Possible values include: 'Incremental',
   * 'Complete'
   */
  mode?: DeploymentMode;
  /**
   * @member {DebugSetting} [debugSetting] The debug setting of the deployment.
   */
  debugSetting?: DebugSetting;
}

/**
 * @interface
 * An interface representing DeploymentValidateResult.
 * Information from validate template deployment response.
 *
 */
export interface DeploymentValidateResult {
  /**
   * @member {ResourceManagementErrorWithDetails} [error] Validation error.
   */
  error?: ResourceManagementErrorWithDetails;
  /**
   * @member {DeploymentPropertiesExtended} [properties] The template
   * deployment properties.
   */
  properties?: DeploymentPropertiesExtended;
}

/**
 * @interface
 * An interface representing DeploymentExtended.
 * Deployment information.
 *
 */
export interface DeploymentExtended {
  /**
   * @member {string} [id] The ID of the deployment.
   */
  id?: string;
  /**
   * @member {string} name The name of the deployment.
   */
  name: string;
  /**
   * @member {DeploymentPropertiesExtended} [properties] Deployment properties.
   */
  properties?: DeploymentPropertiesExtended;
}

/**
 * @interface
 * An interface representing Plan.
 * Plan for the resource.
 *
 */
export interface Plan {
  /**
   * @member {string} [name] The plan ID.
   */
  name?: string;
  /**
   * @member {string} [publisher] The publisher ID.
   */
  publisher?: string;
  /**
   * @member {string} [product] The offer ID.
   */
  product?: string;
  /**
   * @member {string} [promotionCode] The promotion code.
   */
  promotionCode?: string;
  /**
   * @member {string} [version] The plan's version.
   */
  version?: string;
}

/**
 * @interface
 * An interface representing Sku.
 * SKU for the resource.
 *
 */
export interface Sku {
  /**
   * @member {string} [name] The SKU name.
   */
  name?: string;
  /**
   * @member {string} [tier] The SKU tier.
   */
  tier?: string;
  /**
   * @member {string} [size] The SKU size.
   */
  size?: string;
  /**
   * @member {string} [family] The SKU family.
   */
  family?: string;
  /**
   * @member {string} [model] The SKU model.
   */
  model?: string;
  /**
   * @member {number} [capacity] The SKU capacity.
   */
  capacity?: number;
}

/**
 * @interface
 * An interface representing Identity.
 * Identity for the resource.
 *
 */
export interface Identity {
  /**
   * @member {string} [principalId] The principal ID of resource identity.
   */
  readonly principalId?: string;
  /**
   * @member {string} [tenantId] The tenant ID of resource.
   */
  readonly tenantId?: string;
  /**
   * @member {ResourceIdentityType} [type] The identity type. Possible values
   * include: 'SystemAssigned'
   */
  type?: ResourceIdentityType;
}

/**
 * @interface
 * An interface representing Resource.
 * Resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource ID
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing GenericResource.
 * Resource information.
 *
 * @extends Resource
 */
export interface GenericResource extends Resource {
  /**
   * @member {Plan} [plan] The plan of the resource.
   */
  plan?: Plan;
  /**
   * @member {any} [properties] The resource properties.
   */
  properties?: any;
  /**
   * @member {string} [kind] The kind of the resource.
   */
  kind?: string;
  /**
   * @member {string} [managedBy] ID of the resource that manages this
   * resource.
   */
  managedBy?: string;
  /**
   * @member {Sku} [sku] The SKU of the resource.
   */
  sku?: Sku;
  /**
   * @member {Identity} [identity] The identity of the resource.
   */
  identity?: Identity;
}

/**
 * @interface
 * An interface representing ResourceGroupProperties.
 * The resource group properties.
 *
 */
export interface ResourceGroupProperties {
  /**
   * @member {string} [provisioningState] The provisioning state.
   */
  readonly provisioningState?: string;
}

/**
 * @interface
 * An interface representing ResourceGroup.
 * Resource group information.
 *
 */
export interface ResourceGroup {
  /**
   * @member {string} [id] The ID of the resource group.
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the resource group.
   */
  name?: string;
  /**
   * @member {ResourceGroupProperties} [properties]
   */
  properties?: ResourceGroupProperties;
  /**
   * @member {string} location The location of the resource group. It cannot be
   * changed after the resource group has been created. It must be one of the
   * supported Azure locations.
   */
  location: string;
  /**
   * @member {string} [managedBy] The ID of the resource that manages this
   * resource group.
   */
  managedBy?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] The tags attached to
   * the resource group.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ResourceGroupPatchable.
 * Resource group information.
 *
 */
export interface ResourceGroupPatchable {
  /**
   * @member {string} [name] The name of the resource group.
   */
  name?: string;
  /**
   * @member {ResourceGroupProperties} [properties]
   */
  properties?: ResourceGroupProperties;
  /**
   * @member {string} [managedBy] The ID of the resource that manages this
   * resource group.
   */
  managedBy?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] The tags attached to
   * the resource group.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ResourcesMoveInfo.
 * Parameters of move resources.
 *
 */
export interface ResourcesMoveInfo {
  /**
   * @member {string[]} [resources] The IDs of the resources.
   */
  resources?: string[];
  /**
   * @member {string} [targetResourceGroup] The target resource group.
   */
  targetResourceGroup?: string;
}

/**
 * @interface
 * An interface representing ExportTemplateRequest.
 * Export resource group template request parameters.
 *
 */
export interface ExportTemplateRequest {
  /**
   * @member {string[]} [resources] The IDs of the resources. The only
   * supported string currently is '*' (all resources). Future updates will
   * support exporting specific resources.
   */
  resources?: string[];
  /**
   * @member {string} [options] The export template options. Supported values
   * include 'IncludeParameterDefaultValue', 'IncludeComments' or
   * 'IncludeParameterDefaultValue, IncludeComments
   */
  options?: string;
}

/**
 * @interface
 * An interface representing TagCount.
 * Tag count.
 *
 */
export interface TagCount {
  /**
   * @member {string} [type] Type of count.
   */
  type?: string;
  /**
   * @member {number} [value] Value of count.
   */
  value?: number;
}

/**
 * @interface
 * An interface representing TagValue.
 * Tag information.
 *
 */
export interface TagValue {
  /**
   * @member {string} [id] The tag ID.
   */
  id?: string;
  /**
   * @member {string} [tagValue] The tag value.
   */
  tagValue?: string;
  /**
   * @member {TagCount} [count] The tag value count.
   */
  count?: TagCount;
}

/**
 * @interface
 * An interface representing TagDetails.
 * Tag details.
 *
 */
export interface TagDetails {
  /**
   * @member {string} [id] The tag ID.
   */
  id?: string;
  /**
   * @member {string} [tagName] The tag name.
   */
  tagName?: string;
  /**
   * @member {TagCount} [count] The total number of resources that use the
   * resource tag. When a tag is initially created and has no associated
   * resources, the value is 0.
   */
  count?: TagCount;
  /**
   * @member {TagValue[]} [values] The list of tag values.
   */
  values?: TagValue[];
}

/**
 * @interface
 * An interface representing TargetResource.
 * Target resource.
 *
 */
export interface TargetResource {
  /**
   * @member {string} [id] The ID of the resource.
   */
  id?: string;
  /**
   * @member {string} [resourceName] The name of the resource.
   */
  resourceName?: string;
  /**
   * @member {string} [resourceType] The type of the resource.
   */
  resourceType?: string;
}

/**
 * @interface
 * An interface representing HttpMessage.
 * HTTP message.
 *
 */
export interface HttpMessage {
  /**
   * @member {any} [content] HTTP message content.
   */
  content?: any;
}

/**
 * @interface
 * An interface representing DeploymentOperationProperties.
 * Deployment operation properties.
 *
 */
export interface DeploymentOperationProperties {
  /**
   * @member {string} [provisioningState] The state of the provisioning.
   */
  readonly provisioningState?: string;
  /**
   * @member {Date} [timestamp] The date and time of the operation.
   */
  readonly timestamp?: Date;
  /**
   * @member {string} [serviceRequestId] Deployment operation service request
   * id.
   */
  readonly serviceRequestId?: string;
  /**
   * @member {string} [statusCode] Operation status code.
   */
  readonly statusCode?: string;
  /**
   * @member {any} [statusMessage] Operation status message.
   */
  readonly statusMessage?: any;
  /**
   * @member {TargetResource} [targetResource] The target resource.
   */
  readonly targetResource?: TargetResource;
  /**
   * @member {HttpMessage} [request] The HTTP request message.
   */
  readonly request?: HttpMessage;
  /**
   * @member {HttpMessage} [response] The HTTP response message.
   */
  readonly response?: HttpMessage;
}

/**
 * @interface
 * An interface representing DeploymentOperation.
 * Deployment operation information.
 *
 */
export interface DeploymentOperation {
  /**
   * @member {string} [id] Full deployment operation ID.
   */
  readonly id?: string;
  /**
   * @member {string} [operationId] Deployment operation ID.
   */
  readonly operationId?: string;
  /**
   * @member {DeploymentOperationProperties} [properties] Deployment
   * properties.
   */
  properties?: DeploymentOperationProperties;
}

/**
 * @interface
 * An interface representing ResourceProviderOperationDisplayProperties.
 * Resource provider operation's display properties.
 *
 */
export interface ResourceProviderOperationDisplayProperties {
  /**
   * @member {string} [publisher] Operation description.
   */
  publisher?: string;
  /**
   * @member {string} [provider] Operation provider.
   */
  provider?: string;
  /**
   * @member {string} [resource] Operation resource.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation.
   */
  operation?: string;
  /**
   * @member {string} [description] Operation description.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing SubResource.
 * Sub-resource.
 *
 * @extends BaseResource
 */
export interface SubResource extends BaseResource {
  /**
   * @member {string} [id] Resource ID
   */
  id?: string;
}

/**
 * @interface
 * An interface representing ResourceGroupExportResult.
 * Resource group export result.
 *
 */
export interface ResourceGroupExportResult {
  /**
   * @member {any} [template] The template content.
   */
  template?: any;
  /**
   * @member {ResourceManagementErrorWithDetails} [error] The error.
   */
  error?: ResourceManagementErrorWithDetails;
}

/**
 * @interface
 * An interface representing DeploymentsListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DeploymentsListByResourceGroupOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For
   * example, you can use $filter=provisioningState eq '{state}'.
   */
  filter?: string;
  /**
   * @member {number} [top] The number of results to get. If null is passed,
   * returns all deployments.
   */
  top?: number;
}

/**
 * @interface
 * An interface representing ProvidersListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ProvidersListOptionalParams extends RequestOptionsBase {
  /**
   * @member {number} [top] The number of results to return. If null is passed
   * returns all deployments.
   */
  top?: number;
  /**
   * @member {string} [expand] The properties to include in the results. For
   * example, use &$expand=metadata in the query string to retrieve resource
   * provider metadata. To include property aliases in response, use
   * $expand=resourceTypes/aliases.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing ProvidersGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ProvidersGetOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [expand] The $expand query parameter. For example, to
   * include property aliases in response, use $expand=resourceTypes/aliases.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing ResourcesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ResourcesListByResourceGroupOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation.
   */
  filter?: string;
  /**
   * @member {string} [expand] The $expand query parameter
   */
  expand?: string;
  /**
   * @member {number} [top] The number of results to return. If null is passed,
   * returns all resources.
   */
  top?: number;
}

/**
 * @interface
 * An interface representing ResourcesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ResourcesListOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation.
   */
  filter?: string;
  /**
   * @member {string} [expand] The $expand query parameter.
   */
  expand?: string;
  /**
   * @member {number} [top] The number of results to return. If null is passed,
   * returns all resource groups.
   */
  top?: number;
}

/**
 * @interface
 * An interface representing ResourceGroupsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ResourceGroupsListOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation.
   */
  filter?: string;
  /**
   * @member {number} [top] The number of results to return. If null is passed,
   * returns all resource groups.
   */
  top?: number;
}

/**
 * @interface
 * An interface representing DeploymentOperationsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DeploymentOperationsListOptionalParams extends RequestOptionsBase {
  /**
   * @member {number} [top] The number of results to return.
   */
  top?: number;
}


/**
 * @interface
 * An interface representing the DeploymentListResult.
 * List of deployments.
 *
 * @extends Array<DeploymentExtended>
 */
export interface DeploymentListResult extends Array<DeploymentExtended> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ProviderListResult.
 * List of resource providers.
 *
 * @extends Array<Provider>
 */
export interface ProviderListResult extends Array<Provider> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ResourceListResult.
 * List of resource groups.
 *
 * @extends Array<GenericResource>
 */
export interface ResourceListResult extends Array<GenericResource> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ResourceGroupListResult.
 * List of resource groups.
 *
 * @extends Array<ResourceGroup>
 */
export interface ResourceGroupListResult extends Array<ResourceGroup> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the TagsListResult.
 * List of subscription tags.
 *
 * @extends Array<TagDetails>
 */
export interface TagsListResult extends Array<TagDetails> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the DeploymentOperationsListResult.
 * List of deployment operations.
 *
 * @extends Array<DeploymentOperation>
 */
export interface DeploymentOperationsListResult extends Array<DeploymentOperation> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  readonly nextLink?: string;
}

/**
 * Defines values for DeploymentMode.
 * Possible values include: 'Incremental', 'Complete'
 * @readonly
 * @enum {string}
 */
export enum DeploymentMode {
  Incremental = 'Incremental',
  Complete = 'Complete',
}

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export enum ResourceIdentityType {
  SystemAssigned = 'SystemAssigned',
}
