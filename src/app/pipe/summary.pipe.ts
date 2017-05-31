<<<<<<< HEAD
import {Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform{

    transform(value: string, args: string[]) {

        if(value)
            return value.substring(0, 4) + " ... ";

    }

=======
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    /*
        First para: the value we are going to apply the pipe on

        Second para: is an array of arguments which we and optionally pass to the method
     */
    transform(value: string , args: string[]) {
        //throw new Error("Method not implemented.");
        
        if(args.length != 0)
        {
            for(var i = 0; i < args.length; i++){
                console.log("The argument is " + args[i]);

            }
        }
        console.log("Initial value isambard " + value);
        console.log("Inital options " + args.toString());

       // is we have args   and args has an element we parse args to an int and return it otherwise we return 3
        var limit = (args && args[0]) ? parseInt(args[0]) : 3;


        if(limit)
              console.log("The limit is " + limit);
            //return value.substring(0,1) + " isambard's test ";
            return limit;
    }


>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05
}