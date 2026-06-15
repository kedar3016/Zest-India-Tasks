import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  courseName = 'Selected Course';

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.courseName = params.get('course') || 'Selected Course';
    });
  }
}
