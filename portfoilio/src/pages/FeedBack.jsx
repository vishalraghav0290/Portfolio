import React, { useState } from "react";
import { Send, Star, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    message: '',
    subscribe: false
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Design & UI',
    'Performance',
    'Content',
    'Navigation',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (errors.rating) {
      setErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Feedback message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          rating: 0,
          category: '',
          message: '',
          subscribe: false
        });
      }, 3000);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md text-center transform animate-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Thank You!</h2>
          <p className="text-gray-600 text-lg">
            Your feedback has been submitted successfully. We appreciate your time!
          </p>
        </div>
        <a
        href="/"
        className="mt-6 flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
      >
        Back to Home
      </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Your Feedback improve us !
          </h1>
          <p className="text-gray-600 text-lg">
            Help us improve by sharing your thoughts about our site
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 space-y-6">
          {/* Name Input */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4" />
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="XXXXX XXX"
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                errors.name 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 animate-in">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                errors.email 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 animate-in">{errors.email}</p>
            )}
          </div>

          {/* Rating */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Star className="w-4 h-4" />
              Rate Your Experience
            </label>
            <div className="flex gap-2 justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transform transition-all duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1"
                >
                  <Star
                    className={`w-8 h-8 md:w-10 md:h-10 transition-all duration-200 ${
                      star <= (hoveredRating || formData.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {errors.rating && (
              <p className="text-red-500 text-sm mt-2 animate-in">{errors.rating}</p>
            )}
          </div>

          {/* Category */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4" />
              Feedback Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer ${
                errors.category 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
              }`}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1 animate-in">{errors.category}</p>
            )}
          </div>

          {/* Message */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4" />
              Your Feedback
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your thoughts, suggestions, or concerns..."
              rows="5"
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none ${
                errors.message 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-200 focus:border-blue-400 hover:border-gray-300'
              }`}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message ? (
                <p className="text-red-500 text-sm animate-in">{errors.message}</p>
              ) : (
                <p className="text-gray-400 text-sm">
                  {formData.message.length} characters
                </p>
              )}
            </div>
          </div>

          {/* Subscribe Checkbox */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 border border-blue-100 transition-all duration-200 hover:bg-blue-50">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="subscribe" className="text-sm text-gray-700 cursor-pointer">
              <span className="font-semibold">Subscribe to updates</span>
              <br />
              <span className="text-gray-600">
                Get notified about new features and improvements
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Feedback
              </>
            )}
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Your feedback is confidential and helps us serve you better
        </p>
      </div>
    </div>
  );
};

export default FeedBack;
