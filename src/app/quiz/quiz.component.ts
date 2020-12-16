import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentIndex:number=0;
  score:number=0;
  user:string="";
  corr:string="";
 // printans:string="";
  len:number=0;
  qover:boolean=false;
  rqover:boolean=true;
  dispans:boolean=false;

  restart()
  {
      this.currentIndex=0;
      this.score=0;
  }
 
  goNext()
  {
    this.currentIndex++;
   this.update();

   if(this.currentIndex==this.len)
    {
      this.endquiz();
    }

    console.log(this.currentIndex);
  }

  goPrevious()
  {
   // this.currentIndex--;
    if(this.currentIndex==0)
      {
        alert('You have reached the bottom of the quizz');
      }
      else{
        this.currentIndex--;
      }
  }

  receive(receivedanswer:string)
  {
    this.user=receivedanswer;
   // console.log("User Clicked: " +receivedanswer);
  }

  correct(cans:string)
  {
      this.corr=cans;
     // console.log("Correct Ans: "+cans);
      
  }
  update()
  {
    if(this.user==this.corr&&this.user!=""&&this.corr!="")
      {
          this.score++;
          this.dispans=true;
      }
      else
        {
          this.dispans=false;
        }
      

      //console.log(this.score);
  }

  queslength(length:number)
  {
    this.len=length;
    console.log("Received Length"+length);
  }

 
  endquiz()
  {
    this.qover=true;
    this.rqover=false;
    alert('Quiz is Over. You Scored '+this.score+' out of '+this.len+' questions');
  }




  constructor() { }

  ngOnInit(): void {
  }

}
