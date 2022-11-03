import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/suma")
  suma(primero: number,segundo: number) {
    return primero+segundo;
  }

  @Get("/a")
  a(numero: number,cadena: string): string {
    if (numero==0){
      return cadena;
    } else {
      return this.a(numero-1,cadena+"a");
    }
  }
}
