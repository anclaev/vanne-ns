import { ConsoleLogger, Injectable } from '@nestjs/common'

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(ctx?: string) {
    super(ctx || 'Vanne API')
  }

  setCtx(ctx: string) {
    this.context = ctx
  }
}
