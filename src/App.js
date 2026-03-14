import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <>
      <section className='bg-[#0f0715] min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden z-10 py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8 w-full'>
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <h1 className="text-5xl font-bold text-center mb-8 text-purple-700">
              TODO List
            </h1>

            <AppHeader />
            <AppContent />
          </div>
        </div>
      </section>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            fontSize: '1rem',
          },
          success: {
            iconTheme: {
              primary: '#9333ea',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
}

export default App;

