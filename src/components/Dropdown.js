import React ,{useState}from 'react';

const Dropdown = ({options , selected , onSelectedChange})=>{

    const [open ,setOpen] = useState(false);
    const renderedOptions = options.map((option)=>{
        if(option.value === selected.value){
            return null;
        }
        return (
            <div 
            onClick={()=>onSelectedChange(option)}
            key={option.value}
            className="item"
            >
                {option.label}
            </div>
        );
    })
    return (
    
<div className='form'>
    <div className='field'>
        <h1> Select a color :- </h1>
        <div 
        onClick={()=> setOpen(!open)}
        className={`ui selection dropdown ${open ? 'visible active':''}`}>
            <i className='dropdown icon'> </i>
            <div className="text">
                {selected.label}
            </div>
            <div className={`menu ${open ? 'visible transition':''}`}>
                {renderedOptions}
            </div>
        </div>
    </div>
</div>    
    );
};

export default Dropdown;