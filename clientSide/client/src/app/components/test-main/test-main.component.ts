import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-test-main',
  templateUrl: './test-main.component.html',
  styleUrls: ['./test-main.component.css']
})
export class TestMainComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
