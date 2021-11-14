import React from "react"
import './styles/Escuela.css'
import circlesImg from '../images/circles.png'


class Escuela extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            imagen:''
        }
    }

    // componentDidMount(){
    //     setTimeout(() =>{
    //       this.setState({
    //           imagen: 'https://w7.pngwing.com/pngs/67/631/png-transparent-pink-hibiscus-flowers-flower-small-fresh-summer-flowers-herbaceous-plant-summer-malvales-thumbnail.png'
    //       })
    //     },5000)
    //}
    render() {
        const { nombre,email,description,imagen,leftColor,rigthColor } = this.props
        return (
           
             <div className = "escuela mx-auto Escuela-Card"
             style ={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rigthColor}) `
             }}
             >
                 <div className = "escuela-body">
                     <div className="row center">
                         <div className="col-6">
                             <img src = {imagen} className="float-right"/>
                         </div> 
                         <div className="col-6 Escuela-Card-Info">
                             <h1>{nombre}</h1>
                             <p>{email}</p>
                             <p>{description}</p>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }

}

export default Escuela