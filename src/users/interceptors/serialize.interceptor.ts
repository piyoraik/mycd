import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class SerializeInterceptor implements NestInterceptor {
  intercept(content: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler
    // リクエストハンドラーによって、リクエストが処理される前に何かを実行する
    console.log('1. Im running before the handler', content);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // レスポンスが送られる前に何かを実行する
        console.log('3. Im running before response is sent out', data);
      }),
    );
  }
}
