import { Component, Input, ElementRef, OnChanges } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'case-comments-selector',
    templateUrl: './case-comments.component.html',
    styleUrls: ['./case-comments.component.css']
})
export class CaseCommentsComponent implements OnChanges {
    constructor(private _elemRef: ElementRef){}
    @Input() commentsData: any;
    ngOnChanges(commentsData: any) {
        if(this.commentsData && this.commentsData.length > 0){
            let comments = [];
            for(let i = 0; i < this.commentsData.length; i++) {
                let commentDate = this.commentsData[i]["commentDate"]
                let priority = this.commentsData[i]["priority"]
                let program = this.commentsData[i]["program"]
                let user = this.commentsData[i]["user"]
                let description = this.commentsData[i]["description"]
                let commentItem = new Array(commentDate, priority, program, user, description);
                comments.push(commentItem);
            }
            jQuery(this._elemRef.nativeElement).find('#commentsTable').DataTable({
                data: comments,
                columns: [
                    { title: "Date" },
                    { title: "Priority" },
                    { title: "Program" },
                    { title: "User" },
                    { title: "Description" }
                ],
                "lengthChange": false,
                "info": false,
                "dom": '<"top"i>rt<"bottom"flp><"clear">',
                language: {
                    search: "_INPUT_",
                    searchPlaceholder: "Search..."
                }
            });
        }
    }
}