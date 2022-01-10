import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {
  intercept(content: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler
    // 2. リクエストハンドラーによって、リクエストが処理される前に何かを実行する

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // 3. レスポンスが送られる前に何かを実行する
        return plainToClass(UserDto, data, {
          // Exposeデコレーターがついてるやつだけ返す（UserDto
          excludeExtraneousValues: true
        })
      }),
    );
  }
}
