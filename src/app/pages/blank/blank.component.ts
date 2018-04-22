import { Component } from '@angular/core';
import {GridOptions} from "ag-grid";


@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {
	    private gridOptions: GridOptions;
	constructor() 
	{
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                //cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
		
		this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
	
	}
}