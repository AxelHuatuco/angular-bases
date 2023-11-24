import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public HeroName :string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deletedHERO?: string;

  removeLastHero ():void{

    this.deletedHERO = this.HeroName.pop();

    // console.log({deletedHERO});

  }
}
