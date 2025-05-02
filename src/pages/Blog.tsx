
import { useState } from 'react';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: 'technology' | 'sustainability' | 'industry' | 'research';
  readTime: string;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Desalination Technology",
      excerpt: "Exploring emerging innovations in water treatment that are making desalination more efficient and accessible globally.",
      image: "https://images.unsplash.com/photo-1581093196277-9f608bc7d3c6?auto=format&fit=crop&q=80&w=800",
      author: "Dr. Sarah Chen",
      date: "October 15, 2023",
      category: 'technology',
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "Sustainable Water Management Practices",
      excerpt: "How integrated water management approaches are creating more resilient water systems in water-stressed regions.",
      image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&q=80&w=800",
      author: "Michael Rodriguez",
      date: "September 28, 2023",
      category: 'sustainability',
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Water Infrastructure and Climate Adaptation",
      excerpt: "Examining how water treatment facilities are adapting to changing climate conditions and extreme weather events.",
      image: "https://images.unsplash.com/photo-1548275175-7a6b8e5c1c1c?auto=format&fit=crop&q=80&w=800",
      author: "Emma Johnson",
      date: "September 12, 2023",
      category: 'industry',
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Advances in Membrane Technology",
      excerpt: "Recent breakthroughs in membrane materials that are revolutionizing filtration efficiency in desalination plants.",
      image: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?auto=format&fit=crop&q=80&w=800",
      author: "Dr. James Wilson",
      date: "August 24, 2023",
      category: 'research',
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Water Economics: The True Cost of Clean Water",
      excerpt: "Analyzing the economic factors and investment trends shaping the global water treatment industry.",
      image: "https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?auto=format&fit=crop&q=80&w=800",
      author: "Amanda Patel",
      date: "August 10, 2023",
      category: 'industry',
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Energy-Efficient Water Treatment",
      excerpt: "How renewable energy integration is reducing the carbon footprint of desalination and water processing.",
      image: "https://images.unsplash.com/photo-1581093057390-68789d5ae685?auto=format&fit=crop&q=80&w=800",
      author: "Thomas Lee",
      date: "July 22, 2023",
      category: 'sustainability',
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "Smart Water Infrastructure",
      excerpt: "Leveraging IoT and AI technologies to create intelligent water management systems for urban environments.",
      image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=800",
      author: "Dr. Lisa Sanchez",
      date: "July 15, 2023",
      category: 'technology',
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "Breakthrough in Forward Osmosis Systems",
      excerpt: "New research findings on forward osmosis that could dramatically decrease energy requirements for water purification.",
      image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&q=80&w=800",
      author: "Prof. David Kim",
      date: "June 30, 2023",
      category: 'research',
      readTime: "9 min read",
    },
  ];
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="min-h-[50vh] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.8)), url('https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80')" 
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Blog & Insights
            </h1>
            <p className="text-xl mb-8 text-bluelitty-white opacity-90">
              Stay updated with the latest developments in water technology, industry trends, and sustainability practices.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-bluelitty-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Posts
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'technology' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('technology')}
            >
              Technology
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'sustainability' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('sustainability')}
            >
              Sustainability
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'industry' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('industry')}
            >
              Industry
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCategory === 'research' 
                  ? 'bg-bluelitty-blue text-white' 
                  : 'bg-white text-bluelitty-navy hover:bg-bluelitty-light'
              }`}
              onClick={() => setActiveCategory('research')}
            >
              Research
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-bluelitty-gray">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-bluelitty-gray">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <span className="text-sm text-bluelitty-gray">{post.readTime}</span>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-bluelitty-blue hover:underline"
                  >
                    Read More
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-bluelitty-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-bluelitty-navy">Subscribe to Our Newsletter</h2>
            <p className="text-bluelitty-gray mb-8">
              Stay informed about the latest advancements in water technology and industry insights. Join our community today.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-bluelitty-blue"
                required
              />
              <button
                type="submit"
                className="bg-bluelitty-blue hover:bg-bluelitty-navy text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
