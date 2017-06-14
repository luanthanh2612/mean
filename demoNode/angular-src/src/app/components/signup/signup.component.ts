import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService, private flashMessage : FlashMessagesService) { }

  ngOnInit() {
  }


  dangky(value){
    
    let nguoidung = {
      email : value.email,
      password : value.password,
      ten : value.ten
    }

    this.auth.dangky(nguoidung).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('ban da dang ky thanh cong',{ cssClass: 'alert-success', timeout: 3000 });

      }
    })


  }

}
