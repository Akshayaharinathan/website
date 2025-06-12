import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(undefined);

const defaultProducts = [
  {
    id: '1',
    name: 'Microplastic Granules',
    description: 'High-quality plastic granules for manufacturing',
    price: '₹50/kg',
    image: 'https://images.pexels.com/photos/3735780/pexels-photo-3735780.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Raw Materials'
  },
  {
    id: '2',  
    name: 'Recycled Plastic Pellets',
    description: 'Eco-friendly recycled plastic pellets',
    price: '₹45/kg',
    image: 'https://images.pexels.com/photos/9324373/pexels-photo-9324373.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Recycled'
  },
  {
    id: '3',
    name: 'Colored Plastic Chips',
    description: 'Vibrant colored plastic chips for various applications',
    price: '₹60/kg',
    image: 'https://images.pexels.com/photos/9324374/pexels-photo-9324374.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Specialty'
  },
  {
    id: '4',
    name: 'Biodegradable Pellets',
    description: 'Environmentally friendly biodegradable plastic pellets',
    price: '₹80/kg',
    image: 'https://images.pexels.com/photos/7656745/pexels-photo-7656745.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Eco-Friendly'
  }
];

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [contactSubmissions, setContactSubmissions] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    const savedSubmissions = localStorage.getItem('contactSubmissions');
    
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
    
    if (savedSubmissions) {
      setContactSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now().toString() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const updateProduct = (id, updates) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, ...updates } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addContactSubmission = (submission) => {
    const newSubmission = {
      ...submission,
      id: Date.now().toString(),
      submittedAt: new Date()
    };
    const updatedSubmissions = [...contactSubmissions, newSubmission];
    setContactSubmissions(updatedSubmissions);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
  };

  const value = {
    products,
    contactSubmissions,
    addProduct,
    updateProduct,
    deleteProduct,
    addContactSubmission
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};