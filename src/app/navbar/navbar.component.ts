import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number = 0
  isLoggedIn: boolean = false;
  constructor(private _authService: AuthService, private _cartService:CartService) {
    // if (this._authService.userData != null) {
    //   this.isLoggedIn = true
    // } else {
    //   this.isLoggedIn = false
    // }

    this._authService.userData.subscribe((res) => {
      if (this._authService.userData.getValue()) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })

    this._cartService.numOfCartItems.subscribe(res => {
      this.numOfCartItems = res
    })
  }

  logOut() {
    this._authService.logOut()
  }
}
