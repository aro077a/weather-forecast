import './style.css';

export const SearchInput = ({ placeholder, onChange }) => {
  return (
    <input className="search-box" type='search' placeholder={placeholder} onChange={onChange} />
  )
}