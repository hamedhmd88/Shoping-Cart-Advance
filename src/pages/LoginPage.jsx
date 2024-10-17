import { useNavigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";
import login2 from "../assets/logo/singin.svg"; // Import the appropriate image

function LoginPage({setName, setIsLogin}) {
    const navigate = useNavigate()
    const backHandler = () => {
        setIsLogin(true);
        navigate("/")
    }
  return (
    <>
    <div className=" min-h-screen flex justify-around items-center mt-12">
    <div className=" hidden lg:block w-1/2 rounded-xl ">
          <img
            src={login2}
            
            className="w-full p-5 h-[500px] object-contain"
          />
        </div>
      <LoginForm setName={setName} backHandler={backHandler}/>
    </div>
    </>
  )
}

export default LoginPage
