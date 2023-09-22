import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  Header,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { load } from 'cheerio';

@Controller('token')
export class TokenController {
  constructor(private readonly httpService: HttpService) {}
  @Get()
  @Header('Cache-Control', 'none')
  @Header('Allowed-Headers', 'Authorization ')
  getToken(): Observable<string> {
    return this.httpService.get('https://diga.bfarm.de/de/verzeichnis').pipe(
      map((res) => res.data),
      map((data) => {
        const html = load(data);
        const config = html('meta[name="host-app/config/environment"]').attr(
          'content',
        );
        const decoded = JSON.parse(decodeURIComponent(config));
        const token = decoded?.APP?.fhir?.token;
        if (!token) {
          throw new HttpException(
            'Could not fetch token',
            HttpStatus.NOT_FOUND,
          );
        }
        return token;
      }),
    );
  }
}
