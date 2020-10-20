import { string } from 'joi';
export class MemberUpdateDto {
    readonly firstname: string;
    readonly lastname: string;
    readonly address: string;
    readonly tel: string;
    readonly lat:string
    readonly lng:string
  }
  