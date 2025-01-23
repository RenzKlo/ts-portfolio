import { ThemeProvider } from "@/components/theme-provider"
import TopNavigation from "./TopNavigation"
import { Button } from "@/components/ui/button"

import TechStack from "./tech-stack"

// import {
//   Card,
//   CardContent,

// } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"




function App() {
  return (
    <ThemeProvider>
      <div className=' relative bg-cover bg-background'>
        <TopNavigation />
        <section className="flex items-center  justify-center h-screen px-48">
          <div className="flex flex-col justify-center items-start h-screen">
            <h3 className="text-foreground text-3xl">
              Hello there, I'm Kent! 👋
            </h3>
            <h1 className='text-foreground text-6xl font-bold mt-2'>
              A Full Stack Developer
            </h1>
            <p className="text-muted-foreground text-xl text-thin leading-10">
              I build apps both for mobile and web.
            </p>
            {/* <Button className=' my-2 px-8 size-24 'variant="default"><InstagramIcon /></Button> */}

            <div className="flex items-center space-x-4 mt-4">
              <Button className=' px-8 ' variant="default">Resume</Button>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="foreground" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </div>
            <div>

            </div>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="flex flex-col justify-center items-start h-screen px-48">
            <h1 className="text-foreground text-8xl font-bold">
              aboutme.
            </h1>

            <div className=" flex flex-col md:flex-row items-start mt-10">
              <div className="flex flex-col mr-10 mt-3">
                <h4 className="text-muted-foreground">
                  First Name
                </h4>
                <h1 className="text-foreground text-6xl font-bold">
                  Kent Lorenz
                </h1>
              </div>
              <div className="flex flex-col mt-3">
                <h4 className="text-muted-foreground">
                  Last Name
                </h4>
                <h1 className="text-foreground text-6xl font-bold">
                  Daria
                </h1>
              </div>
            </div>
            <div className=" flex flex-row items-start mt-3">
              <div className="flex flex-col mr-10">
                <h4 className="text-muted-foreground">
                  Place
                </h4>
                <h1 className="text-foreground text-4xl font-bold">
                  Roxas City, Capiz
                </h1>
              </div>
              <div className="flex flex-col ">
                <h4 className="text-muted-foreground">
                  Age
                </h4>
                <h1 className="text-foreground text-4xl font-bold">
                  21
                </h1>
              </div>
            </div>
            <h2 className="text-muted-foreground text-2xl mt-10">Education</h2>
            <h2 className="text-foreground font-bold text-2xl mt-5">Undergraduate</h2>
            <div className=" flex flex-row items-start mt-5">
              <div className="flex flex-col mr-10">
                <h4 className="text-muted-foreground">
                  Course
                </h4>
                <h1 className="text-foreground text-4xl font-bold">
                  BS in Computer Science
                </h1>
              </div>
              <div className="flex flex-col ">
                <h4 className="text-muted-foreground">
                  School
                </h4>
                <h1 className="text-foreground text-4xl font-bold">
                  West Visayas State University
                </h1>
              </div>
            </div>
            <div className=" flex flex-row items-start mt-5">
              <div className="flex flex-col mr-10">
                <h4 className="text-muted-foreground">
                  Major
                </h4>
                <h1 className="text-foreground text-4xl font-bold">
                  Artificial Intelligence
                </h1>
              </div>
              <div className="flex flex-col ">
                <h4 className="text-muted-foreground">
                  Address
                </h4>
                <h1 className="text-foreground text-4xl font-bold">
                  Iloilo, PH
                </h1>
              </div>
            </div>


          </div>
        </section>
        {/* <section className="min-h-screen items-center">
          <h2 className="text-foreground text-4xl font-bold px-48 mt-10">
            experience
          </h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem><Card className="w-96 h-96">
                <CardContent className="flex flex-col items-center ">
                  Lorem Ipsum
                </CardContent>
              </Card></CarouselItem>
              <CarouselItem><Card className="w-96 h-96">
                <CardContent className="flex flex-col items-center ">
                  Lorem Ipsum
                </CardContent>
              </Card></CarouselItem>
              <CarouselItem><Card className="w-96 h-96">
                <CardContent className="flex flex-col items-center ">
                  Lorem Ipsum
                </CardContent>
              </Card></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>


        </section> */}
        <section className="flex-col  my-20">
          <div className='justify-center items-center w-screen'>
            <h2 className="text-foreground text-8xl text-center font-bold px-48">
              tech stack
            </h2>
          </div>
          <TechStack />
        </section>
        <section className=" flex-col min-h-screen">
          <h1 className="text-foreground text-8xl text-end mr-60 mb-10 font-bold">skills</h1>
          <div className="flex-wrap justify-center space-x-3 items-start h-screen px-48">

            {/* <Card className="w-45 h-30 items-center">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Mobile Development</h2>
                <p></p>
              </CardContent>
            </Card>
            <Card className="w-20 h-30 items-center">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Web Developent</h2>
                <p></p>
              </CardContent>
            </Card>
            <Card className="w-50 h-30 items-center">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Backend Development</h2>
                <p></p>
              </CardContent>
            </Card>
            <Card className="w-50 h-30 items-center">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">AI/ML</h2>
                <p></p>
              </CardContent>
            </Card> */}
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App
