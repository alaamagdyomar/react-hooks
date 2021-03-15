import React , {useState} from 'react';

const Accordion = ({items})=>{

    const [activIndex,setActivIndex] = useState(null);
    const onTitleClicked = (index) => {
        setActivIndex(index);
    }

    const renderedItems = items.map((item,index) =>{
        const activ = index === activIndex ? 'active' : '';

        return(
        <React.Fragment key={item.title}>
            <div 
            className={`title ${activ}`}
            onClick={()=>onTitleClicked(index)}
            >  
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${activ}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    });
    return(
    <div className="ui styled accordion">
        {renderedItems}        
    </div>
    )
};

export default Accordion;
