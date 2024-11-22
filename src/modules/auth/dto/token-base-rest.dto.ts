import { IsString } from 'class-validator';

export class TokenBaseRest {
  access: string;
  refresh: string;
}
