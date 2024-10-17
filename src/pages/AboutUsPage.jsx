import AboutUs from "../components/AboutUs";
import about from "../assets/logo/contact.jpg"
function AboutUsPage() {
  return (
    <>
      <div className=" min-h-screen bg-[#0D1117] w-full mt-40">
        <div className="relative w-full mt-10 shadow-2xl">
          <img
            src={about}
            alt="Main Product Image"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-[#0D1117]bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
            <h1 className="  text-gray-200 italic text-4xl md:text-5xl font-bold">
              About Us Page
            </h1>
          </div>
        </div>
        <AboutUs/>
      </div>
    </>
  );
}

export default AboutUsPage;
