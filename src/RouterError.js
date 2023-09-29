import { useRouteError } from "react-router-dom";
const RouterError = () =>{
const error = useRouteError();
console.log(JSON.stringify(error));
return(
    <div className="RouterError">
        <h2>
            Invalid path
        </h2>
        <h3>
            {error.data}
        </h3>
    </div>
)
}

export default RouterError;