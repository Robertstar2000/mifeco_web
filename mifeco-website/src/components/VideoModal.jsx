import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from './ui/button';

const VideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoRef, setVideoRef] = useState(null);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-black rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video">
          <video
            ref={setVideoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            poster="/images/video-poster.jpg"
          />

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => videoRef?.requestFullscreen()}
                  className="text-white hover:bg-white/20"
                >
                  <Maximize className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Play Button Overlay (when paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={togglePlay}
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </Button>
            </div>
          )}
        </div>

        {/* Video Description */}
        <div className="p-6 bg-gray-900 text-white">
          <h4 className="text-xl font-semibold mb-2">MIFECO Strategic Consulting</h4>
          <p className="text-gray-300 mb-4">
            Discover how MIFECO transforms businesses through proven strategic consulting methodologies. 
            See our award-winning expertise in action and learn how we can help your organization achieve breakthrough results.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Strategic Planning</span>
            <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Digital Transformation</span>
            <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">Business Growth</span>
            <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">Award-Winning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

