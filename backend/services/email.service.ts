import { Injectable, HttpException } from '@nestjs/common'
import * as nodemailer from 'nodemailer'
import * as env from 'env'

// internal
import { MailType } from '../config/config'
import { templateForgot } from '../templates/forgot.mail'

// variable
const MAIL: MailType = env.get('MAILER')

@Injectable()
export class EmailService {
  private connection(message: any): any {
    const transporter = nodemailer.createTransport({
      host: MAIL.HOST,
      port: MAIL.PORT,
      secure: MAIL.SECURE,
      auth: {
        user: MAIL.USERNAME,
        pass: MAIL.PASSWORD,
      },
    })

    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, success) => {
        if (error) {
          throw new HttpException(error, 500)
        } else {
          resolve('Server is ready to take our messages')
          // tslint:disable-next-line:no-console
          console.log('Server is ready to take our messages')
        }
      })
    })
  }

  SendForgot(email: string, url: string, name: string) {
    const message = {
      from: MAIL.FORM.TO,
      to: email,
      subject: MAIL.FORM.SUBJET_FORGOT,
      html: templateForgot(url, name),
    }

    return this.connection(message)
  }
}