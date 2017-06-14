import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private userSerive : UserService,private router:ActivatedRoute) { }
  id : any
  ngOnInit() {
   this.router.params.subscribe(params =>{
      this.id = params['id'];
   });
  }
  updateUser(value){
      let newUser = {
        id : this.id,
        username : value.username,
        age : value.age,
        diachi : value.diachi
      }
      this.userSerive.updateUser(newUser).subscribe(result=>{
          console.log(result);
      });

  }
}
