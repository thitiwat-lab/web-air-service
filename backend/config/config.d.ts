export type ConfigType = {
  CONNECTION: string
  OPTION: object
}

export type ServerType = {
  PORT: number
  API: string
  PUBLIC: string
}

export type JwtType = {
  SECRET: string
  EXPIRED: string | number
  PRIVATE: string
}

export type MailType = {
  HOST: string
  PORT: number
  SECURE: boolean
  USERNAME: string
  PASSWORD: string
  SECRET: string
  EXPIRED: number
  FORM: {
    TO: string
    SUBJET_FORGOT: string
    URL_FORGET: string
  }
}

export type TemplateType = {
  TITLE: string
  TEXT_TITLE: string
  TEXT_BTN: string
  LOGO_URL: string
  LOGO_IMG: string
  TEXT_SUBJECT: string
  TEXT_MESSAGE: string
  EMAIL_CONTACT: string
  EMAIL_SUPPORT: string
  COMPANY: string
}

export type ConnectType = {
  API: string
}
