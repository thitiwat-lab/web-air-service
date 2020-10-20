import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'

// interface
import KEY from '../../config/key'
import { ResponseInterface } from '../interfaces/response.interface'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    // const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    if (status === 500) {
      const res: ResponseInterface = {
        code: KEY.KEY_ERROR,
        message: 'Internal server error',
        timestamp: new Date().toISOString(),
      }

      response.status(status).json(res)
    } else {
      response.status(status).json(exception.getResponse())
    }
  }
}
