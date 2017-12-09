import { Component } from '@angular/core';
import { User } from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userList:Array<User> = [];
  userName:string ="";
  userAge:number = 0;

  constructor(){
  }
  addUser():void{
    var user:User = new User();
    user.userName = this.userName;
    user.userAge = this.userAge;
    this.userList.push(user);
  }
  test() : void{
  var user1:User = new User();
    this.userList.push(user1);
    user1.userName = "장유미";
    user1.userAge = 3;
    user1 = new User();
    user1.userName = "장유미1";
    user1.userAge = 23;
    this.userList.push(user1);
  }
}
