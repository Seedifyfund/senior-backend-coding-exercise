import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('')
  checkServer() {
    return 'Server is up and running';
  }
}
