import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { FaViber } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <>
    <div className='app__footer app__flex'>
      <div className='footer__wrapper'>
        <div className='footer__about'>
          <span>About us</span>
          <p>We provide premium class activities and our experience more than 20 years</p>
          <Logo/>
        </div>
        
        <div className='footer__contact'>
          <span>contact info</span>
          <ul>
            <li>
              <a className='footer__link'>
                <BiMap className='footer__icon'/>
                Rotermani, Tallinn, Estonia
              </a>
            </li>
            <li>
              <a href='tel: +3725555555' className='footer__link'>
                <FiPhoneCall className='footer__icon phone'/>
                +372 555 55 55
              </a>
            </li>
            <li>
              <a href='mailto:eventeamly@gmail.com.com' className='footer__link'>
                <AiOutlineMail  className='footer__icon email'/>
                eventTeamly@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__social'>
          <a href='#' className='social__fb app__flex'>
            <CgFacebook className='fb__icon'/>
          </a>
          <a href='#' className='social__vb app__flex'>
            <FaViber className='vb__icon'/>
          </a>
          <a href='#' className='social__wa app__flex'>
            <AiOutlineWhatsApp className='wa__icon'/>
          </a>
        </div>
      </div>        
    </div>
    <div className='copyright app__flex'>
      <div className='copyright__wrapper'>
        <p>© All rights reserved by evenTeamly</p>
      </div>
    </div>
    </>
  )
};