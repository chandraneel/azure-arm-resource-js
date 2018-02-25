var resourceManagementClient =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = msRest;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudError", function() { return CloudError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResource", function() { return BaseResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentExtendedFilter", function() { return DeploymentExtendedFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericResourceFilter", function() { return GenericResourceFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupFilter", function() { return ResourceGroupFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateLink", function() { return TemplateLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersLink", function() { return ParametersLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugSetting", function() { return DebugSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentProperties", function() { return DeploymentProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deployment", function() { return Deployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentExportResult", function() { return DeploymentExportResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceManagementErrorWithDetails", function() { return ResourceManagementErrorWithDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AliasPathType", function() { return AliasPathType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AliasType", function() { return AliasType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderResourceType", function() { return ProviderResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDependency", function() { return BasicDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dependency", function() { return Dependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentPropertiesExtended", function() { return DeploymentPropertiesExtended; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentValidateResult", function() { return DeploymentValidateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentExtended", function() { return DeploymentExtended; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plan", function() { return Plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sku", function() { return Sku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericResource", function() { return GenericResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupProperties", function() { return ResourceGroupProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroup", function() { return ResourceGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupPatchable", function() { return ResourceGroupPatchable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesMoveInfo", function() { return ResourcesMoveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportTemplateRequest", function() { return ExportTemplateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagCount", function() { return TagCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagValue", function() { return TagValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDetails", function() { return TagDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetResource", function() { return TargetResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMessage", function() { return HttpMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentOperationProperties", function() { return DeploymentOperationProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentOperation", function() { return DeploymentOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceProviderOperationDisplayProperties", function() { return ResourceProviderOperationDisplayProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubResource", function() { return SubResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupExportResult", function() { return ResourceGroupExportResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentsListByResourceGroupOptionalParams", function() { return DeploymentsListByResourceGroupOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersListOptionalParams", function() { return ProvidersListOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersGetOptionalParams", function() { return ProvidersGetOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesListByResourceGroupOptionalParams", function() { return ResourcesListByResourceGroupOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesListOptionalParams", function() { return ResourcesListOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupsListOptionalParams", function() { return ResourceGroupsListOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentOperationsListOptionalParams", function() { return DeploymentOperationsListOptionalParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentListResult", function() { return DeploymentListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderListResult", function() { return ProviderListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceListResult", function() { return ResourceListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupListResult", function() { return ResourceGroupListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListResult", function() { return TagsListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentOperationsListResult", function() { return DeploymentOperationsListResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__);
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

var CloudError = __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__["CloudErrorMapper"];
var BaseResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__["BaseResourceMapper"];
var DeploymentExtendedFilter = {
    required: false,
    serializedName: 'DeploymentExtendedFilter',
    type: {
        name: 'Composite',
        className: 'DeploymentExtendedFilter',
        modelProperties: {
            provisioningState: {
                required: false,
                serializedName: 'provisioningState',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var GenericResourceFilter = {
    required: false,
    serializedName: 'GenericResourceFilter',
    type: {
        name: 'Composite',
        className: 'GenericResourceFilter',
        modelProperties: {
            resourceType: {
                required: false,
                serializedName: 'resourceType',
                type: {
                    name: 'String'
                }
            },
            tagname: {
                required: false,
                serializedName: 'tagname',
                type: {
                    name: 'String'
                }
            },
            tagvalue: {
                required: false,
                serializedName: 'tagvalue',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ResourceGroupFilter = {
    required: false,
    serializedName: 'ResourceGroupFilter',
    type: {
        name: 'Composite',
        className: 'ResourceGroupFilter',
        modelProperties: {
            tagName: {
                required: false,
                serializedName: 'tagName',
                type: {
                    name: 'String'
                }
            },
            tagValue: {
                required: false,
                serializedName: 'tagValue',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var TemplateLink = {
    required: false,
    serializedName: 'TemplateLink',
    type: {
        name: 'Composite',
        className: 'TemplateLink',
        modelProperties: {
            uri: {
                required: true,
                serializedName: 'uri',
                type: {
                    name: 'String'
                }
            },
            contentVersion: {
                required: false,
                serializedName: 'contentVersion',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ParametersLink = {
    required: false,
    serializedName: 'ParametersLink',
    type: {
        name: 'Composite',
        className: 'ParametersLink',
        modelProperties: {
            uri: {
                required: true,
                serializedName: 'uri',
                type: {
                    name: 'String'
                }
            },
            contentVersion: {
                required: false,
                serializedName: 'contentVersion',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var DebugSetting = {
    required: false,
    serializedName: 'DebugSetting',
    type: {
        name: 'Composite',
        className: 'DebugSetting',
        modelProperties: {
            detailLevel: {
                required: false,
                serializedName: 'detailLevel',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var DeploymentProperties = {
    required: false,
    serializedName: 'DeploymentProperties',
    type: {
        name: 'Composite',
        className: 'DeploymentProperties',
        modelProperties: {
            template: {
                required: false,
                serializedName: 'template',
                type: {
                    name: 'Object'
                }
            },
            templateLink: {
                required: false,
                serializedName: 'templateLink',
                type: {
                    name: 'Composite',
                    className: 'TemplateLink'
                }
            },
            parameters: {
                required: false,
                serializedName: 'parameters',
                type: {
                    name: 'Object'
                }
            },
            parametersLink: {
                required: false,
                serializedName: 'parametersLink',
                type: {
                    name: 'Composite',
                    className: 'ParametersLink'
                }
            },
            mode: {
                required: true,
                serializedName: 'mode',
                type: {
                    name: 'Enum',
                    allowedValues: ['Incremental', 'Complete']
                }
            },
            debugSetting: {
                required: false,
                serializedName: 'debugSetting',
                type: {
                    name: 'Composite',
                    className: 'DebugSetting'
                }
            }
        }
    }
};
var Deployment = {
    required: false,
    serializedName: 'Deployment',
    type: {
        name: 'Composite',
        className: 'Deployment',
        modelProperties: {
            properties: {
                required: true,
                serializedName: 'properties',
                type: {
                    name: 'Composite',
                    className: 'DeploymentProperties'
                }
            }
        }
    }
};
var DeploymentExportResult = {
    required: false,
    serializedName: 'DeploymentExportResult',
    type: {
        name: 'Composite',
        className: 'DeploymentExportResult',
        modelProperties: {
            template: {
                required: false,
                serializedName: 'template',
                type: {
                    name: 'Object'
                }
            }
        }
    }
};
var ResourceManagementErrorWithDetails = {
    required: false,
    serializedName: 'ResourceManagementErrorWithDetails',
    type: {
        name: 'Composite',
        className: 'ResourceManagementErrorWithDetails',
        modelProperties: {
            code: {
                required: false,
                readOnly: true,
                serializedName: 'code',
                type: {
                    name: 'String'
                }
            },
            message: {
                required: false,
                readOnly: true,
                serializedName: 'message',
                type: {
                    name: 'String'
                }
            },
            target: {
                required: false,
                readOnly: true,
                serializedName: 'target',
                type: {
                    name: 'String'
                }
            },
            details: {
                required: false,
                readOnly: true,
                serializedName: 'details',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ResourceManagementErrorWithDetailsElementType',
                        type: {
                            name: 'Composite',
                            className: 'ResourceManagementErrorWithDetails'
                        }
                    }
                }
            }
        }
    }
};
var AliasPathType = {
    required: false,
    serializedName: 'AliasPathType',
    type: {
        name: 'Composite',
        className: 'AliasPathType',
        modelProperties: {
            path: {
                required: false,
                serializedName: 'path',
                type: {
                    name: 'String'
                }
            },
            apiVersions: {
                required: false,
                serializedName: 'apiVersions',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            }
        }
    }
};
var AliasType = {
    required: false,
    serializedName: 'AliasType',
    type: {
        name: 'Composite',
        className: 'AliasType',
        modelProperties: {
            name: {
                required: false,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            paths: {
                required: false,
                serializedName: 'paths',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'AliasPathTypeElementType',
                        type: {
                            name: 'Composite',
                            className: 'AliasPathType'
                        }
                    }
                }
            }
        }
    }
};
var ProviderResourceType = {
    required: false,
    serializedName: 'ProviderResourceType',
    type: {
        name: 'Composite',
        className: 'ProviderResourceType',
        modelProperties: {
            resourceType: {
                required: false,
                serializedName: 'resourceType',
                type: {
                    name: 'String'
                }
            },
            locations: {
                required: false,
                serializedName: 'locations',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            aliases: {
                required: false,
                serializedName: 'aliases',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'AliasTypeElementType',
                        type: {
                            name: 'Composite',
                            className: 'AliasType'
                        }
                    }
                }
            },
            apiVersions: {
                required: false,
                serializedName: 'apiVersions',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            }
        }
    }
};
var Provider = {
    required: false,
    serializedName: 'Provider',
    type: {
        name: 'Composite',
        className: 'Provider',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            namespace: {
                required: false,
                serializedName: 'namespace',
                type: {
                    name: 'String'
                }
            },
            registrationState: {
                required: false,
                readOnly: true,
                serializedName: 'registrationState',
                type: {
                    name: 'String'
                }
            },
            resourceTypes: {
                required: false,
                readOnly: true,
                serializedName: 'resourceTypes',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ProviderResourceTypeElementType',
                        type: {
                            name: 'Composite',
                            className: 'ProviderResourceType'
                        }
                    }
                }
            }
        }
    }
};
var BasicDependency = {
    required: false,
    serializedName: 'BasicDependency',
    type: {
        name: 'Composite',
        className: 'BasicDependency',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            resourceType: {
                required: false,
                serializedName: 'resourceType',
                type: {
                    name: 'String'
                }
            },
            resourceName: {
                required: false,
                serializedName: 'resourceName',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var Dependency = {
    required: false,
    serializedName: 'Dependency',
    type: {
        name: 'Composite',
        className: 'Dependency',
        modelProperties: {
            dependsOn: {
                required: false,
                serializedName: 'dependsOn',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'BasicDependencyElementType',
                        type: {
                            name: 'Composite',
                            className: 'BasicDependency'
                        }
                    }
                }
            },
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            resourceType: {
                required: false,
                serializedName: 'resourceType',
                type: {
                    name: 'String'
                }
            },
            resourceName: {
                required: false,
                serializedName: 'resourceName',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var DeploymentPropertiesExtended = {
    required: false,
    serializedName: 'DeploymentPropertiesExtended',
    type: {
        name: 'Composite',
        className: 'DeploymentPropertiesExtended',
        modelProperties: {
            provisioningState: {
                required: false,
                readOnly: true,
                serializedName: 'provisioningState',
                type: {
                    name: 'String'
                }
            },
            correlationId: {
                required: false,
                readOnly: true,
                serializedName: 'correlationId',
                type: {
                    name: 'String'
                }
            },
            timestamp: {
                required: false,
                readOnly: true,
                serializedName: 'timestamp',
                type: {
                    name: 'DateTime'
                }
            },
            outputs: {
                required: false,
                serializedName: 'outputs',
                type: {
                    name: 'Object'
                }
            },
            providers: {
                required: false,
                serializedName: 'providers',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ProviderElementType',
                        type: {
                            name: 'Composite',
                            className: 'Provider'
                        }
                    }
                }
            },
            dependencies: {
                required: false,
                serializedName: 'dependencies',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'DependencyElementType',
                        type: {
                            name: 'Composite',
                            className: 'Dependency'
                        }
                    }
                }
            },
            template: {
                required: false,
                serializedName: 'template',
                type: {
                    name: 'Object'
                }
            },
            templateLink: {
                required: false,
                serializedName: 'templateLink',
                type: {
                    name: 'Composite',
                    className: 'TemplateLink'
                }
            },
            parameters: {
                required: false,
                serializedName: 'parameters',
                type: {
                    name: 'Object'
                }
            },
            parametersLink: {
                required: false,
                serializedName: 'parametersLink',
                type: {
                    name: 'Composite',
                    className: 'ParametersLink'
                }
            },
            mode: {
                required: false,
                serializedName: 'mode',
                type: {
                    name: 'Enum',
                    allowedValues: ['Incremental', 'Complete']
                }
            },
            debugSetting: {
                required: false,
                serializedName: 'debugSetting',
                type: {
                    name: 'Composite',
                    className: 'DebugSetting'
                }
            }
        }
    }
};
var DeploymentValidateResult = {
    required: false,
    serializedName: 'DeploymentValidateResult',
    type: {
        name: 'Composite',
        className: 'DeploymentValidateResult',
        modelProperties: {
            error: {
                required: false,
                serializedName: 'error',
                type: {
                    name: 'Composite',
                    className: 'ResourceManagementErrorWithDetails'
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Composite',
                    className: 'DeploymentPropertiesExtended'
                }
            }
        }
    }
};
var DeploymentExtended = {
    required: false,
    serializedName: 'DeploymentExtended',
    type: {
        name: 'Composite',
        className: 'DeploymentExtended',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: true,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Composite',
                    className: 'DeploymentPropertiesExtended'
                }
            }
        }
    }
};
var Plan = {
    required: false,
    serializedName: 'Plan',
    type: {
        name: 'Composite',
        className: 'Plan',
        modelProperties: {
            name: {
                required: false,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            publisher: {
                required: false,
                serializedName: 'publisher',
                type: {
                    name: 'String'
                }
            },
            product: {
                required: false,
                serializedName: 'product',
                type: {
                    name: 'String'
                }
            },
            promotionCode: {
                required: false,
                serializedName: 'promotionCode',
                type: {
                    name: 'String'
                }
            },
            version: {
                required: false,
                serializedName: 'version',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var Sku = {
    required: false,
    serializedName: 'Sku',
    type: {
        name: 'Composite',
        className: 'Sku',
        modelProperties: {
            name: {
                required: false,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            tier: {
                required: false,
                serializedName: 'tier',
                type: {
                    name: 'String'
                }
            },
            size: {
                required: false,
                serializedName: 'size',
                type: {
                    name: 'String'
                }
            },
            family: {
                required: false,
                serializedName: 'family',
                type: {
                    name: 'String'
                }
            },
            model: {
                required: false,
                serializedName: 'model',
                type: {
                    name: 'String'
                }
            },
            capacity: {
                required: false,
                serializedName: 'capacity',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var Identity = {
    required: false,
    serializedName: 'Identity',
    type: {
        name: 'Composite',
        className: 'Identity',
        modelProperties: {
            principalId: {
                required: false,
                readOnly: true,
                serializedName: 'principalId',
                type: {
                    name: 'String'
                }
            },
            tenantId: {
                required: false,
                readOnly: true,
                serializedName: 'tenantId',
                type: {
                    name: 'String'
                }
            },
            type: {
                required: false,
                serializedName: 'type',
                type: {
                    name: 'Enum',
                    allowedValues: ['SystemAssigned']
                }
            }
        }
    }
};
var Resource = {
    required: false,
    serializedName: 'Resource',
    type: {
        name: 'Composite',
        className: 'Resource',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: false,
                readOnly: true,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            type: {
                required: false,
                readOnly: true,
                serializedName: 'type',
                type: {
                    name: 'String'
                }
            },
            location: {
                required: false,
                serializedName: 'location',
                type: {
                    name: 'String'
                }
            },
            tags: {
                required: false,
                serializedName: 'tags',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            }
        }
    }
};
var GenericResource = {
    required: false,
    serializedName: 'GenericResource',
    type: {
        name: 'Composite',
        className: 'GenericResource',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: false,
                readOnly: true,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            type: {
                required: false,
                readOnly: true,
                serializedName: 'type',
                type: {
                    name: 'String'
                }
            },
            location: {
                required: false,
                serializedName: 'location',
                type: {
                    name: 'String'
                }
            },
            tags: {
                required: false,
                serializedName: 'tags',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            plan: {
                required: false,
                serializedName: 'plan',
                type: {
                    name: 'Composite',
                    className: 'Plan'
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Object'
                }
            },
            kind: {
                required: false,
                serializedName: 'kind',
                constraints: {
                    Pattern: '^[-\w\._,\(\)]+$'
                },
                type: {
                    name: 'String'
                }
            },
            managedBy: {
                required: false,
                serializedName: 'managedBy',
                type: {
                    name: 'String'
                }
            },
            sku: {
                required: false,
                serializedName: 'sku',
                type: {
                    name: 'Composite',
                    className: 'Sku'
                }
            },
            identity: {
                required: false,
                serializedName: 'identity',
                type: {
                    name: 'Composite',
                    className: 'Identity'
                }
            }
        }
    }
};
var ResourceGroupProperties = {
    required: false,
    serializedName: 'ResourceGroupProperties',
    type: {
        name: 'Composite',
        className: 'ResourceGroupProperties',
        modelProperties: {
            provisioningState: {
                required: false,
                readOnly: true,
                serializedName: 'provisioningState',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ResourceGroup = {
    required: false,
    serializedName: 'ResourceGroup',
    type: {
        name: 'Composite',
        className: 'ResourceGroup',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: false,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Composite',
                    className: 'ResourceGroupProperties'
                }
            },
            location: {
                required: true,
                serializedName: 'location',
                type: {
                    name: 'String'
                }
            },
            managedBy: {
                required: false,
                serializedName: 'managedBy',
                type: {
                    name: 'String'
                }
            },
            tags: {
                required: false,
                serializedName: 'tags',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            }
        }
    }
};
var ResourceGroupPatchable = {
    required: false,
    serializedName: 'ResourceGroupPatchable',
    type: {
        name: 'Composite',
        className: 'ResourceGroupPatchable',
        modelProperties: {
            name: {
                required: false,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Composite',
                    className: 'ResourceGroupProperties'
                }
            },
            managedBy: {
                required: false,
                serializedName: 'managedBy',
                type: {
                    name: 'String'
                }
            },
            tags: {
                required: false,
                serializedName: 'tags',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            }
        }
    }
};
var ResourcesMoveInfo = {
    required: false,
    serializedName: 'ResourcesMoveInfo',
    type: {
        name: 'Composite',
        className: 'ResourcesMoveInfo',
        modelProperties: {
            resources: {
                required: false,
                serializedName: 'resources',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            targetResourceGroup: {
                required: false,
                serializedName: 'targetResourceGroup',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ExportTemplateRequest = {
    required: false,
    serializedName: 'ExportTemplateRequest',
    type: {
        name: 'Composite',
        className: 'ExportTemplateRequest',
        modelProperties: {
            resources: {
                required: false,
                serializedName: 'resources',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            options: {
                required: false,
                serializedName: 'options',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var TagCount = {
    required: false,
    serializedName: 'TagCount',
    type: {
        name: 'Composite',
        className: 'TagCount',
        modelProperties: {
            type: {
                required: false,
                serializedName: 'type',
                type: {
                    name: 'String'
                }
            },
            value: {
                required: false,
                serializedName: 'value',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var TagValue = {
    required: false,
    serializedName: 'TagValue',
    type: {
        name: 'Composite',
        className: 'TagValue',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            tagValue: {
                required: false,
                serializedName: 'tagValue',
                type: {
                    name: 'String'
                }
            },
            count: {
                required: false,
                serializedName: 'count',
                type: {
                    name: 'Composite',
                    className: 'TagCount'
                }
            }
        }
    }
};
var TagDetails = {
    required: false,
    serializedName: 'TagDetails',
    type: {
        name: 'Composite',
        className: 'TagDetails',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            tagName: {
                required: false,
                serializedName: 'tagName',
                type: {
                    name: 'String'
                }
            },
            count: {
                required: false,
                serializedName: 'count',
                type: {
                    name: 'Composite',
                    className: 'TagCount'
                }
            },
            values: {
                required: false,
                serializedName: 'values',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'TagValueElementType',
                        type: {
                            name: 'Composite',
                            className: 'TagValue'
                        }
                    }
                }
            }
        }
    }
};
var TargetResource = {
    required: false,
    serializedName: 'TargetResource',
    type: {
        name: 'Composite',
        className: 'TargetResource',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            resourceName: {
                required: false,
                serializedName: 'resourceName',
                type: {
                    name: 'String'
                }
            },
            resourceType: {
                required: false,
                serializedName: 'resourceType',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var HttpMessage = {
    required: false,
    serializedName: 'HttpMessage',
    type: {
        name: 'Composite',
        className: 'HttpMessage',
        modelProperties: {
            content: {
                required: false,
                serializedName: 'content',
                type: {
                    name: 'Object'
                }
            }
        }
    }
};
var DeploymentOperationProperties = {
    required: false,
    serializedName: 'DeploymentOperationProperties',
    type: {
        name: 'Composite',
        className: 'DeploymentOperationProperties',
        modelProperties: {
            provisioningState: {
                required: false,
                readOnly: true,
                serializedName: 'provisioningState',
                type: {
                    name: 'String'
                }
            },
            timestamp: {
                required: false,
                readOnly: true,
                serializedName: 'timestamp',
                type: {
                    name: 'DateTime'
                }
            },
            serviceRequestId: {
                required: false,
                readOnly: true,
                serializedName: 'serviceRequestId',
                type: {
                    name: 'String'
                }
            },
            statusCode: {
                required: false,
                readOnly: true,
                serializedName: 'statusCode',
                type: {
                    name: 'String'
                }
            },
            statusMessage: {
                required: false,
                readOnly: true,
                serializedName: 'statusMessage',
                type: {
                    name: 'Object'
                }
            },
            targetResource: {
                required: false,
                readOnly: true,
                serializedName: 'targetResource',
                type: {
                    name: 'Composite',
                    className: 'TargetResource'
                }
            },
            request: {
                required: false,
                readOnly: true,
                serializedName: 'request',
                type: {
                    name: 'Composite',
                    className: 'HttpMessage'
                }
            },
            response: {
                required: false,
                readOnly: true,
                serializedName: 'response',
                type: {
                    name: 'Composite',
                    className: 'HttpMessage'
                }
            }
        }
    }
};
var DeploymentOperation = {
    required: false,
    serializedName: 'DeploymentOperation',
    type: {
        name: 'Composite',
        className: 'DeploymentOperation',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            operationId: {
                required: false,
                readOnly: true,
                serializedName: 'operationId',
                type: {
                    name: 'String'
                }
            },
            properties: {
                required: false,
                serializedName: 'properties',
                type: {
                    name: 'Composite',
                    className: 'DeploymentOperationProperties'
                }
            }
        }
    }
};
var ResourceProviderOperationDisplayProperties = {
    required: false,
    serializedName: 'ResourceProviderOperationDisplayProperties',
    type: {
        name: 'Composite',
        className: 'ResourceProviderOperationDisplayProperties',
        modelProperties: {
            publisher: {
                required: false,
                serializedName: 'publisher',
                type: {
                    name: 'String'
                }
            },
            provider: {
                required: false,
                serializedName: 'provider',
                type: {
                    name: 'String'
                }
            },
            resource: {
                required: false,
                serializedName: 'resource',
                type: {
                    name: 'String'
                }
            },
            operation: {
                required: false,
                serializedName: 'operation',
                type: {
                    name: 'String'
                }
            },
            description: {
                required: false,
                serializedName: 'description',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var SubResource = {
    required: false,
    serializedName: 'SubResource',
    type: {
        name: 'Composite',
        className: 'SubResource',
        modelProperties: {
            id: {
                required: false,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ResourceGroupExportResult = {
    required: false,
    serializedName: 'ResourceGroupExportResult',
    type: {
        name: 'Composite',
        className: 'ResourceGroupExportResult',
        modelProperties: {
            template: {
                required: false,
                serializedName: 'template',
                type: {
                    name: 'Object'
                }
            },
            error: {
                required: false,
                serializedName: 'error',
                type: {
                    name: 'Composite',
                    className: 'ResourceManagementErrorWithDetails'
                }
            }
        }
    }
};
var DeploymentsListByResourceGroupOptionalParams = {
    required: false,
    serializedName: 'ListByResourceGroupOptions',
    type: {
        name: 'Composite',
        className: 'DeploymentsListByResourceGroupOptionalParams',
        modelProperties: {
            filter: {
                required: false,
                serializedName: '$filter',
                type: {
                    name: 'String'
                }
            },
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var ProvidersListOptionalParams = {
    required: false,
    serializedName: 'ListOptions',
    type: {
        name: 'Composite',
        className: 'ProvidersListOptionalParams',
        modelProperties: {
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            },
            expand: {
                required: false,
                serializedName: '$expand',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ProvidersGetOptionalParams = {
    required: false,
    serializedName: 'GetOptions',
    type: {
        name: 'Composite',
        className: 'ProvidersGetOptionalParams',
        modelProperties: {
            expand: {
                required: false,
                serializedName: '$expand',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ResourcesListByResourceGroupOptionalParams = {
    required: false,
    serializedName: 'ListByResourceGroupOptions',
    type: {
        name: 'Composite',
        className: 'ResourcesListByResourceGroupOptionalParams',
        modelProperties: {
            filter: {
                required: false,
                serializedName: '$filter',
                type: {
                    name: 'String'
                }
            },
            expand: {
                required: false,
                serializedName: '$expand',
                type: {
                    name: 'String'
                }
            },
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var ResourcesListOptionalParams = {
    required: false,
    serializedName: 'ListOptions',
    type: {
        name: 'Composite',
        className: 'ResourcesListOptionalParams',
        modelProperties: {
            filter: {
                required: false,
                serializedName: '$filter',
                type: {
                    name: 'String'
                }
            },
            expand: {
                required: false,
                serializedName: '$expand',
                type: {
                    name: 'String'
                }
            },
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var ResourceGroupsListOptionalParams = {
    required: false,
    serializedName: 'ListOptions',
    type: {
        name: 'Composite',
        className: 'ResourceGroupsListOptionalParams',
        modelProperties: {
            filter: {
                required: false,
                serializedName: '$filter',
                type: {
                    name: 'String'
                }
            },
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var DeploymentOperationsListOptionalParams = {
    required: false,
    serializedName: 'ListOptions',
    type: {
        name: 'Composite',
        className: 'DeploymentOperationsListOptionalParams',
        modelProperties: {
            top: {
                required: false,
                serializedName: '$top',
                type: {
                    name: 'Number'
                }
            }
        }
    }
};
var DeploymentListResult = {
    required: false,
    serializedName: 'DeploymentListResult',
    type: {
        name: 'Composite',
        className: 'DeploymentListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'DeploymentExtendedElementType',
                        type: {
                            name: 'Composite',
                            className: 'DeploymentExtended'
                        }
                    }
                }
            },
            nextLink: {
                required: false,
                readOnly: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ProviderListResult = {
    required: false,
    serializedName: 'ProviderListResult',
    type: {
        name: 'Composite',
        className: 'ProviderListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ProviderElementType',
                        type: {
                            name: 'Composite',
                            className: 'Provider'
                        }
                    }
                }
            },
            nextLink: {
                required: false,
                readOnly: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ResourceListResult = {
    required: false,
    serializedName: 'ResourceListResult',
    type: {
        name: 'Composite',
        className: 'ResourceListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'GenericResourceElementType',
                        type: {
                            name: 'Composite',
                            className: 'GenericResource'
                        }
                    }
                }
            },
            nextLink: {
                required: false,
                readOnly: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var ResourceGroupListResult = {
    required: false,
    serializedName: 'ResourceGroupListResult',
    type: {
        name: 'Composite',
        className: 'ResourceGroupListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ResourceGroupElementType',
                        type: {
                            name: 'Composite',
                            className: 'ResourceGroup'
                        }
                    }
                }
            },
            nextLink: {
                required: false,
                readOnly: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var TagsListResult = {
    required: false,
    serializedName: 'TagsListResult',
    type: {
        name: 'Composite',
        className: 'TagsListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'TagDetailsElementType',
                        type: {
                            name: 'Composite',
                            className: 'TagDetails'
                        }
                    }
                }
            },
            nextLink: {
                required: false,
                readOnly: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var DeploymentOperationsListResult = {
    required: false,
    serializedName: 'DeploymentOperationsListResult',
    type: {
        name: 'Composite',
        className: 'DeploymentOperationsListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'DeploymentOperationElementType',
                        type: {
                            name: 'Composite',
                            className: 'DeploymentOperation'
                        }
                    }
                }
            },
            nextLink: {
                required: false,
                readOnly: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = msRestAzure;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudError", function() { return CloudError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResource", function() { return BaseResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPolicies", function() { return SubscriptionPolicies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantIdDescription", function() { return TenantIdDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationListResult", function() { return LocationListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListResult", function() { return SubscriptionListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantListResult", function() { return TenantListResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__);
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

var CloudError = __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__["CloudErrorMapper"];
var BaseResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_azure_js__["BaseResourceMapper"];
var Location = {
    required: false,
    serializedName: 'Location',
    type: {
        name: 'Composite',
        className: 'Location',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            subscriptionId: {
                required: false,
                readOnly: true,
                serializedName: 'subscriptionId',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: false,
                readOnly: true,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            displayName: {
                required: false,
                readOnly: true,
                serializedName: 'displayName',
                type: {
                    name: 'String'
                }
            },
            latitude: {
                required: false,
                readOnly: true,
                serializedName: 'latitude',
                type: {
                    name: 'String'
                }
            },
            longitude: {
                required: false,
                readOnly: true,
                serializedName: 'longitude',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var SubscriptionPolicies = {
    required: false,
    serializedName: 'SubscriptionPolicies',
    type: {
        name: 'Composite',
        className: 'SubscriptionPolicies',
        modelProperties: {
            locationPlacementId: {
                required: false,
                readOnly: true,
                serializedName: 'locationPlacementId',
                type: {
                    name: 'String'
                }
            },
            quotaId: {
                required: false,
                readOnly: true,
                serializedName: 'quotaId',
                type: {
                    name: 'String'
                }
            },
            spendingLimit: {
                required: false,
                readOnly: true,
                serializedName: 'spendingLimit',
                type: {
                    name: 'Enum',
                    allowedValues: ['On', 'Off', 'CurrentPeriodOff']
                }
            }
        }
    }
};
var Subscription = {
    required: false,
    serializedName: 'Subscription',
    type: {
        name: 'Composite',
        className: 'Subscription',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            subscriptionId: {
                required: false,
                readOnly: true,
                serializedName: 'subscriptionId',
                type: {
                    name: 'String'
                }
            },
            displayName: {
                required: false,
                readOnly: true,
                serializedName: 'displayName',
                type: {
                    name: 'String'
                }
            },
            state: {
                required: false,
                readOnly: true,
                serializedName: 'state',
                type: {
                    name: 'Enum',
                    allowedValues: ['Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted']
                }
            },
            subscriptionPolicies: {
                required: false,
                serializedName: 'subscriptionPolicies',
                type: {
                    name: 'Composite',
                    className: 'SubscriptionPolicies'
                }
            },
            authorizationSource: {
                required: false,
                serializedName: 'authorizationSource',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var TenantIdDescription = {
    required: false,
    serializedName: 'TenantIdDescription',
    type: {
        name: 'Composite',
        className: 'TenantIdDescription',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            tenantId: {
                required: false,
                readOnly: true,
                serializedName: 'tenantId',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var LocationListResult = {
    required: false,
    serializedName: 'LocationListResult',
    type: {
        name: 'Composite',
        className: 'LocationListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'LocationElementType',
                        type: {
                            name: 'Composite',
                            className: 'Location'
                        }
                    }
                }
            }
        }
    }
};
var SubscriptionListResult = {
    required: false,
    serializedName: 'SubscriptionListResult',
    type: {
        name: 'Composite',
        className: 'SubscriptionListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'SubscriptionElementType',
                        type: {
                            name: 'Composite',
                            className: 'Subscription'
                        }
                    }
                }
            },
            nextLink: {
                required: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
var TenantListResult = {
    required: false,
    serializedName: 'TenantListResult',
    type: {
        name: 'Composite',
        className: 'TenantListResult',
        modelProperties: {
            value: {
                required: false,
                serializedName: '',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'TenantIdDescriptionElementType',
                        type: {
                            name: 'Composite',
                            className: 'TenantIdDescription'
                        }
                    }
                }
            },
            nextLink: {
                required: true,
                serializedName: 'nextLink',
                type: {
                    name: 'String'
                }
            }
        }
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

// exports.ManagementLockClient = require('./lock/managementLockClient');
// exports.FeatureClient = require('./feature/featureClient');
exports.SubscriptionClient = __webpack_require__(5);
exports.ResourceManagementClient = __webpack_require__(10);
// exports.PolicyClient = require('./policy/policyClient');
// exports.ManagementLinkClient = require('./link/managementLinkClient');
// exports.ManagementGroupsClient = require('./management/managementGroupsClient');
exports = module.exports;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionClient", function() { return SubscriptionClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operations__ = __webpack_require__(7);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModels", function() { return __WEBPACK_IMPORTED_MODULE_0__models__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SubscriptionMappers", function() { return __WEBPACK_IMPORTED_MODULE_1__models_mappers__; });
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var packageName = "";
var packageVersion = "";
var SubscriptionClient = /** @class */ (function (_super) {
    __extends(SubscriptionClient, _super);
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
    function SubscriptionClient(credentials, baseUri, options) {
        var _this = this;
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (!options)
            options = {};
        _this = _super.call(this, credentials, options) || this;
        _this.apiVersion = '2016-06-01';
        _this.acceptLanguage = 'en-US';
        _this.longRunningOperationRetryTimeout = 30;
        _this.generateClientRequestId = true;
        _this.baseUri = baseUri;
        if (!_this.baseUri) {
            _this.baseUri = 'https://management.azure.com';
        }
        _this.credentials = credentials;
        _this.addUserAgentInfo(packageName + "/" + packageVersion);
        if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
            _this.acceptLanguage = options.acceptLanguage;
        }
        if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
            _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
        }
        if (options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
            _this.generateClientRequestId = options.generateClientRequestId;
        }
        _this.subscriptions = new __WEBPACK_IMPORTED_MODULE_4__operations__["a" /* Subscriptions */](_this);
        _this.tenants = new __WEBPACK_IMPORTED_MODULE_4__operations__["b" /* Tenants */](_this);
        _this.serializer = new __WEBPACK_IMPORTED_MODULE_2_ms_rest_js__["Serializer"](__WEBPACK_IMPORTED_MODULE_1__models_mappers__);
        return _this;
    }
    return SubscriptionClient;
}(__WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__["AzureServiceClient"]));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionState", function() { return SubscriptionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpendingLimit", function() { return SpendingLimit; });
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
/**
 * Defines values for SubscriptionState.
 * Possible values include: 'Enabled', 'Warned', 'PastDue', 'Disabled',
 * 'Deleted'
 * @readonly
 * @enum {string}
 */
var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["Enabled"] = "Enabled";
    SubscriptionState["Warned"] = "Warned";
    SubscriptionState["PastDue"] = "PastDue";
    SubscriptionState["Disabled"] = "Disabled";
    SubscriptionState["Deleted"] = "Deleted";
})(SubscriptionState || (SubscriptionState = {}));
/**
 * Defines values for SpendingLimit.
 * Possible values include: 'On', 'Off', 'CurrentPeriodOff'
 * @readonly
 * @enum {string}
 */
var SpendingLimit;
(function (SpendingLimit) {
    SpendingLimit["On"] = "On";
    SpendingLimit["Off"] = "Off";
    SpendingLimit["CurrentPeriodOff"] = "CurrentPeriodOff";
})(SpendingLimit || (SpendingLimit = {}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscriptions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tenants__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__subscriptions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tenants__["a"]; });
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */





/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscriptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(3);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a Subscriptions. */
var Subscriptions = /** @class */ (function () {
    /**
     * Create a Subscriptions.
     * @param {SubscriptionClient} client Reference to the service client.
     */
    function Subscriptions(client) {
        this.client = client;
    }
    /**
     * @summary Gets all available geo-locations.
     *
     * This operation provides all the locations that are available for resource
     * providers; however, each resource provider may support a subset of this
     * list.
     *
     * @param {string} subscriptionId The ID of the target subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Subscriptions.prototype.listLocationsWithHttpOperationResponse = function (subscriptionId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (subscriptionId === null || subscriptionId === undefined || typeof subscriptionId.valueOf() !== 'string') {
                                throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                                throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/locations';
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["LocationListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
     * Gets details about a specified subscription.
     *
     * @param {string} subscriptionId The ID of the target subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Subscriptions.prototype.getWithHttpOperationResponse = function (subscriptionId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (subscriptionId === null || subscriptionId === undefined || typeof subscriptionId.valueOf() !== 'string') {
                                throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                                throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}';
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(subscriptionId));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["Subscription"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
     * Gets all subscriptions for a tenant.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Subscriptions.prototype.listWithHttpOperationResponse = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                                throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions';
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["SubscriptionListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
    /**
     * Gets all subscriptions for a tenant.
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
    Subscriptions.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_4;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["SubscriptionListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    Subscriptions.prototype.listLocations = function (subscriptionId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listLocationsWithHttpOperationResponse(subscriptionId, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listLocationsWithHttpOperationResponse(subscriptionId, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Subscriptions.prototype.get = function (subscriptionId, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(subscriptionId, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getWithHttpOperationResponse(subscriptionId, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Subscriptions.prototype.list = function (options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Subscriptions.prototype.listNext = function (nextPageLink, options, callback) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return Subscriptions;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tenants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(3);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a Tenants. */
var Tenants = /** @class */ (function () {
    /**
     * Create a Tenants.
     * @param {SubscriptionClient} client Reference to the service client.
     */
    function Tenants(client) {
        this.client = client;
    }
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
    Tenants.prototype.listWithHttpOperationResponse = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
                                throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'tenants';
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TenantListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
    Tenants.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_2;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TenantListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
    Tenants.prototype.list = function (options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Tenants.prototype.listNext = function (nextPageLink, options, callback) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return Tenants;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceManagementClient", function() { return ResourceManagementClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operations__ = __webpack_require__(12);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ResourceManagementModels", function() { return __WEBPACK_IMPORTED_MODULE_0__models__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ResourceManagementMappers", function() { return __WEBPACK_IMPORTED_MODULE_1__models_mappers__; });
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var packageName = "";
var packageVersion = "";
var ResourceManagementClient = /** @class */ (function (_super) {
    __extends(ResourceManagementClient, _super);
    /**
     * @class
     * Initializes a new instance of the ResourceManagementClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - The ID of the target subscription.
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
    function ResourceManagementClient(credentials, subscriptionId, baseUri, options) {
        var _this = this;
        console.log(__WEBPACK_IMPORTED_MODULE_2_ms_rest_js__);
        console.log(__WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__);
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (subscriptionId === null || subscriptionId === undefined) {
            throw new Error('\'subscriptionId\' cannot be null.');
        }
        if (!options)
            options = {};
        _this = _super.call(this, credentials, options) || this;
        _this.apiVersion = '2017-05-10';
        _this.acceptLanguage = 'en-US';
        _this.longRunningOperationRetryTimeout = 30;
        _this.generateClientRequestId = true;
        _this.baseUri = baseUri;
        if (!_this.baseUri) {
            _this.baseUri = 'https://management.azure.com';
        }
        _this.credentials = credentials;
        _this.subscriptionId = subscriptionId;
        _this.addUserAgentInfo(packageName + "/" + packageVersion);
        if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
            _this.acceptLanguage = options.acceptLanguage;
        }
        if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
            _this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
        }
        if (options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
            _this.generateClientRequestId = options.generateClientRequestId;
        }
        _this.deployments = new __WEBPACK_IMPORTED_MODULE_4__operations__["b" /* Deployments */](_this);
        _this.providers = new __WEBPACK_IMPORTED_MODULE_4__operations__["c" /* Providers */](_this);
        _this.resources = new __WEBPACK_IMPORTED_MODULE_4__operations__["e" /* Resources */](_this);
        _this.resourceGroups = new __WEBPACK_IMPORTED_MODULE_4__operations__["d" /* ResourceGroups */](_this);
        _this.tags = new __WEBPACK_IMPORTED_MODULE_4__operations__["f" /* Tags */](_this);
        _this.deploymentOperations = new __WEBPACK_IMPORTED_MODULE_4__operations__["a" /* DeploymentOperations */](_this);
        _this.serializer = new __WEBPACK_IMPORTED_MODULE_2_ms_rest_js__["Serializer"](__WEBPACK_IMPORTED_MODULE_1__models_mappers__);
        return _this;
    }
    return ResourceManagementClient;
}(__WEBPACK_IMPORTED_MODULE_3_ms_rest_azure_js__["AzureServiceClient"]));



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentMode", function() { return DeploymentMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceIdentityType", function() { return ResourceIdentityType; });
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
/**
 * Defines values for DeploymentMode.
 * Possible values include: 'Incremental', 'Complete'
 * @readonly
 * @enum {string}
 */
var DeploymentMode;
(function (DeploymentMode) {
    DeploymentMode["Incremental"] = "Incremental";
    DeploymentMode["Complete"] = "Complete";
})(DeploymentMode || (DeploymentMode = {}));
/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
var ResourceIdentityType;
(function (ResourceIdentityType) {
    ResourceIdentityType["SystemAssigned"] = "SystemAssigned";
})(ResourceIdentityType || (ResourceIdentityType = {}));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deployments__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resourceGroups__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tags__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deploymentOperations__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__deployments__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__providers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__resources__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__resourceGroups__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__tags__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__deploymentOperations__["a"]; });
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */









/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deployments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a Deployments. */
var Deployments = /** @class */ (function () {
    /**
     * Create a Deployments.
     * @param {ResourceManagementClient} client Reference to the service client.
     */
    function Deployments(client) {
        this.client = client;
    }
    /**
     * @summary Deletes a deployment from the deployment history.
     *
     * A template deployment that is currently running cannot be deleted. Deleting
     * a template deployment removes the associated deployment operations. Deleting
     * a template deployment does not affect the state of the resource group. This
     * is an asynchronous operation that returns a status of 202 until the template
     * deployment is successfully deleted. The Location response header contains
     * the URI that is used to obtain the status of the process. While the process
     * is running, a call to the URI in the Location header returns a status of
     * 202. When the process finishes, the URI in the Location header returns a
     * status of 204 on success. If the asynchronous request failed, the URI in the
     * Location header returns an error-level status code.
     *
     * @param {string} resourceGroupName The name of the resource group with the
     * deployment to delete. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.deleteMethodWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_1, operationRes, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, deploymentName, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Checks whether the deployment exists.
     *
     * @param {string} resourceGroupName The name of the resource group with the
     * deployment to check. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to check.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.checkExistenceWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_3;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'HEAD';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 204 && statusCode !== 404) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        operationRes.bodyAsJson = (statusCode === 204);
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Deploys resources to a resource group.
     *
     * You can provide the template and parameters directly in the request or link
     * to JSON files.
     *
     * @param {string} resourceGroupName The name of the resource group to deploy
     * the resources to. The name is case insensitive. The resource group must
     * already exist.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Additional parameters supplied to the
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.createOrUpdateWithHttpOperationResponse = function (resourceGroupName, deploymentName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_4, operationRes, httpRequest, response, parsedResponse, resultMapper, deserializationError, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        response = operationRes.response;
                        parsedResponse = operationRes.bodyAsJson;
                        try {
                            if (parsedResponse !== null && parsedResponse !== undefined) {
                                resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentExtended"];
                                operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                            }
                        }
                        catch (error) {
                            deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets a deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name
     * is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.getWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_6;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentExtended"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Cancels a currently running template deployment.
     *
     * You can cancel a deployment only if the provisioningState is Accepted or
     * Running. After the deployment is canceled, the provisioningState is set to
     * Canceled. Canceling a template deployment stops the currently running
     * template deployment and leaves the resource group partially deployed.
     *
     * @param {string} resourceGroupName The name of the resource group. The name
     * is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to cancel.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.cancelWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_7;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 204) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_7)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Validates whether the specified template is syntactically correct and will
     * be accepted by Azure Resource Manager..
     *
     * @param {string} resourceGroupName The name of the resource group the
     * template will be deployed to. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Parameters to validate.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.validateWithHttpOperationResponse = function (resourceGroupName, deploymentName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_8;
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
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/validate';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["Deployment"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200 && statusCode !== 400) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentValidateResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 400) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentValidateResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_8 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_8)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Exports the template used for specified deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name
     * is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment from which to get
     * the template.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.exportTemplateWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_9;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentExportResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_9 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_9)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Get all the deployments for a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group with the
     * deployments to get. The name is case insensitive.
     *
     * @param {DeploymentsListByResourceGroupOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.listByResourceGroupWithHttpOperationResponse = function (resourceGroupName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, filter, top, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        filter = (options && options.filter !== undefined) ? options.filter : undefined;
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
                            if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
                                throw new Error('filter must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (filter !== null && filter !== undefined) {
                            queryParamsArray.push('$filter=' + encodeURIComponent(filter));
                        }
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_10 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_10)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Deletes a deployment from the deployment history.
     *
     * A template deployment that is currently running cannot be deleted. Deleting
     * a template deployment removes the associated deployment operations. Deleting
     * a template deployment does not affect the state of the resource group. This
     * is an asynchronous operation that returns a status of 202 until the template
     * deployment is successfully deleted. The Location response header contains
     * the URI that is used to obtain the status of the process. While the process
     * is running, a call to the URI in the Location header returns a status of
     * 202. When the process finishes, the URI in the Location header returns a
     * status of 204 on success. If the asynchronous request failed, the URI in the
     * Location header returns an error-level status code.
     *
     * @param {string} resourceGroupName The name of the resource group with the
     * deployment to delete. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.beginDeleteMethodWithHttpOperationResponse = function (resourceGroupName, deploymentName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_11;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'DELETE';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 202 && statusCode !== 204) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_11 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_11)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Deploys resources to a resource group.
     *
     * You can provide the template and parameters directly in the request or link
     * to JSON files.
     *
     * @param {string} resourceGroupName The name of the resource group to deploy
     * the resources to. The name is case insensitive. The resource group must
     * already exist.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Additional parameters supplied to the
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Deployments.prototype.beginCreateOrUpdateWithHttpOperationResponse = function (resourceGroupName, deploymentName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_12;
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
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{deploymentName}', encodeURIComponent(deploymentName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PUT';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["Deployment"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200 && statusCode !== 201) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentExtended"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 201) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentExtended"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_12 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_12)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Get all the deployments for a resource group.
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
    Deployments.prototype.listByResourceGroupNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_13;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_13 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_13)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    Deployments.prototype.deleteMethod = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.deleteMethodWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.deleteMethodWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.checkExistence = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.checkExistenceWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.checkExistenceWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.createOrUpdate = function (resourceGroupName, deploymentName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.createOrUpdateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.createOrUpdateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.get = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.cancel = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.cancelWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.cancelWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.validate = function (resourceGroupName, deploymentName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.validateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.validateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.exportTemplate = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.exportTemplateWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.exportTemplateWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.listByResourceGroup = function (resourceGroupName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listByResourceGroupWithHttpOperationResponse(resourceGroupName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listByResourceGroupWithHttpOperationResponse(resourceGroupName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.beginDeleteMethod = function (resourceGroupName, deploymentName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, deploymentName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.beginCreateOrUpdate = function (resourceGroupName, deploymentName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, deploymentName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Deployments.prototype.listByResourceGroupNext = function (nextPageLink, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listByResourceGroupNextWithHttpOperationResponse(nextPageLink, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listByResourceGroupNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return Deployments;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a Providers. */
var Providers = /** @class */ (function () {
    /**
     * Create a Providers.
     * @param {ResourceManagementClient} client Reference to the service client.
     */
    function Providers(client) {
        this.client = client;
    }
    /**
     * Unregisters a subscription from a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider to unregister.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Providers.prototype.unregisterWithHttpOperationResponse = function (resourceProviderNamespace, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/unregister';
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["Provider"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
     * Registers a subscription with a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider to register.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Providers.prototype.registerWithHttpOperationResponse = function (resourceProviderNamespace, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/register';
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["Provider"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
     * Gets all resource providers for a subscription.
     *
     * @param {ProvidersListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Providers.prototype.listWithHttpOperationResponse = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, top, expand, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        top = (options && options.top !== undefined) ? options.top : undefined;
                        expand = (options && options.expand !== undefined) ? options.expand : undefined;
                        // Validate
                        try {
                            if (top !== null && top !== undefined && typeof top !== 'number') {
                                throw new Error('top must be of type number.');
                            }
                            if (expand !== null && expand !== undefined && typeof expand.valueOf() !== 'string') {
                                throw new Error('expand must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers';
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (top !== null && top !== undefined) {
                            queryParamsArray.push('$top=' + encodeURIComponent(top.toString()));
                        }
                        if (expand !== null && expand !== undefined) {
                            queryParamsArray.push('$expand=' + encodeURIComponent(expand));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ProviderListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
    /**
     * Gets the specified resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {ProvidersGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Providers.prototype.getWithHttpOperationResponse = function (resourceProviderNamespace, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, expand, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        expand = (options && options.expand !== undefined) ? options.expand : undefined;
                        // Validate
                        try {
                            if (expand !== null && expand !== undefined && typeof expand.valueOf() !== 'string') {
                                throw new Error('expand must be of type string.');
                            }
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}';
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (expand !== null && expand !== undefined) {
                            queryParamsArray.push('$expand=' + encodeURIComponent(expand));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["Provider"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets all resource providers for a subscription.
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
    Providers.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_5;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ProviderListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    Providers.prototype.unregister = function (resourceProviderNamespace, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.unregisterWithHttpOperationResponse(resourceProviderNamespace, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.unregisterWithHttpOperationResponse(resourceProviderNamespace, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Providers.prototype.register = function (resourceProviderNamespace, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.registerWithHttpOperationResponse(resourceProviderNamespace, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.registerWithHttpOperationResponse(resourceProviderNamespace, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Providers.prototype.list = function (options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Providers.prototype.get = function (resourceProviderNamespace, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(resourceProviderNamespace, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getWithHttpOperationResponse(resourceProviderNamespace, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Providers.prototype.listNext = function (nextPageLink, options, callback) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return Providers;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a Resources. */
var Resources = /** @class */ (function () {
    /**
     * Create a Resources.
     * @param {ResourceManagementClient} client Reference to the service client.
     */
    function Resources(client) {
        this.client = client;
    }
    /**
     * Get all the resources for a resource group.
     *
     * @param {string} resourceGroupName The resource group with the resources to
     * get.
     *
     * @param {ResourcesListByResourceGroupOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.listByResourceGroupWithHttpOperationResponse = function (resourceGroupName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, filter, expand, top, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        filter = (options && options.filter !== undefined) ? options.filter : undefined;
                        expand = (options && options.expand !== undefined) ? options.expand : undefined;
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
                            if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
                                throw new Error('filter must be of type string.');
                            }
                            if (expand !== null && expand !== undefined && typeof expand.valueOf() !== 'string') {
                                throw new Error('expand must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/resources';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (filter !== null && filter !== undefined) {
                            queryParamsArray.push('$filter=' + encodeURIComponent(filter));
                        }
                        if (expand !== null && expand !== undefined) {
                            queryParamsArray.push('$expand=' + encodeURIComponent(expand));
                        }
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
     * @summary Moves resources from one resource group to another resource group.
     *
     * The resources to move must be in the same source resource group. The target
     * resource group may be in a different subscription. When moving resources,
     * both the source group and the target group are locked for the duration of
     * the operation. Write and delete operations are blocked on the groups until
     * the move completes.
     *
     * @param {string} sourceResourceGroupName The name of the resource group
     * containing the resources to move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.moveResourcesWithHttpOperationResponse = function (sourceResourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_2, operationRes, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Validates whether resources can be moved from one resource group to
     * another resource group.
     *
     * This operation checks whether the specified resources can be moved to the
     * target. The resources to move must be in the same source resource group. The
     * target resource group may be in a different subscription. If validation
     * succeeds, it returns HTTP response code 204 (no content). If validation
     * fails, it returns HTTP response code 409 (Conflict) with an error message.
     * Retrieve the URL in the Location header value to check the result of the
     * long-running operation.
     *
     * @param {string} sourceResourceGroupName The name of the resource group
     * containing the resources to validate for move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.validateMoveResourcesWithHttpOperationResponse = function (sourceResourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_4, operationRes, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginValidateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Get all the resources in a subscription.
     *
     * @param {ResourcesListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.listWithHttpOperationResponse = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, filter, expand, top, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        filter = (options && options.filter !== undefined) ? options.filter : undefined;
                        expand = (options && options.expand !== undefined) ? options.expand : undefined;
                        top = (options && options.top !== undefined) ? options.top : undefined;
                        // Validate
                        try {
                            if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
                                throw new Error('filter must be of type string.');
                            }
                            if (expand !== null && expand !== undefined && typeof expand.valueOf() !== 'string') {
                                throw new Error('expand must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resources';
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (filter !== null && filter !== undefined) {
                            queryParamsArray.push('$filter=' + encodeURIComponent(filter));
                        }
                        if (expand !== null && expand !== undefined) {
                            queryParamsArray.push('$expand=' + encodeURIComponent(expand));
                        }
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Checks whether a resource exists.
     *
     * @param {string} resourceGroupName The name of the resource group containing
     * the resource to check. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The resource provider of the
     * resource to check.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to check whether it
     * exists.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.checkExistenceWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_7;
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
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
                            }
                            if (parentResourcePath === null || parentResourcePath === undefined || typeof parentResourcePath.valueOf() !== 'string') {
                                throw new Error('parentResourcePath cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceType === null || resourceType === undefined || typeof resourceType.valueOf() !== 'string') {
                                throw new Error('resourceType cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceName === null || resourceName === undefined || typeof resourceName.valueOf() !== 'string') {
                                throw new Error('resourceName cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{parentResourcePath}', parentResourcePath);
                        requestUrl = requestUrl.replace('{resourceType}', resourceType);
                        requestUrl = requestUrl.replace('{resourceName}', encodeURIComponent(resourceName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'HEAD';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 204 && statusCode !== 404) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        operationRes.bodyAsJson = (statusCode === 204);
                        return [3 /*break*/, 4];
                    case 3:
                        err_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_7)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Deletes a resource.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource to delete. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to delete.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.deleteMethodWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_8, operationRes, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_8 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_8)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_9 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_9)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Creates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the
     * resource. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to create.
     *
     * @param {string} resourceName The name of the resource to create.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for creating or updating the
     * resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.createOrUpdateWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_10, operationRes, httpRequest, response, parsedResponse, resultMapper, deserializationError, err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_10 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_10)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        response = operationRes.response;
                        parsedResponse = operationRes.bodyAsJson;
                        try {
                            if (parsedResponse !== null && parsedResponse !== undefined) {
                                resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                            }
                        }
                        catch (error) {
                            deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_11 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_11)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Updates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the
     * resource. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to update.
     *
     * @param {string} resourceName The name of the resource to update.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.updateWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_12, operationRes, httpRequest, response, parsedResponse, resultMapper, deserializationError, err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_12 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_12)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        response = operationRes.response;
                        parsedResponse = operationRes.bodyAsJson;
                        try {
                            if (parsedResponse !== null && parsedResponse !== undefined) {
                                resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                            }
                        }
                        catch (error) {
                            deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_13 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_13)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets a resource.
     *
     * @param {string} resourceGroupName The name of the resource group containing
     * the resource to get. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource.
     *
     * @param {string} resourceName The name of the resource to get.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.getWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_14;
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
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
                            }
                            if (parentResourcePath === null || parentResourcePath === undefined || typeof parentResourcePath.valueOf() !== 'string') {
                                throw new Error('parentResourcePath cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceType === null || resourceType === undefined || typeof resourceType.valueOf() !== 'string') {
                                throw new Error('resourceType cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceName === null || resourceName === undefined || typeof resourceName.valueOf() !== 'string') {
                                throw new Error('resourceName cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{parentResourcePath}', parentResourcePath);
                        requestUrl = requestUrl.replace('{resourceType}', resourceType);
                        requestUrl = requestUrl.replace('{resourceName}', encodeURIComponent(resourceName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_14 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_14)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Checks by ID whether a resource exists.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.checkExistenceByIdWithHttpOperationResponse = function (resourceId, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceId === null || resourceId === undefined || typeof resourceId.valueOf() !== 'string') {
                                throw new Error('resourceId cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + '{resourceId}';
                        requestUrl = requestUrl.replace('{resourceId}', resourceId);
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'HEAD';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 204 && statusCode !== 404) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        operationRes.bodyAsJson = (statusCode === 204);
                        return [3 /*break*/, 4];
                    case 3:
                        err_15 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_15)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Deletes a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.deleteByIdWithHttpOperationResponse = function (resourceId, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_16, operationRes, err_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginDeleteByIdWithHttpOperationResponse(resourceId, apiVersion, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_16 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_16)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_17 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_17)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Create a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Create or update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.createOrUpdateByIdWithHttpOperationResponse = function (resourceId, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_18, operationRes, httpRequest, response, parsedResponse, resultMapper, deserializationError, err_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginCreateOrUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_18 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_18)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        response = operationRes.response;
                        parsedResponse = operationRes.bodyAsJson;
                        try {
                            if (parsedResponse !== null && parsedResponse !== undefined) {
                                resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                            }
                        }
                        catch (error) {
                            deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_19 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_19)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Updates a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.updateByIdWithHttpOperationResponse = function (resourceId, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_20, operationRes, httpRequest, response, parsedResponse, resultMapper, deserializationError, err_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_20 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_20)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        response = operationRes.response;
                        parsedResponse = operationRes.bodyAsJson;
                        try {
                            if (parsedResponse !== null && parsedResponse !== undefined) {
                                resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                            }
                        }
                        catch (error) {
                            deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_21 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_21)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.getByIdWithHttpOperationResponse = function (resourceId, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceId === null || resourceId === undefined || typeof resourceId.valueOf() !== 'string') {
                                throw new Error('resourceId cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + '{resourceId}';
                        requestUrl = requestUrl.replace('{resourceId}', resourceId);
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_22 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_22)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Moves resources from one resource group to another resource group.
     *
     * The resources to move must be in the same source resource group. The target
     * resource group may be in a different subscription. When moving resources,
     * both the source group and the target group are locked for the duration of
     * the operation. Write and delete operations are blocked on the groups until
     * the move completes.
     *
     * @param {string} sourceResourceGroupName The name of the resource group
     * containing the resources to move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginMoveResourcesWithHttpOperationResponse = function (sourceResourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (sourceResourceGroupName === null || sourceResourceGroupName === undefined || typeof sourceResourceGroupName.valueOf() !== 'string') {
                                throw new Error('sourceResourceGroupName cannot be null or undefined and it must be of type string.');
                            }
                            if (sourceResourceGroupName !== null && sourceResourceGroupName !== undefined) {
                                if (sourceResourceGroupName.length > 90) {
                                    throw new Error('"sourceResourceGroupName" should satisfy the constraint - "MaxLength": 90');
                                }
                                if (sourceResourceGroupName.length < 1) {
                                    throw new Error('"sourceResourceGroupName" should satisfy the constraint - "MinLength": 1');
                                }
                                if (sourceResourceGroupName.match(/^[-\w\._\(\)]+$/) === null) {
                                    throw new Error('"sourceResourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
                                }
                            }
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/moveResources';
                        requestUrl = requestUrl.replace('{sourceResourceGroupName}', encodeURIComponent(sourceResourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourcesMoveInfo"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 202 && statusCode !== 204) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_23 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_23)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Validates whether resources can be moved from one resource group to
     * another resource group.
     *
     * This operation checks whether the specified resources can be moved to the
     * target. The resources to move must be in the same source resource group. The
     * target resource group may be in a different subscription. If validation
     * succeeds, it returns HTTP response code 204 (no content). If validation
     * fails, it returns HTTP response code 409 (Conflict) with an error message.
     * Retrieve the URL in the Location header value to check the result of the
     * long-running operation.
     *
     * @param {string} sourceResourceGroupName The name of the resource group
     * containing the resources to validate for move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginValidateMoveResourcesWithHttpOperationResponse = function (sourceResourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (sourceResourceGroupName === null || sourceResourceGroupName === undefined || typeof sourceResourceGroupName.valueOf() !== 'string') {
                                throw new Error('sourceResourceGroupName cannot be null or undefined and it must be of type string.');
                            }
                            if (sourceResourceGroupName !== null && sourceResourceGroupName !== undefined) {
                                if (sourceResourceGroupName.length > 90) {
                                    throw new Error('"sourceResourceGroupName" should satisfy the constraint - "MaxLength": 90');
                                }
                                if (sourceResourceGroupName.length < 1) {
                                    throw new Error('"sourceResourceGroupName" should satisfy the constraint - "MinLength": 1');
                                }
                                if (sourceResourceGroupName.match(/^[-\w\._\(\)]+$/) === null) {
                                    throw new Error('"sourceResourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._\(\)]+$/');
                                }
                            }
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/validateMoveResources';
                        requestUrl = requestUrl.replace('{sourceResourceGroupName}', encodeURIComponent(sourceResourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourcesMoveInfo"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 202 && statusCode !== 204 && statusCode !== 409) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_24 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_24)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Deletes a resource.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the resource to delete. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to delete.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginDeleteMethodWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_25;
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
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
                            }
                            if (parentResourcePath === null || parentResourcePath === undefined || typeof parentResourcePath.valueOf() !== 'string') {
                                throw new Error('parentResourcePath cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceType === null || resourceType === undefined || typeof resourceType.valueOf() !== 'string') {
                                throw new Error('resourceType cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceName === null || resourceName === undefined || typeof resourceName.valueOf() !== 'string') {
                                throw new Error('resourceName cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{parentResourcePath}', parentResourcePath);
                        requestUrl = requestUrl.replace('{resourceType}', resourceType);
                        requestUrl = requestUrl.replace('{resourceName}', encodeURIComponent(resourceName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'DELETE';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 200 && statusCode !== 204 && statusCode !== 202) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_25 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_25)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Creates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the
     * resource. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to create.
     *
     * @param {string} resourceName The name of the resource to create.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for creating or updating the
     * resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginCreateOrUpdateWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_26;
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
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
                            }
                            if (parentResourcePath === null || parentResourcePath === undefined || typeof parentResourcePath.valueOf() !== 'string') {
                                throw new Error('parentResourcePath cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceType === null || resourceType === undefined || typeof resourceType.valueOf() !== 'string') {
                                throw new Error('resourceType cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceName === null || resourceName === undefined || typeof resourceName.valueOf() !== 'string') {
                                throw new Error('resourceName cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{parentResourcePath}', parentResourcePath);
                        requestUrl = requestUrl.replace('{resourceType}', resourceType);
                        requestUrl = requestUrl.replace('{resourceName}', encodeURIComponent(resourceName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PUT';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 201 && statusCode !== 200 && statusCode !== 202) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        if (statusCode === 201) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 200) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_26 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_26)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Updates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the
     * resource. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource
     * provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to update.
     *
     * @param {string} resourceName The name of the resource to update.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginUpdateWithHttpOperationResponse = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_27;
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
                            if (resourceProviderNamespace === null || resourceProviderNamespace === undefined || typeof resourceProviderNamespace.valueOf() !== 'string') {
                                throw new Error('resourceProviderNamespace cannot be null or undefined and it must be of type string.');
                            }
                            if (parentResourcePath === null || parentResourcePath === undefined || typeof parentResourcePath.valueOf() !== 'string') {
                                throw new Error('parentResourcePath cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceType === null || resourceType === undefined || typeof resourceType.valueOf() !== 'string') {
                                throw new Error('resourceType cannot be null or undefined and it must be of type string.');
                            }
                            if (resourceName === null || resourceName === undefined || typeof resourceName.valueOf() !== 'string') {
                                throw new Error('resourceName cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{resourceProviderNamespace}', encodeURIComponent(resourceProviderNamespace));
                        requestUrl = requestUrl.replace('{parentResourcePath}', parentResourcePath);
                        requestUrl = requestUrl.replace('{resourceType}', resourceType);
                        requestUrl = requestUrl.replace('{resourceName}', encodeURIComponent(resourceName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PATCH';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200 && statusCode !== 202) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_27 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_27)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Deletes a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginDeleteByIdWithHttpOperationResponse = function (resourceId, apiVersion, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_28;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceId === null || resourceId === undefined || typeof resourceId.valueOf() !== 'string') {
                                throw new Error('resourceId cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + '{resourceId}';
                        requestUrl = requestUrl.replace('{resourceId}', resourceId);
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'DELETE';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 200 && statusCode !== 204 && statusCode !== 202) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_28 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_28)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Create a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Create or update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginCreateOrUpdateByIdWithHttpOperationResponse = function (resourceId, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_29;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceId === null || resourceId === undefined || typeof resourceId.valueOf() !== 'string') {
                                throw new Error('resourceId cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + '{resourceId}';
                        requestUrl = requestUrl.replace('{resourceId}', resourceId);
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PUT';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 201 && statusCode !== 200 && statusCode !== 202) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        if (statusCode === 201) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 200) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_29 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_29)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Updates a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including
     * the resource name and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Resources.prototype.beginUpdateByIdWithHttpOperationResponse = function (resourceId, apiVersion, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_30;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (resourceId === null || resourceId === undefined || typeof resourceId.valueOf() !== 'string') {
                                throw new Error('resourceId cannot be null or undefined and it must be of type string.');
                            }
                            if (apiVersion === null || apiVersion === undefined || typeof apiVersion.valueOf() !== 'string') {
                                throw new Error('apiVersion cannot be null or undefined and it must be of type string.');
                            }
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
                            }
                            if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                                throw new Error('this.client.acceptLanguage must be of type string.');
                            }
                        }
                        catch (error) {
                            return [2 /*return*/, Promise.reject(error)];
                        }
                        baseUrl = this.client.baseUri;
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + '{resourceId}';
                        requestUrl = requestUrl.replace('{resourceId}', resourceId);
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PATCH';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200 && statusCode !== 202) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["GenericResource"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_30 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_30)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Get all the resources for a resource group.
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
    Resources.prototype.listByResourceGroupNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_31;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_31 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_31)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Get all the resources in a subscription.
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
    Resources.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_32;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_32 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_32)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    Resources.prototype.listByResourceGroup = function (resourceGroupName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listByResourceGroupWithHttpOperationResponse(resourceGroupName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listByResourceGroupWithHttpOperationResponse(resourceGroupName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.moveResources = function (sourceResourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.moveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.moveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.validateMoveResources = function (sourceResourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.validateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.validateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.list = function (options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.checkExistence = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.checkExistenceWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.checkExistenceWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.deleteMethod = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.deleteMethodWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.deleteMethodWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.createOrUpdate = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.createOrUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.createOrUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.update = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.updateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.updateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.get = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.checkExistenceById = function (resourceId, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.checkExistenceByIdWithHttpOperationResponse(resourceId, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.checkExistenceByIdWithHttpOperationResponse(resourceId, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.deleteById = function (resourceId, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.deleteByIdWithHttpOperationResponse(resourceId, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.deleteByIdWithHttpOperationResponse(resourceId, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.createOrUpdateById = function (resourceId, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.createOrUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.createOrUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.updateById = function (resourceId, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.updateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.updateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.getById = function (resourceId, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getByIdWithHttpOperationResponse(resourceId, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getByIdWithHttpOperationResponse(resourceId, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginMoveResources = function (sourceResourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginValidateMoveResources = function (sourceResourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginValidateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginValidateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginDeleteMethod = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginCreateOrUpdate = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginUpdate = function (resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginUpdateWithHttpOperationResponse(resourceGroupName, resourceProviderNamespace, parentResourcePath, resourceType, resourceName, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginDeleteById = function (resourceId, apiVersion, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginDeleteByIdWithHttpOperationResponse(resourceId, apiVersion, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginDeleteByIdWithHttpOperationResponse(resourceId, apiVersion, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginCreateOrUpdateById = function (resourceId, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginCreateOrUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginCreateOrUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.beginUpdateById = function (resourceId, apiVersion, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginUpdateByIdWithHttpOperationResponse(resourceId, apiVersion, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.listByResourceGroupNext = function (nextPageLink, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listByResourceGroupNextWithHttpOperationResponse(nextPageLink, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listByResourceGroupNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Resources.prototype.listNext = function (nextPageLink, options, callback) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return Resources;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceGroups; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a ResourceGroups. */
var ResourceGroups = /** @class */ (function () {
    /**
     * Create a ResourceGroups.
     * @param {ResourceManagementClient} client Reference to the service client.
     */
    function ResourceGroups(client) {
        this.client = client;
    }
    /**
     * Checks whether a resource group exists.
     *
     * @param {string} resourceGroupName The name of the resource group to check.
     * The name is case insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.checkExistenceWithHttpOperationResponse = function (resourceGroupName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_1;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'HEAD';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 204 && statusCode !== 404) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        operationRes.bodyAsJson = (statusCode === 204);
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
     * Creates or updates a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group to create
     * or update.
     *
     * @param {ResourceGroup} parameters Parameters supplied to the create or
     * update a resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.createOrUpdateWithHttpOperationResponse = function (resourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_2;
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
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PUT';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroup"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 201 && statusCode !== 200) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        if (statusCode === 201) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroup"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 200) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroup"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
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
     * @summary Deletes a resource group.
     *
     * When you delete a resource group, all of its resources are also deleted.
     * Deleting a resource group deletes all of its template deployments and
     * currently stored operations.
     *
     * @param {string} resourceGroupName The name of the resource group to delete.
     * The name is case insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.deleteMethodWithHttpOperationResponse = function (resourceGroupName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_3, operationRes, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group to get. The
     * name is case insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.getWithHttpOperationResponse = function (resourceGroupName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_5;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroup"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Updates a resource group.
     *
     * Resource groups can be updated through a simple PATCH operation to a group
     * address. The format of the request is the same as that for creating a
     * resource group. If a field is unspecified, the current value is retained.
     *
     * @param {string} resourceGroupName The name of the resource group to update.
     * The name is case insensitive.
     *
     * @param {ResourceGroupPatchable} parameters Parameters supplied to update a
     * resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.updateWithHttpOperationResponse = function (resourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_6;
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
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PATCH';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroupPatchable"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroup"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Captures the specified resource group as a template.
     *
     * @param {string} resourceGroupName The name of the resource group to export
     * as a template.
     *
     * @param {ExportTemplateRequest} parameters Parameters for exporting the
     * template.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.exportTemplateWithHttpOperationResponse = function (resourceGroupName, parameters, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, requestContent, requestModel, requestModelMapper, serializationError, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_7;
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
                            if (parameters === null || parameters === undefined) {
                                throw new Error('parameters cannot be null or undefined.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/exportTemplate';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'POST';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        requestContent = null;
                        requestModel = null;
                        try {
                            if (parameters !== null && parameters !== undefined) {
                                requestModelMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ExportTemplateRequest"];
                                requestModel = client.serializer.serialize(requestModelMapper, parameters, 'parameters');
                                requestContent = JSON.stringify(requestModel);
                            }
                        }
                        catch (error) {
                            serializationError = new Error("Error \"" + error.message + "\" occurred in serializing the " +
                                ("payload - " + JSON.stringify(parameters, null, 2) + "."));
                            return [2 /*return*/, Promise.reject(serializationError)];
                        }
                        httpRequest.body = requestContent;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.pipeline(httpRequest)];
                    case 2:
                        operationRes = _a.sent();
                        response = operationRes.response;
                        statusCode = response.status;
                        if (statusCode !== 200) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroupExportResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_7)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets all the resource groups for a subscription.
     *
     * @param {ResourceGroupsListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.listWithHttpOperationResponse = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, filter, top, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        filter = (options && options.filter !== undefined) ? options.filter : undefined;
                        top = (options && options.top !== undefined) ? options.top : undefined;
                        // Validate
                        try {
                            if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
                                throw new Error('filter must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups';
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        if (filter !== null && filter !== undefined) {
                            queryParamsArray.push('$filter=' + encodeURIComponent(filter));
                        }
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroupListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_8 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_8)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * @summary Deletes a resource group.
     *
     * When you delete a resource group, all of its resources are also deleted.
     * Deleting a resource group deletes all of its template deployments and
     * currently stored operations.
     *
     * @param {string} resourceGroupName The name of the resource group to delete.
     * The name is case insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    ResourceGroups.prototype.beginDeleteMethodWithHttpOperationResponse = function (resourceGroupName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_9;
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}';
                        requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'DELETE';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 202 && statusCode !== 200) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_9 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_9)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets all the resource groups for a subscription.
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
    ResourceGroups.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_10;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["ResourceGroupListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_10 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_10)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    ResourceGroups.prototype.checkExistence = function (resourceGroupName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.checkExistenceWithHttpOperationResponse(resourceGroupName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.checkExistenceWithHttpOperationResponse(resourceGroupName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.createOrUpdate = function (resourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.createOrUpdateWithHttpOperationResponse(resourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.createOrUpdateWithHttpOperationResponse(resourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.deleteMethod = function (resourceGroupName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.deleteMethodWithHttpOperationResponse(resourceGroupName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.deleteMethodWithHttpOperationResponse(resourceGroupName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.get = function (resourceGroupName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(resourceGroupName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getWithHttpOperationResponse(resourceGroupName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.update = function (resourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.updateWithHttpOperationResponse(resourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.updateWithHttpOperationResponse(resourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.exportTemplate = function (resourceGroupName, parameters, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.exportTemplateWithHttpOperationResponse(resourceGroupName, parameters, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.exportTemplateWithHttpOperationResponse(resourceGroupName, parameters, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.list = function (options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.beginDeleteMethod = function (resourceGroupName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.beginDeleteMethodWithHttpOperationResponse(resourceGroupName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    ResourceGroups.prototype.listNext = function (nextPageLink, options, callback) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return ResourceGroups;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
/** Class representing a Tags. */
var Tags = /** @class */ (function () {
    /**
     * Create a Tags.
     * @param {ResourceManagementClient} client Reference to the service client.
     */
    function Tags(client) {
        this.client = client;
    }
    /**
     * Deletes a tag value.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {string} tagValue The value of the tag to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Tags.prototype.deleteValueWithHttpOperationResponse = function (tagName, tagValue, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (tagName === null || tagName === undefined || typeof tagName.valueOf() !== 'string') {
                                throw new Error('tagName cannot be null or undefined and it must be of type string.');
                            }
                            if (tagValue === null || tagValue === undefined || typeof tagValue.valueOf() !== 'string') {
                                throw new Error('tagValue cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}';
                        requestUrl = requestUrl.replace('{tagName}', encodeURIComponent(tagName));
                        requestUrl = requestUrl.replace('{tagValue}', encodeURIComponent(tagValue));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'DELETE';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 200 && statusCode !== 204) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
     * Creates a tag value. The name of the tag must already exist.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {string} tagValue The value of the tag to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Tags.prototype.createOrUpdateValueWithHttpOperationResponse = function (tagName, tagValue, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (tagName === null || tagName === undefined || typeof tagName.valueOf() !== 'string') {
                                throw new Error('tagName cannot be null or undefined and it must be of type string.');
                            }
                            if (tagValue === null || tagValue === undefined || typeof tagValue.valueOf() !== 'string') {
                                throw new Error('tagValue cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}';
                        requestUrl = requestUrl.replace('{tagName}', encodeURIComponent(tagName));
                        requestUrl = requestUrl.replace('{tagValue}', encodeURIComponent(tagValue));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PUT';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 200 && statusCode !== 201) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TagValue"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 201) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TagValue"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
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
     * @summary Creates a tag in the subscription.
     *
     * The tag name can have a maximum of 512 characters and is case insensitive.
     * Tag names created by Azure have prefixes of microsoft, azure, or windows.
     * You cannot create tags with one of these prefixes.
     *
     * @param {string} tagName The name of the tag to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Tags.prototype.createOrUpdateWithHttpOperationResponse = function (tagName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, parsedResponse, resultMapper, deserializationError1, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (tagName === null || tagName === undefined || typeof tagName.valueOf() !== 'string') {
                                throw new Error('tagName cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/tagNames/{tagName}';
                        requestUrl = requestUrl.replace('{tagName}', encodeURIComponent(tagName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'PUT';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 200 && statusCode !== 201) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TagDetails"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        // Deserialize Response
                        if (statusCode === 201) {
                            parsedResponse = operationRes.bodyAsJson;
                            try {
                                if (parsedResponse !== null && parsedResponse !== undefined) {
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TagDetails"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError1 = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError1.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError1.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError1)];
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
    /**
     * @summary Deletes a tag from the subscription.
     *
     * You must remove all values from a resource tag before you can delete it.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Tags.prototype.deleteMethodWithHttpOperationResponse = function (tagName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
                            if (tagName === null || tagName === undefined || typeof tagName.valueOf() !== 'string') {
                                throw new Error('tagName cannot be null or undefined and it must be of type string.');
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/tagNames/{tagName}';
                        requestUrl = requestUrl.replace('{tagName}', encodeURIComponent(tagName));
                        requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
                        queryParamsArray = [];
                        queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
                        if (queryParamsArray.length > 0) {
                            requestUrl += '?' + queryParamsArray.join('&');
                        }
                        httpRequest = new WebResource();
                        httpRequest.method = 'DELETE';
                        httpRequest.url = requestUrl;
                        httpRequest.headers = {};
                        // Set Headers
                        httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
                        if (this.client.generateClientRequestId) {
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                        if (statusCode !== 200 && statusCode !== 204) {
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets the names and values of all resource tags that are defined in a
     * subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    Tags.prototype.listWithHttpOperationResponse = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, baseUrl, requestUrl, queryParamsArray, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        // Validate
                        try {
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
                        requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/tagNames';
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TagsListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets the names and values of all resource tags that are defined in a
     * subscription.
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
    Tags.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, requestUrl, httpRequest, headerName, operationRes, response, statusCode, error, parsedErrorResponse, resultMapper, parsedResponse, resultMapper, deserializationError, err_6;
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["TagsListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    Tags.prototype.deleteValue = function (tagName, tagValue, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.deleteValueWithHttpOperationResponse(tagName, tagValue, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.deleteValueWithHttpOperationResponse(tagName, tagValue, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Tags.prototype.createOrUpdateValue = function (tagName, tagValue, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.createOrUpdateValueWithHttpOperationResponse(tagName, tagValue, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.createOrUpdateValueWithHttpOperationResponse(tagName, tagValue, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Tags.prototype.createOrUpdate = function (tagName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.createOrUpdateWithHttpOperationResponse(tagName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.createOrUpdateWithHttpOperationResponse(tagName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Tags.prototype.deleteMethod = function (tagName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.deleteMethodWithHttpOperationResponse(tagName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.deleteMethodWithHttpOperationResponse(tagName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Tags.prototype.list = function (options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(options).then(function (operationRes) {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    Tags.prototype.listNext = function (nextPageLink, options, callback) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    };
    return Tags;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeploymentOperations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms_rest_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms_rest_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mappers__ = __webpack_require__(1);
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


var WebResource = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["WebResource"];
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentOperation"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentOperationsListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                            httpRequest.headers['x-ms-client-request-id'] = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["generateUuid"]();
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
                            error = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"](operationRes.bodyAsText);
                            error.statusCode = response.status;
                            error.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                            error.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["CloudError"];
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
                                    resultMapper = __WEBPACK_IMPORTED_MODULE_1__models_mappers__["DeploymentOperationsListResult"];
                                    operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                                }
                            }
                            catch (error) {
                                deserializationError = new __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["RestError"]("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripRequest"](httpRequest);
                                deserializationError.response = __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["stripResponse"](response);
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.getWithHttpOperationResponse(resourceGroupName, deploymentName, operationId, options))(function (err, data) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listWithHttpOperationResponse(resourceGroupName, deploymentName, options))(function (err, data) {
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
            __WEBPACK_IMPORTED_MODULE_0_ms_rest_js__["promiseToCallback"](this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
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



/***/ })
/******/ ]);
//# sourceMappingURL=resourceManagementClientBundle.js.map