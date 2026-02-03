import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
    return (
    <section id="about"  className=" py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building reliable software<br /><span className="font-serif italic font-normal text-white"> with strong engineeering foundations.</span>
                    </h2>
                    {/* Paragraphs */}
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a Computer Science undergraduate student with a focus 
                            on Software Engineering. You are interested in building clean, 
                            maintainable, and scalable software, with hands-on experience a
                            cross both frontend and backend development.
                        </p>

                        <p>
                            I have a solid programming foundation and work comfortably with 
                            Java, C++, JavaScript, and TypeScript. Through coursework and 
                            personal projects, you have designed and implemented full applications 
                            end to end, from requirements analysis and system design to development,
                            testing, and debugging. You have built user interfaces with React, implemented 
                            backend logic and databases, and used Git for version control and team collaboration.
                        </p>

                        <p>
                            Beyond technical work, I have experience working in team-based
                             environments and coordinating with people from non-technical backgrounds.
                        </p>

                        <p>
                            I am currently seeking software engineering-related internship 
                            or co-op opportunities, where I can contribute to real products and 
                            continue developing my technical and professional skills!
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to apply solid engineering fundamentals to build 
                            reliable, maintainable software that solves real problems. I 
                            aim to grow through hands-on projects and team-based development 
                            while delivering clear value to the products I work on.""
                        </p>
                    </div>
                </div>

                {/* Right Column - Highlight*/}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl group animate-fade-in"
                        style={{ animationDelay: `${(idx + 1)*100}ms`}}
                        >
                            {/* Hightlight icon */}
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            {/* Hightlight Titles */}
                            <h3 className=" text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            {/* Hightlight Description */}
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
    )
}