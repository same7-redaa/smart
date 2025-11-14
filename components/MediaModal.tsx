import React from 'react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUrl: string;
  mediaType: 'image' | 'youtube';
  title: string;
}

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, mediaUrl, mediaType, title }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0A1F44] to-[#1e3a6f] text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
            aria-label="إغلاق"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 bg-gray-50">
          {mediaType === 'youtube' ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`${mediaUrl}?autoplay=1`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <img
                src={mediaUrl}
                alt={title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="p-3 bg-gray-100 text-center text-gray-600 text-sm">
          اضغط في أي مكان خارج النافذة للإغلاق
        </div>
      </div>
    </div>
  );
};

export default MediaModal;
