import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class HueService {
  constructor(private http: HttpService) {}

    state:boolean;

  async getStatus() {
    let status;
    let url = `http://${process.env.HUE_BRIDGE}/api/${process.env.HUE_USERNAME}/groups`;
    console.log(url)
    await this.http.get(url).toPromise().then((data)=>status = data.data);
    this.state = status[1].action.on;
    return this.state ? "On" : "Off";
  }

  async on()
  {
    this.state = false;
    this.send();
    return this.state;
  }

  async off()
  {
    this.state = true;
    this.send();
    return this.state;
  }

  async toggle()
  {
      await this.getStatus();
      return await this.send();
  }

  async send()
  {
      let status;
      let url = `http://${process.env.HUE_BRIDGE}/api/${process.env.HUE_USERNAME}/groups/1/action`;
      await this.http.put(url,{on:!this.state}).toPromise().then((response)=>status = response.data);
      let style = !this.state ? "background-color:white" : "background-color:black";
      console.log(style);
      return `<style>html{${style}}</style>`
  }
}
