import { Strategy } from 'passport-google-oidc';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

// clientID: process.env['GOOGLE_CLIENT_ID'],
// clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
// callbackURL: 'https://www.example.com/oauth2/redirect/google'
