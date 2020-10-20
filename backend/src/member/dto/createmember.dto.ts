import * as mongoose from 'mongoose'
import  {Mapsmember} from '../../mapsmember/mapsmember.schema'

export class MemberCreateDto {
    readonly firstname: string;
    readonly lastname: string;
    readonly address: string;
    readonly tel: string;
  }
  