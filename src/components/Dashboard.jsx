import React, { useEffect, useRef, useState } from 'react';
import { Database, BarChart2, AlertTriangle, TrendingUp, FileText } from 'lucide-react';

const Dashboard = () => {
  const chartRef = useRef(null);
  const [showDataTable, setShowDataTable] = useState(false);
  const [insuranceData, setInsuranceData] = useState([]);
  
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections with animation
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    // Fetch CSV data when viewing data is enabled
    if (showDataTable) {
      fetch('/amazon.csv')
        .then(response => response.text())
        .then(csvText => {
          const rows = csvText.split('\n');
          const headers = rows[0].split(',');
          const data = rows.slice(1, 20).map(row => {
            const values = row.split(',');
            return headers.reduce((obj, header, i) => {
              obj[header.trim()] = values[i]?.trim() || '';
              return obj;
            }, {});
          });
          setInsuranceData(data);
        })
        .catch(error => console.error('Error loading CSV:', error));
    }
    
    return () => observer.disconnect();
  }, [showDataTable]);

  return (
    <div id="dashboard" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-20">
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
            <BarChart2 className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">Amazon Seller Data Analysis Dashboard</h2>
        </div>
      </div>
      
      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-1 animate-on-scroll">
          <div className="bg-slate-900 rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-slate-700">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">Amazon Seller Data Analysis</h3>
                
              </div>
              <div className="flex space-x-3 mt-3 md:mt-0">
                
               
              </div>
            </div>
            
            {/* Dashboard Embed */}
            <div className="relative w-full overflow-hidden rounded-lg bg-slate-800 border border-slate-700 shadow-lg" style={{paddingTop: '56.25%'}}>
              <iframe
                title="Amazon Seller Data Analysis"
                src="https://app.powerbi.com/reportEmbed?reportId=bd7a419b-18ff-48d1-be24-08fa8a466ae7&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none opacity-0 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            
            <div className="flex justify-between items-center mt-4 px-2">
              <div className="flex items-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                </div>
                <span className="ml-2 text-xs text-gray-400">Interactive Controls Enabled</span>
              </div>
              <span className="text-xs text-blue-300/70">Powered by Power BI</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Features */}
    
      
      {/* Dashboard Metrics */}
      
                  

      
      {/* Advanced Data View Section */}
<div id='viewdata' className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 pt-11">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="animate-on-scroll">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-white">Seller Data Explorer</h3>
        <a href="#dashboard" className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Dashboard
        </a>
      </div>
      
      <p className="max-w-3xl text-lg text-gray-300 mb-8">
        Browse our comprehensive dataset containing more than 1,000 seller data with detailed analytics and insights.
      </p>
      
      <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden mb-10 border border-slate-700">
        {/* Data Controls */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center w-full lg:w-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search seller..." 
                className="bg-slate-900 text-white pl-10 pr-4 py-2 border border-slate-700 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-end">
            
            <select className="bg-slate-900 text-white px-3 py-2 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
            </select>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
            
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200" onClick={() => setShowDataTable(!showDataTable)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              {showDataTable ? 'Hide Data' : 'View Data'}
            </button>
          </div>
        </div>
        
        {/* Data Table */}
        {showDataTable && (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-900">
                  {insuranceData.length > 0 && Object.keys(insuranceData[0]).map((header, index) => (
                    <th key={index} className="py-3 px-4 text-left text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700 cursor-pointer hover:bg-slate-800">
                      <div className="flex items-center">
                        {header}
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                    </th>
                  ))}
                  <th className="py-3 px-4 text-right text-xs font-medium text-blue-400 uppercase tracking-wider border-b border-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {insuranceData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={`hover:bg-slate-700 transition-colors ${rowIndex % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'}`}>
                    {Object.keys(row).map((key, cellIndex) => (
                      <td key={cellIndex} className="py-3 px-4 text-sm text-gray-300 border-b border-slate-700">
                        {row[key]}
                      </td>
                    ))}
                    <td className="py-2 px-4 text-sm text-gray-300 border-b border-slate-700 text-right">
                      <button className="text-blue-400 hover:text-blue-300 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-emerald-400 hover:text-emerald-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {insuranceData.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-xl font-medium">No data available</p>
                <p className="mt-2">Please ensure the CSV file is available at /public/insurance_data.csv</p>
              </div>
            )}
          </div>
        )}
        
        {/* Pagination */}
        <div className="bg-slate-800 border-t border-slate-700 px-4 py-3 flex items-center justify-between">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-md text-gray-300 bg-slate-900 hover:bg-slate-700">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium rounded-md text-gray-300 bg-slate-900 hover:bg-slate-700">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-400">
                Showing <span className="font-medium text-gray-300">1</span> to <span className="font-medium text-gray-300">10</span> of <span className="font-medium text-gray-300">1,000</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-800 text-sm font-medium text-blue-400 hover:bg-slate-700">1</button>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">2</button>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">3</button>
                <span className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300">...</span>
                <button className="relative inline-flex items-center px-4 py-2 border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">100</button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-700 bg-slate-900 text-sm font-medium text-gray-300 hover:bg-slate-700">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Export Options */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export to PDF
        </button>
        <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export to Excel
        </button>
        <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CSV
        </button>
      </div>
    </div>
  </div>
</div>
      
      {/* Add custom styles */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;