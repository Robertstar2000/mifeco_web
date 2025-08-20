import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { X, Calendar as CalendarIcon, Clock, Mail, User, Building, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import 'react-calendar/dist/Calendar.css';

const CalendarScheduler = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consultationType: 'Strategic Planning'
  });
  const [step, setStep] = useState(1); // 1: Calendar, 2: Time, 3: Details, 4: Confirmation

  if (!isOpen) return null;

  // Available time slots (9 AM to 5 PM, excluding lunch 12-1 PM)
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  // Blocked dates (weekends and some example blocked dates)
  const isDateBlocked = (date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Block weekends and past dates
    if (day === 0 || day === 6 || date < today) return true;
    
    // Example blocked dates (holidays, etc.)
    const blockedDates = [
      new Date(2025, 11, 25), // Christmas
      new Date(2025, 0, 1),   // New Year
    ];
    
    return blockedDates.some(blockedDate => 
      date.toDateString() === blockedDate.toDateString()
    );
  };

  const consultationTypes = [
    'Strategic Planning',
    'Digital Transformation',
    'Growth Optimization',
    'Team Development',
    'Performance Analytics',
    'Risk Management',
    'Space Industry Consulting',
    'General Consultation'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleSubmit = () => {
    // Format the meeting details
    const meetingDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const meetingDetails = {
      date: meetingDate,
      time: selectedTime,
      client: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      type: formData.consultationType,
      message: formData.message
    };

    // In a real implementation, this would:
    // 1. Send email to client with Google Meet link
    // 2. Add to calendar system
    // 3. Send confirmation emails
    // 4. Create CRM entry

    console.log('Meeting scheduled:', meetingDetails);
    
    // For demo purposes, show success message
    alert(`Meeting scheduled successfully!\n\nDate: ${meetingDate}\nTime: ${selectedTime}\n\nA Google Meet invitation will be sent to ${formData.email}`);
    
    setStep(4);
  };

  const resetForm = () => {
    setStep(1);
    setSelectedDate(new Date());
    setSelectedTime('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      consultationType: 'Strategic Planning'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Schedule Consultation</h2>
              <p className="text-gray-600">Book your free 30-minute strategy session</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <React.Fragment key={stepNum}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`w-12 h-1 ${
                      step > stepNum ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Select a Date</h3>
                <p className="text-gray-600">Choose your preferred consultation date</p>
              </div>
              
              <div className="flex justify-center">
                <div className="calendar-container">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    tileDisabled={({ date }) => isDateBlocked(date)}
                    minDate={new Date()}
                    className="react-calendar-custom"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={() => setStep(2)}
                  disabled={!selectedDate}
                  className="btn-gradient text-white"
                >
                  Continue to Time Selection
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Select a Time</h3>
                <p className="text-gray-600">
                  Available times for {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`p-3 ${selectedTime === time ? 'btn-gradient text-white' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {time}
                  </Button>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back to Date
                </Button>
                <Button 
                  onClick={() => setStep(3)}
                  disabled={!selectedTime}
                  className="btn-gradient text-white"
                >
                  Continue to Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Your Details</h3>
                <p className="text-gray-600">Tell us about yourself and your consultation needs</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Meeting Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="w-4 h-4 text-blue-500" />
                      <span>{selectedDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Consultation Type</label>
                <select
                  value={formData.consultationType}
                  onChange={(e) => handleInputChange('consultationType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {consultationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your specific challenges and goals..."
                  rows={4}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back to Time
                </Button>
                <Button 
                  onClick={handleScheduleSubmit}
                  disabled={!formData.firstName || !formData.lastName || !formData.email}
                  className="btn-gradient text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CalendarIcon className="w-8 h-8 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Meeting Scheduled!</h3>
                <p className="text-gray-600">
                  Your consultation has been successfully scheduled. You'll receive a Google Meet invitation shortly.
                </p>
              </div>

              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Meeting Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Date:</span>
                    <span>{selectedDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span>{formData.consultationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>30 minutes</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button onClick={() => { resetForm(); onClose(); }} className="btn-gradient text-white">
                  Close
                </Button>
                <p className="text-sm text-gray-500">
                  Need to reschedule? Contact us at contact@mifeco.com
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .calendar-container .react-calendar {
          border: none;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 1rem;
        }
        
        .react-calendar__tile {
          border-radius: 0.5rem;
          margin: 2px;
        }
        
        .react-calendar__tile:enabled:hover {
          background-color: #3b82f6;
          color: white;
        }
        
        .react-calendar__tile--active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }
        
        .react-calendar__tile:disabled {
          background-color: #f3f4f6;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default CalendarScheduler;

