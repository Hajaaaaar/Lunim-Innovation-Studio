
'use client';
import { Builder } from '@builder.io/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients'; 
import Services from './components/Services';
import OurProcess from './components/OurProcess';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Packages from './components/Packages';

import PageHeader from './components/PageHeader';
import MissionSection from './components/MissionSection';


Builder.registerComponent(Navbar, {
  name: 'Navbar',
  friendlyName: 'Main Navigation Bar',
  inputs: [
    {
      name: 'logoImage',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue: '/images/logo.png',
      friendlyName: 'Logo Image'
    },
    {
      name: 'brandName',
      type: 'text',
      defaultValue: 'Lunim',
      friendlyName: 'Brand Name'
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get Started',
      friendlyName: 'CTA Button Text'
    },
    {
      name: 'ctaLink',
      type: 'url',
      defaultValue: '/get-started',
      friendlyName: 'CTA Button Link'
    },
    {
      name: 'navLinks',
      type: 'list',
      friendlyName: 'Navigation Links',
      subFields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Home',
        },
        {
          name: 'url',
          type: 'url',
          defaultValue: '/',
        },
      ],
      defaultValue: [
        { text: 'Home', url: '/' },
        { text: 'Packages', url: '/packages' },
        { text: 'Expertise', url: '/expertise' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
      ]
    }
  ],
});

Builder.registerComponent(Hero, {
    name: 'Hero Section',
    inputs: [
        { name: 'headlinePart1', type: 'text', defaultValue: 'Light the Way' },
        { name: 'headlineHighlight', type: 'text', defaultValue: 'to Your Next Moonshot' },
        { name: 'subheadline', type: 'longText', defaultValue: 'We specialise in short burst collaborations that harness design thinking, AI integration, and Web 3.0 to power your next giant leap in digital innovation.' },
        { name: 'primaryCtaText', type: 'text', defaultValue: 'View Sprint Packages' },
        { name: 'primaryCtaLink', type: 'url', defaultValue: '/packages' },
        { name: 'secondaryCtaText', type: 'text', defaultValue: 'Our Expertise' },
        { name: 'secondaryCtaLink', type: 'url', defaultValue: '/expertise' },
    ],
});
Builder.registerComponent(MissionSection, {
  name: 'Mission Section',
  inputs: [
    { 
      name: 'headline', 
      type: 'text', 
      defaultValue: 'Our Mission' 
    },
    { 
      name: 'paragraph1', 
      type: 'longText', 
      defaultValue: 'At Lunim, our mission is to empower visionaries. We believe that groundbreaking ideas deserve brilliant digital execution. We are more than just a studio; we are partners dedicated to translating your ambition into tangible, impactful, and beautiful digital products.' 
    },
    { 
      name: 'paragraph2', 
      type: 'longText', 
      defaultValue: 'We are driven by a passion for clean design, elegant code, and the pursuit of innovation. Our process is collaborative and transparent, ensuring we not only meet but exceed expectations at every stage of the journey.' 
    },
    { 
      name: 'imageUrl', 
      type: 'file', 
      allowedFileTypes: ['png', 'jpg', 'jpeg'] 
    },
  ],
});
Builder.registerComponent(Packages, {
  name: 'Packages Section',
  inputs: [
      { name: 'title', type: 'text', defaultValue: 'Pick Your Sprint, Fuel Your Progress' },
      { name: 'subtitle', type: 'longText', defaultValue: 'Choose the right sprint tier for your project needs, from initial discovery to fully functioning proof of concept.' },
      {
          name: 'packages',
          type: 'list',
          friendlyName: 'Sprint Packages',
          subFields: [
              {
                  name: 'icon',
                  type: 'text',
                  enum: ['discovery', 'prototype', 'poc'],
                  defaultValue: 'discovery'
              },
              { name: 'title', type: 'text', defaultValue: 'Discovery Sprint' },
              { name: 'duration', type: 'text', defaultValue: '1-2 weeks' },
              { name: 'description', type: 'longText', defaultValue: 'Validate ideas and define project scope through research and strategic planning.' },
              { name: 'subtext', type: 'text', defaultValue: '3 specialised packages available' },
          ],
          defaultValue: [
              { icon: 'discovery', title: 'Discovery Sprint', duration: '1-2 weeks', description: 'Validate ideas and define project scope through research and strategic planning.', subtext: '3 specialised packages available' },
              { icon: 'prototype', title: 'Prototype Sprint', duration: '2-4 weeks', description: 'Build interactive prototypes and test the experience with target users.', subtext: '5 specialised packages available' },
              { icon: 'poc', title: 'PoC Sprint', duration: '4-8 weeks', description: 'Develop a fully functioning proof of concept tested with real users.', subtext: '2 specialised packages available' },
          ]
      },
      { name: 'ctaText', type: 'text', defaultValue: 'Explore All Packages' },
      { name: 'ctaLink', type: 'url', defaultValue: '/packages' },
  ]
});

