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
    "I'm a digital creator with a focus on building modern web and mobile experiences. I combine skills in UI/UX design, web and mobile development, brand design, and video editing to craft impactful digital products from idea to launch.",
  // avatarUrl: "/skull.gif",
  avatarUrl: "/gog.JPG",
  skills: [
    "React",
    "Next.js",
    "MongoDB",
    "Prisma",
    "Typescript",
    "Astro",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "Node.js",
    "Figma",
    "Canva",
    "Jitter",
    "Photoshop",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    {
      href: "https://drive.google.com/drive/folders/1P-KYP_t7xsW_FdgcguBrgAleVxpOoelO?usp=sharing",
      icon: PencilLine,
      label: "Resume",
    },
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
      Behance: {
        name: "LinkedIn",
        url: "https://www.behance.net/codegraphixx",
        icon: Icons.globe,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kelvinksd500@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PCES DOO",
      href: "https://pces.mk/",
      badges: [],
      location: "On-site",
      title: "Frontend Developer",
      logoUrl: "/pces.png",
      start: "June 2023",
      end: "August 2023",
      description:
        "During my internship at PCES, I developed and tested software applications using NextJs, Typescript, Tailwind CSS and collaborated with cross-functional teams to enhance user experience and ensure project alignment. This experience strengthened my coding skills and teamwork abilities.",
    },
    {
      company: "PCES DOO",
      href: "https://pces.mk/",
      badges: [],
      location: "On-site",
      title: "UI/UX Designer",
      logoUrl: "/pces.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "During my internship at PCES, I focused on creating user-centered designs and improving the overall user experience. I collaborated with cross-functional teams to conduct user research, create wireframes, and develop interactive prototypes. Utilizing tools like Figma, I translated design concepts into high-fidelity mockups, while incorporating user feedback to iterate on designs.",
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
      href: "https://acity.edu.gh/",
      degree: "Computer Science",
      logoUrl: "/aaacity.png",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Flowstate",
      href: "",
      dates: "July 2025",
      active: true,
      description:
        "FlowState builds custom automations that eliminate repetitive tasks, so you can focus on what matters.",
      technologies: ["Next.js", "TailwindCSS", "n8n", "Make.com"],
      links: [
        {
          type: "Website",
          href: "https://www.flowstates.live/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/khaekelvin/color",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://res.cloudinary.com/dvfmse8he/image/upload/v1752540939/Screenshot_2025-07-15_at_12.55.31_AM_ynbb6r.png",
      video:
        "",
    },
    {
      title: "Echo",
      href: "",
      dates: "December 2024",
      active: true,
      description:
        "Echo is an intuitive campus event management system designed to streamline event discovery, organization, and participation.",
      technologies: ["React.js", "TailwindCSS", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://echo-event.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/khaekelvin/color",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dvfmse8he/video/upload/v1735929144/Website-Promo-_remix_ansq65.mp4",
    },
    {
      title: "Easybook",
      href: "https://easy-book-one.vercel.app/",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "A comprehensive service booking system that streamlines appointment scheduling, manages client information, and optimizes service provider availability in one intuitive platform.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://arc-proj.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/khaekelvin/arc",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1747933094/e0vlchopfhfwhep6pi9h.png",
      video: "",
      //   "https://res.cloudinary.com/dvfmse8he/video/upload/v1721072939/Animated-iPad-mockup-_remix_yx0aee.mp4",
    },
    {
      title: "FontCase",
      href: "",
      dates: "March 2025",
      active: true,
      description:
        "The Font Pairing App is a tool designed to help designers and developers discover and visualize font combinations effortlessly.",
      technologies: ["Next.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://fontcase.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/khaekelvin/color",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://res.cloudinary.com/dvfmse8he/image/upload/v1752541091/Screenshot_2025-07-15_at_12.58.04_AM_xtkq7r.png",
      video: "",
    },
    {
      title: "Jaqis Carport",
      href: "",
      dates: "September 2023",
      active: true,
      description:
        "At Jaqi's Carport, our mission is simple: to make your car ownership experience as enjoyable and hassle-free as possible.",
      technologies: ["Next.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://jaqiscarport.com/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/khaekelvin/color",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/car.png",
      video: "",
    },
    // {
    //   title: "J Translate",
    //   href: "https://translate-roan-nine.vercel.app/",
    //   dates: "July 2024 - Aug 2024",
    //   active: true,
    //   description:
    //     "A tool designed to streamline the process of translating the content of JSON files",
    //   technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://translate-roan-nine.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/trans.png",
    //   video: "",
    // },
    {
      title: "Blog",
      href: "https://article-blog-sandy.vercel.app/",
      dates: "February 2024 - June 2024",
      active: true,
      description:
        "On this blog, I share my experiences, tips, and insights on web design, development, and the latest industry trends.",
      technologies: ["Next.js", "Astro", "Javascript", "TailwindCSS", "Giscus"],
      links: [
        {
          type: "Website",
          href: "https://article-blog-sandy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/khaekelvin/article-blog",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1721727327/Screenshot_2024-07-23_at_9.26.07_AM_uthgta.png",
      video: "",
    },
  ],

  brand: [
    {
      title: "Zen",
      href: "https://www.behance.net/gallery/202658939/Zen",
      dates: "July 6th 2024",
      active: true,
      description:
        "Zen is a brand that is dedicated to creating timeless, minimalist clothing that embodies tranquility and elegance",
      technologies: ["Figma", "Canva", "Photoshop", "Jitter"],
      links: [
        {
          type: "Clothing Brand",
          href: "https://www.behance.net/gallery/202658939/Zen",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1720889473/ezgif-4-0a0446b146_uvt6bu.gif",
      video: "",
    },
    {
      title: "ARC",
      href: "https://www.behance.net/gallery/202225395/ARC",
      dates: "July 1st 2024",
      active: true,
      description:
        "ARC’s brand message focuses on innovation, sustainability, and collaboration.",
      technologies: ["Figma", "Canva"],
      links: [
        {
          type: "Architecture Brand",
          href: "https://www.behance.net/gallery/202225395/ARC",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dvfmse8he/video/upload/v1721057807/Group-1321316201_sohjxz.mp4",
    },

    {
      title: "Hollow",
      href: "https://www.behance.net/gallery/198507869/Hollow-Brand",
      dates: "May 13th 2024",
      active: true,
      description:
        "Hollow is a contemporary clothing brand that redefines modern fashion with a minimalist edge.",
      technologies: ["Canva", "Photoshop"],
      links: [
        {
          type: "Clothing Brand",
          href: "https://www.behance.net/gallery/198507869/Hollow-Brand",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dvfmse8he/video/upload/v1721060053/Photo-Gallery-_remix_dnpogn.mp4",
    },
    {
      title: "The Kings",
      href: "https://www.behance.net/gallery/174894245/Esports-Brand",
      dates: "July 9th 2023",
      active: true,
      description:
        "The Kings, where passion meets performance. As a premier esports organization, we are dedicated to excellence in competitive gaming.",
      technologies: ["Canva", "Photoshop"],
      links: [
        {
          type: "Esports Brand",
          href: "https://www.behance.net/gallery/174894245/Esports-Brand",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1721060253/Screenshot_2024-07-15_at_4.16.41_PM_szjfr7.png",
      video: "",
    },
  ],

  walls: [
    {
      title: "SandLands",
      href: "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934563/sandlands_go92zi.png",
      dates: "July 6th 2024",
      active: true,
      description:
        "A minimalist desert landscape wallpaper featuring smooth sand dunes with subtle gradient lighting, creating a calm and serene atmosphere perfect for modern desktops.",
      technologies: ["Blender", "Photoshop"],
      links: [
        {
          type: "Wallpaper",
          href: "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934563/sandlands_go92zi.png",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934563/sandlands_go92zi.png",
      video: "",
    },
    {
      title: "Crystal",
      href: "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934546/Glass_yl2lot.png",
      dates: "March 27th 2025",
      active: true,
      description:
        "A mesmerizing abstract wallpaper featuring translucent crystal formations with subtle light refractions, creating an elegant and modern aesthetic with a soothing blue-tinted color palette.",
      technologies: ["Blender", "Photoshop"],
      links: [
        {
          type: "Wallpaper",
          href: "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934546/Glass_yl2lot.png",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934546/Glass_yl2lot.png",
      video: "",
    },
    {
      title: "Red",
      href: "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934563/sand-main_allbfi.png",
      dates: "March 27th 2025",
      active: true,
      description:
        "A vibrant abstract wallpaper with dramatic red tones and flowing sand-like textures, creating a bold visual statement that evokes the feeling of desert heat and natural movement.",
      technologies: ["Blender"],
      links: [
        {
          type: "Wallpaper",
          href: "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934563/sand-main_allbfi.png",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1747934563/sand-main_allbfi.png",
      video: "",
    },
  ],

  ui: [
    {
      title: "Mythos",
      href: "https://www.behance.net/gallery/211474935/Mythos",
      dates: "July 10th 2025",
      active: true,
      description:
        "Mythos is a dynamic app designed to revolutionize how users track their finances.",
      technologies: ["Figma"],
      links: [
        {
          type: "Finance App",
          href: "https://www.behance.net/gallery/211474935/Mythos",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/myth.png",
      video: "",
    },
    {
      title: "Booked",
      href: "https://www.behance.net/gallery/211473079/Booked",
      dates: "October 27th 2024",
      active: true,
      description:
        "Booked is a sleek and intuitive online booking platform designed to streamline appointment management for service-based businesses. ",
      technologies: ["Figma", "Canva"],
      links: [
        {
          type: "Service Booking Brand",
          href: "https://www.behance.net/gallery/211473079/Booked?",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dvfmse8he/image/upload/v1736983639/Screenshot_2025-01-15_at_11.27.00_PM_r3fr8e.png",
      video: "",
    },
    {
      title: "Sync",
      href: "",
      dates: "October 16th 2024",
      active: true,
      description:
        "The Sync App is a music suggestions platform designed to offer a personalized music discovery experience.",
      technologies: ["Figma", "React native", "Expo"],
      links: [
        {
          type: "Music Application",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dvfmse8he/video/upload/v1729610585/Animated-iPhone-mockup-_remix_i1vmo3.mp4",
    },
    {
      title: "Pay",
      href: "",
      dates: "October 5th 2024",
      active: true,
      description:
        "The Store Registry App is a comprehensive solution designed to streamline inventory management for retail businesses.",
      technologies: ["Figma", "Expo"],
      links: [
        {
          type: "Inventory App",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dvfmse8he/video/upload/v1729611581/Showreel-Grid-Mobile-003-_remix_uduxqd.mp4",
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
