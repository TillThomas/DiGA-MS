import { HttpService } from '@nestjs/axios';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Controller('DiGA')
export class DiGAController {
  constructor(private readonly httpService: HttpService) {}
  @Get()
  getDiGAs(@Req() request: Request): Observable<any> {
    return this.httpService
      .get('https://diga.bfarm.de/api/fhir/v2.0/CatalogEntry', {
        headers: {
          Authorization: request.headers['authentication'],
        },
      })
      .pipe(
        map((res) => res.data),
        map((data) => {
          console.log('here');

          if (!data) {
            throw new HttpException(
              'Could not fetch token',
              HttpStatus.NOT_FOUND,
            );
          }
          return data;
        }),
      );
  }

  @Get()
  getCatalogEntries(@Req() request: Request): Observable<any> {
    return this.httpService
      .get('https://diga.bfarm.de/api/fhir/v2.0/CatalogEntry', {
        headers: {
          Authorization: request.headers['authentication'],
        },
      })
      .pipe(
        map((res) => res.data),
        map((data) => {
          console.log('here');

          if (!data) {
            throw new HttpException(
              'Could not fetch token',
              HttpStatus.NOT_FOUND,
            );
          }
          return data;
        }),
      );
  }
}
