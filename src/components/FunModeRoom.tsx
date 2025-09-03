import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Monitor, 
  Users, 
  MessageCircle, 
  Settings,
  Phone,
  PhoneOff,
  Youtube,
  Music,
  Tv,
  Plus,
  Volume2,
  VolumeX,
  Maximize,
  ArrowLeft
} from 'lucide-react';

const FunModeRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(true);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const participants = [
    { id: 1, name: 'John Doe', isVideoOn: true, isAudioOn: true, isPresenting: false },
    { id: 2, name: 'Sarah Smith', isVideoOn: true, isAudioOn: true, isPresenting: false },
    { id: 3, name: 'Mike Johnson', isVideoOn: false, isAudioOn: true, isPresenting: false },
    { id: 4, name: 'Emily Brown', isVideoOn: true, isAudioOn: false, isPresenting: isScreenSharing },
  ];

  const entertainmentApps = [
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'text-red-600' },
    { id: 'spotify', name: 'Spotify', icon: Music, color: 'text-green-600' },
    { id: 'netflix', name: 'Netflix', icon: Tv, color: 'text-red-700' },
    { id: 'prime', name: 'Prime Video', icon: Tv, color: 'text-blue-600' },
  ];

  const chatMessages = [
    { id: 1, user: 'Sarah Smith', message: 'Hey everyone! Ready for movie night?', time: '8:30 PM' },
    { id: 2, user: 'Mike Johnson', message: 'Absolutely! What are we watching?', time: '8:31 PM' },
    { id: 3, user: 'Emily Brown', message: 'I vote for the new action movie on Netflix!', time: '8:32 PM' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message to chat (in real app, this would be sent to all participants)
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/home')}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">Fun Room</h1>
            <p className="text-gray-400 text-sm">Room ID: {roomId}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
            <Users className="w-4 h-4 text-gray-300" />
            <span className="text-gray-300 text-sm">{participants.length}</span>
          </div>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Video Area */}
        <div className="flex-1 p-6">
          <div className="h-full bg-gray-800 rounded-lg relative overflow-hidden">
            {selectedApp ? (
              <div className="h-full flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    {entertainmentApps.find(app => app.id === selectedApp)?.icon && (
                      React.createElement(entertainmentApps.find(app => app.id === selectedApp)!.icon, {
                        className: `w-10 h-10 ${entertainmentApps.find(app => app.id === selectedApp)?.color}`
                      })
                    )}
                  </div>
                  <p className="text-white text-lg font-medium mb-2">
                    {entertainmentApps.find(app => app.id === selectedApp)?.name} Integration
                  </p>
                  <p className="text-gray-400">Shared content would appear here</p>
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Stop Sharing
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Video Grid */}
                <div className="grid grid-cols-2 gap-4 p-4 h-full">
                  {participants.slice(0, 4).map((participant) => (
                    <div
                      key={participant.id}
                      className={`relative bg-gray-700 rounded-lg overflow-hidden ${
                        participant.isPresenting ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      {participant.isVideoOn ? (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl font-bold">
                              {participant.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                          <div className="text-center">
                            <VideoOff className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-300 text-sm">Camera off</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Participant Info */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                          {participant.name}
                        </span>
                        <div className="flex space-x-1">
                          {!participant.isAudioOn && (
                            <MicOff className="w-4 h-4 text-red-400" />
                          )}
                          {participant.isPresenting && (
                            <Monitor className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Entertainment Apps Bar */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    {entertainmentApps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => setSelectedApp(app.id)}
                        className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center space-x-2"
                        title={`Share ${app.name}`}
                      >
                        <app.icon className={`w-5 h-5 ${app.color}`} />
                      </button>
                    ))}
                    <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Chat Sidebar */}
        {isChatOpen && (
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat
              </h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-blue-400 font-medium">{msg.user}</span>
                    <span className="text-gray-500 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-gray-300">{msg.message}</p>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
        <div className="flex items-center justify-center space-x-4">
          {/* Audio Control */}
          <button
            onClick={() => setIsAudioOn(!isAudioOn)}
            className={`p-3 rounded-full transition-colors ${
              isAudioOn
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </button>

          {/* Video Control */}
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-3 rounded-full transition-colors ${
              isVideoOn
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </button>

          {/* Screen Share */}
          <button
            onClick={() => setIsScreenSharing(!isScreenSharing)}
            className={`p-3 rounded-full transition-colors ${
              isScreenSharing
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            <Monitor className="w-5 h-5" />
          </button>

          {/* Chat Toggle */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`p-3 rounded-full transition-colors ${
              isChatOpen
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          {/* End Call */}
          <button
            onClick={() => {
              setIsCallActive(false);
              navigate('/home');
            }}
            className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            <PhoneOff className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunModeRoom;