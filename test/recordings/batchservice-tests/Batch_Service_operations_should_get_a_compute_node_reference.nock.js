// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-3850571994_1-20160729t163835z?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-3850571994_1-20160729t163835z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_1-20160729t163835z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-07-29T16:42:21.227015Z\",\"lastBootTime\":\"2016-07-29T16:42:20.0229833Z\",\"allocationTime\":\"2016-07-29T16:38:35.0971844Z\",\"ipAddress\":\"100.73.170.67\",\"affinityId\":\"TVM:tvm-3850571994_1-20160729t163835z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '60239f8f-07c1-4e84-b38d-e590524e257f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:45:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-3850571994_1-20160729t163835z?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#nodes/@Element\",\"id\":\"tvm-3850571994_1-20160729t163835z\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-3850571994_1-20160729t163835z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-07-29T16:42:21.227015Z\",\"lastBootTime\":\"2016-07-29T16:42:20.0229833Z\",\"allocationTime\":\"2016-07-29T16:38:35.0971844Z\",\"ipAddress\":\"100.73.170.67\",\"affinityId\":\"TVM:tvm-3850571994_1-20160729t163835z\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '60239f8f-07c1-4e84-b38d-e590524e257f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:45:48 GMT',
  connection: 'close' });
 return result; }]];