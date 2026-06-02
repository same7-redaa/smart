// محول روابط Google Drive إلى روابط مباشرة
export const convertGoogleDriveLink = (url: string): string => {
  if (!url) return url;
  
  // تحويل رابط Google Drive العادي إلى رابط مباشر
  // من: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // إلى: https://drive.google.com/uc?export=view&id=FILE_ID
  const driveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(driveRegex);
  
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  
  return url;
};

// استخراج معرف فيديو YouTube من الرابط
export const getYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;
  
  // دعم أشكال مختلفة من روابط YouTube
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

// تحويل رابط YouTube إلى رابط تضمين
export const convertYouTubeLink = (url: string): string | null => {
  const videoId = getYouTubeVideoId(url);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return null;
};

// التحقق من نوع المحتوى (صورة أو فيديو)
export const getMediaType = (url: string): 'image' | 'youtube' | 'unknown' => {
  if (!url) return 'unknown';
  
  // فحص روابط YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  
  // فحص الصور (Google Drive أو روابط صور مباشرة)
  if (url.includes('drive.google.com') || 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) {
    return 'image';
  }
  
  return 'unknown';
};
