import React, { useState } from "react";

const Zaknote = () => {
  const [formData, setFormData] = useState({
    file_name: "",
    urls: "",
    coupon: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://coon8n.zaktomate.com/webhook/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ file_name: "", urls: "", coupon: "", email: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 md:py-20 flex flex-col justify-center items-center px-4">


      {/* Main Form Container */}
      <div className="w-full pt-14 max-w-md md:max-w-2xl lg:max-w-4xl">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">
          
          {/* Left Side - Form (Mobile: full width, Desktop: left column) */}
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-8 border border-gray-200 dark:border-gray-700">
            {/* Mobile Header */}
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 md:hidden">
              Zaknote Demo
            </h2>

            {/* Desktop Form Header */}
            <h2 className="hidden md:block text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get Started
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Request submitted successfully!</p>
                    <p className="text-sm">You'll receive your notes via email shortly.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Something went wrong. Please try again.
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  File Name
                </label>
                <input
                  type="text"
                  name="file_name"
                  value={formData.file_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                  placeholder="e.g. Obaydul Quader er Gopon Video"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  URLs
                </label>
                <input
                  type="url"
                  name="urls"
                  value={formData.urls}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                  placeholder="https://youtube.com/... ..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Coupon Code
                </label>
                <input
                  type="text"
                  name="coupon"
                  value={formData.coupon}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                  placeholder="Enter your coupon code"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 
                  text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Generate Notes"
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Info Section (Desktop only) */}
          <div className="hidden md:block space-y-8">
            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                What You'll Get
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">AI-Powered Analysis</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive content breakdown and key insights</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h8v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Structured Notes</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Well-organized, easy-to-read format</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email Delivery</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Delivered directly to your inbox</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Supported Platforms</h3>
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                Currently supports YouTube links and public Facebook posts. More platforms coming soon!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer Note */}
      <p className="md:hidden mt-6 text-sm text-gray-600 dark:text-gray-300 text-center px-4">
        Demo only supports YouTube links and public Facebook links.
      </p>
    </div>
  );
};

export default Zaknote;
