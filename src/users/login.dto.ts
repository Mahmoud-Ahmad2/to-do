import { IsEmail, Matches } from 'class-validator';

export class loginDto {
  @IsEmail()
  email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
  )
  password: string;
}
