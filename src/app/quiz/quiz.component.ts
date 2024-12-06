import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
    {
      question: 'What percentage of the human body is water?',
      options: [
        { text: '50%', isCorrect: false },
        { text: '70%', isCorrect: true },
        { text: '90%', isCorrect: false },
        { text: '30%', isCorrect: false }
      ]
    },
    {
      question: 'What percentage of Earth’s surface is covered by oceans?',
      options: [
        { text: '50%', isCorrect: false },
        { text: '70%', isCorrect: true },
        { text: '90%', isCorrect: false },
        { text: '30%', isCorrect: false }
      ]
    },
    {
      question: 'Which mineral is found both in humans and oceans?',
      options: [
        { text: 'Sodium', isCorrect: true },
        { text: 'Iron', isCorrect: false },
        { text: 'Copper', isCorrect: false },
        { text: 'Calcium', isCorrect: false }
      ]
    },
    {
      question: 'What is the salinity of human blood similar to?',
      options: [
        { text: 'Freshwater', isCorrect: false },
        { text: 'Seawater', isCorrect: true },
        { text: 'Glacial water', isCorrect: false },
        { text: 'Distilled water', isCorrect: false }
      ]
    },
    {
      question: 'What is the average pH level of seawater?',
      options: [
        { text: '7.5-8.4', isCorrect: true },
        { text: '5-6', isCorrect: false },
        { text: '3-4', isCorrect: false },
        { text: '9-10', isCorrect: false }
      ]
    },
    {
      question: 'What percentage of oxygen comes from the ocean?',
      options: [
        { text: '70%', isCorrect: true },
        { text: '30%', isCorrect: false },
        { text: '50%', isCorrect: false },
        { text: '90%', isCorrect: false }
      ]
    },
    {
      question: 'What is the main component of ocean currents?',
      options: [
        { text: 'Water', isCorrect: true },
        { text: 'Salt', isCorrect: false },
        { text: 'Sand', isCorrect: false },
        { text: 'Marine organisms', isCorrect: false }
      ]
    },
    {
      question: 'Which system in humans is comparable to ocean currents?',
      options: [
        { text: 'Circulatory system', isCorrect: true },
        { text: 'Respiratory system', isCorrect: false },
        { text: 'Digestive system', isCorrect: false },
        { text: 'Skeletal system', isCorrect: false }
      ]
    }
  ];

  currentQuestion = 0;
  selectedAnswer: boolean | null = null;
  score = 0;
  quizOver = false;

  checkAnswer(isCorrect: boolean): void {
    this.selectedAnswer = isCorrect;
    if (isCorrect) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.selectedAnswer = null;
    } else {
      this.quizOver = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestion = 0;
    this.selectedAnswer = null;
    this.score = 0;
    this.quizOver = false;
  }
}
