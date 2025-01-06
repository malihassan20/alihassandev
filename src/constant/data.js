const SITE_URL = 'http://localhost:3000/';

export const COUNTS = [
  { name: 'Trainings', value: 219 },
  { name: 'Written Book', value: 48 },
  { name: 'Listeners', value: 527 },
  { name: 'Own Projects', value: 12 },
];
export const MEMU_LINK = [
  {
    name: 'Home',
    href: SITE_URL + '#home',
  },
  {
    name: 'About',
    href: SITE_URL + '#about',
  },
  {
    name: 'Service',
    href: SITE_URL + '#service',
  },
  {
    name: 'Portfolio',
    href: SITE_URL + '#portfolio',
  },
  {
    name: 'Blog',
    href: SITE_URL + '#blog',
  },
  {
    name: 'Contact',
    href: SITE_URL + '#contact',
  },
];

export const SKILLS = [
  { name: 'React.js', icon: 'img/svg/skills/react.svg' },
  { name: 'Next.js', icon: 'img/svg/skills/next.svg' },
  { name: 'Vue.js', icon: 'img/svg/skills/vue.svg' },
  { name: 'Redux', icon: 'img/svg/skills/redux.svg' },
  { name: 'Gatsby.js', icon: 'img/svg/skills/gastby.svg' },
  { name: 'Material UI', icon: 'img/svg/skills/material.svg' },
  { name: 'Node.js', icon: 'img/svg/skills/node.svg' },
  { name: 'Express.js', icon: 'img/svg/skills/express.svg' },
  { name: 'MongoDB', icon: 'img/svg/skills/mongo.svg' },
  { name: 'Laravel', icon: 'img/svg/skills/laravel.svg' },
  { name: 'MySQL', icon: 'img/svg/skills/mysql.svg' },
  { name: 'PostgreSQL', icon: 'img/svgskills/postgre-sql.svg' },
  { name: 'REST APIs', icon: 'img/svg/skills/restApi.svg' },
  { name: 'GraphQL', icon: 'img/svg/skills/graphql.svg' },
  { name: 'Git/GitHub', icon: 'img/svg/skills/git.svg' },
  { name: 'CI/CD Pipelines', icon: 'img/svg/skills/ci-cd.svg' },
  { name: 'AWS', icon: 'img/svg/skills/aws.svg' },
  { name: 'Docker', icon: 'img/svg/skills/docker.svg' },
];

export const EXPERIENCES = [
  {
    company: 'Xendit',
    designation: 'Senior Software Engineer',
    time: '2021 - Present',
  },
  {
    company: 'Instant Consult',
    designation: 'Lead Software Engineer',
    time: '2019 - 2020',
  },
  {
    company: 'endshift',
    designation: 'Software Engineer',
    time: '2017 - 2019',
  },
];

export const EDUCATIONS = [
  {
    institution: 'FAST-NUCES',
    certificate: 'BS (Computer Science)',
    time: '08/2012 - 08/2016',
  },
];

