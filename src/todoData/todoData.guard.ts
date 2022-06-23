import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyToken } from 'src/utils';

@Injectable()
export class AuthGuard implements CanActivate {
  async validateRequest(req: Request): Promise<boolean> {
    try {
      const { token }: any = req.headers;

      if (!token) {
        throw new HttpException('Please Login first', 401);
      }
      const verify: any = await verifyToken(token);

      const { id }: { id: number } = verify;
      if (id) {
        req['userId'] = id;
        return true;
      }

      return false;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
