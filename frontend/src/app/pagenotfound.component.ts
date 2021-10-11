import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'Not-Found',
    template: `
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed or is temporarily unavailable on cyber patient app.</p>
			<a (click)="goto()">Go To Homepage</a>
		</div>
	</div>
    `,
    styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    goto(){
        this.router.navigate(['/home'])
    }
}
