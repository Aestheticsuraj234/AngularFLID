import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  Id: number;
  Agreement: string;
  Audit: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{Id: 1, Agreement: 'Hydrogen', Audit: 'H'},
{Id: 2, Agreement: 'Helium', Audit: 'He'},
{Id: 3, Agreement: 'Lithium', Audit: 'Li'},
{Id: 4, Agreement: 'Beryllium', Audit: 'Be'},
{Id: 5, Agreement: 'Boron', Audit: 'B'},
{Id: 6, Agreement: 'Carbon', Audit: 'C'},
{Id: 7, Agreement: 'Nitrogen', Audit: 'N'},
{Id: 8, Agreement: 'Oxygen', Audit: 'O'},
{Id: 9, Agreement: 'Fluorine', Audit: 'F'},
{Id: 10, Agreement: 'Neon', Audit: 'Ne'},
  
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})



export class TableComponent {
  displayedColumns: string[] = ['Id', 'Agreement', 'Audit'];
  dataSource = ELEMENT_DATA;

}
