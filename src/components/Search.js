import axios from 'axios';
import React, { useState ,useEffect} from 'react';

const Search = ()=>{
    const [term , setTerm] = useState('programming');

    //set another state to fix the multi request that was sent 
    const [debouncedTerm , setDebouncedTerm] = useState(term);
    const [results,setResults] = useState([]);

        // first useEfeect : that use effect solve 1-> immediatly update "term",
                            //   2-> set timer to update "debounced term",
                            //   3-> if user types it cancel the timeOut and update the term

            useEffect(()=>{
                const timeId = setTimeout(()=>{
                    setDebouncedTerm(term);
                },1000);

                return ()=>{
                    clearTimeout(timeId);
                }
            },[term]);

       // second useEffect : for the first rendered & when debounced term is changed 
       
            useEffect(()=>{
    //     // axios request      
                const search = async () => {
                 const { data } =  await axios.get('https://en.wikipedia.org/w/api.php',
                                  {
                                      params:{
                                         action:'query',
                                         list:'search',
                                         origin:'*',
                                         format:'json',
                                         srsearch: debouncedTerm 
                                     }
                                 });
                                 // update the result variable 
                                 setResults(data.query.search);
                             };
                             search();
            },[debouncedTerm]);

    // // Hook function 
    // useEffect(()=>{
    //     // axios request      
    //     const search = async () => {
    //             const { data } =  await axios.get('https://en.wikipedia.org/w/api.php',
    //              {
    //                  params:{
    //                      action:'query',
    //                      list:'search',
    //                      origin:'*',
    //                      format:'json',
    //                      srsearch: term 
    //                  }
    //              }
    //              )
    //              // update the result variable 
    //              setResults(data.query.search);
    //          };
         
    //      // set the if condition for the default search 
    //         if(term && !results.length) {
    //             search();
    //         } else {
    //         //set the Time out function for search 
    //             const timeoutId = setTimeout(()=>{
    //                 if(term) {
    //                     search(); 
    //                  }    
    //              },1000);

    //              return () => {
    //                  clearTimeout(timeoutId);
    //                 };
    //               }
    //           },[term,results.length]);

            // the es6 that will be assigned to a constant and will be sent to the return in the render of that function component 

            const renderedResults = results.map((result)=>{
                return (
                    <div key={result.pageid} className="item">
                        <div className="right floated content">
                            <a 
                            className="ui button"
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                            >
                                Go
                            </a>
                        </div>
                        <div className="content">
                            <div className="header">
                                {result.title}
                            </div>
                            <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                        </div>
                    </div>
                );
            });

            // main return {}
  return (
  <div className="ui container">
      <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input 
            value={term}
            onChange={e=>setTerm(e.target.value)}
            className="input" />
          </div>
      </div>
      <div className="ui celled list">
          {renderedResults}
      </div>
  </div>
  );
};

export default Search;