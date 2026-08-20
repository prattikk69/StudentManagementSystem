import { Search } from "lucide-react";


export default function SearchBar({value, onChange}) {
  return (
    <div className="flex items-center border
      py-2 h-10 px-3 rounded-xs w-100">
        <Search size={30}/>
        <input
        type="text" 
        placeholder = {"Search up niggas here by their name..."}
        className='px-5 w-full outline-none'
        value={value}
        maxLength={30}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
