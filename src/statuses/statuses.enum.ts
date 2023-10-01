export enum StatusEnum {
  'ACTIVE' = 1, // After email is verified
  'INACTIVE' = 2, // Registered in app but not logged for at least 1 time
  'INVITED' = 3, // Not registered but invited to join a group
}
