import { useState, useEffect } from "react";
import PdfFileCard from "./PdfFileCard"
import {
  SkeletonText,
  SkeletonBlock,
  SkeletonImage,
  SkeletonAvatar
} from "skeleton-elements/react";
import 'skeleton-elements/css/skeleton-elements.css';
import CanvaImage from "../assets/2.png"
import TestCanva from "../assets/TextCanva.pdf"

function Result() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  console.log("The result is loading...");
  if (loading) {
    return (
      <div className="form_step_questions">
        <div className="form_group">
          <div className="skeleton">
            <div className="skeleton_image_container">
              <SkeletonImage width={300} height={200} effect="wave" />
            </div>
            <div className="skeleton_descreption_container">
              <SkeletonBlock width={100} height={10} effect="wave" />
              <SkeletonBlock width={70} height={10} effect="wave" />
              <SkeletonBlock width={70} height={10} effect="wave" />
              <SkeletonBlock width={70} height={10} effect="wave" />
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="form_step_questions">
        <div className="form_group">
          <h1 className="title">النماذج المقترحة </h1>
          <PdfFileCard image={CanvaImage}
          descreption={"يُعرف نموذج العمل Business model بأنه الخطة التي تضعها الشركات من أجل تحقيق الأرباح، إذ يحتوي على المنتجات أو الخدمات المُقرر تقديمها، والسوق المُستهدف، والنفقات المتوقعة، واستراتيجيات التسويق، وقاعدة العملاء، إلى جانب فرص الشراكة مع الشركات الأخرى القائمة."}
          name={"نموذج عمل الإعلانات"}
          fileToDownload={TestCanva}
          />
          <PdfFileCard image={CanvaImage}
          descreption={"يُعرف نموذج العمل Business model بأنه الخطة التي تضعها الشركات من أجل تحقيق الأرباح، إذ يحتوي على المنتجات أو الخدمات المُقرر تقديمها، والسوق المُستهدف، والنفقات المتوقعة، واستراتيجيات التسويق، وقاعدة العملاء، إلى جانب فرص الشراكة مع الشركات الأخرى القائمة."}
          name={"نموذج عمل الإعلانات"}
          fileToDownload={TestCanva}
          />
          <PdfFileCard image={CanvaImage}
          descreption={"يُعرف نموذج العمل Business model بأنه الخطة التي تضعها الشركات من أجل تحقيق الأرباح، إذ يحتوي على المنتجات أو الخدمات المُقرر تقديمها، والسوق المُستهدف، والنفقات المتوقعة، واستراتيجيات التسويق، وقاعدة العملاء، إلى جانب فرص الشراكة مع الشركات الأخرى القائمة."}
          name={"نموذج عمل الإعلانات"}
          fileToDownload={TestCanva}
          />
        </div>
    </div>
  );
}
export default Result;