import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    isCollapsed = false;

    constructor() {
    }

    ngOnInit(): void {
        if (window.innerWidth < 700) {
            this.isCollapsed = true;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event): void {
        if (event.target.innerWidth < 700) {
            this.isCollapsed = true;
        }else {
            this.isCollapsed = false;
        }
    }

    checkCollapse(): void {
        if (!this.isCollapsed && window.innerWidth < 700) {
            this.isCollapsed = !this.isCollapsed;
        }
    }


}
