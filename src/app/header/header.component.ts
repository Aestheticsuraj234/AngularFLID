import { Component } from '@angular/core';
import { FlidDataService } from '../flid-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  greet: string = '';
  isNotificationPopup: boolean = false;
  inputValue: string = '';


  constructor(private flidData: FlidDataService , private toastr: ToastrService) {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greet = 'Morning⛅';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greet = 'Afternoon🌞';
    } else {
      this.greet = 'Evening🌃🚀';
    }
  }

  handleToggleToast() {
    this.isNotificationPopup = !this.isNotificationPopup;
  }

  handleSubmit() {
    
    if(!this.inputValue ) {
      alert('Please enter a value')
    }

    else{

try {
  console.log(this.inputValue);
  this.flidData.saveFlid(this.inputValue).subscribe((res) => {
    console.log(res);
  })

  this.toastr.success('FLID added successfully', 'Success',{
    timeOut: 2000,
    progressBar: true,
    progressAnimation: 'increasing',
    positionClass: 'toast-top-right',
    onActivateTick:true

  });
  this.inputValue = '';
} catch (error) {

  this.toastr.error('FLID not added', 'Error',{
    timeOut: 2000,
    progressBar: true,
    progressAnimation: 'increasing',
    positionClass: 'toast-top-right',
    onActivateTick:true
    
  })

}





    
    }
  }
}
