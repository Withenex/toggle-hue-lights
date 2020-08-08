import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {

    sayHello(){
        return "Hello from register.service"
    }
}
