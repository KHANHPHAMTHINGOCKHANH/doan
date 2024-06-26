import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LocationState } from '../../../../ngrx/state/location.state';
import { Location } from '../../../../models/location.model';
import { ShareModule } from '../../../../shared/shared.module';
import { TaigaModule } from '../../../../shared/taiga.module';
import { get } from '../../../../ngrx/actions/location.actions';
import { LocationService } from '../../../../service/location/location.service'; 


@Component({
  selector: 'app-detail',  
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnDestroy {

  location$ = this.store.select('location', 'locationList');
  locationList: Location[] = [];
  selectedLocation: any;
  subcriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private store: Store<{ location: LocationState }>
  ) {
    this.store.dispatch(get());
    this.subcriptions.push(
      this.location$.subscribe((locationList) => {
        if(locationList.length > 0){
          console.log(locationList);
          this.locationList = locationList;
        }
      }),
    );
  
  }
  ngOnInit():void {
    this.store.dispatch(get());
     this.subcriptions.push(
       this.location$.subscribe((locationList) => {
         if(locationList.length > 0){
           console.log(locationList);
           this.locationList = locationList;
         }
       }),
     );
    //  const loId = this.route.snapshot.paramMap.get('locationId');
    //  if (loId) {
    //    this.locationService.getLocationById(loId).subscribe((location: any) => {
    //      this.selectedLocation = location;
    //    });
    //  }

  }
  item = this.locationService.getLocationDetail();

   ngOnDestroy(): void {
    this.subcriptions.forEach((sub) => sub.unsubscribe());
  }

 

  Back(): void {
    this.router.navigate(['/base/location']);
  }
  tablebooking(location: Location): void {
    // this.locationService.addToLocationDetail(location);
    this.router.navigate(['base/booking']);
  }
}

