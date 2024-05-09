import { FaEdit } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";

function HowSection() {
    return (
        <section id="how_section" className="how_section">
            <div className="container">
                <h2 className="title">كيف تعمل الخدمة</h2>
                <ol className="steps">
                    <li>
                        <FaEdit className="icon"/>
                        <span className="description">
                            تعبئة المعلومات الشخصية وتقديم نبذة عن المشروع.
                        </span>
                    </li>
                    <li>
                        <RiQuestionAnswerLine className="icon"/>
                        <span className="description">
                            الإجابة على الأسئلة الأساسية للمشروع.
                        </span>
                    </li>
                    <li>
                        <MdAttachMoney className="icon"/>
                        <span className="description">
                            الإجابة على أسئلة العملاء، والقيمة التي يقدمها المشروع.
                        </span>
                    </li>
                    <li>
                        <AiOutlineFileText className="icon"/>
                            <span className="description">
                                الإجابة على أسئلة بُنية ومالية المشروع
                            </span>
                    </li>
                    <li>
                        <AiOutlineFileDone  className="icon"/>
                        <span className="description">
                            الحصول على نماذج الأعمال المقترحة.
                        </span>
                    </li>
                    <li>
                        <BsFillPersonFill className="icon"/>
                        <span className="description">
                            التعرف على تفاصيل كل نموذج عمل
                        </span>
                    </li>
                    <li>
                        <AiOutlineFileSearch className="icon"/>
                        <span className="description">
                            الاستفادة من المقترحات في خطتك التجارية القادمة.
                        </span>
                    </li>
                    <div className="action">
                        <button>ابــدأ</button>
                    </div>
                </ol>
            </div>
        </section>
    )
}
export default HowSection;