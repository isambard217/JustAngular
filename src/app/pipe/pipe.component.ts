import { Component } from '@angular/core';

import { SummaryPipe } from './summary.pipe';

@Component({
    selector: 'app-pipe',
    template: `
    <div style="border:2px solid blue;">
         {{ data.title | summary:2 }}
    </div>
    <div style="border: 2px solid red;">
        <br />
            {{ data.body | summary: 4 }}
        <br />
    </div>
    {{ data.rating }}
    <br />
    {{ data.students }}
    <br />
    {{ data.price }}
    <br />
    {{ data.releaseDate }}
    `
    //pro: [SummaryPipe]

})
export class PipeComponent {

    data = {
        title: "Angular 2",
        body: "Today was a good day was it not",
        rating: 4.59,
        students: 100,
        price: 99.75,
        releaseDate: new Date(2016, 3, 1)

    }
>>>>>>> 46240edf3d8fd203b3f63b7c356afd2384fc9b05

}