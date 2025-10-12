import React, { useEffect, useRef, useState } from 'react';
import forward from "../assets/forward.png";
import backward from "../assets/backward.png";
import benchmark from "../assets/benchmarkhome.png";
import studyNotion from "../assets/studyNotion.png";
import hostelmate from "../assets/hostelmate.png";
import ehealth from "../assets/ehealth.png";
import githubicon from "../assets/githubicon.png"
import viewarrow from "../assets/viewarrow.png"
const Projects = () => {
    const scrollContainerRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const totalSections = 5;

    // Scroll function with circular navigation
    const scrollToSection = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const sectionWidth = container.scrollWidth / totalSections;

            let newSection = currentSection;

            if (direction === 'forward') {
                // If at last section, go to first section (circular)
                newSection = currentSection === totalSections - 1 ? 0 : currentSection + 1;
            } else if (direction === 'backward') {
                // If at first section, go to last section (circular)
                newSection = currentSection === 0 ? totalSections - 1 : currentSection - 1;
            }

            // Scroll to the target section
            container.scrollTo({
                left: newSection * sectionWidth,
                behavior: 'smooth'
            });

            setCurrentSection(newSection);
        }
    };

    // Keyboard event handler
    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key.toLowerCase();

            if (key === 'b') {
                event.preventDefault();
                scrollToSection('backward');
            } else if (key === 'f') {
                event.preventDefault();
                scrollToSection('forward');
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyPress);

        // Cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentSection]);

    // Button click handlers
    const handleBackwardClick = () => {
        scrollToSection('backward');
    };

    const handleForwardClick = () => {
        scrollToSection('forward');
    };

    // Project data
    const projects = [
        {
            title: "StudyNotion",
            description: "A comprehensive EdTech platform for online learning with interactive features and modern design",
            tech: [
                "Frontend: React.js with Context API for state management and Tailwind CSS for responsive UI design",
                "Backend: Node.js with Express.js RESTful API architecture",
                "Database: MongoDB with Mongoose ODM for data modeling and relationships",
                "Authentication: JWT-based authentication with bcrypt password hashing",
                "Payment Integration: Razorpay payment gateway for course purchases",
                "Media Management: Cloudinary for video and image storage and optimization",
                "Email Services: NodeMailer for course enrollment and password reset notifications",
                "Security: Input validation, CORS, and secure headers implementation"
            ],
            keyFeatures: [
                "Interactive course catalog",
                "Video streaming capabilities",
                "User authentication & profiles",
                "Responsive design",
                "Modern animations"
            ],
            image: studyNotion,
            github: "https://github.com/AMIT-USARA/Study-Notion",
            live: "https://studynotion-usara-amit.vercel.app/"
        },
        {
            title: "Benchmark - Smart QR-Based Attendance Management System",
            description: "A comprehensive full-stack web application designed to modernize attendance tracking in educational institutions through QR code technology. This system provides role-based access for administrators, instructors, and students, streamlining the entire attendance management process.",
            tech: [
                "Frontend: React.js with Redux Toolkit for state management, Tailwind CSS for modern UI/UX, and Framer Motion for animations",
                "Backend: Node.js with Express.js RESTful API architecture",
                "Database: MongoDB with Mongoose ODM for data modeling",
                "Authentication: JWT-based secure authentication with role-based access control",
                "Real-time Features: QR code generation and validation with automatic expiry",
                "Email Services: SendGrid integration for automated notifications and password recovery",
                "File Management: Cloudinary integration for profile image uploads",
                "Security: Helmet.js, CORS, input validation, and express-rate-limit for enhanced security"
            ],
            keyFeatures: [
                "QR Code-Based Attendance: Real-time QR code generation with 2-minute expiry for secure attendance marking",
                "Multi-Role Dashboard: Separate interfaces for Admin, Instructor, and Student roles with tailored functionalities",
                "Real-Time Monitoring: Live attendance tracking with instant updates and visual feedback",
                "Advanced Analytics: Comprehensive attendance summaries, reports, and statistical insights",
                "PDF Export: Generate and download detailed attendance reports",
                "Student Management: Complete CRUD operations for student enrollment and subject assignments",
                "Subject Administration: Full subject lifecycle management with instructor assignments",
                "Security Features: JWT authentication, email verification, password reset, and rate limiting"
            ],
            image: benchmark,
            github: "https://github.com/AMIT-USARA/Benchmark-official",
            live: "https://iiitbh-benchmark.vercel.app/"
        },
        {
            title: "HostelMate — Smart Hostel Management System",
            description: "A full-stack web app that automates resident onboarding, room management, maintenance ticketing with image uploads, and warden escalations — delivering faster responses and simpler hostel administration.",
            tech: [
                "Frontend: React.js with Redux Toolkit for state management, React Router for protected/role routes, Vite for fast builds, PWA service-worker support, Tailwind CSS for modern UI (optional) and Framer Motion for animations.",
                "Backend: Node.js with Express.js using a RESTful API architecture, centralized error handling, and middleware for auth, validation, and rate limiting.",
                " Database: MongoDB with Mongoose ODM for schema modeling and relations (users, hostels, rooms, tickets).",
                " Authentication: JWT-based secure authentication with access & refresh tokens and role-based access control (Admin / Warden / Resident).",
                " Real-time & Live Features: Web Push notifications with service-worker support.",
            ],
            keyFeatures: [
                "Resident sign-up / login and profile management",
                "Role-based dashboards (Admin, Warden, Resident)",
                "Maintenance ticketing with image attachments, comments, and status tracking",
                "Push notifications and service-worker (PWA) support for background alerts",
                "Scheduled escalation (cron) to notify wardens about unresolved tickets",
                "Cloud-hosted image uploads with CDN delivery (Cloudinary)",
                "RESTful API, database migrations, and role-based access control",
            ],
            image: hostelmate,
            github: "https://github.com/AMIT-USARA/HOSTEL-MATE",
            live: "https://hostelmate-usaraamit.vercel.app/"
        },
        {
            title: "Amit Usara : My Portfolio Website",
            description: "Personal portfolio showcasing projects, skills, and professional experience with modern design",
            tech: [
                "Frontend: React.js with Vite for fast development and build optimization",
                "Styling: Tailwind CSS with custom components and responsive design patterns",
                "Animations: Framer Motion for page transitions and interactive elements",
                "UI Components: Custom-built reusable components with modern design principles",
                "Contact Form: EmailJS integration for direct email communication",
                "Deployment: Vercel with automatic CI/CD pipeline and performance optimization",
                "Performance: Code splitting, lazy loading, and image optimization",
                "SEO: Meta tags optimization and semantic HTML structure"
            ],
            keyFeatures: [
                "Interactive project showcase",
                "Skills visualization",
                "Contact form integration",
                "Responsive design",
                "Smooth animations",
                "Dark theme"
            ],
            image: benchmark,
            github: "https://github.com/amitusara/e-learning",
            live: "https://portfolio.com"
        },
        {
            title: "eHealth",
            description: "Kerala migrant workers health management system with AI-powered features",
            tech: [
                "Frontend: React.js with Material-UI for healthcare-focused user interface design",
                "Backend: Node.js with Express.js and microservices architecture",
                "Database: MongoDB with data encryption for sensitive health information",
                "AI/ML: TensorFlow.js for health risk prediction and analytics",
                "Authentication: Multi-factor authentication with biometric integration",
                "Real-time: Socket.io for live health monitoring and emergency alerts",
                "Localization: i18next for multi-language support (Malayalam, Hindi, English)",
                "Security: HIPAA-compliant data handling with end-to-end encryption"
            ],
            keyFeatures: [
                "Health record management",
                "AI-powered health analytics",
                "Appointment scheduling",
                "Medical history tracking",
                "Emergency contact system",
                "Multi-language support"
            ],
            image: ehealth,
            github: "https://github.com/AMIT-USARA/Usaannew",
            live: "https://weather-dashboard-demo.com"
        }
    ];

    return (
        <div className="w-11/12 h-screen text-white flex flex-col justify-center items-center">
            <div className="w-11/12 h-[95px] flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold">Projects</h2>

                </div>
            </div>

            <div className="h-[calc(100%-95px)] w-[95%] flex items-center justify-evenly gap-10">
                <button
                    onClick={handleBackwardClick}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-200 text-xl font-bold"
                >
                    <img src={backward} alt="B" width={30} />
                </button>

                <div
                    ref={scrollContainerRef}
                    className="h-full w-full overflow-x-hidden border-gray-400 border-t-[2.5px] flex rounded-2xl scroll-auto pb-10"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${index === 0 ? 'bg-gray-900 border-l-[2.5px]' :
                                index === 1 ? 'bg-gray-800' :
                                    index === 2 ? 'bg-gray-700' :
                                        index === 3 ? 'bg-gray-600' :
                                            'bg-gray-500'
                                } min-w-full h-full text-white flex justify-center rounded-2xl items-center border-gray-400 ${index < projects.length - 1 ? 'border-r-[2.5px]' : ''
                                } relative group overflow-hidden`}
                        >
                            {/* Project Image */}
                            <div className="w-full h-full flex justify-center items-center group-hover:opacity-30 transition-opacity duration-300">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="min-w-full min-h-full object-fill"
                                />
                            </div>

                            {/* Project Info Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 ">

                                <div className='w-7/12'>
                                    <h3 className="text-3xl font-bold mb-2 text-center">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 text-center text-sm">{project.description}</p>
                                    <div className='flex gap-10'>
                                        {/* Technical Implementation */}
                                        <div className="mb-4 max-w-md">
                                            <h4 className="text-lg font-semibold mb-2 text-center text-green-300">Technical Implementation:</h4>
                                            <ul className="text-gray-300 text-sm font-bold space-y-1">
                                                {project.tech.map((tech, techIndex) => (
                                                    <li key={techIndex} className="flex">
                                                        <span className="text-green-400 mr-2">•</span>
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Key Features */}
                                        <div className="mb-4 max-w-md">
                                            <h4 className="text-lg font-semibold mb-2 text-center text-blue-300">Key Features:</h4>
                                            <ul className="text-gray-300 text-sm font-bold space-y-1">
                                                {project.keyFeatures.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex">
                                                        <span className="text-blue-400 mr-2">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='absolute bottom-[10%] left-[28.3%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'>
                                <button
                                    onClick={() => window.open(project.github, '_blank')}
                                    className='px-6 py-3 text-black hover:text-white font-bold bg-white hover:bg-gray-700/90 border-gray-500 border-[2px] rounded-xl backdrop-blur-sm transition-all duration-200 shadow-lg flex justify-evenly items-center gap-3'
                                ><img src={githubicon} alt="git" width={30}/>
                                    GitHub
                                </button>
                            </div>

                            <div className='absolute bottom-[10%] left-[33.3%] transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110'>
                               <button
                                    onClick={() => window.open(project.live, '_blank')}
                                    className='px-6 py-3 text-black hover:text-white font-bold bg-white hover:bg-gray-700/90 border-gray-500 border-[2px] rounded-xl backdrop-blur-sm transition-all duration-200 shadow-lg flex justify-evenly items-center gap-3'
                                ><img src={viewarrow} alt="git" width={30}/>
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleForwardClick}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors duration-200 text-xl font-bold"
                >
                    <img src={forward} alt="F" width={30} />
                </button>
            </div>
        </div>
    );
};

export default Projects;
