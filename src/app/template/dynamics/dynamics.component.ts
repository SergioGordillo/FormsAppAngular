import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person{
  name: string;
  favoriteGames:FavoriteGames[]
}

interface FavoriteGames{
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent{

  @ViewChild('myForm') myForm!: NgForm

  person : Person =  {
    name: "Sergio",
    favoriteGames:[
      {id: 1, name: "FIFA"},
      {id:2, name: "Civilization"}

    ]
  }



  save(){
    console.log(this.myForm);
  }

}
