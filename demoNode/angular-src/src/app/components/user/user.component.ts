import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User>;
  arrHinh: Array<String>;
  constructor(private userService: UserService, private router: Router) {


  }


  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      if (data.success) {

        this.users = data.user
        
      }
    });

    this.userService.getImage().subscribe(img => {
      if (img.success) {
        this.arrHinh = img.hinh
      }


    });

  }

  addUser(value) {
    let user = {
      username: value.username,
      age: value.age,
      diachi: value.diachi
    }
    if (user.username == "" || user.age == "" || user.diachi == "") {
      alert("Loi");
    } else {
      this.userService.addUser(user).subscribe(data => {
        if (data.success) {
          this.users.push(user);
        }
      });
    }
  }
  xoaUser(id) {
    this.userService.deleteUser(id).subscribe(data => {
      if (data.success) {
        this.users.forEach((item,index)=>{
         if(item._id == id){
           this.users.splice(index,1);
         }
        });
      }
    });
  }
}
