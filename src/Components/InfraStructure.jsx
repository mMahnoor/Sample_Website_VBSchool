import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";

export function InfraStructureGallery() {
  const data = [
    {
      label: "School Reception",
      value: "reception",
      images: [
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1280,h:640,cg:true",
        },
      ],
    },
    {
      label: "Laboratory",
      value: "lab",
      images: [
        {
          title: "Math Lab",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.39.55%20AM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
        },
        {
          title: "Physics Lab",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM.jpeg/:/cr=t:0%25,l:0%25,w:65.71%25,h:65.71%25/rs=w:1600,cg:true,m",
        },
        {
          title: "Chemistry Lab",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.36%20PM.jpeg/:/rs=w:1600,cg:true,m",
        },
        {
          title: "Biology Lab",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM%20(5).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1600,cg:true",
        },
        {
          title: "Computer Lab",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.39.54%20AM.jpeg/:/rs=w:1160,h:870",
        },
        {
          title: "Computer Lab",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/IMG-20240729-WA0007%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:652",
        },
      ],
    },
    {
      label: "Play",
      value: "play",
      images: [
        {
          title: "Indoor Playing Area",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.37%20PM%20(1).jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1600,h:800,cg:true",
        },
        {
          title: "Outdoor Playground Areas",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2014.17.11_f6673a8b.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
        },
        {
          title: "Outdoor Playground Areas",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2020.13.36_f0c8a4e2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1080,cg:true",
        },
        {
          title: "Outdoor Playground Areas",
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2020.44.00_229c7aed.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
        },
      ],
    },
    {
      label: "Music",
      value: "music",
      images: [
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-19%20at%201.00.31%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true",
        },
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2020.13.18_19565a3d.jpg/:/cr=t:0%25,l:8.06%25,w:83.89%25,h:83.89%25/rs=w:1080,cg:true,m",
        },
      ],
    },
    {
      label: "Library",
      value: "library",
      images: [
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.29.13%20PM%20(1).jpeg/:/rs=w:1160,h:870",
        },
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/6e0b90ea-8208-4b86-8182-6efdfe39078b.jpg/:/rs=w:1160,h:1160",
        },
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-39fb38b.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
        },
      ],
    },
    {
      label: "Transportation",
      value: "transportation",
      images: [
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-23%20at%2011.15.06%20AM.jpeg/:/rs=w:1160,h:870",
        },
      ],
    },
    {
      label: "Classroom",
      value: "classroom",
      images: [
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0.92%25,w:98.16%25,h:98.16%25/rs=w:1200,cg:true,m",
        },
        {
          imageLink:
            "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-04-29%20at%2015.43.36.jpeg/:/cr=t:0%25,l:7.81%25,w:84.38%25,h:84.38%25/rs=w:1200,cg:true,m",
        },
      ],
    },
  ];

  return (
    <div>
      <Tabs value="reception" className="w-full z-10">
        <TabsHeader className="z-10">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="lg:min-w-36">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => (
            <TabPanel
              className={`grid grid-cols-${images.length} gap-4 md:grid-cols-${images.length}`}
              key={value}
              value={value}
            >
              {images?.map(({ title, imageLink }, index) => (
                <div key={index} className="flex flex-col">
                  <img
                    className="h-96 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                  <Typography>{title}</Typography>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
