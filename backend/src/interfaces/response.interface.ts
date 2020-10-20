export interface ResponseInterface {
    readonly code: string
    readonly message: string
    readonly errors?: any
    readonly results?: any
    readonly result?: any
    readonly token?: string
    readonly timestamp?: string
  }