Builder.registerComponent(Clients, {
  name: 'Client Logos',
  inputs: [
      {
          name: 'title',
          type: 'text',
          defaultValue: "Trusted by the world's most innovative companies",
      },
      {
          name: 'logos',
          type: 'list',
          subFields: [
              {
                  name: 'name',
                  type: 'text',
                  defaultValue: 'Client Name',
              },
              {
                  name: 'image',
                  type: 'file',
                  allowedFileTypes: ['png', 'svg', 'jpeg', 'jpg'],
              },
          ],
      }
  ]
});
Builder.registerComponent(Services, {
  name: 'Services Section',
  inputs: [
      {
          name: 'title',
          type: 'text',
          defaultValue: 'A new kind of creative partner',
      },
      {
          name: 'services',
          type: 'list',
          subFields: [
              {
                  name: 'icon',
                  type: 'text',
                  enum: ['design', 'development', 'strategy'],
                  defaultValue: 'design',
              },
              {
                  name: 'serviceTitle',
                  type: 'text',
                  defaultValue: 'Service Title',
              },
              {
                  name: 'description',
                  type: 'longText',
                  defaultValue: 'Service description goes here.',
              },
          ],
      }
  ],
});
Builder.registerComponent(OurProcess, {
  name: 'Our Process Section',
  inputs: [
      {
          name: 'title',
          type: 'text',
          defaultValue: 'Our Blueprint for Success',
      },
      {
          name: 'steps',
          type: 'list',
          subFields: [
              { name: 'stepNumber', type: 'text', defaultValue: '01' },
              { name: 'stepTitle', type: 'text', defaultValue: 'Step Title' },
              { name: 'description', type: 'longText', defaultValue: 'Step description...' },
          ],
      }
  ],
});
Builder.registerComponent(CTASection, {
  name: 'CTA Section',
  inputs: [
      { name: 'headline', type: 'text', defaultValue: "Let's build what's next" },
      { name: 'subtext', type: 'longText', defaultValue: "Have a project in mind, or just want to say hello? We'd love to hear from you." },
      { name: 'buttonText', type: 'text', defaultValue: 'Get in Touch' },
      { name: 'buttonLink', type: 'url', defaultValue: '/contact' },
      { name: 'email', type: 'text', defaultValue: 'hello@lunim.studio' },
      {
          name: 'socialLinks',
          type: 'list',
          subFields: [
              { 
                  name: 'platform', 
                  type: 'text', 
                  // Creates a dropdown in Builder.io
                  enum: ['X', 'LinkedIn', 'GitHub'],
                  defaultValue: 'X' 
              },
              { name: 'url', type: 'url', defaultValue: '#' },
          ]
      }
  ],
});
Builder.registerComponent(Footer, {
  name: 'Main Footer',
  
});

Builder.registerComponent(PageHeader, {
  name: 'Page Header',
  inputs: [
      { name: 'title', type: 'text', defaultValue: 'About Lunim' },
      { name: 'subtitle', type: 'text', defaultValue: 'The story behind our passion for innovation and design.' },
  ],
});

