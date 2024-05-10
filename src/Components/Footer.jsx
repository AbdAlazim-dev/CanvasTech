import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";

import AljdwaLogo from "../assets/Aljdwa.png"
function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="footer_content__logo">
                        <div className="Logo">
                            <img src={AljdwaLogo}/>
                        </div>
                        <p>
                            الشركة السعودية الرائدة في اعداد دراسة الجدوى الإقتصادية وتطوير منظومة الأعمال
                        </p>
                    </div>
                    <div className="footer_content__customer_service">
                        <h2 className="title">هل تريد المساعدة ؟</h2>
                        <span><AiFillPhone />0509739922</span>
                        <span><AiFillHome /> مركز الدعم الفني</span>
                    </div>
                    <div className="footer_content__contact">
                        <h2 className="title">اتصل بنا</h2>
                        <span><IoLocationSharp />الرياض-الملقا-طريق الملك محمد بن سعد</span>
                        <span><MdEmail />info@Aljdwa.com</span>
                    </div>
                </div>
                <p className="copywrites">© 2021 Aljdwa</p>
            </div>
        </footer>
    );
}
export default Footer;