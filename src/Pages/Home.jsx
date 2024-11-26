import { Carousel, Typography, Button } from "@material-tailwind/react";
import StaticBanner from "../Components/Banner";
import { ContactCard } from "../Components/Contact";
import { InfraStructureGallery } from "../Components/InfraStructure";

export default function Home() {
  const contents = [
    {
      img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656",
      title: "Vishal Bharti Senior Secondary School",
      desc: "Discover Vishal Bharti Senior Secondary School's Unique Approach to Learning",
    },
    {
      img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.06.55%20PM.jpeg/:/rs=w:1160,h:870",
      title: "",
      desc: "At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That’s why we’ve developed a unique approach to learning that focuses on each student’s individual needs and learning style.",
    },
    {
      img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.18%20PM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1160,h:580",
      title: "",
      desc: "Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks.",
    },
    {
      img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/e8c22d59-d752-4874-b627-9caddadc36fc.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:653",
      title: "",
      desc: "We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.",
    },
    {
      img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.19%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
      title: "",
      desc: "At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That’s why we’ve developed a unique approach to learning that focuses on each student’s individual needs and learning style.",
    },
    {
      img: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-03-20%20at%2008.21.13%20(18).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
      title: "",
      desc: 'The manifestation of the perfection already existing in the child-the blossoming of the "Integral", i.e. his physical, intellectual, emotional and spiritual faculties.',
    },
  ];
  return (
    <div>
      <StaticBanner></StaticBanner>
      <Carousel className="rounded-none h-[40rem]" autoplay={true} loop={true}>
        {contents.map((obj) => (
          <div className="relative h-[40rem] w-full">
            <img
              src={obj.img}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-[40rem] w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  // variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {obj.title}
                </Typography>
                <Typography
                  // variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {obj.desc}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className=" flex flex-col items-center p-5">
        <Typography
          variant="h2"
          className="m-4 border border-l-0 border-t-0 border-r-0 border-b-4 border-teal-500"
        >
          Infrastructure
        </Typography>
        <InfraStructureGallery />
      </div>
      <div className="flex flex-col items-center p-5 mb-8">
        <Typography
          variant="h2"
          className="m-4 border border-l-0 border-t-0 border-r-0 border-b-4 border-teal-500"
        >
          Contact Us
        </Typography>
        <ContactCard />
      </div>
    </div>
  );
}
