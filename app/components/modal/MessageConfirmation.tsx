import React from 'react';

interface ConfirmationMessageProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h3 className="text-xl font-semibold text-white mb-4">Success!</h3>
        <p className="text-gray-200 mb-6">
          You've secured early access. We'll notify you when the beta is live.
        </p>
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-[#1DB954] text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close confirmation message"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};