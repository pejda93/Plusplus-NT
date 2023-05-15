import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  intervalId: any;
  broj = 0;
  @Output() output = new EventEmitter<number>();

  startInterval() {
    this.intervalId = setInterval(() => {
        this.output.emit(this.broj++);
    }, 1000);
  }
}
