import { useState, useRef, useEffect } from 'react';
import { Button } from '../../components/UI/button';
import { Input } from '../../components/UI/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/UI/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChatStore } from '../../store/chatStore';
import { cn } from '../../lib/util';

export default function ChatWidget() {
  const { messages, isOpen, isTyping, sendMessage, toggleChat, closeChat } = useChatStore();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 ">
        <Button 
          onClick={toggleChat}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg "
          style={{backgroundColor:'#006E39'}}
        >
          <MessageCircle className="w-10 h-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-110 shadow-xl bg-white border-2 border-green-400 rounded-md text-black">
          <Card className="h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-lg text-green-800">Wallchi Support</CardTitle>
              <Button variant="ghost" size="sm" onClick={closeChat}>
                <X className="w-4 h-4" style={{color:'white' }} />
              </Button>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 h-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message:any) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        'max-w-[80%] p-3 rounded-lg text-sm',
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      )}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e:any) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 placeholder-gray-500"
                  />
                  <Button type="submit" size="sm" disabled={!inputValue.trim()} style={{backgroundColor:'#012f19ff' }}>
                    <Send className="w-4 h-4" style={{color:'white' }} />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}