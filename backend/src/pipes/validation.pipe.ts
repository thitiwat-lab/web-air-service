import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'

// internal
import KEY from '../../config/key'
import { ResponseInterface } from '../interfaces/response.interface'
import * as Message from '../messages/validate.message'

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(private readonly schema: any, private readonly type: string = 'body') {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (this.type === metadata.type) {
      const { error } = this.schema.validate(value)
      if (error) {
        const res: ResponseInterface = {
          code: KEY.KEY_VALIDATE,
          message: Message.VALIDATE_MESSAGE,
          errors: this.format(error),
        }

        throw new BadRequestException(res)
      }
    }

    return value
  }

  private format: any = (res: any) => {
    const validate = (res || { details: [] }).details.map(v => {
      return {
        key: v.context.key,
        message: (v.message || '').replace(/\"/g, ''),
        type: v.type,
      }
    })

    if (validate[0]) {
      return validate[0]
    }

    return undefined
  }
}