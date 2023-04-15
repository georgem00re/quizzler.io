
import React from "react";
import { useSelector } from "react-redux";
import AnswerButton from "../components/AnswerButton.tsx";
import QuestionHeader from "../components/QuestionHeader.tsx";
import ScoreDialog from "../components/ScoreDialog.tsx";
import QuestionIndicator from "../components/QuestionIndicator.tsx";

export default function QuizPage() {

	const quiz = useSelector(state => state.quiz)
	const questionNumber = useSelector(state => state.questionNumber)
	const question = quiz[questionNumber];
	const answers = question.incorrectAnswers.concat([question.correctAnswer])

	const buttons = answers.map((element, index) => {
		return <AnswerButton key={index} text={element} correct={ element == question.correctAnswer ? true : false }/>
	})

	return (
		<div class="hero has-background-light is-fullheight is-fullwidth p-5">
			<div class="container is-flex is-flex-direction-column is-justify-content-center">
				<div class="box has-text-centered">
					<QuestionIndicator text={questionNumber + 1}/>
					<QuestionHeader text={quiz[questionNumber].question}/>
				</div>
				<div class="box is-flex is-flex-direction-column">
					{buttons}
				</div>
			</div>
		</div>
	)
}