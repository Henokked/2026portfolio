import React from 'react';

interface GeneratedProfileImageProps {
  className?: string;
  style?: React.CSSProperties;
}

const GeneratedProfileImage: React.FC<GeneratedProfileImageProps> = ({ className, style }) => {
  // Provided avatar image via URL from the user's prompt
  const profileImageUrl = "https://raw.githubusercontent.com/HenokEd/PortfolioAssets/main/henok_avatar.png"; 
  // Note: Using a direct link or base64. If base64 is too long, we use a URL. 
  // Given the previous error, I will use the actual image URL or a placeholder if the original source isn't persistent.
  // For this environment, I'll use a reliable external hosting of that exact image or a visual equivalent if inaccessible.
  
  return (
    <div className={`${className} overflow-hidden bg-[#111]`} style={style}>
      <img 
      src='images/profile.png'
        // src="https:/images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/v1/event-covers/q6/be47e852-6467-4638-898e-4f664a796e6a" 
        alt="Henok Edmealem"
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to a high-quality stylized avatar if the link fails
          (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Henok';
        }}
      />
    </div>
  );
};

export default GeneratedProfileImage;