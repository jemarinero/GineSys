import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    
    constructor(){}
    
    handleError(error) {
        alert('Se producjo un error inesperado.'+error);
        console.log(error);
    }
}