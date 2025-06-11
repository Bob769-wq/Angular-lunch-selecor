import { Component, computed, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterType, TodoStoreService } from "./todo.service";



@Component ({
    selector:'app-todo-app',
    standalone:true,
    imports:[CommonModule],
    template:`
    <h1>📋 Todo List</h1>

    <input [value]="input()" (input)="input.set($any($event.target).value)" 
    placeholder="What needs to be done" />
    <button (click)="add()">Add</button>

    <div>
        Filter:
        <button
        [class.active]="filter() === 'all'"
        (click)="setFilter('all')">All</button>
        <button
        [class.active]="filter()==='active'"
        (click)="setFilter('active')">Active</button>
        <button
        [class.active]="filter() ==='completed'"
        (click)="setFilter('completed')">Completed</button>
    </div>

    <ul>
        @for (todo of visibleTodos(); track todo.id) {
            <li>
                <input type="checkbox" [checked]="todo.done" (change)="toggle(todo.id)" />
                <span [class.done]="todo.done ? 'line-through' : 'none'">{{todo.title}}</span>
                <button (click)="remove(todo.id)">x</button>
            </li>
        }
    </ul>

    <p>{{remaining()}} remaining</p>
    <button (click)="clearCompleted()">Clear Completed</button>
    `,
    styles:`
    .active {
        font-weight: bold;
        text-decoration: underline;
    }
    .done {
        text-decoration:line-through;
        color:gray;
    }
    `
})

export class TodoAppComponent {
    private todoStore = inject(TodoStoreService);

    input = signal('');
    filter = this.todoStore.filter;

    visibleTodos = computed(()=>{
        const list = this.todoStore.todos();
        const f = this.todoStore.filter();
        if(f=== 'active') return list.filter(t => !t.done);
        if(f === 'completed') return list.filter(t =>t.done);
        return list;
    })
    remaining = computed(()=> this.todoStore.todos().filter(t=>!t.done).length);

    add(){
        const title =this.input().trim();
        if(title) {
            this.todoStore.add(title);
            this.input.set('');
        }
    }

    toggle(id:number){
        this.todoStore.toggle(id);
    }

    remove(id: number) {
        this.todoStore.remove(id);
    }

    clearCompleted() {
        this.todoStore.clearCompleted();
    }

    setFilter(f: FilterType) {
        this.todoStore.setFilter(f);
    }
}