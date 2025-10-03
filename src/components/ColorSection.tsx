import { useState } from 'react';
import { Button } from './UI/button';
import { Card, CardContent } from '../components/card';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

const ColorSection = () => {
  const [currentDesignerSlide, setCurrentDesignerSlide] = useState(0);

  const textures = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  ];

  const wallpapers = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80'
  ];

  const designerCollections = [
    {
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      title: 'Royale Designer Palette',
      description: 'Sabyasachi-inspired Designer colour Palette for aesthetic interiors.',
      video: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      logo: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      title: 'Lux Indica',
      description: 'Luxurious colour Shades inspired by Indian Heritage for home exteriors.',
      video: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      logo: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
      title: 'Shvet',
      description: 'Indian whites and ivories colour palette especially curated for home interiors.',
      video: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const interiorServices = [
    {
      title: 'Home Interiors',
      description: 'Get home décor advice and interior design solutions.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      cta: 'Explore now'
    },
    {
      title: 'Modular Kitchen',
      description: 'Shape your dream kitchen with our diverse collection.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      cta: 'Explore now'
    },
    {
      title: 'Painting Services',
      description: 'Get expert painting with on-time completion guaranteed.',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      cta: 'Explore now'
    }
  ];

  const nextDesignerSlide = () => {
    setCurrentDesignerSlide((prev) => (prev + 1) % designerCollections.length);
  };

  const prevDesignerSlide = () => {
    setCurrentDesignerSlide((prev) => (prev - 1 + designerCollections.length) % designerCollections.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Explore Beyond Colours */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Explore beyond colours
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Textures */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Textures</h3>
                <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                  View all
                </Button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {textures.map((texture, index) => (
                  <div key={index} className="aspect-square">
                    <img
                      src={texture}
                      alt={`Texture ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Wallpapers */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Wallpapers</h3>
                <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
                  View all
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {wallpapers.map((wallpaper, index) => (
                  <div key={index} className="aspect-square">
                    <img
                      src={wallpaper}
                      alt={`Wallpaper ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Designer Collections */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Designer collections
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentDesignerSlide * 100}%)` }}
              >
                {designerCollections.map((collection, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-2">
                      <CardContent className="p-0">
                        <div className="relative h-80">
                          <img
                            src={collection.video}
                            alt={collection.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40" />
                          <div className="absolute top-4 left-4">
                            <img
                              src={collection.logo}
                              alt="Logo"
                              className="w-12 h-12 rounded-full"
                            />
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                            <p className="text-sm mb-4">{collection.description}</p>
                            <Button className="bg-white text-black hover:bg-gray-100">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevDesignerSlide}
              disabled={currentDesignerSlide === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextDesignerSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* One-stop shop for all things interiors */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              One-stop shop for all things interiors
            </h2>
            <p className="text-lg text-gray-600">
              We provide complete painting service, interior design, renovation, and modular solutions for your home, including furniture and decor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interiorServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      {service.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSection;