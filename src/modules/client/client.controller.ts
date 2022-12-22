import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getInitHTMLPage(): ReturnType<ClientService['getInitHTML']> {
    console.log('KEK');
    return this.clientService.getInitHTML();
  }
}
