import "./button.css"

const MyButton = ()=>{
    const styles =  {
        borderRadius: "20px",
        height: "40px",
        width: "200px",
        borderStyle: "none",     
        
       
    };
    const color = "pink";
    return (
    <>
     <a href="#"> 
       <button style={styles} className="hover-button">
        Click here if you agree
      </button>
      </a>
    </>
   );  
}
  
export default MyButton;
