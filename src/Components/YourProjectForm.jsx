function YourProjectForm ({onChange, formValues}) {
  return (
    <>
        <div className="form_step_questions">
            <div className="form_group">
                <h4 className="title">المعلومات الشخصية</h4>
                <label className="form_group__question" htmlFor="name">الاسم الثلاثي</label>
                <input onChange={onChange} className="form_group__answer" type="text" value={formValues.name} name="name"/>
                <label className="form_group__question email_quistion">البريد الالكتروني</label>
                <input onChange={onChange} className="form_group__answer" type="email" value={formValues.email} name="email"/>
                <label className="form_group__question phone_question" htmlFor="phone-number">رقم الهاتف</label>
                <input onChange={onChange} className="form_group__answer" name="phoneNumber" value={formValues.phoneNumber}/>
            </div>
            <div className="form_group">
                <h4 className="title">معلومات المشروع</h4>
                <label className="form_group__question" htmlFor="projecName">اسم المشروع</label>
                <input onChange={onChange} className="form_group__answer" type="text" name="projectName" value={formValues.projectName}/>
                <label className="form_group__question" htmlFor="aboutProject">نبذة عن المشروع</label>
                <textarea onChange={onChange} className="form_group__answer" rows="20" name="aboutProject" value={formValues.aboutProject}/>
            </div>
        </div>
    </>
  );
}

export default YourProjectForm;