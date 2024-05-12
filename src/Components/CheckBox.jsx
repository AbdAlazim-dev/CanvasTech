function Checkbox({value, label, name, onChange }) {
    return ( 
    <span className="form_group__checkbox_container">
        <input className="form_group__answer"
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        />
        <label className="from_group__answer">{label}</label>
    </span>
    );
}
export default Checkbox;