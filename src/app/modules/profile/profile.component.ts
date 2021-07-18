import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public value = 'Clear me';
  public subscribed: boolean = false;
  public userList: UserModel[] = new Array();
  constructor(public userService: UserService){}

 
  ngOnInit() {
    this.refreshProfile()
  }
 
  refreshProfile(): void {
    this.userService.getGuestUserList().subscribe((result: UserModel[]) => {
      this.userList = result;
      console.log(this.userList[0].subscribed);
      this.subscribed = this.userList[0].subscribed;
    });

  }


  setSub(): void {
    console.log('yes hello!');

    if(this.subscribed === true){
      console.log('Turning Subscription on!')
      this.userService.setGuestSubscriptionOn()
      .subscribe(data => {
        console.log(data)
        this.refreshProfile();
      })  
    } else {
      console.log('Turning subscription off!')
      this.userService.setGuestSubscriptionOff()
      .subscribe(data => {
        console.log(data)
        this.refreshProfile();
      })  
    }
    
  }
    
}

