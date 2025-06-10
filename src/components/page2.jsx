import Hero from "./hero"
import EasyCard3D from "./EasyCard3D"
import ClickSpark from './ClickSpark';
const Page2 = () => {
  return (
  <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      
      <div className=" h-auto w-full bg-black border-t-2  flex-wrap flex justify-evenly items-center">
          <EasyCard3D
            title="Invercade"
            description="Get weekly updates on the latest tech news and tutorials."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop"
            primaryButtonText="Open"
            secondaryButtonText="Learn more"
          />
          <EasyCard3D
            title="Renteazy"
            description="Get weekly updates on the latest tech news and tutorials."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop"
            primaryButtonText="Open"
            secondaryButtonText="Learn more"
          />
          <EasyCard3D
            title="Join Our Newsletter"
            description="Get weekly updates on the latest tech news and tutorials."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop"
            primaryButtonText="Open"
            secondaryButtonText="Learn more"
          />
          <EasyCard3D
            title="Join Our Newsletter"
            description="Get weekly updates on the latest tech news and tutorials."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop"
            primaryButtonText="Open"
            secondaryButtonText="Learn more"
          /> 
           <EasyCard3D
            title="Join Our Newsletter"
            description="Get weekly updates on the latest tech news and tutorials."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop"
            primaryButtonText="Open"
            secondaryButtonText="Learn more"
          /> 
           <EasyCard3D
            title="Join Our Newsletter"
            description="Get weekly updates on the latest tech news and tutorials."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2560&auto=format&fit=crop"
            primaryButtonText="Open"
            secondaryButtonText="Learn more"
          /> 
          
      </div>
      </ClickSpark>
    </>
  )
}

export default Page2
