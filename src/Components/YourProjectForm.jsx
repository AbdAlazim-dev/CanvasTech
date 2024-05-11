import PhoneInput from "react-phone-number-input/input";
function YourProjectForm () {
  return (
    <>
        <div className="form_step_questions">
            <div className="form_group">
                <h4 className="title">المعلومات الشخصية</h4>
                <label className="form_group__question" htmlFor="name">الاسم الثلاثي</label>
                <input className="form_group__answer" type="text" id="name" name="name" required/>
                <label className="form_group__question email_quistion">البريد الالكتروني</label>
                <input className="form_group__answer" type="email" id="email" name="email" required/>
                <label className="form_group__question phone_question">رقم الهاتف</label>
                <PhoneInput country="SA" onChange={()=>{console.log("Hi")}} className="form_group__answer" />
            </div>
            <div className="form_group">
                <h4 className="title">معلومات المشروع</h4>
                <label className="form_group__question">اسم المشروع</label>
                <input className="form_group__answer" type="text" id="name" name="name"/>
                <label className="form_group__question">نبذة عن المشروع</label>
                <textarea className="form_group__answer" rows="20"/>
            </div>
        </div>
    </>
  );
}

export default YourProjectForm;