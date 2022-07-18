import { Component, OnInit } from '@angular/core';
import  * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
