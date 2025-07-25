import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import img1 from "../assets/Olukiran_Praise.jpg";
import img2 from "../assets/Adedotun.jpg";
import img3 from "../assets/Ptech.jpg";
import img4 from "../assets/Ebong.jpg";
import img5 from "../assets/Emmanuel.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Olukiran Praise Oluwadabira",
      role: "Frontend Engineer & Team Lead",
      image: img1,
    },
    {
      name: "Majeogbe Paul",
      role: "Cybersecurity Specialist",
      image: img3,
    },
    {
      name: "Adeoba Adedotun Taiwo",
      role: "Frontend Engineer",
      image: img2,
    },
    {
      name: "Ebong Mfonisoabasi Ephraim",
      role: "Web Developer",
      image: img4,
    },
    {
      name: "Agboola Emmanuel Mayowa",
      role: "Product Designer",
      image: img5,
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of seasoned professionals with decades of experience in
            enterprise security and cloud architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>

                <p className="text-accent font-medium mb-3">{member.role}</p>

                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
