import ProfileCardUI from '@/components/ui/Profile-card';
import InfiniteMenu from '@/components/InfiniteMenu';
import StickeyScrollReveal from '@/components/StickyScrolReveal';
import FadeContent from '@/components/FadeContent';

export default function aboutpage() {

    const items = [
        {
            image: "/images/infiniteMenuPic/picMenu1.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu2.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu3.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu4.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu5.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu6.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu7.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu8.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu9.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu10.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu11.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu12.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu13.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu14.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu15.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu16.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu17.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu18.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu19.jpg",
            link: "",
            title: "",
            description: ""
        },
        {
            image: "/images/infiniteMenuPic/picMenu20.jpg",
            link: "",
            title: "",
            description: ""
        },
    ];

    return(
        <div>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <section className='grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 gap-y-40'>

                <div className='flex flex-col justify-center items-center'>
                    <ProfileCardUI />
                </div>

                <div className='col-span-2 p-4 md:p-8 flex flex-col justify-center items-start p-4 md:p-6 font-mono italic'>
                    <h1 className='text-4xl font-bold mb-4'>About Me</h1>
                    <p className='text-lg leading-relaxed mt-4'>
                        Hello! I'm Nicholas Yeo, a free-spirited individual with a passion for living life to the fullest. With a curious mind and a love for learning, I'm always eager to explore new interests and hobbies. You can find me making music, hitting the gym, or getting lost in a good book - I'm a firm believer that there's always more to discover and experience.
                    </p>
                    <p className='text-lg leading-relaxed mt-4'>
                        As someone who values genuine connections, I'm always looking to meet like-minded people and hear their stories. I'm a good listener and enjoy helping others, often finding myself in conversations that spark new ideas and perspectives. My carefree nature and enthusiasm for life make me a fun-loving companion, always up for a good time.
                    </p>
                    <p className='text-lg leading-relaxed mt-4'>
                        When I'm not pursuing my hobbies, you can find me delving into the latest technologies and innovations, driven by a self-motivated desire to understand how they work and how they can be used to make a positive impact. I'm excited to connect with others who share my passions and interests, and I'm always open to new opportunities and collaborations. Feel free to reach out and let's start a conversation!
                    </p>
                </div>

                <div className='col-span-2 p-4 md:p-8 flex flex-col justify-center items-start p-4 md:p-6 font-mono italic'>
                    <p className='text-lg leading-relaxed mt-4'>
                        As a student from <b>Nanyang Technology University</b>, I've had the opportunity to work on various academic projects. I've also worked on personal projects, including a Telegram bot and this very portfolio, which have given me a deeper understanding of the tech world and its endless possibilities.
                    </p>
                    <p className='text-lg leading-relaxed mt-4'>
                        My journey in tech has not only taught me how to code, but also how to approach problems with a logical and creative mindset. I'm always eager to learn more and take on new challenges, and I believe that my passion for technology and self-motivation will continue to drive me forward in this exciting field.
                    </p>
                    <p className='text-lg leading-relaxed mt-4'>
                        However, my curiosity doesn't stop at screens and code. I'm also passionate about exploring the world around me, meeting new people, and gaining insights into the complexities of human experience. I believe that there's always more to learn, and that the best way to grow is to stay open-minded, keep asking questions, and seek out new experiences.
                    </p>
                    <p className='text-lg leading-relaxed mt-4'>
                        As I explore the world and push the boundaries of technology, I'm reminded that innovation and discovery go hand-in-hand. The challenges I see during my travels and conversations spark new project ideas, fueling my passion to create meaningful solutions that can make a positive impact. I'm driven to harness technology to address the world's pressing problems and create a better world, one project at a time.
                    </p>
                </div>

                <div>
                    <InfiniteMenu items={items}/>
                </div>    

            </section>
            <br />
            <br />

            <section className='w-full h-auto py-20 px-6 md:px-20 bg-gradient-to-tr from-indigo-950 my-20 rounded-xl'>
                <h1 className='text-6xl font-bold mb-4 flex flex-col justify-center items-center font-mono italic'>Education Path</h1>
                <StickeyScrollReveal />
            </section>

            <section>
                <h1 className='text-6xl font-bold mb-4 flex flex-col justify-center items-center font-mono italic'>Work Experiences</h1>
                <br />
                <br />
                <div className='grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 gap-y-20 justify-center items-center'>

                    {/* Intership Experiences */}

                    <img className='w-full h-auto col-span-1' src='/images/ESSILOR.png' alt='internship1'/>
                    <div className='col-span-2 p-4 md:p-8 flex flex-col justify-center items-start p-4 md:p-6 font-mono italic'>
                        <h1 className='text-4xl font-bold mb-4'>Essilor - Software Engineer Intern</h1>
                        <p className='text-lg leading-relaxed mt-4'>
                            During my internship at Essilor, I had the opportunity to work on a project that involved developing a web application using ReactJS and NodeJS. The application was designed to streamline the process of managing customer orders and inventory for the company's retail stores.
                        </p>
                        <p className='text-lg leading-relaxed mt-4'>
                            As part of the development team, I was responsible for implementing various features of the application, including user authentication, order tracking, and inventory management. I also worked closely with the UI/UX designers to ensure that the application was user-friendly and visually appealing.
                        </p>
                        <p className='text-lg leading-relaxed mt-4'>
                            Throughout the internship, I gained valuable experience in software development, project management, and teamwork. I also had the opportunity to learn about the company's operations and culture, which helped me to better understand the business side of software development.
                        </p>
                        <p className='text-lg leading-relaxed mt-4'>
                            Overall, my internship at Essilor was a rewarding experience that allowed me to apply my technical skills in a real-world setting and gain insights into the software development industry.
                        </p>
                    </div>

                </div>
            </section>
            </FadeContent>
        </div>

    )
}