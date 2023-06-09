import React from "react";
import QuestionFooter from "../misc/QuestionFooter";
import QuestionHeader from "../misc/QuestionHeader";
import AnswerContainer from "../containers/AnswerContainer";
import AnswerButton from "../buttons/AnswerButton";
import { BORDER_GREY, GREY } from "../../constants/colours";
import { useSelector } from "react-redux";
import { State } from "../../state/store";

export const TEST_ID_QUESTION_CONTAINER = "question-container";

interface QuestionContainerProps {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  answered: boolean;
  questionNumber: number;
}

export default function QuestionContainer({
  question,
  correctAnswer,
  incorrectAnswers,
  answered,
  questionNumber,
}: QuestionContainerProps) {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const borderColor = lightTheme ? BORDER_GREY : GREY;

  const answerButtons = [...incorrectAnswers, correctAnswer].map(
    (element, index) => {
      return (
        <AnswerButton
          key={index}
          index={index}
          text={element}
          answered={answered}
          correct={element == correctAnswer ? true : false}
          questionNumber={questionNumber}
        />
      );
    }
  );

  return (
    <div
      style={{ ...style, borderColor }}
      data-testid={TEST_ID_QUESTION_CONTAINER}
    >
      <QuestionHeader text={question} />
      <AnswerContainer>{answerButtons}</AnswerContainer>
      <QuestionFooter correctAnswer={correctAnswer} answered={answered} />
    </div>
  );
}

const style = {
  borderRadius: "5px",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#CFCFCF",
  padding: "10px",
  backgroundColor: "transparent",
  width: "500px",
  margin: "20px",
};
