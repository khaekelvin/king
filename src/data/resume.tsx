import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Kelvin Duobu",
  initials: "KD",
  url: "https://dillion.io",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/ghana",
  description: "Web Developer | UI/UX Designer | Graphic Designer",
  summary:
    "My name is Kelvin, and I'm a web developer currently studying at a University. With a passion for design and an eye for detail..",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "React Native",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/khaekelvin",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kelvin-duobu",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "kelvinksd500@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PCES DOO",
      href: "https://atomic.finance",
      badges: [],
      location: "On-site",
      title: "Frontend Intern",
      logoUrl: "/pces.png",
      start: "June 2024",
      end: "August 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "St.Hubert ",
      href: "https://www.schoolsingh.com/senior-high-schools/st-hubert-seminary-senior-high-kumasi/about",
      degree: "Science",
      logoUrl: "/saint.jpeg",
      start: "2018",
      end: "2021",
    },
    {
      school: "Academic City University",
      href: "https://uwaterloo.ca",
      degree: "Computer Science",
      logoUrl: "/aaacity.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "School Management System",
      href: "https://management-psi.vercel.app/",
      dates: "May 2023 - Jun 2023",
      active: true,
      description:
        "The School Management System is a web-based application designed to streamline the administrative and academic activities of a school.",
      technologies: [
        "Next.js",
        "Javascript",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://management-psi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ARC",
      href: "https://arc-proj.vercel.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "Arc offers a comprehensive look at our portfolio, showcasing a diverse range of projects that blend aesthetics, functionality, and environmental responsibility.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://arc-proj.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khaekelvin/arc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "BlogSite",
      href: "https://openblogsite.netlify.app/",
      dates: "February 2024 - June 2024",
      active: true,
      description:
        "Blogsite showcases a responsive and intuitive user interface, ensuring that content is easily accessible and visually appealing on any device.Explore BlogSite and discover a platform that combines beautiful design with powerful functionality, perfect for both bloggers and readers.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://openblogsite.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khaekelvin/blogsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Semantics Tags in HTML",
      dates: "Posted on Aug 9, 2023",
      location: "Accra, Ghana",
      description:
        "HTML semantics refer to the practice of using HTML tags in a way that conveys meaningful information about the content they enclose. ",
      image:
        "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8oxcfe9amt27wm7ef6og.png",

      links: [
        {
          title: "Dev.to",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dev.to/khaekelvin/semantics-tags-in-html-onb",
        },
        {
          title: "webdev",
          icon: "#",
          href: "https://dev.to/t/webdev",
        },
        {
          title: "html",
          icon: "#",
          href: "https://dev.to/t/html",
        },
        {
          title: "programming",
          icon: "#",
          href: "https://dev.to/t/programming",
        },
        {
          title: "productivity",
          icon: "#",
          href: "https://dev.to/t/productivity",
        },
      ],
    },
    {
      title: "How a Browser renders a page for a user",
      dates: "Posted on Aug 11, 2023",
      location: "Accra, Ghana",
      description:
        "In this article I explain the steps your browser takes to convert HTML, CSS, and JavaScript into a working website you can interact with.",
      image:
        "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fe4zt6ry049i65z0sm56v.png",

      links: [
        {
          title: "Dev.to",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dev.to/khaekelvin/how-a-browser-renders-a-page-for-a-user-581n",
        },
        {
          title: "webdev",
          icon: "#",
          href: "https://dev.to/t/webdev",
        },
        {
          title: "beginners",
          icon: "#",
          href: "https://dev.to/t/beginners",
        },
        {
          title: "programming",
          icon: "#",
          href: "https://dev.to/t/programming",
        },
        {
          title: "tutorial",
          icon: "#",
          href: "https://dev.to/t/tutorial",
        },
      ],
    },
    {
      title: "What are HTTP status codes?",
      dates: "Posted on Aug 13, 2023",
      location: "Accra, Ghana",
      description:
        "Status codes are messages a website's server sends to the browser or system to indicate whether or not a request has been fulfilled.",
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Jtyr34zw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3rbkjyghhnmk5gu1ih2x.png",

      links: [
        {
          title: "Dev.to",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dev.to/khaekelvin/what-are-http-status-codes-4l5d",
        },
        {
          title: "webdev",
          icon: "#",
          href: "https://dev.to/t/webdev",
        },
        {
          title: "beginners",
          icon: "#",
          href: "https://dev.to/t/beginners",
        },
        {
          title: "programming",
          icon: "#",
          href: "https://dev.to/t/programming",
        },
        {
          title: "tutorial",
          icon: "#",
          href: "https://dev.to/t/tutorial",
        },
      ],
    },
    {
      title: "Parts of a Browser",
      dates: "Posted on Aug 23, 2023",
      location: "Accra, Ghana",
      description:
        "Web browsers have become a very useful tool in our digital lives, enabling us to access and interact with the information available on the Internet.",
      image:
        "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fs5ql2vk2pai10b3uypfb.png",

      links: [
        {
          title: "Dev.to",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dev.to/khaekelvin/what-are-http-status-codes-4l5d",
        },
        {
          title: "webdev",
          icon: "#",
          href: "https://dev.to/t/webdev",
        },
        {
          title: "programming",
          icon: "#",
          href: "https://dev.to/t/programming",
        },
        {
          title: "codenewbie",
          icon: "#",
          href: "https://dev.to/t/codenewbie",
        },
        {
          title: "frontend",
          icon: "#",
          href: "https://dev.to/t/frontend",
        },
      ],
    },

    {
      title: "How does a webpage get to a user?",
      dates: "Posted on Aug 24, 2023",
      location: "Accra, Ghana",
      description:
        "Many things happen between the time a web page is requested and the time it loads completely in your browse.",
      image:
        "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyzjihoubx79rwv2h4pnm.png",

      links: [
        {
          title: "Dev.to",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dev.to/khaekelvin/what-are-http-status-codes-4l5d",
        },
        {
          title: "learning",
          icon: "#",
          href: "https://dev.to/t/learning",
        },
        {
          title: "webdev",
          icon: "#",
          href: "https://dev.to/t/webdev",
        },
        {
          title: "tutorial",
          icon: "#",
          href: "https://dev.to/t/tutorial",
        },
        {
          title: "beginners",
          icon: "#",
          href: "https://dev.to/t/beginners",
        },
      ],
    },
  ],
} as const;
