import { BaseResource, CloudError } from "ms-rest-azure-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing Location.
 * Location information.
 *
 */
export interface Location {
    /**
     * @member {string} [id] The fully qualified ID of the location. For example,
     * /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus.
     */
    readonly id?: string;
    /**
     * @member {string} [subscriptionId] The subscription ID.
     */
    readonly subscriptionId?: string;
    /**
     * @member {string} [name] The location name.
     */
    readonly name?: string;
    /**
     * @member {string} [displayName] The display name of the location.
     */
    readonly displayName?: string;
    /**
     * @member {string} [latitude] The latitude of the location.
     */
    readonly latitude?: string;
    /**
     * @member {string} [longitude] The longitude of the location.
     */
    readonly longitude?: string;
}
/**
 * @interface
 * An interface representing SubscriptionPolicies.
 * Subscription policies.
 *
 */
export interface SubscriptionPolicies {
    /**
     * @member {string} [locationPlacementId] The subscription location placement
     * ID. The ID indicates which regions are visible for a subscription. For
     * example, a subscription with a location placement Id of Public_2014-09-01
     * has access to Azure public regions.
     */
    readonly locationPlacementId?: string;
    /**
     * @member {string} [quotaId] The subscription quota ID.
     */
    readonly quotaId?: string;
    /**
     * @member {SpendingLimit} [spendingLimit] The subscription spending limit.
     * Possible values include: 'On', 'Off', 'CurrentPeriodOff'
     */
    readonly spendingLimit?: SpendingLimit;
}
/**
 * @interface
 * An interface representing Subscription.
 * Subscription information.
 *
 */
export interface Subscription {
    /**
     * @member {string} [id] The fully qualified ID for the subscription. For
     * example, /subscriptions/00000000-0000-0000-0000-000000000000.
     */
    readonly id?: string;
    /**
     * @member {string} [subscriptionId] The subscription ID.
     */
    readonly subscriptionId?: string;
    /**
     * @member {string} [displayName] The subscription display name.
     */
    readonly displayName?: string;
    /**
     * @member {SubscriptionState} [state] The subscription state. Possible
     * values are Enabled, Warned, PastDue, Disabled, and Deleted. Possible
     * values include: 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
     */
    readonly state?: SubscriptionState;
    /**
     * @member {SubscriptionPolicies} [subscriptionPolicies] The subscription
     * policies.
     */
    subscriptionPolicies?: SubscriptionPolicies;
    /**
     * @member {string} [authorizationSource] The authorization source of the
     * request. Valid values are one or more combinations of Legacy, RoleBased,
     * Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
     */
    authorizationSource?: string;
}
/**
 * @interface
 * An interface representing TenantIdDescription.
 * Tenant Id information.
 *
 */
export interface TenantIdDescription {
    /**
     * @member {string} [id] The fully qualified ID of the tenant. For example,
     * /tenants/00000000-0000-0000-0000-000000000000.
     */
    readonly id?: string;
    /**
     * @member {string} [tenantId] The tenant ID. For example,
     * 00000000-0000-0000-0000-000000000000.
     */
    readonly tenantId?: string;
}
/**
 * @interface
 * An interface representing the LocationListResult.
 * Location list operation response.
 *
 * @extends Array<Location>
 */
export interface LocationListResult extends Array<Location> {
}
/**
 * @interface
 * An interface representing the SubscriptionListResult.
 * Subscription list operation response.
 *
 * @extends Array<Subscription>
 */
export interface SubscriptionListResult extends Array<Subscription> {
    /**
     * @member {string} nextLink The URL to get the next set of results.
     */
    nextLink: string;
}
/**
 * @interface
 * An interface representing the TenantListResult.
 * Tenant Ids information.
 *
 * @extends Array<TenantIdDescription>
 */
export interface TenantListResult extends Array<TenantIdDescription> {
    /**
     * @member {string} nextLink The URL to use for getting the next set of
     * results.
     */
    nextLink: string;
}
/**
 * Defines values for SubscriptionState.
 * Possible values include: 'Enabled', 'Warned', 'PastDue', 'Disabled',
 * 'Deleted'
 * @readonly
 * @enum {string}
 */
export declare enum SubscriptionState {
    Enabled = "Enabled",
    Warned = "Warned",
    PastDue = "PastDue",
    Disabled = "Disabled",
    Deleted = "Deleted",
}
/**
 * Defines values for SpendingLimit.
 * Possible values include: 'On', 'Off', 'CurrentPeriodOff'
 * @readonly
 * @enum {string}
 */
export declare enum SpendingLimit {
    On = "On",
    Off = "Off",
    CurrentPeriodOff = "CurrentPeriodOff",
}
