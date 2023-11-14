import { question } from "./question";

const decodedQuestion = decodeURIComponent(question.results[0].question);
const decodedIncorrectAnswer = question.results[0].incorrect_answers.map(answer => {
    return decodeURIComponent(answer)
})
console.log(decodedQuestion);

export default function MainApp() {
  return (
    <div className="mainApp">
          <h1 className="question">{decodedQuestion}</h1>
          <div>
              {decodedIncorrectAnswer.map(answer => {
                  return <div>{answer}</div>
              })}
          </div>
    </div>
  );
}
