export class UserCreateDto {
  readonly email:string;
  readonly firstname: string;
  readonly lastname: string;
  password: string;
  readonly passwordConfirm: string
  readonly address: string;
  readonly tel: string;
  // readonly status:string;
  readonly userrights:string; //ผู้ดแลระบบ พนักงานประจำสาขา พนักงานทำความสะอาด
}
