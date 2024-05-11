function ProjectSectorForm() {
  return (
    <div className="form_step_questions">
      <div className="form_group">
        <label className="form_group__question">أين يمكن للعميل أن يجد المشروع ويستفيد من الخدمات والمنتجات<br/>(يمكنك اختيار اكثر من خيار) </label>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="location" name="location"/>
            <label htmlFor="location">مقر المشروع - المكان</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="Application" name="Application"/>
            <label htmlFor="location">تطبيق هاتف</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="social-media" name="social-media"/>
            <label htmlFor="location">مواقع التواصل الاجتماعي</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="sms" name="sms"/>
            <label htmlFor="location">الرد الآلي من خلال الرقم المجاني</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="none" name="none"/>
            <label htmlFor="location">لا يوجد لدي تصور بعد</label>
        </span>
        <label className="form_group__question">
            ما الوسيلة الأكثر أهمية برأيك للتواصل مع العملاء، وتسهيل تواصلهم مع مشروعك؟ (يمكنك اختيار اكثر من خيار)
        </label>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">برامج الولاء</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">برامج الولاء</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">العينات المجانية</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">الدعم والصيانة</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">التواصل المستمر مع العميل</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">لايوجد لدي تصور بعد</label>
        </span>
        <label className="form_group__question">ما أهم الميزات التي تتوقع أن يقدمها مشروعك للعملاء؟ </label>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">الجودة العالية للمنتج مقارنة بالمنافسين</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">السعر المنخفض</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">الإبداع والإبتكار في المواصفات والوظائف</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">تخصيص السلعة او الخدمة بما يتناسب مع احتياج العميل</label>
        </span>
        <span className="form_group__checkbox_container">
            <input className="form_group__answer" type="checkbox" id="" name=""/>
            <label htmlFor="phone">التصميم الجذاب</label>
        </span>
      </div>
    </div>
  );
}
export default ProjectSectorForm;