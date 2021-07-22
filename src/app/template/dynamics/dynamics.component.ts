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

  newGame: string='';

  @ViewChild('myForm') myForm!: NgForm

  person : Person =  {
    name: "Sergio",
    favoriteGames:[
      {id: 1, name: "FIFA"},
      {id:2, name: "Civilization"},
      {id:3, name: "Fortnite"}

    ]
  }


  add(){

    const newFavoriteGame: FavoriteGames = {
      id: this.person.favoriteGames.length+1,
      name: this.newGame
    }

    this.person.favoriteGames.push({...newFavoriteGame})
    this.newGame='';

  }

  delete(i:number){
    this.person.favoriteGames.splice(i, 1);
  }

  save(){
    console.log(this.myForm);
  }

}
