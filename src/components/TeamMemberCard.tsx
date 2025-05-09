import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.imageUrl} 
          alt={member.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <p className="text-teal-700 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        
        {member.socialLinks && (
          <div className="flex space-x-3">
            {member.socialLinks.linkedin && (
              <a 
                href={member.socialLinks.linkedin}
                className="text-gray-500 hover:text-teal-700 transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {member.socialLinks.twitter && (
              <a 
                href={member.socialLinks.twitter}
                className="text-gray-500 hover:text-teal-700 transition-colors"
                aria-label={`${member.name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
            {member.socialLinks.instagram && (
              <a 
                href={member.socialLinks.instagram}
                className="text-gray-500 hover:text-teal-700 transition-colors"
                aria-label={`${member.name}'s Instagram`}
              >
                <Instagram size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;