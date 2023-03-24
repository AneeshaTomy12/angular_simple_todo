import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  tasks: string[] = ['Assignment 1','Assignment 2'];
  newItem : string='';
  public message=""
  public dltMsg=''


  addTask() {
    if(this.newItem){
      this.message="New item Added"
      this.tasks.push(this.newItem);
      console.log(this.newItem)
      this.newItem='';
    }
    setTimeout(()=>{
      this.message=""   
    },1000)
    
  }

  removeTask(index: number) {
    const permission=confirm('are you sure you wanted to delete this item permanently?')
    if(permission){
      this.dltMsg='deleted'
      this.tasks.splice(index, 1);
    }
    setTimeout(()=>{
      this.dltMsg=''
    },1000)
  }

}
