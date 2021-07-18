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

  ngOnInit(): void {
    this.userService.getGuestUserList().subscribe((result: UserModel[]) => {
        this.userList = result;
        console.log(this.userList);
    });
  }

}
