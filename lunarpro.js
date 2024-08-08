// var ojbk={
//   "status" : "success",
//   "subscription" : {
//     "autorenew" : false,
//     "expiration" : "2099-08-22T06:38:23.000000Z"
//   },
//   "scope" : [
//     "rsvp",
//     "scheduling",
//     "openings",
//     "keyvalue-sharedtoken",
//     "keyvalue",
//     "keyvalue-verification",
//     "notify",
//     "location",
//     "keyvalue-watch",
//     "account",
//     "weather",
//     "schedjoules",
//     "fantastical",
//     "sso-connect",
//     "cardhop"
//   ],
//   "email" : "jxshen.polyu@gmail.com",
//   "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0YmY2ZDc4LTIyM2QtNDg0MS1iOWRkLWFhNThmZjlkMzc3ZCIsImVtYWlsIjoianhzaGVuLnBvbHl1QGdtYWlsLmNvbSIsImlhdCI6MTcyMzEwNDU4MSwiZXhwIjoxNzIzMTA4MTgxLCJkZXZpY2UiOiJtYWMtNkU0Mzk1OTYwMjQzNzgxQjVBMDk5QTU4MTczRDg5QUU3QUY4MzQyNTAzMERDMUVCNzQyMDVDMjc0NzM1MjU3RiIsInNjb3BlIjpbInJzdnAiLCJzY2hlZHVsaW5nIiwib3BlbmluZ3MiLCJrZXl2YWx1ZS1zaGFyZWR0b2tlbiIsImtleXZhbHVlIiwia2V5dmFsdWUtdmVyaWZpY2F0aW9uIiwibm90aWZ5IiwibG9jYXRpb24iLCJzY2hlZGpvdWxlcyIsImtleXZhbHVlLXdhdGNoIiwiYWNjb3VudCIsImZhbnRhc3RpY2FsIiwic3NvLWNvbm5lY3QiLCJ3ZWF0aGVyIiwiY2FyZGhvcCJdLCJhdWQiOiJmbGV4aWJpdHMvYXBpIiwiaXNzIjoiZmxleGliaXRzL2FwaSJ9.DSJ57DFEtIjp2pJRV7g_BEx5VUgWt243SiIc1WGeYL4",
//   "name" : "Jiaxing SHEN",
//   "user" : "e4bf6d78-223d-4841-b9dd-aa58ff9d377d"
// };


// $done({body:JSON.stringify(ojbk)});


let url = $request.url;
const path1="v1/auth/device";
const path2="v1/account/details";
let obj = JSON.parse($response.body);
if (url.indexOf(path1) != -1) {
obj["subscription"]={
  "autorenew": true,
  "expiration": "2099-02-15T09:09:14Z",
  "expires": "2099-02-15T09:09:14Z"
 }
}
if (url.indexOf(path2) != -1) {
obj["subscription"]={
  "autorenew": true,
  "expiration": "2099-02-15T09:09:14.000000Z",
  "uuid": "3c5927a6-4e3e-4773-b7af-62506e036dc7",
  "subscription_type": "AppStore",
  "is_expired": false,
  "trial": false
 }
}
$done({body: JSON.stringify(obj)});
