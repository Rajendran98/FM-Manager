// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  _loginUrl : "api5",//Outbound,Upload Firmware
  _loginStg: "api6",//single Device search,GQL
  _loginProdUrl: "https://identity-stg.trimble.com/token?grant_type=client_credentials&amp;scope=openid", //Other OTAP Command , Upolad C and Java
  _outboundapi : "https://cloud.stage.api.trimblecloud.com/osg-frame/outbound-api/2.0/outbound/NH519298?limit=10&page=1&sort=desc",
  _multipleDeviceapi: "https://cloud.stage.api.trimblecloud.com/osg-frame/outbound-api/2.0/outbound/messages",
  _deviceWithPagination: "https://cloud.stage.api.trimblecloud.com/osg-frame/deviceinfo-api/2.0/deviceInfo/firmware",
  _firmwareUpload: "api1",
  _fwdashboard: "api",
  _fwdashboardDeviceType: "api8",
  _dashboard: "api2",
  _publishVersion: "api3",
  _firmwareFileUpload: "api4",
  _deviceOutbound: "api7",
  _graphQLStg:"api9",
  _getDevice: "https://cloud.api.trimble.com/cloud/iot-ng/1.0/devices/shadow/46952541-3269-45fb-9f93-386bbe17372d-SNM00030"
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// 