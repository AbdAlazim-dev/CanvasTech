function PdfFileCard({ image, name, descreption, fileToDownload }) {
  return (
    <div className="pdf_file_card">
      <div className="pdf_file_card__image">
        <img src={image} alt={name} />
      </div>
      <div className="pdf_file_card__descreption">
        <h2 className="canva_name">{name}</h2>
        <p className="canva_descreption">{descreption}</p>
        <div className="canva_buttons">
          <a href={fileToDownload} download className="download_button">تحميل</a>
          <a href={fileToDownload} target="_blank" className="preview_button">معاينة</a>
        </div>
      </div>
    </div>
  );
}
export default PdfFileCard;