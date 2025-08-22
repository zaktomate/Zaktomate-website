import React from 'react';

const TeamMember = ({ name, role, description }) => (
  <div className="team-member p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-primary-600 font-medium mb-2">{role}</p>
    <p className="text-gray-700">{description}</p>
  </div>
);

const TeamBehindZaktomate = () => {
  const teamMembers = [
    {
      name: 'Abid Bin Yusuf',
      role: 'CEO & Co-Founder',
      description: 'Abid leads Zaktomate with a clear vision: making AI practical and transformative for businesses of all sizes. With a background in entrepreneurship and a relentless drive for execution, he ensures that strategy aligns with action. Abid is passionate about bridging the gap between AI potential and real-world adoption, always emphasizing sustainable growth over quick wins. Focus: Strategic leadership, vision-setting, client relationships, and scaling operations.',
    },
    {
      name: 'Shahriar Hossain Fahim',
      role: 'CTO & Co-Founder',
      description: 'Fahim is the technical brain behind Zaktomate. With deep expertise in automation workflows, full-stack development, and AI implementation, he transforms ambitious ideas into reliable systems. His focus is always on building modular, scalable, and future-proof solutions that adapt as businesses evolve. Focus: Product architecture, R&D, technical delivery, and platform scalability.',
    },
    {
      name: 'Shoyeb Morshed',
      role: 'COO & Co-Founder',
      description: 'Shoyeb brings structure and operational rigor to Zaktomate. From ensuring projects run smoothly to optimizing resource allocation, he makes sure the engine of Zaktomate runs efficiently. With a sharp eye for process and execution, he ensures clients experience seamless delivery every time. Focus: Operations, project management, and delivery excellence.',
    },
    {
      name: 'Abdullah Ahsan',
      role: 'CFO & Co-Founder',
      description: 'Abdullah ensures that Zaktomate remains financially disciplined while still investing in bold innovation. He manages budgeting, investor relations, and financial forecasting to keep the company’s growth sustainable and future-proof. His pragmatic approach helps balance ambition with financial prudence. Focus: Finance, sustainability, and long-term investment strategy.',
    },
  ];

  return (
    <section className="team-section py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">The Team Behind Zaktomate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamBehindZaktomate;