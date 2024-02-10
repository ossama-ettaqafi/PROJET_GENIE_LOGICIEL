import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnDestroy {
  loading: boolean = false;
  private loadingSubscription: Subscription;
  private timeoutId: any;

  constructor(private router: Router) {
    this.loadingSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        // Set loading to true and start a timeout to hide the loading indicator after 5 seconds
        this.loading = true;
        this.timeoutId = setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
    clearTimeout(this.timeoutId); // Clear the timeout when the component is destroyed
  }
}
