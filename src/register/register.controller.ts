import { Controller, Get } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private register:RegisterService)
    {}
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get()
    findOne(){
        return this.register.sayHello();
    }
}
