function ProjectSectorForm({onChange, formValues}) {
  return (
    <>
      <div className="form_step_questions">
        <div className="form_group">
          <h4 className="title">مجال المشروع</h4>
          <label className="form_group__question" htmlFor="project-goal">ما هو هدفك الرئيسي من المشروع؟</label>
          <select defaultValue={formValues.projectGoal}
          onChange={onChange}
          className="form_group__answer"
          name="projectGoal">
            <option value="">اختر من القائمة</option>
            <option value="profit">تحقيق عوائد لملاك المشروع</option>
            <option value="nonprofit">حل مشكلة مجتمعية بطريقة تجارية, ولو كانت بدون عوائد مادية</option>
          </select>
          <label className="form_group__question" htmlFor="sector">ما هو مجال مشروعك؟</label>
          <select value={formValues.sector}
          onChange={onChange}
          className="form_group__answer"
          name="sector">
            <option value="">اختر من القائمة</option>
            <option value="tech">المعلومات والاتصالات</option>
            <option value="finance">الأنشطة المالية</option>
            <option value="agriculture">الزراعة وصيد الأسماك</option>
            <option value="manufacturing">الصناعةالتحويلية</option>
            <option value="education">التعليم</option>
            <option value="art">الفنون والترفيه والتسلية</option>
            <option value="tourism">السياحة</option>
            <option value="other">آخر</option>
          </select>
          <label className="form_group__question" htmlFor="customer">ما الفئة المستهدفة من المشروع ؟</label>
          <select value={formValues.projectCustomers}
          onChange={onChange}
          className="form_group__answer"
          name="projectCustomers"
          id="customer">
            <option  value="">اختر من القائمة</option>
            <option value="b2b">(B 2 B) الشركات</option>
            <option value="b2c">(B 2 C) الأفراد</option>
            <option value="b2g">(B 2 G) الحكومة</option>
            <option value="b2d">(B 2 D) المطورون للتطبيقات والبرمجيات</option>
            <option value="other">آخر</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default ProjectSectorForm;