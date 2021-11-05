import React from 'react'
function question({Hand,data:{question,correct_answer,answers}}){

    return(
        <>

<div className="question">
  <h1 dangerouslySetInnerHTML={{__html:question}}/>
</div>
<div className='button_class'>
  {answers.map((answer,idx)=>{
    return (
      <button className="normal_button" onClick={()=>{Hand(answers)}} dangerouslySetInnerHTML={{__html:answer}}/>
    )
  })}
  
  
</div>
        </>
    )
}
export default question