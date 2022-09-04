import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserID: '324535'
    },
    {
      userId: '456',
      stripeUserID: '4039438'
    }
  ]
  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest){
    console.log('FROM AUTH SERVICE: ', getUserRequest)
    return this.users.find(user => user.userId === getUserRequest.userId)
  }
}
