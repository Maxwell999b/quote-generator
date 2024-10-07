"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { quizData } from "./quizData";

interface HighScore {
  difficulty: "easy" | "medium" | "hard";
  score: number;
}
export default function Quiz() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScores, setHighScores] = useState<HighScore[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentQuestion = quizData[difficulty][currentQuestionIndex];

  const handleNextQuestion = useCallback(() => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData[difficulty].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setTimeLeft(30);
    } else {
      setShowResults(true);
      setHighScores((prevScores) => [
        ...prevScores,
        { difficulty, score: score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0) },
      ]);
    }
  }, [currentQuestionIndex, difficulty, score, selectedAnswer, currentQuestion.correctAnswer]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timeLeft > 0 && !showResults && quizStarted) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && quizStarted) {
      handleNextQuestion();
    }

    if (timeLeft <= 9 && timeLeft > 0 && quizStarted) {
      audioRef.current?.play().catch((error) => console.error("Audio playback failed", error));
    }

    return () => clearTimeout(timer);
  }, [timeLeft, showResults, handleNextQuestion, quizStarted]);

  useEffect(() => {
    const audio = new Audio("/tick.mp3");
    audioRef.current = audio;
    audio.load();
  }, []);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(30);
  };

  const restartQuiz = () => {
    setDifficulty("easy");
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResults(false);
    setTimeLeft(30);
    setShowAnswers(false);
    setQuizStarted(false);
  };

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const getTimerColor = () => {
    if (timeLeft > 20) return "bg-green-500";
    if (timeLeft > 10) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (showResults) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-4">
            Your score: {score} / {quizData[difficulty].length}
          </p>
          <h3 className="text-xl font-semibold mb-2">High Scores:</h3>
          <ul>
            {highScores.map((highScore, index) => (
              <li key={index}>
                {highScore.difficulty}: {highScore.score} / {quizData[highScore.difficulty].length}
              </li>
            ))}
          </ul>
          <Button onClick={toggleAnswers} className="mt-4">
            {showAnswers ? "Hide Answers" : "Show Answers"}
          </Button>
          {showAnswers && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Questions and Answers:</h4>
              {quizData[difficulty].map((q, index) => (
                <div key={index} className="mb-4 bg-slate-300/40 rounded-md">
                  <p className="font-medium ">
                    {index + 1}. {q.question}
                  </p>
                  <p className="">
                    Correct Answer: <span className="text-green-600 font-bold">{q.correctAnswer}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={restartQuiz}>Restart Quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  if (!quizStarted) {
    return (
      <Card className="w-3/4 max-w-md mx-auto mt-24">
        <CardHeader>
          <CardTitle>Quiz Application</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="difficulty">Select Difficulty:</Label>
            <Select onValueChange={(value) => setDifficulty(value as "easy" | "medium" | "hard")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={startQuiz}>Start Quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-muted rounded-lg shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Quiz Application - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</CardTitle>
          <span className="text-lg font-semibold">
            Question {currentQuestionIndex + 1}/{quizData[difficulty].length}
          </span>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Progress value={(timeLeft / 30) * 100} className={`h-2 ${getTimerColor()}`} />
            <p className="mt-2 text-right">Time left: {timeLeft} seconds</p>
          </div>
          <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNextQuestion} disabled={!selectedAnswer}>
            {currentQuestionIndex < quizData[difficulty].length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
