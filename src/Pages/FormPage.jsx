import React, { useState } from "react";
import { Link } from "react-router-dom"
import Footer from "../Components/Footer";
import ProjectCustomerForm from "../Components/ProjectCustomerForm";
import YourProjectForm from "../Components/YourProjectForm";
import FormImage from "../assets/product-development.png"
import ProjectSectorForm from "../Components/ProjectSectorForm";
import ProjectsNeedForm from "../Components/ProjectsNeedsForm";


function FormPage() {
    const [formSetp, setFormStep] = useState(0)

    //user input values
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        idea: "",
        description: "",
        value: "",
        financial: "",
        business: "",
        details: ""
    })
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleStepChange = () => {
        switch(formSetp) {
            case 0: 
                return <YourProjectForm />
                break;
            case 1:
                return <ProjectSectorForm />
                break;
            case 2:
                return <ProjectCustomerForm />
                break;
            case 3:
                return <ProjectsNeedForm />
                break;
            default: 
                return <YourProjectForm />
                break;
        }
    }
    const NextOrSubmit = () => (
        formSetp === stepTitles.length - 1 ? (
            <>
                    <button className="step_changer__button" onClick={() => {
                        setFormStep(formSetp - 1);
                    }}>السابق</button>
                <Link className="step_changer__button" to="/result">
                    انهاء
                </Link>
            </>
        ) : (
            <>
                {formSetp !== 0 && (
                    <button className="step_changer__button" onClick={() => {
                        setFormStep(formSetp - 1);
                    }}>السابق</button>
                )}
                <button className="step_changer__button" onClick={() => {
                    setFormStep(formSetp + 1);
                }}>التالي</button>
            </>
        )
    );
    const stepTitles = ["معلومات عنك وعن المشروع", "هدف ومجال المشروع", "العملاء ومركز المشروع","احتياجات المشروع والمنافسين"]
    return (
        <section id="form_section" className="form_section">
            <div className="container">
                <div className="form_section__pb">

                </div>
                <div className="form_section__title">
                    <h1>{stepTitles[formSetp]}</h1>
                </div>
                <div className="form_section__form_container">
                    <div className="service_description">
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
                        <div className="form_step">
                            {handleStepChange()}
                            <div className="step_changer">
                                {NextOrSubmit()}
                            </div>
                        </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormPage;