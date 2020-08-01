import { Controller, Get } from '@nestjs/common';
import {HueService} from './hue.service'
@Controller('hue')
export class HueController {
    constructor(private HueService:HueService)
    {}

    @Get('/status')
    async status()
    {
       return await this.HueService.getStatus();
    }

    @Get('/toggle')
    async toggleLights(){
        return await this.HueService.toggle();
    }

    @Get('/off')
    async turnOff(){
        return await this.HueService.off();
    }
    
    @Get('/on')
    async turnOn(){
        return await this.HueService.on();
    }
}