export const SERVICES_DATA = [
  {
    name: 'Custom Web Development',
    img: 'img/service/custom-web-development.jpg',
    description: [
      'I offer end-to-end custom web development services, turning your ideas into interactive, user-friendly websites and applications. With a strong focus on modern web technologies such as React.js, Next.js, Node.js, and Express.js, I build scalable and efficient web solutions that are tailored to meet your specific business needs.',
      "Whether you're looking for a dynamic landing page, a complex enterprise application, or an interactive platform, I ensure each web solution is built with best practices in mind. This approach guarantees future scalability, security, and seamless performance for your web application.",
      'I work closely with clients to deliver a product that not only meets but exceeds expectations. By maintaining open communication throughout the development process, I ensure the final result aligns with your vision and drives business success.',
    ],
  },
  {
    name: 'E-commerce Solutions',
    img: 'img/service/e-commerce-solutions.jpg',
    description: [
      'I specialize in developing powerful, secure e-commerce platforms designed to enhance the user shopping experience and drive business growth. From custom shopping cart systems to order management and inventory tracking, I build e-commerce websites that are fast, scalable, and optimized for both mobile and desktop devices.',
      'Integrated payment gateways, such as Stripe and PayPal, ensure smooth transactions, providing a seamless experience for users. My focus on SEO and performance optimization ensures that websites not only attract traffic but also increase conversions, helping businesses succeed in a competitive digital landscape.',
      "Whether you're launching a new e-commerce site or enhancing an existing one, I provide end-to-end solutions that enable businesses to thrive in the digital marketplace. My goal is to create platforms that meet your business needs and exceed user expectations.",
    ],
  },
  {
    name: 'API Integration & Development',
    img: 'img/service/API-integration.jpg',
    description: [
      'Integrating third-party services or building custom APIs is crucial for adding advanced functionality to your website or web application. I specialize in integrating a variety of services, including payment gateways such as Stripe and PayPal, social media logins, and geolocation services like Google Maps and Mapbox.',
      'If your application requires custom-built APIs, I can design and develop RESTful or GraphQL APIs that offer the flexibility, scalability, and security needed to support your platform’s growth. These custom solutions are tailored to meet your specific needs, ensuring efficient data handling and performance.',
      'My goal is to ensure seamless interaction between systems, providing users with the best possible experience while optimizing the functionality of your platform. With a focus on smooth integration, I strive to enhance your platform’s capabilities and deliver top-tier solutions.',
    ],
  },
  {
    name: 'Website Optimization',
    img: 'img/service/web-optimization.jpg',
    description: [
      'Website performance has a direct impact on both user experience and search engine ranking. I focus on enhancing your website’s speed and optimizing its overall performance, ensuring that it loads quickly and smoothly on all devices.',
      'Using strategies such as image compression, file minification, caching, and lazy loading, I work to make your website as fast as possible. These performance improvements reduce load times, leading to a better user experience across different platforms.',
      'In addition, I conduct comprehensive SEO audits and implement best practices to boost search engine visibility, increase organic traffic, and drive better engagement. My optimization strategies contribute to improved user retention, higher conversion rates, and better search engine rankings.',
    ],
  },
  {
    name: 'WordPress Development',
    img: 'img/service/wordpress-development.jpg',
    description: [
      "As a WordPress expert, I provide comprehensive services, ranging from custom theme development to plugin customization and integration. Whether you're starting from scratch or looking to enhance an existing WordPress site, I can create a custom theme that reflects your brand and offers an intuitive user experience.",
      'I also specialize in custom plugin development, allowing you to extend your website’s functionality to meet specific business needs. These solutions are tailored to address unique requirements and ensure your website performs optimally.',
      'Additionally, I offer WordPress website migrations, ensuring smooth transitions when moving to new platforms or upgrading versions. With a focus on data integrity and functionality, I guarantee that your website will continue to operate seamlessly throughout the migration process.',
    ],
  },
  {
    name: 'Cloud Solutions & DevOps',
    img: 'img/service/cloud-solutions-devoOps.jpg',
    description: [
      'I offer cloud solutions and DevOps services that help businesses scale efficiently while minimizing operational overhead. By leveraging cloud platforms like AWS, I set up infrastructure, implement automated deployment pipelines, and ensure security and reliability using tools such as Docker, Kubernetes, and CI/CD practices.',
      'I assist in managing and optimizing cloud-based applications to ensure they scale effectively as your business grows. My approach focuses on keeping costs low while maintaining high performance, allowing your systems to meet increasing demands without sacrificing quality.',
      'With DevOps practices, I streamline workflows, making the deployment and maintenance of applications faster and more efficient. This results in more reliable releases and greater agility for your business, ultimately enhancing productivity and reducing the time to market.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Insult Consult',
    description:
      'Instant Consult is a comprehensive telehealth platform that enables users across Australia to have video consultations with registered and experienced doctors. It offers an affordable and convenient alternative to traditional healthcare systems, allowing patients to request consultations without prior appointments and from any place they want as needed.',
    thumbImg: 'img/projects/instantConsult/thumb.jpg',
    innerImg: 'img/projects/instantConsult/cover.jpg',
    image1: 'img/projects/instantConsult/1.jpg',
    image2: 'img/projects/instantConsult/2.jpg',
    image3: 'img/projects/instantConsult/3.jpg',
    keyFeatures: [
      'User-friendly interface for booking consultations and managing health records.',
      'Intuitive dashboard for managing patient interactions and schedules.',
      'Tools for managing system-wide operations, users, and data analytics.',
      'Streamlined integration with Patient record Management and providing prescriptions.',
      'Systems for seamless operations.',
      'Allows patients to connect with the first available doctor instantly.',
      'Optimized for various devices, ensuring a seamless experience on desktop and mobile.',
      'Efficient and scalable API design for smooth data exchange between portals.',
      'Ensures confidentiality and compliance with healthcare data regulations.',
      'Updates for patients and doctors on appointments and system alerts.',
      'Tools for generating insights into platform usage and user engagement.',
    ],
    keyResponsibilities: [
      'Led a remote development team to rebuild and enhance the platform using the latest technologies.',
      'Managed end-to-end development, from frontend design to backend database integration.',
      'Improved website performance, reducing load times and increasing user engagement.',
      'Designed and implemented APIs for external systems and internal communication.',
      'Ensured the platform was mobile-friendly and adaptable to future needs.',
    ],
    technologies: [
      'React.js',
      'Redux',
      'TypeScript',
      'Sass',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful APIs',
      'AWS',
    ],
    links: [
      {
        name: 'Patient Portal',
        url: 'https://patient.instantconsult.com.au',
      },
      {
        name: 'Doctor Portalt',
        url: 'https://doctor.instantconsult.com.au',
      },
    ],
  },
  {
    id: 2,
    title: 'Brandwatch',
    description:
      'Brandwatch Reviews is an advanced analytics platform designed to help businesses monitor and analyze customer reviews. It provides powerful tools for collecting, managing, and extracting insights from reviews across various platforms, enabling companies to enhance their products, services, and customer experiences.',
    thumbImg: 'img/projects/brandWatch/thumb.jpg',
    innerImg: 'img/projects/brandWatch/cover.jpg',
    image1: 'img/projects/brandWatch/1.jpg',
    image2: 'img/projects/brandWatch/2.jpg',
    image3: 'img/projects/brandWatch/3.jpg',
    keyFeatures: [
      'A centralized platform for collecting reviews from multiple sources.',
      'Intuitive dashboards and graphs for tracking sentiment and review trends.',
      'AI-powered tools to determine customer sentiment and identify key themes.',
      'Notifications for significant changes in review patterns or emerging issues.',
      'Enables team discussions and tagging for efficient review management.',
      'Seamless integration with Brandwatch’s broader analytics ecosystem.',
    ],
    keyResponsibilities: [
      'Engineered the core API using Node.js and Express to manage review data flow.',
      'Developed user interfaces with Vue.js and Vuetify for responsive and engaging experiences.',
      'Utilized MongoDB for efficient and scalable storage of review data.',
      'Leveraged Firebase for real-time data synchronization and user authentication.',
      'Docker was employed to build and manage containerized environments.',
      'Enhanced platform scalability and reduced latency in data retrieval.',
    ],
    technologies: [
      'Vue.js',
      'Vuetify',
      'TypeScript',
      'Sass',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Docker',
    ],
    links: [
      {
        name: 'Brandwatch',
        url: 'https://brandwatch.com',
      },
      {
        name: 'Reviews Portal',
        url: 'https://new.reviews.brandwatch.com/',
      },
    ],
  },
  {
    id: 3,
    title: 'Rich Returns',
    description:
      'Rich Returns is a Shopify app designed to streamline the return and exchange process for e-commerce businesses. It provides a user-friendly portal for managing returns, improving customer satisfaction, and enhancing operational efficiency. The app integrates seamlessly with Shopify, offering businesses a hassle-free return experience.',
    thumbImg: 'img/projects/richReturn/thumb.jpg',
    innerImg: 'img/projects/richReturn/cover.jpg',
    image1: 'img/projects/richReturn/1.jpg',
    image2: 'img/projects/richReturn/2.jpg',
    image3: 'img/projects/richReturn/3.jpg',
    keyFeatures: [
      'Customers can easily initiate returns or exchanges directly from the store’s portal.',
      'Flexible settings for configuring rules and eligibility for returns.',
      'Streamlined return processing with automated email notifications and approvals.',
      'Label Generation Integration with shipping carriers for easy return label creation.',
      'Insights on return trends, reasons, and overall performance.',
      'Localized experiences for global customers.',
      'Seamless orders, products, and customer data synchronization.',
    ],
    keyResponsibilities: [
      'Developed robust APIs using Node.js and Express to handle return workflows and Shopify integrations.',
      'Built responsive user interfaces with React and Ant Design for customers and admin users.',
      'Designed and optimized relational databases using MySQL to store return data efficiently.',
      'Implemented Redis to improve application performance and reduce latency.',
      'Ensured seamless connectivity with Shopify for synchronization of real-time order and product data.',
      'Enhanced scalability and reliability to handle high volumes of transactions during peak seasons.',
    ],
    technologies: [
      'React',
      'Ant Design',
      'Redis',
      'Node.js',
      'MongoDB',
      'MySQL',
      'Shopify',
    ],
    links: [
      {
        name: 'Rich Returns',
        url: 'https://www.richreturns.io/',
      },
    ],
  },
  {
    id: 4,
    title: 'Ropo',
    description:
      'Ropo is a property management platform that simplifies real estate operations for property managers, tenants, and landlords. It provides tools to manage properties, handle payments, and streamline communication, making property management more efficient and transparent.',
    thumbImg: 'img/projects/ropo/thumb.jpg',
    innerImg: 'img/projects/ropo/cover.jpg',
    image1: 'img/projects/ropo/1.jpg',
    image2: 'img/projects/ropo/2.jpg',
    image3: 'img/projects/ropo/3.jpg',
    keyFeatures: [
      'Allows landlords and property managers to list properties with detailed descriptions and images.',
      'Tracks tenant information, lease agreements, and rent payment history.',
      'Integrated with Stripe for secure rent collection and payment processing.',
      'Tenants can submit maintenance requests directly through the platform, with real-time status updates.',
      'Secure document storage for leases and property-related documents using AWS S3.',
      'Provide insights into rental income, occupancy rates, and maintenance costs.',
      'Automated reminders for rent due dates and lease renewals.',
      'Hosted on AWS EC2 and RDS to ensure reliability and scalability.',
    ],
    keyResponsibilities: [
      'Built RESTful APIs using Node.js and Express.js to handle user authentication, payment processing, and data management.',
      'Designed and implemented a responsive user interface using React.js.',
      'Designed and maintained a relational database schema with MySQL for efficient data storage and retrieval.',
      'Utilized AWS services such as EC2 for hosting, S3 for secure document storage, and RDS for database management.',
      'Integrated Stripe for seamless and secure online payment processing.',
      'Improved application speed and scalability to handle growing user demand.',
      'Ensured smooth deployment and maintenance of the platform on AWS infrastructure.',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful APIs',
      'AWS EC2',
      'AWS S3',
      'Stripe',
    ],
    links: [
      {
        name: 'Ropo',
        url: 'https://ropo.org/',
      },
    ],
  },
  {
    id: 5,
    title: 'Sockoye',
    description:
      'Sockoye is an eCommerce platform designed to sell a wide variety of socks and provide a seamless shopping experience for customers. The site is built on Shopify and offers a visually appealing, user-friendly interface for easy navigation and product selection. It leverages Shopify’s capabilities to ensure a robust, scalable, and efficient online store that caters to a global audience.',
    thumbImg: 'img/projects/sockOye/thumb.jpg',
    innerImg: 'img/projects/sockOye/cover.jpg',
    image1: 'img/projects/sockOye/1.jpg',
    image2: 'img/projects/sockOye/2.jpg',
    image3: 'img/projects/sockOye/3.jpg',

    keyFeatures: [
      'Built using Shopify’s flexible theming engine for an attractive and engaging user experience.',
      'Displays a wide range of socks with detailed descriptions, sizes, and color options.',
      'Integrated Shopify checkout system for secure and convenient transactions.',
      'Real-time inventory tracking to manage stock availability efficiently.',
      'Optimized for mobile, tablet, and desktop devices to provide a consistent user experience across all platforms.',
      'Supports multiple payment methods available through Shopify, including credit card processing and digital wallets.',
      'Uses Shopify’s built-in SEO tools to drive organic traffic and boost search engine rankings.',
      'Analyzed tools to monitor sales performance, customer behavior, and marketing effectiveness.',
    ],
    keyResponsibilities: [
      'Customized Shopify themes to align with brand aesthetics and improve user engagement.',
      'Integrated third-party apps to enhance functionality, including reviews, recommendations, and marketing automation.',
      'Configured product listings and inventory management features for accurate stock control.',
      'Optimized the store for fast loading times and improved user experience, reducing bounce rates.',
      'Provided ongoing updates, security patches, and feature enhancements as needed.',
    ],
    technologies: [
      'Shopify',
      'Shopify Theme Customization',
      'Liquid Templates',
    ],
    links: [
      {
        name: 'Sockoye',
        url: 'https://www.sockoye.com/',
      },
    ],
  },
  {
    id: 6,
    title: 'Instant Touch',
    description:
      'Instant Touch is a web-based platform that provides real-time, secure, and user-friendly communication between clients and healthcare professionals. This telemedicine solution allows users to book consultations, access healthcare services, and connect with doctors seamlessly, ensuring that individuals can receive medical advice from the comfort of their homes.',
    thumbImg: 'img/projects/instantTouch/thumb.jpg',
    innerImg: 'img/projects/instantTouch/cover.jpg',
    image1: 'img/projects/instantTouch/1.jpg',
    image2: 'img/projects/instantTouch/2.jpg',
    image3: 'img/projects/instantTouch/3.jpg',

    keyFeatures: [
      'Enables users to book appointments with doctors instantly for a seamless healthcare experience.',
      'Provides a secure video call feature to connect users with healthcare professionals in real-time.',
      'Stores and manages patient medical histories and consultation records for quick access by both patients and healthcare providers.',
      'Simplifies payments with integrated solutions such as Stripe for secure online transactions.',
      'Sends instant notifications to users for appointment reminders, consultations, and updates.',
      'Supports multiple languages, making healthcare more accessible for a diverse user base.',
    ],
    keyResponsibilities: [
      'Designed and implemented the system architecture to ensure scalability and reliability of the platform.',
      'Led the development of the frontend using React.js, ensuring responsive design and smooth user interactions.',
      'Managed backend development with Node.js, ensuring secure and efficient communication between users and healthcare providers.',
      'Integrated WebRTC and Socket.io to provide real-time communication for consultations.',
      'Implemented Stripe for secure and seamless payment processing within the platform.',
      'Worked closely with cross-functional teams to ensure smooth integration of frontend and backend components, focusing on usability and security.',
      'Oversaw the deployment and maintenance of the platform, ensuring continuous updates and optimizations.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'WebRTC',
      'Socket.io',
      'Stripe',
    ],
    links: [
      {
        name: 'Insult Touch',
        url: 'https://instanttouch.com.au/',
      },
    ],
  },
  {
    id: 7,
    title: 'NoYelling',
    description:
      'NoYelling is a modern platform focused on simplifying the process of booking driving lessons. Designed with user experience in mind, the website allows users to browse and book lessons with qualified driving instructors easily. Built with Next.js and React.js, it delivers a seamless and responsive experience for users across devices.',
    thumbImg: 'img/projects/noYelling/thumb.jpg',
    innerImg: 'img/projects/noYelling/cover.jpg',
    image1: 'img/projects/noYelling/1.jpg',
    image2: 'img/projects/noYelling/2.jpg',
    image3: 'img/projects/noYelling/3.jpg',
    keyFeatures: [
      'A straightforward interface for booking driving lessons with preferred instructors.',
      'Detailed instructor profiles, including ratings and reviews, to help users make informed decisions.',
      'Responsive design optimized for mobile, tablet, and desktop use, ensuring accessibility across all devices.',
      'Server-side rendering using Next.js for faster load times and enhanced SEO performance.',
      'Ensures users receive real-time availability and booking confirmations.',
      'Enables users to find instructors based on location and lesson type.',
      'Incorporates secure payment gateways for smooth and safe transactions.',
      'Built with Next.js to improve search engine rankings and increase organic traffic.',
    ],
    keyResponsibilities: [
      "Designed the website's architecture to ensure scalability and maintainability.",
      'Built dynamic, server-rendered pages using Next.js and React.js, focusing on performance and user engagement.',
      'Integrated third-party APIs to enhance functionality, including location services and payment processing.',
      'Implemented best practices for performance optimization, reducing page load times and improving the user experience.',
      'Provided updates and enhancements to keep the platform secure and user-friendly.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'CSS Modules',
      'TailwindCSS',
      'RESTful APIs',
    ],
    links: [
      {
        name: 'NoYelling',
        url: 'https://noyelling.com.au/',
      },
    ],
  },
  {
    id: 8,
    title: 'INCI',
    description:
      'INCI is a platform designed to analyze cosmetic product ingredients, offering personalized feedback based on user suitability. The backend system plays a vital role in ensuring smooth operation, from handling user data to integrating APIs like ChatGPT for ingredient analysis and OCR for text extraction from images.',
    thumbImg: 'img/projects/INCI/thumb.jpg',
    innerImg: 'img/projects/INCI/cover.jpg',
    image1: 'img/projects/INCI/1.jpg',
    image2: 'img/projects/INCI/2.jpg',
    image3: 'img/projects/INCI/3.jpg',

    keyFeatures: [
      'Allows users (Beauticians and End Users) to create an account using email, phone number, or Facebook login for auto-fill.',
      'Differentiates between beauticians and end users, offering personalized features accordingly.',
      'Provides multiple login methods, such as username/password, Face ID, and fingerprint authentication, ensuring a secure and seamless login experience.',
      'Implements image capture functionality using the device camera for scanning cosmetic product ingredients.',
      'Uses Optical Character Recognition (OCR) technology to extract text from ingredient lists on images.',
      'Integrates ChatGPT API to analyze extracted ingredient lists and determine their suitability for the user.',
      'Provides insights from trusted sources like the Dr. Baumann Ingredients website.',
    ],
    keyResponsibilities: [
      'Integrated APIs for communication between frontend, OCR, and ChatGPT services.',
      'Implemented secure user login methods (email, phone, Facebook, Face ID, fingerprint).',
      'Managed user data storage, ensuring privacy and security compliance.',
      'Integrated OCR technology to extract ingredient lists from images.',
      'Connected ChatGPT API for ingredient analysis and personalized feedback.',
      'Differentiated user experiences for beauticians and end users with tailored features.',
      'Provided insights from trusted sources like Dr. Baumann Ingredients to support ingredient analysis.',
      'Generated personalized product recommendations based on user profiles and ingredient data.',
      'Optimized real-time processing for efficient feedback generation.',
      'Managed backend database for secure storage of user and ingredient data.',
    ],
    technologies: ['Express.js', 'Node.js', 'Firebase', 'RESTful APIs'],
    links: [],
  },
  {
    id: 9,
    title: 'Xendit',
    description:
      'Xendit is a comprehensive payment infrastructure platform that simplifies payment processes for businesses working with multiple partners. It provides a seamless solution to manage transactions, integrate payment gateways, and enhance operational efficiency.',
    thumbImg: 'img/projects/xendit/thumb.jpg',
    innerImg: 'img/projects/xendit/cover.jpg',
    image1: 'img/projects/xendit/1.jpg',
    image2: 'img/projects/xendit/2.jpg',
    image3: 'img/projects/xendit/3.jpg',

    keyFeatures: [
      'Seamlessly integrates multiple payment gateways for versatile transaction handling.',
      'Offers tailored features based on customer-specific requirements and business use cases.',
      'Ensures scalability and high performance with modular service design.',
      'Provides detailed transaction insights and performance metrics for better decision-making.',
      'Implements robust security measures, including encryption and fraud detection, to protect user data.',
      'Supports payments in various currencies for global business operations.',
      'Enables easy integration with existing systems through well-documented APIs.',
    ],
    keyResponsibilities: [
      'Designed and maintained a scalable microservices architecture for the payment platform.',
      'Collaborated with cross-functional teams to implement new features based on customer feedback and requirements.',
      'Led initiatives addressing customer-specific use cases, ensuring effective implementation and delivery.',
      'Regularly maintained and optimized existing microservices to enhance reliability and performance.',
      'Worked closely with product managers and architects to align development efforts with business objectives.',
      'Contributed to the implementation of organization-wide technical standards and resolved technical debt.',
    ],
    technologies: [
      'Express.js',
      'Node.js',
      'React.js',
      'PostgreSQL',
      'RESTful APIs',
    ],
    links: [
      {
        name: 'Xendit',
        url: 'https://www.xendit.co/en/',
      },
    ],
  },
];

export const FEEDBACKS = [
  {
    id: 1,
    name: 'Bianca Brown',
    job: '',
    feedback:
      '“Ali is a dedicated, skilled and valuable Software Engineer, working with us since August 2019 on the development of our software systems and applications of Instant Consult while adhering to process, design, technical standards, and coding standards.”',
  },
  {
    id: 2,
    name: 'Neha Parikh',
    job: '',
    feedback:
      '“Ali, is a great asset to our company projects. He delivers on time and has a deep understanding of the work and is able to give input which enhances the project. We enjoy having him on our team and hope to work with him again.”',
  },
  {
    id: 3,
    name: 'Marc Abrams',
    job: '',
    feedback:
      '“Ali is a great developer and had a lot of knowledge. I would recommend him for all website needs.”',
  },
  {
    id: 4,
    name: 'Maria Torres',
    job: '',
    feedback:
      '“I feel extremely comfortable working with Ali, we were talking about problems or improvements to the website and how to improve it, Ali was able to analyze and propose concrete actions to improve performance. Reliable and professional. thanks”',
  },
];
