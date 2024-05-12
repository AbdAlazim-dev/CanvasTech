import CheckBox from "../Components/CheckBox"
import { multiChoiseQuestions } from "./ProjectCustomerFormQuestions"

function ProjectSectorForm({onChange, formValues}) {
    
return (
    <div className="form_step_questions">
        <div className="form_group">
            <label className="form_group__question" htmlFor="projectCore">أين يمكن للعميل أن يجد المشروع ويستفيد من الخدمات والمنتجات<br/>(يمكنك اختيار اكثر من خيار) </label>
            {multiChoiseQuestions[0].options.map((option, index) => (
                    <CheckBox key={index} value={option.value} label={option.label} name="projectCore" onChange={onChange}/>
            ))}
            <label className="form_group__question" htmlFor="project-competitors">
                    ما الوسيلة الأكثر أهمية برأيك للتواصل مع العملاء، وتسهيل تواصلهم مع مشروعك؟
            </label>
            {multiChoiseQuestions[1].options.map((option, index) => (
                    <CheckBox key={index} value={option.value} label={option.label} name="project-competitors" onChange={onChange}/>
            ))}
        </div>
    </div>
);
}
export default ProjectSectorForm;