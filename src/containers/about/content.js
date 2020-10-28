import { FaGithub, FaLinkedin } from 'react-icons/fa';

const content = {
  title: 'About',
  subtitle: '',
  links: [
    {
      to: 'https://github.com/erickaallen',
      text: 'erickaallen',
      Icon: FaGithub,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/erickaallen/',
      text: 'Ericka Allen',
      Icon: FaLinkedin,
      newTab: true,
    },
  ],
};

export default content;
