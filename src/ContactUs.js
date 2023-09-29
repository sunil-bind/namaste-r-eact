import { useParams } from "react-router-dom";

const ContactUs = () =>{
const {resId} = useParams();
console.log(resId)
return (
    <div className="contactUs">
        <h1>
            Contact US
        </h1>
    </div>
)
}

export default ContactUs;