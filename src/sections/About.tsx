
const About = () => {
  return (
    <section className="flex justify-center min-h-screen">
        <div className="w-full flex flex-row-reverse bg-gradient-to-r from-transparent to-violet-950 border-indigo-300 border-2 border-r-0 rounded-s-full p-10 my-32 ml-48 shadow-2xl shadow-amber-400 ring-1 ring-yellow-850 ">
           
          <img 
            src="public/Screenshot from 2024-04-29 00-17-33.png" 
            alt="" 
            className="m-10"/>

          <div className="text-white text-center justify-center ">
            <h1>About</h1>
            <p>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>

        </div>
    </section>

  )
}

export default About
