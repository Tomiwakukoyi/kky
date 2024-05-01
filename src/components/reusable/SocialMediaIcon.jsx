const SocialMediaIcon = ({ Icon, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="p-2 flex  items-center justify-center border-2 border-white rounded-full">
          <Icon style={{ fontSize: 20, color: 'white' }} />
        </div>
      </a>
    );
  };
  
  export default SocialMediaIcon;
  