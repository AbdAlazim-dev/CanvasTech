import CheckBox from "../Components/CheckBox"
import { multiChoiseQuestions } from "./ProjectCustomerFormQuestions"

function ProjectSectorForm({onChange, formValues}) {
    const inputsName = ["projectCore",
    "CommunicationMethods",
    "projectFeatures"]
return (
    <div className="form_step_questions">
        <div className="form_group">
            {multiChoiseQuestions.map((question, index) => (
                <div key={index}>
                    <label className="form_group__question" htmlFor={`project-${index}`}>
                        {question.question}
                    </label>
                    {question.options.map((option, optionIndex) => (
                        <CheckBox
                            key={optionIndex}
                            value={option.value}
                            label={option.label}
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
export default ProjectSectorForm;  