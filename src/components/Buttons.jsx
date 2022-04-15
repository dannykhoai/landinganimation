import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './../App/AppContext';
import { GitHub, LinkedIn, Resume, Email, Telegram, Wechat, Whatsapp } from './../icons';

const Container = styled.div`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 6rem;
    width: 6rem;
    margin: 0 1.75rem;
  }

  .button {
    transition: color 0.5s linear;
    height: 6rem;
    width: 6rem;
    color: ${({ theme }) => theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    height: 4rem;
    width: 4rem;
    padding: 1rem;
  }

  .icon_title {
    font-size: 1.25rem;
  }

  .button:hover {
    background-color: ${({ theme }) => theme.shadowColor};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
    }
  }
`;

export const Buttons = () => {
  const { theme } = useContext(AppContext);

  const DATA = [
    {
      href: 'https://www.linkedin.com/in/dungvu999/',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      label: 'Connect on LinkedIn',
    },
    {
      href: 'https://maybevu.com/',
      aria: 'Visit my portfolio page',
      icon: <Resume />,
      label: 'Hobby projects',
    },
    {
      href: 'mailto:dvu2758@gmail.com',
      aria: 'Email me',
      icon: <Email />,
      label: 'Email me',
    },
    {
      href: 'https://github.com/dannykhoai',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      label: 'GitHub',
    },
   
    {
      href: 'https://wa.me/358414775507',
      aria: 'Send me an Whatsapp message',
      icon: <Whatsapp />,
      label: 'Whatsapp',
    },
    {
      href: 'https://t.me/dannkv291',
      aria: 'Send me an telegram message',
      icon: <Telegram />,
      label: 'Telegram',
    },
    {
      href: 'https://firebasestorage.googleapis.com/v0/b/fotogrid-f721f.appspot.com/o/4FD04F46-D2C2-4BCC-982B-335833509C9F.jpeg?alt=media&token=ee36e8e2-ed62-4f0b-976c-90bfb0657ac3',
      aria: 'Add me on wechat',
      icon: <Wechat />,
      label: 'Wechat',
    },
    
  ];

  return (
    <Container theme={theme}>
      {DATA.map(({ href, aria, icon, label }, i) => (
        <span className='button-container' key={i}>
          <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
            <div className='icon'>{icon}</div>
            <span className='icon_title' data-v2={label}>{label}</span>
          </a>
        </span>
      ))}
    </Container>
  );
};
