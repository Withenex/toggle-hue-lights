import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class RegisterService {

    constructor(private http: HttpService) { }

    url = `http://192.168.0.167/api`
    async sayHello() {
        let message = "";
        await this.http.post(this.url, `{"devicetype": "chris' hue app"}`).toPromise().then((response) => { 
            console.log(response.data[0].error)
            if(response.data[0].error)
            {
                message = "Please press the link button then refresh"
                console.log("alerted user")
            }
            else
            {
                process.env.HUE_USERNAME = response.data[0].success.username;
                message = "Bridge successfully linked"
            }
         })


        return message
    }
}
