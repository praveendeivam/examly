import { Component, OnInit, Input, DoCheck, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  questions:any;
  @Input() questionIndex:number=0;

 // @Output() answers=new EventEmitter<{userans:string,correctans:string}>();

   @Output() userans=new EventEmitter<string>();
   @Output() corrans=new EventEmitter<string>();
   @Output() total=new EventEmitter<number>();

  currentquestion:string="";
  currentoptions:string[]=[''];
  user:string="";
  correct:string="";
 /*constructor()
 {
  this.questions=[
    {
      question: 'What is your name?',
      options: ['Kindson', 'Saffron', 'Othniel', 'Osondu'],
      answer: 'Kindson'
    },
    {
      question: 'Whe   do you Live?',
      options: ['India', 'Hungary', 'USA', 'Nigeria'],
      answer: 'Hungary'
    },
    {
      question: 'Who is PM of India?',
      options: ['Ghandi', 'Mordi', 'Gagan', 'Kumar'],
      answer: 'Modi'
    }
    ];
    this.currentquestion=this.questions[this.questionIndex].question;
    this.currentoptions=this.questions[this.questionIndex].options;
 }*/
   

  ngOnInit(): void {
    this.questions=[
      {
        question: 'Pick the correct combination of the vowels given below?',
        options: ['AEIOU', 'AEZUO', 'AEIOF', 'AEJOU'],
        answer: 'AEIOU'
      },
      {
        question: 'What is the captial of India',
        options: ['Mumbai', 'Bangalore', 'New Delhi', 'Kolkata'],
        answer: 'New Delhi'
      },
      {
        question: 'How many continents are there in the world?',
        options: ['6', '7', '5', '8'],
        answer: '7'
      },
      {
        question: '1 cm=__ mm?',
        options: ['100', '10', '1', '1000'],
        answer: '10'
      },
      {
        question: 'Which country is called "The Land of Rising Sun"?',
        options: ['Japan', 'Nepal', 'China', 'Bhutan'],
        answer: 'Japan'
      },
      {
        question: 'Which is the most sensitive organ in our body?',
        options: ['Eyes', 'Skin', 'Nose', 'Tongue'],
        answer: 'Skin'
      },
      {
        question: 'Which is the largest country in the world?',
        options: ['India', 'America', 'Russia', 'China'],
        answer: 'Russia'
      },
      {
        question: 'Which of the following bird is most intelligent?',
        options: ['Owl', 'Kingfisher', 'Sparrow', 'Crow'],
        answer: 'Owl'
      },
      {
        question: 'Which gas is most abudant in the earth atmosphere',
        options: ['Oxygen', 'CO2', 'Nitrogen', 'Methane'],
        answer: 'Nitrogen'
      },
      {
        question: 'What is the top color in a rainbow?',
        options: ['Violet', 'Indigo', 'Red', 'Blue'],
        answer: 'Red'
      }
      ];

      this.total.emit(this.questions.length);
  }

  ngDoCheck():void{
    this.currentquestion=this.questions[this.questionIndex].question;
    this.currentoptions=this.questions[this.questionIndex].options;
  }


  useranswer(option:string)
  {
    this.user=option;
    console.log(option);
   this.correct=this.questions[this.questionIndex].answer;
    //this.answers.emit({userans:this.user,correctans:this.correct})

    
    this.userans.emit(this.user);
    this.corrans.emit(this.correct);
  
  }

 

}
