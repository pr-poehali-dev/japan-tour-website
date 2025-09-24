import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const tours = [
    {
      id: 1,
      title: 'Классический тур по Японии',
      description: 'Токио, Киото, Осака - 10 дней незабываемых впечатлений',
      image: '/img/a560b72e-49cf-49a1-8b0e-f884dacb78b0.jpg',
      price: '180 000 ₽',
      duration: '10 дней',
      highlights: ['Гора Фудзи', 'Храмы Киото', 'Токийский Диснейленд']
    },
    {
      id: 2,
      title: 'Сакура и Традиции',
      description: 'Весенняя Япония в период цветения сакуры',
      image: '/img/ab8c5e11-b935-481c-ba82-587c92058eb8.jpg',
      price: '220 000 ₽',
      duration: '14 дней',
      highlights: ['Цветение сакуры', 'Храм Киёмидзу', 'Чайная церемония']
    },
    {
      id: 3,
      title: 'Неоновый Токио',
      description: 'Современная Япония: технологии и городская культура',
      image: '/img/a61400b6-8b76-4d52-8f9c-f58a630fcfad.jpg',
      price: '150 000 ₽',
      duration: '7 дней',
      highlights: ['Район Сибуя', 'Небоскребы Токио', 'Робот-шоу']
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🗾</div>
              <h1 className="text-2xl font-bold text-japan-gray">JAPAN TOURS</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-japan-red to-japan-red/80 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Откройте для себя
            <br />
            <span className="text-japan-light">Загадочную Японию</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Аутентичные туры с погружением в культуру, традиции и современность Страны восходящего солнца
          </p>
          <Button size="lg" className="bg-white text-japan-red hover:bg-japan-light text-lg px-8 py-3">
            <Icon name="Plane" size={20} className="mr-2" />
            Выбрать тур
          </Button>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Популярные туры
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Тщательно продуманные маршруты с лучшими гидами и уникальными впечатлениями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-japan-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tour.duration}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">{tour.title}</h4>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-sm text-foreground mb-2">Включено:</h5>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index} className="bg-japan-light text-japan-gray px-2 py-1 rounded text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-japan-red">{tour.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">за человека</span>
                    </div>
                    <Button className="bg-japan-red hover:bg-japan-red/90">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-japan-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Users', title: 'Малые группы', desc: 'До 12 человек для комфорта' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Полная страховка и поддержка' },
              { icon: 'Star', title: 'Эксперты', desc: 'Гиды с 10+ лет опыта' },
              { icon: 'Heart', title: 'Культура', desc: 'Глубокое погружение в традиции' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-japan-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-japan-red" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-japan-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🗾</div>
                <span className="text-xl font-bold">JAPAN TOURS</span>
              </div>
              <p className="text-gray-300">
                Ваш проводник в удивительный мир японской культуры и традиций
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@japantours.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Тверская, 15
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-japan-red">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-japan-red">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-japan-red">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Japan Tours. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;