import { useState } from 'react';
import { Button } from '../components/UI/button';
import { Input } from '../components/UI/input';
import { Separator } from '../components/UI/seperator';
import { ChevronDown, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/UI/collapsible';
import wallchi from "../assets/Walchi.png";

const Footer = () => {
  const [emailSubscription, setEmailSubscription] = useState('');
  const [storeLocator, setStoreLocator] = useState('');
  const [openSections, setOpenSections] = useState({
    about: false,
    policies: false,
    content: false,
    calculators: false
  });

  const divisions = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  ];

  const aboutLinks = [
    'Wallchi', 'Investors', 'Research & Technology', 'Careers',
    'Supplier registration', 'News & Media', 'Awards & Recognition',
    'Sustainability', 'Contact us'
  ];

  const policyLinks = [
    'Warranty', 'Quality Policy', 'Customer Policy', 'Environmental Policy',
    'Terms & Conditions', 'Cookie Policy', 'Position Statement'
  ];

  const contentLinks = [
    'Blogs', 'Videos', "FAQ's", "Online shopping FAQ's"
  ];

  const calculatorLinks = [
    'Paint cost', 'Waterproofing cost', 'Interior design & decor cost'
  ];

  // const colorTools = [
  //   'Home colour guide', 'Mera wala shade', 'Get inspiration', 'Wall paint finder',
  //   'Wood paint finder', 'Wall visualiser', 'Shade tool', 'Vastu colours',
  //   'Colour with wallchis App'
  // ];

  // const popularTags = [
  //   'Interior wall paints', 'Interior Textures', 'Exterior wall paints',
  //   'Exterior Textures', 'Wood paint', 'Waterproofing solutions'
  // ];

  const faqs = [
    {
      question: 'Where can I find the nearest Wallchi store?',
      answer: 'You can use our store locator tool on the website to find the nearest Wallchi store. Simply enter your location to get a list of nearby stores.'
    },
    {
      question: 'How can I contact Wallchi customer service?',
      answer: 'You can contact us through our customer service number 1800-209-5678 or email us at customercare@wallchis.com'
    },
    {
      question: 'How do I choose the right colour for my home?',
      answer: 'Use our color tools and visualizer to see how different colors look in your space. Our experts can also provide personalized color consultation.'
    },
    {
      question: 'Can I get help with colour selection from Wallchi?',
      answer: 'Yes, we offer professional color consultation services to help you choose the perfect colors for your home.'
    },
    {
      question: 'What are the latest colour trends?',
      answer: 'Check out our color of the year section and designer collections for the latest trending colors and palettes.'
    }
  ];

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email subscription:', emailSubscription);
    setEmailSubscription('');
  };

  const handleStoreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Store locator:', storeLocator);
    setStoreLocator('');
  };

  return (
    <footer className="bg-gray-900 text-white border-1 rounded-lg">
      {/* FAQ Section */}
      <div className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ's</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-white">
            {faqs.map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg">
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-gray-50 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
            <div className="text-center mt-8">
              <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                View all
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Our Divisions */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Our Divisions</h3>
            <div className="flex justify-center items-center space-x-6 flex-wrap">
              {divisions.map((division, index) => (
                <img
                  key={index}
                  src={division}
                  alt={`Division ${index + 1}`}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>

          <Separator className="bg-gray-700 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <Collapsible open={openSections.about} onOpenChange={() => toggleSection('about')}>
                <CollapsibleTrigger className="flex justify-between items-center w-full mb-4">
                  <h4 className="text-lg font-semibold">About</h4>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.about ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2">
                    {aboutLinks.map((link, index) => (
                      <li key={index}>
                        <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto justify-start">
                          {link}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Policies Section */}
            <div>
              <Collapsible open={openSections.policies} onOpenChange={() => toggleSection('policies')}>
                <CollapsibleTrigger className="flex justify-between items-center w-full mb-4">
                  <h4 className="text-lg font-semibold">Policies</h4>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.policies ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2">
                    {policyLinks.map((link, index) => (
                      <li key={index}>
                        <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto justify-start">
                          {link}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Content Section */}
            <div>
              <Collapsible open={openSections.content} onOpenChange={() => toggleSection('content')}>
                <CollapsibleTrigger className="flex justify-between items-center w-full mb-4">
                  <h4 className="text-lg font-semibold">Content</h4>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.content ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2">
                    {contentLinks.map((link, index) => (
                      <li key={index}>
                        <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto justify-start">
                          {link}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Calculators Section */}
            <div>
              <Collapsible open={openSections.calculators} onOpenChange={() => toggleSection('calculators')}>
                <CollapsibleTrigger className="flex justify-between items-center w-full mb-4">
                  <h4 className="text-lg font-semibold">Calculators</h4>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openSections.calculators ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2">
                    {calculatorLinks.map((link, index) => (
                      <li key={index}>
                        <Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto justify-start">
                          {link}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <Separator className="bg-gray-700 my-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Country */}
            <div>
              <img
                src={wallchi}
                alt="Wallchi"
                className="h-22 w-30  mb-4"
              />
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">India</span>
              </div>
            </div>

            {/* Store Locator */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Check Service Availability</h4>
              <form onSubmit={handleStoreSubmit} className="space-y-2">
                <Input
                  placeholder="Enter pincode"
                  value={storeLocator}
                  onChange={(e) => setStoreLocator(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 w-full">
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>1800-209-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-sm">customercare@wallchis.com</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Latest Pricing </h4>
              <form onSubmit={handleEmailSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter email id"
                  value={emailSubscription}
                  onChange={(e) => setEmailSubscription(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>

          <Separator className="bg-gray-700 my-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* App Download */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Download our visualiser app</h4>
              <div className="flex space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
  <p className="text-gray-400 text-sm text-center mt-5">©Wallchi - All rights reserved</p>
         
        
            

          

       

       

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;