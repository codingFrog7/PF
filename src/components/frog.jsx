import Spline from "@splinetool/react-spline"
import Hero from "./hero"
const Frog = () => {
  return (
    < div className="w-full h-screen absolute top-0  flex justify-center items-center">
      <div className=" h-1/2 w-screen flex justify-center items-center  ">
        <Spline scene="https://prod.spline.design/Hn1UzE9WH0haIpB5/scene.splinecode" />
        <div className="h-16 w-36 bg-black absolute right-4 bottom-[27vh] "></div>
      </div>
    </div>
  )
}

export default Frog