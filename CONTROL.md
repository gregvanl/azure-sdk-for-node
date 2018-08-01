# Azure SDK for ARM and ASM

## Documentation

Documentation of the supported sdks can be found at two places:
- https://azure.github.io/azure-sdk-for-node - This website primarily provides sdk documentation for
  - ASM based services (azure-**asm**-*)
  - some old data plane sdks like `azure-sb`, `azure-scheduler`, `azure-storage-legacy`, `azure-monitoring`, etc.
  - runtime sdks like `ms-rest`, `ms-rest-azure`, `azure-common`
- https://aka.ms/azure-node-sdk - This website primarily provides sdk documentation for
  - ARM based services (azure-**arm**-*)
  - newer data plane sdks like `azure-batch`, `azure-graph`, etc.

## Azure Resource Management

| **Azure Service** | **package name** |
| ----------------------------------------------------------------------------- | --------------------------- |
| [Advisor](https://docs.microsoft.com/en-us/rest/api/advisor/) | `azure-arm-advisor`    |
| [Api Management](https://docs.microsoft.com/en-us/rest/api/apimanagement/) | `azure-arm-apimanagement`    |
| [App Insights](https://docs.microsoft.com/en-us/rest/api/application-insights/) | `azure-arm-appinsights`    |
| [Automation](https://docs.microsoft.com/en-us/azure/automation/) | `azure-arm-automation`    |
| [Authorization](https://azure.microsoft.com/en-us/documentation/articles/role-based-access-control-configure/) | `azure-arm-authorization`    |
| [Batch](https://azure.microsoft.com/en-us/services/batch/)                        | `azure-arm-batch`     |
| [BatchAI](https://docs.microsoft.com/en-us/azure/batch-ai/)                       | `azure-arm-batchai`   |
| [Billing](https://docs.microsoft.com/en-us/azure/billing/billing-usage-rate-card-overview) | `azure-arm-billing`    |
| [CDN](https://azure.microsoft.com/en-us/services/cdn/)                            | `azure-arm-cdn`|
| [CognitiveServices](https://azure.microsoft.com/en-us/services/cognitive-services/) | `azure-arm-cognitiveservices`    |
| [ContainerInstance](https://docs.microsoft.com/en-us/rest/api/container-instances/) | `azure-arm-containerinstance`    |
| [CosmosDB](https://docs.microsoft.com/en-us/rest/api/documentdbresourceprovider/) | `azure-arm-cosmosdb`    |
| [Commerce/Usage](https://azure.microsoft.com/en-us/documentation/articles/billing-usage-rate-card-overview/)                            | `azure-arm-commerce`|
| [Container Registry](https://azure.microsoft.com/en-us/services/container-registry/)                            | `azure-arm-containerregistry`|
| [CustomerInsights](https://docs.microsoft.com/en-us/dynamics365/customer-insights/ref/progref) | `azure-arm-customerinsights`    |
| [Compute](http://azure.microsoft.com/en-us/services/virtual-machines/)            | `azure-arm-compute`|
| [Datafactory](https://azure.microsoft.com/en-us/services/datafactory/) | `azure-arm-datafactory`    |
| [Datalake Analytics](https://azure.microsoft.com/en-us/services/data-lake-analytics/) | `azure-arm-datalake-analytics`       |
| [Datalake Store](https://azure.microsoft.com/en-us/services/data-lake-store/)   | `azure-arm-datalake-store`       |
| [DevTest Labs](https://azure.microsoft.com/en-us/services/devtest-lab/)           | `azure-arm-devtestlabs`       |
| [DNS](http://azure.microsoft.com/en-us/services/dns/)                             | `azure-arm-dns`       |
| [DomainServices](https://docs.microsoft.com/en-us/azure/active-directory-domain-services/) | `azure-arm-domainservices`    |
| [EventGrid](https://azure.microsoft.com/en-us/services/eventgrid/) | `azure-arm-eventgrid`    |
| [EventHubs](https://azure.microsoft.com/en-us/services/event-hubs/)               | `azure-arm-eventhub`  |
| [HDInsight](http://azure.microsoft.com/en-us/services/hdinsight/)                 | `azure-arm-hdinsight` |
| [HDInsightJobs](https://msdn.microsoft.com/en-us/library/azure/mt613023.aspx)     | `azure-arm-hdinsight-jobs` |
| [Insights](https://msdn.microsoft.com/en-us/library/azure/dn931943.aspx)          | `azure-arm-insights`  |
| [IotHub](https://azure.microsoft.com/en-us/documentation/services/iot-hub/)       | `azure-arm-iothub`  |
| [Key Vault](http://azure.microsoft.com/en-us/services/key-vault/)                 | `azure-arm-keyvault`  |
| [Logic Apps](https://azure.microsoft.com/en-us/services/logic-apps/)           | `azure-arm-logic`       |
| [Machine Learning](https://azure.microsoft.com/en-us/services/machine-learning/)           | `azure-arm-machinelearning`       |
| [Machine Learning Compute](https://azure.microsoft.com/en-us/services/machine-learning/)           | `azure-arm-machinelearningcompute`       |
| [Media Services](https://azure.microsoft.com/en-us/services/media-services/)           | `azure-arm-mediaservices`       |
| [Mobile Engagement](https://docs.microsoft.com/en-us/azure/mobile-engagement/)           | `azure-arm-mobileengagement`       |
| [Monitor Management](https://docs.microsoft.com/en-us/rest/api/monitor/)           | `azure-arm-monitor`       |
| [Notification Hubs](https://azure.microsoft.com/en-us/documentation/services/notification-hubs/)                 | `azure-arm-notificationhubs`  |
| [Operations Management](https://docs.microsoft.com/en-us/azure/operations-management-suite/)           | `azure-arm-operations`       |
| [Operational Insights](https://azure.microsoft.com/en-us/resources/videos/azure-operational-insights-overview/)           | `azure-arm-operationalinsights`       |
| [PowerBi Embedded](https://azure.microsoft.com/en-us/services/power-bi-embedded/) | `azure-arm-powerbiembedded`  |
| [RecoveryServices](https://azure.microsoft.com/en-us/services/site-recovery/)                             | `azure-arm-recoveryservices`       |
| [RecoveryServices Backup](https://azure.microsoft.com/en-us/services/site-recovery/)                             | `azure-arm-recoveryservicesbackup`       |
| [RecoveryServices SiteRecovery](https://docs.microsoft.com/en-us/rest/api/site-recovery/)           | `azure-arm-recoveryservices-siterecovery`       |
| [Redis Cache](https://azure.microsoft.com/en-us/services/cache/)                  | `azure-arm-rediscache`   |
| [Relay](https://docs.microsoft.com/en-us/azure/service-bus-relay/relay-what-is-it)                  | `azure-arm-relay`   |
| [Resource Health](https://docs.microsoft.com/en-us/rest/api/resourcehealth/)                  | `azure-arm-resourcehealth `   |
| [Resource Manager](https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/)    | `azure-arm-resource`  |
| [Scheduler](https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/)    | `azure-arm-scheduler`  |
| [Search](https://azure.microsoft.com/en-us/services/search/)    | `azure-arm-search`  |
| [ServerManagement](https://azure.microsoft.com/en-us/documentation/articles/resource-group-overview/)    | `azure-arm-servermanagement`  |
| [Servicebus](https://msdn.microsoft.com/en-us/library/mt639375.aspx)    | `azure-arm-sb`  |
| [Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)    | `azure-arm-servicefabric`  |
| [Storage](http://azure.microsoft.com/en-us/services/storage/)                     | `azure-arm-storage`   |
| [Storage Import-Export](https://docs.microsoft.com/en-us/azure/storage/storage-import-export-service)                     | `azure-arm-storageimportexport`   |
| [Storsimple8000series](https://docs.microsoft.com/en-us/azure/storsimple/storsimple-overview)                     | `azure-arm-storsimple8000series`   |
| [Stream Analytics](https://docs.microsoft.com/en-us/rest/api/streamanalytics/)                     | `azure-arm-streamanalytics`   |
| [Sql](https://azure.microsoft.com/en-us/services/sql-database/)                     | `azure-arm-sql`   |
| [Traffic Manager](http://azure.microsoft.com/en-us/services/traffic-manager/)     | `azure-arm-trafficmanager`|
| [Virtual Networks](http://azure.microsoft.com/en-us/services/virtual-network/)    | `azure-arm-network`   |
| [VisualStudio](https://docs.microsoft.com/en-us/rest/api/)    | `azure-arm-visualstudio`   |
| [WebApps (WebSites)](http://azure.microsoft.com/en-us/services/app-service/web/)  | `azure-arm-website`   |

### Authenticating

There are three ways to authenticate against Azure while using the management plane (azure-**arm**-*) sdks, use [this guide](./Documentation/Authentication.md) to determine which method to use.

## Azure Service Management

| **Azure Service** | **package name** |
| ----------------------------------------------------------------------------- | --------------------------- |
| [Compute](http://azure.microsoft.com/en-us/services/virtual-machines/)            | `azure-asm-compute`  |
| [HDInsight](http://azure.microsoft.com/en-us/services/hdinsight/)                 | `azure-asm-hdinsight` |
| [Service Bus](http://azure.microsoft.com/en-us/services/service-bus/)             | `azure-asm-sb`        |
| [Service Manager](https://msdn.microsoft.com/en-us/library/azure/ee460799.aspx)   | `azure-asm-mgmt`      |
| [Store](http://azure.microsoft.com/en-us/marketplace/)                            | `azure-asm-store`     |
| [Scheduler](http://azure.microsoft.com/en-us/services/scheduler/)                 | `azure-asm-scheduler` |
| [SQL Database](http://azure.microsoft.com/en-us/services/sql-database/)           | `azure-asm-sql`       |
| [Storage](http://azure.microsoft.com/en-us/services/storage/)                     | `azure-asm-storage`   |
| [Subscriptions](https://msdn.microsoft.com/en-us/library/azure/gg715315.aspx)     | `azure-asm-subscription`|
| [Traffic Manager](http://azure.microsoft.com/en-us/services/traffic-manager/)     | `azure-asm-trafficmanager`  |
| [Virtual Networks](http://azure.microsoft.com/en-us/services/virtual-network/)    | `azure-asm-network`   |
| [WebSites](http://azure.microsoft.com/en-us/services/app-service/web/)            | `azure-asm-website`   |

## Base Libraries

| **Library** | **Install Command** |
| ----------------------------------------------------------------------------- | --------------------------- |
| Common Functionality (for ASM & ARM clients)                                      | `azure-common`        |
| Common Functionality for ARM clients generated from Autorest (Generic)            | `ms-rest`             |
| Common Functionality for ARM clients generated from Autorest (Azure)              | `ms-rest-azure`       |

