function PdfFileCard({ image, name, descreption }) {
  return (
    <div className="pdf_file_card">
      <div className="pdf_file_card__image">
        <img src={image} alt={name} />
      </div>
      <div className="pdf_file_card__descreption">
        <h2 className="canva_name">{name}</h2>
        <p className="canva_descreption">{descreption}</p>
      </div>
    </div>
  );
}
export default PdfFileCard;