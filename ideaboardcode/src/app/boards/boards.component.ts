import { Component, OnInit } from '@angular/core';
import { Board} from '../board';
import { BOARDS} from '../mock-boards';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  board: Board = {
    id:1,
    name: 'new board'
  };

  boards = BOARDS;
  constructor() { }

  ngOnInit() {
  }
  
}
