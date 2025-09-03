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
  Brain,
  FileText,
  HelpCircle,
  BookOpen,
  Send,
  Plus,
  ArrowLeft,
  Sparkles,
  BarChart3,
  Download,
  Upload
} from 'lucide-react';

const StudyModeRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'deepthink' | 'questions' | 'summary'>('chat');
  const [isCallActive, setIsCallActive] = useState(true);
  const [message, setMessage] = useState('');
  const [aiQuery, setAiQuery] = useState('');
  const [documentText, setDocumentText] = useState('');

  const participants = [
    { id: 1, name: 'John Doe', isVideoOn: true, isAudioOn: true, isPresenting: false },
    { id: 2, name: 'Sarah Smith', isVideoOn: true, isAudioOn: true, isPresenting: false },
    { id: 3, name: 'Mike Johnson', isVideoOn: false, isAudioOn: true, isPresenting: false },
    { id: 4, name: 'Emily Brown', isVideoOn: true, isAudioOn: false, isPresenting: isScreenSharing },
  ];

  const chatMessages = [
    { id: 1, user: 'Sarah Smith', message: 'Let\'s start with chapter 5 analysis', time: '8:30 PM' },
    { id: 2, user: 'Mike Johnson', message: 'I have questions about the theorem we discussed', time: '8:31 PM' },
    { id: 3, user: 'Emily Brown', message: 'I can help explain the proof step by step', time: '8:32 PM' },
  ];

  const aiConversation = [
    { id: 1, type: 'user', message: 'Explain photosynthesis in simple terms' },
    { id: 2, type: 'ai', message: 'Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen. It occurs primarily in the chloroplasts of plant cells and is essential for life on Earth as it produces oxygen and forms the base of most food chains.' },
    { id: 3, type: 'user', message: 'What are the two main stages?' },
    { id: 4, type: 'ai', message: 'The two main stages are: 1) Light-dependent reactions (occur in thylakoids, convert light energy to chemical energy) and 2) Light-independent reactions or Calvin cycle (occur in stroma, use chemical energy to produce glucose).' },
  ];

  const generatedQuestions = [
    { id: 1, question: 'What is the primary purpose of photosynthesis?', difficulty: 'Easy' },
    { id: 2, question: 'Explain the role of chlorophyll in photosynthesis.', difficulty: 'Medium' },
    { id: 3, question: 'Compare and contrast the light-dependent and light-independent reactions.', difficulty: 'Hard' },
    { id: 4, question: 'How does temperature affect the rate of photosynthesis?', difficulty: 'Medium' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleAiQuery = () => {
    if (aiQuery.trim()) {
      setAiQuery('');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-400 font-medium">{msg.user}</span>
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
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );

      case 'deepthink':
        return (
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Deep Think AI</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">RAG System</span>
              </div>
              <p className="text-gray-400 text-sm">Ask questions about your study materials or get explanations on complex topics.</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {aiConversation.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="Ask Deep Think AI..."
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && handleAiQuery()}
                />
                <button
                  onClick={handleAiQuery}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );

      case 'questions':
        return (
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Question Generator</h3>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Generate</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm">AI-generated questions based on your study materials.</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {generatedQuestions.map((q) => (
                <div key={q.id} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-white font-medium flex-1">{q.question}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ml-2 ${
                      q.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-700'
                        : q.difficulty === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="text-xs px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      Answer
                    </button>
                    <button className="text-xs px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors">
                      Skip
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-amber-400" />
                  <h3 className="text-lg font-semibold text-white">Document Summarizer</h3>
                </div>
                <button className="px-3 py-1 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm">Upload documents or paste text to generate summaries and insights.</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Paste your text or document content:
                  </label>
                  <textarea
                    value={documentText}
                    onChange={(e) => setDocumentText(e.target.value)}
                    placeholder="Paste your study material here..."
                    className="w-full h-32 bg-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none resize-none"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Summarize</span>
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Analyze</span>
                  </button>
                </div>

                {/* Sample Summary Output */}
                <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Generated Summary
                  </h4>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p><strong>Key Points:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Main concept explanation and definitions</li>
                      <li>Important processes and their mechanisms</li>
                      <li>Relationships between different components</li>
                    </ul>
                    <p className="mt-4"><strong>Complexity Level:</strong> Intermediate</p>
                    <p><strong>Estimated Reading Time:</strong> 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
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
            <h1 className="text-xl font-semibold text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Study Room
            </h1>
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
            {/* Video Grid */}
            <div className="grid grid-cols-2 gap-4 p-4 h-full">
              {participants.slice(0, 4).map((participant) => (
                <div
                  key={participant.id}
                  className={`relative bg-gray-700 rounded-lg overflow-hidden ${
                    participant.isPresenting ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  {participant.isVideoOn ? (
                    <div className="w-full h-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
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
                        <Monitor className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tools Sidebar */}
        <div className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-700">
            {[
              { key: 'chat', label: 'Chat', icon: MessageCircle },
              { key: 'deepthink', label: 'Deep Think', icon: Brain },
              { key: 'questions', label: 'Questions', icon: HelpCircle },
              { key: 'summary', label: 'Summary', icon: FileText },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 px-3 py-3 text-xs font-medium transition-colors flex items-center justify-center space-x-1 ${
                  activeTab === tab.key
                    ? 'text-white bg-gray-700 border-b-2 border-green-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {renderTabContent()}
          </div>
        </div>
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
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            <Monitor className="w-5 h-5" />
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

export default StudyModeRoom;