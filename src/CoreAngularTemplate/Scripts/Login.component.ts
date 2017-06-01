import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';




@Component({
    selector: 'my-app',
    templateUrl: '/Home/Login',
   

})


export class LoginComponent implements OnInit {
    stringForNumber: string;
    mathAction: string;
    currentNumber: number;
    previousNumber: number;
    mathActionToClearScreen: boolean;
    message: string;

    ngOnInit(): void {
        this.message = "Login page loaded. Hozaah!!";
        this.stringForNumber = "";
        //this.currentNumber = 0;
        
    }

    queueNumber(s: string) {

        if (this.mathActionToClearScreen == true) {
            this.stringForNumber = s;
            this.mathActionToClearScreen = false;
            
        }
        else {
            this.stringForNumber = this.stringForNumber + s;
        }
        
        
    }

    calcAction(a: string) {
        
        //clear screen if any of the math operation buttons was pressed
        this.mathActionToClearScreen = true;

        //use previously stored action to perform math action
        if (this.mathAction == "+") {
            this.currentNumber = (this.previousNumber + Number(this.stringForNumber));
            this.stringForNumber = "";
        }
        else if (this.mathAction == "-") {
            this.currentNumber = (this.previousNumber - Number(this.stringForNumber));
            this.stringForNumber = "";

        }
        else if (this.mathAction == "÷") {
            this.currentNumber = (this.previousNumber / Number(this.stringForNumber))
            this.stringForNumber = "";

        }
        else if (this.mathAction == "x") {
            this.currentNumber = (this.previousNumber * Number(this.stringForNumber))
            this.stringForNumber = "";

        }
        else if (this.mathAction == "=") {


        }
        else {
            this.previousNumber = +this.stringForNumber;
            this.stringForNumber = "";
        }


        this.mathAction = a;
        if (this.currentNumber != null) {
            this.stringForNumber = this.currentNumber.toString();
            
        }



    }

    clearScreen() {
        this.stringForNumber = "";
        this.mathAction = "";
        this.currentNumber = null;
        this.previousNumber = null;
    }
}