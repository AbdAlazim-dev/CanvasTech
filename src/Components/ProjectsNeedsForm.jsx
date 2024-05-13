import {ProjectsNeedsQuestionsAndAnswers} from "./ProjectsNeedsFormQuestionsAndAnswers"
import CheckBox from "./CheckBox";
function ProjectsNeedForm({onChange, formValues}) {
    const inputsName = ["projectTasks",
    "coreElements",
    "potentialPartners",
    "revenueSources",
    "costs",
    "projectCompetitors"]

    return (
        <div className="form_step_questions">
            <div className="form_group">
                {ProjectsNeedsQuestionsAndAnswers.map((question, index) => (
                    <div key={index}>
                        <label className="form_group__question" htmlFor={`project-${index}`}>
                            {question.question}
                        </label>
                        {question.answers.map((option, optionIndex) => (
                            <CheckBox
                                key={optionIndex}
                                value={option}
                                label={option}
                                name={inputsName[index]}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
  }
export default ProjectsNeedForm;