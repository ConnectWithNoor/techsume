import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
}

export default SocialMedia;
