import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs';

@Injectable()
export class ClientService {
  async getInitHTML(): Promise<any> {
    const file = fs.readFileSync(
      path.join(__dirname, 'client/build/index.html'),
      'utf8',
    );

    console.log(file);

    return file;
  }
}
