import { Module, HttpModule } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';

@Module({
  imports: [HttpModule],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
