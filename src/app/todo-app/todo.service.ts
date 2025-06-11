import {Injectable,signal} from '@angular/core';

export interface Todo {
    id:number;
    title:string;
    done:boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

@Injectable ({providedIn:'root'})
export class TodoStoreService {
   todos = signal<Todo[]>([]);
   filter = signal<FilterType>('all');


   add(title:string){
    const newTodo: Todo = {
        id:Date.now(),
        title,
        done:false,
    };
    this.todos.update(list=>[...list,newTodo]);
   }

   toggle(id:number){
    this.todos.update(list =>
        list.map(todo=>
            todo.id === id? {...todo,done:!todo.done}:todo
        )
    );
   }

   remove(id:number) {
    this.todos.update(list =>list.filter(todo=>todo.id !==id));
   }

   clearCompleted() {
    this.todos.update(list=>list.filter(todo=>!todo.done));
   }

   setFilter(filter:FilterType) {
    this.filter.set(filter);
   }
}