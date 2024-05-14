import React, { useState } from "react";
import { Link } from "react-router-dom"
import Footer from "../Components/Footer";
import ProjectCustomerForm from "../Components/ProjectCustomerForm";
import YourProjectForm from "../Components/YourProjectForm";
import FormImage from "../assets/product-development.png"
import ProjectSectorForm from "../Components/ProjectSectorForm";
import ProjectsNeedForm from "../Components/ProjectsNeedsForm";
import Result from "../Components/Result";


function FormPage() {
    const [formSetp, setFormStep] = useState(0)
    const [errorMessage, setErrorMessage] = useState(false);

    //user input values
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        projectName: "",
        aboutProject: "",
        projectGoal: "",
        sector: "",
        projectCustomers: "",
        projectTasks: [],
        coreElements: [],
        potentialPartners: [],
        costs: [],
        projectCompetitors: [],
        revenueSources: [],
        projectFeatures: [],
        projectCore: [],
        CommunicationMethods: []
    })
    //if the user didn't fill the required fields
    const handleChange = (e) => {
        setFormValues(prevState => {
            if (Array.isArray(prevState[e.target.name])) {
            return {
                ...prevState,
                [e.target.name]: [...prevState[e.target.name], e.target.value]
            };
            } else {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
            }
        });
    }
    const handleChangeToNextStep = () => {
        if (formSetp === 0) {
            const requiredFields = ["name", "email", "phoneNumber", "projectName", "aboutProject"];
            if (requiredFields.some(field => formValues[field] === "")) {
                setErrorMessage(true);
            } else {
                scroll(0,0)
                setErrorMessage(false);
                setFormStep(formSetp + 1);
            }
        } else if (formSetp === 1) {
            const requiredFields = ["projectGoal", "sector", "projectCustomers"];
            if (requiredFields.some(field => formValues[field] === "")) {
                setErrorMessage(true);
            } else {
                scroll(0,0)
                setErrorMessage(false);
                setFormStep(formSetp + 1);
            }
        } else if (formSetp === 2) {
            const requiredFields = ["projectCore", "CommunicationMethods", "projectFeatures"];
            if (requiredFields.some(field => formValues[field].length === 0)) {
                setErrorMessage(true);
            } else {
                scroll(0,0)
                setErrorMessage(false);
                setFormStep(formSetp + 1);
            }
        } else if (formSetp === 3) {
            const requiredFields = ["projectTasks" ,
            "coreElements",
            "potentialPartners",
            "revenueSources",
            "costs",
            "projectCompetitors"];
            if (requiredFields.some(field => formValues[field].length === 0)) {
                setErrorMessage(true);
            } else {
                scroll(0,0)
                setErrorMessage(false);
                setFormStep(formSetp + 1);
            }
        } 
    }
    const handleStepChange = () => {
        switch(formSetp) {
            case 0: 
                return <YourProjectForm onChange={handleChange} formValues={formValues}/>
                break;
            case 1:
                return <ProjectSectorForm onChange={handleChange} formValues={formValues}/>
                break;
            case 2:
                return <ProjectCustomerForm  onChange={handleChange} formValues={formValues}/>
                break;
            case 3:
                return <ProjectsNeedForm onChange={handleChange} formValues={formValues}/>
                break;
            case 4:
                return <Result />
                break;
            default: 
                return <YourProjectForm onChange={handleChange} formValues={formValues}/>
                break;
        }
    }
    const NextOrSubmit = () => (
        formSetp === stepTitles.length - 1 ? (
            <>
                    <button className="step_changer__button" onClick={() => {
                        setFormStep(formSetp - 1);
                    }}>السابق</button>
                <button className="step_changer__button" onClick={handleChangeToNextStep}>
                    انهاء
                </button>
            </>
        ) : (
            <>
                {formSetp !== 0 && (
                    <button className="step_changer__button" onClick={() => {
                        setFormStep(formSetp - 1);
                    }}>السابق</button>
                )}
                <button className="step_changer__button" onClick={handleChangeToNextStep}>التالي</button>
            </>
        )
    );
    const stepTitles = ["معلومات عنك وعن المشروع", "هدف ومجال المشروع", "العملاء ومركز المشروع","احتياجات المشروع والمنافسين"]
    return (
        <>
        <section id="form_section" className="form_section">
            <div className="container">
                <div className="form_section__title">
                    <h1>{stepTitles[formSetp]}</h1>
                </div>
                <div className="form_section__pb">
                    <span className={`progres_bar ${formSetp === 0 ? "step_1" : formSetp === 1 ? "step_2" : formSetp === 2 ? "step_3" : "step_4"}`}></span>
                    <span className="progres_step">1</span>
                    <span className="progres_step">2</span>
                    <span className="progres_step">3</span>
                    <span className="progres_step">4</span>
                </div>
                <div className="form_section__form_container">
                    <div className={`service_description ${formSetp > 0 ? "none_after_step" : ""}`}>
                        <div className="image_container">
                            <img src={FormImage} alt="form"/>
                            <h3>اختيار نموذج العمل التجاري</h3>
                        </div>
                        <p className="paragraph">
                        هذه الخدمة تتيح لك معرفة نموذج العمل التجاري الأكثر ملاءمة لفكرتك الابتكارية، 
                        عن طريق الإجابة عن بعض الأسئلة الخاصة بفكرة مشروعك، ومساعدتك على التطور، 
                        والاطلاع على تجارب الرواد المحليين والدوليين، حيث تعد نماذج الأعمال التجارية (Business models)
                         مهمةً لكل من المنشآت الجديدة 
                         والقائمة؛ فهي تساعدهم على النمو، وزيادة الربحية والتنافسية، وجذب الاستثمار.
                        </p>
                    </div>
                    {formSetp === 4 ? "" : <div className="form_step">
                            {handleStepChange()}
                            {errorMessage ? <div className="error_message">
                                <p>املأ الحقول المطلوبة في هذه القائمة *</p>
                            </div> : ""}
                            <div className="step_changer">
                                {NextOrSubmit()}
                            </div>
                        </div>}
                    <div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default FormPage;