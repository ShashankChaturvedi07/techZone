import { useState } from 'react';
import { Laptop, Smartphone, Tablet, Headphones, Headset, LayoutGrid } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categoryIcons: Record<string, any> = {
  all: LayoutGrid,
  laptops: Laptop,
  phones: Smartphone,
  tablets: Tablet,
  headphones: Headphones,
  earbuds: Headset,
};

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'laptops', name: 'Laptops' },
  { id: 'phones', name: 'Phones' },
  { id: 'tablets', name: 'Tablets' },
  { id: 'headphones', name: 'Headphones' },
  { id: 'earbuds', name: 'Earbuds' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-blue-100">
            Explore our wide range of premium tech products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => {
              const Icon = categoryIcons[category.id];
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredProducts.length}</span> products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
