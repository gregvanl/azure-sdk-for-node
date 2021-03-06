// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'northeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster2?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '9bd543d1-20a5-4ffc-bd2b-1145c8ad7c27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c25278be-5624-4744-8899-df3c720e3c47',
  'x-ms-correlation-request-id': 'c25278be-5624-4744-8899-df3c720e3c47',
  'x-ms-routing-request-id': 'WESTUS:20180614T034604Z:c25278be-5624-4744-8899-df3c720e3c47',
  date: 'Thu, 14 Jun 2018 03:46:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster2?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '9bd543d1-20a5-4ffc-bd2b-1145c8ad7c27',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'c25278be-5624-4744-8899-df3c720e3c47',
  'x-ms-correlation-request-id': 'c25278be-5624-4744-8899-df3c720e3c47',
  'x-ms-routing-request-id': 'WESTUS:20180614T034604Z:c25278be-5624-4744-8899-df3c720e3c47',
  date: 'Thu, 14 Jun 2018 03:46:04 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97\",\"name\":\"82bd39a9-1e8e-4eaa-a837-2cf6c6217d97\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:46:04.544Z\",\"endTime\":\"2018-06-14T03:46:17.976Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster2\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd304df74-0a05-4c82-ae88-3eabb25ebfdf',
  'request-id': 'cb6860ed-9c55-4bcf-90d6-86bced45fdf7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd304df74-0a05-4c82-ae88-3eabb25ebfdf',
  'x-ms-routing-request-id': 'WESTUS:20180614T034635Z:d304df74-0a05-4c82-ae88-3eabb25ebfdf',
  date: 'Thu, 14 Jun 2018 03:46:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/82bd39a9-1e8e-4eaa-a837-2cf6c6217d97\",\"name\":\"82bd39a9-1e8e-4eaa-a837-2cf6c6217d97\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:46:04.544Z\",\"endTime\":\"2018-06-14T03:46:17.976Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster2\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd304df74-0a05-4c82-ae88-3eabb25ebfdf',
  'request-id': 'cb6860ed-9c55-4bcf-90d6-86bced45fdf7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'd304df74-0a05-4c82-ae88-3eabb25ebfdf',
  'x-ms-routing-request-id': 'WESTUS:20180614T034635Z:d304df74-0a05-4c82-ae88-3eabb25ebfdf',
  date: 'Thu, 14 Jun 2018 03:46:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster2?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster2\",\"name\":\"cluster2\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:46:04.528Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:46:18.258Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:46:17.961Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"microsoft-ads\",\"offer\":\"linux-data-science-vm-ubuntu\",\"sku\":\"linuxdsvmubuntu\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1377',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:46:04 GMT',
  etag: '"0x8D5D1A95AC45B7B"',
  'x-ms-request-id': '733dccf6-58fc-4d9f-9e5d-1d1ce12f47aa',
  'request-id': '427f0108-bfeb-40af-9cdc-c84adba7693a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '733dccf6-58fc-4d9f-9e5d-1d1ce12f47aa',
  'x-ms-routing-request-id': 'WESTUS:20180614T034637Z:733dccf6-58fc-4d9f-9e5d-1d1ce12f47aa',
  date: 'Thu, 14 Jun 2018 03:46:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster2?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster2\",\"name\":\"cluster2\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:46:04.528Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:46:18.258Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:46:17.961Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"microsoft-ads\",\"offer\":\"linux-data-science-vm-ubuntu\",\"sku\":\"linuxdsvmubuntu\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1377',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:46:04 GMT',
  etag: '"0x8D5D1A95AC45B7B"',
  'x-ms-request-id': '733dccf6-58fc-4d9f-9e5d-1d1ce12f47aa',
  'request-id': '427f0108-bfeb-40af-9cdc-c84adba7693a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '733dccf6-58fc-4d9f-9e5d-1d1ce12f47aa',
  'x-ms-routing-request-id': 'WESTUS:20180614T034637Z:733dccf6-58fc-4d9f-9e5d-1d1ce12f47aa',
  date: 'Thu, 14 Jun 2018 03:46:36 GMT',
  connection: 'close' });
 return result; }]];