import React from 'react'

class BuscadorEscuelas extends React.Component {
 
    handleClick = () => {
        console.log(this)
    }
    render(){
        return (
          
               <button onClick = {this.handleClick}>
                    send
               </button>
                 
        )
    }

}

export default BuscadorEscuelas