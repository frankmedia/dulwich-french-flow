import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Gift,
  ArrowRight,
  CheckCircle,
  Loader2,
  HelpCircle
} from "lucide-react";
import frenchBooks from "@/assets/french-books.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    frenchLevel: '',
    goals: '',
    availability: '',
    enquiryType: '', // 'adult' or 'exam-prep'
    adultClassType: '', // 'group' or '1to1'
    adultSessionType: '', // 'online' or 'face-to-face'
    groupLocation: '', // 'east-dulwich', 'forest-hill', 'sydenham'
    examYearGroup: '' // 'year-7' to 'year-13'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For testing - log the form data to console
      console.log('Form submitted with data:', formData);
      console.log('EmailJS Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.log('EmailJS Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log('EmailJS Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log('Send Email To:', import.meta.env.VITE_SEND_EMAIL_FORM);

      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_name: 'Barbara',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: `New French Flow Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

French Level: ${formData.frenchLevel || 'Not specified'}

Goals:
${formData.goals || 'Not specified'}

Availability:
${formData.availability || 'Not specified'}

Enquiry Type: ${formData.enquiryType || 'Not specified'}

${formData.enquiryType === 'adult' ? `
Adult Class Details:
- Class Type: ${formData.adultClassType || 'Not specified'}
${formData.adultClassType === '1to1' ? `- Session Type: ${formData.adultSessionType || 'Not specified'}` : ''}
${formData.adultClassType === 'group' ? `- Preferred Location: ${formData.groupLocation || 'Not specified'}` : ''}
` : ''}

${formData.enquiryType === 'exam-prep' ? `
Exam Preparation Details:
- Year Group: ${formData.examYearGroup || 'Not specified'}
` : ''}

---
This message was sent from the French Flow website contact form.`
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wh77q2v',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_670vc3a',
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        frenchLevel: '',
        goals: '',
        availability: '',
        enquiryType: '',
        adultClassType: '',
        adultSessionType: '',
        groupLocation: '',
        examYearGroup: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Badge className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Start Your French Journey Today
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to discover your French confidence? Start with a <span className="font-semibold">free 30-minute assessment</span>
                to establish your current level and discuss your goals.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={frenchBooks} alt="French books and flag" className="w-full h-64 object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>


      {/* French-Themed Contact Form */}
      <section className="py-20 bg-gradient-to-br from-french-blue/5 via-white to-french-navy/5 relative overflow-hidden">
        {/* French Flag Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-white to-red-600"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-6 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-sm shadow-lg"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-french-navy">
                  Contactez-moi
                </h2>
                <div className="w-8 h-6 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-sm shadow-lg"></div>
              </div>
              <p className="text-xl text-french-blue/80 max-w-2xl mx-auto">
                Ready to begin your French journey? Drop me a line at <a href="mailto:barbara@frenchflow.co.uk" className="font-semibold text-french-blue hover:text-french-navy underline transition-colors">barbara@frenchflow.co.uk</a> or fill in the form below. Merci !
              </p>
            </div>

            {/* French-Themed Form */}
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-french-navy">
                        Prénom (First Name) *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Jean" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-french-blue/20 focus:border-french-blue transition-colors h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-french-navy">
                        Nom (Last Name) *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Dupont" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-french-blue/20 focus:border-french-blue transition-colors h-12 text-lg"
                      />
                    </div>
                  </div>
                  
                  
                  {/* Phone and Email on same line */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-french-navy">
                        📱 Phone Number
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="07xxx xxx xxx" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-2 border-french-blue/20 focus:border-french-blue transition-colors h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-french-navy">
                        📧 Email Address *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jean.dupont@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-french-blue/20 focus:border-french-blue transition-colors h-12 text-lg"
                      />
                    </div>
                  </div>
                  
                  {/* French Level */}
                  <div className="space-y-2">
                    <label htmlFor="frenchLevel" className="block text-sm font-semibold text-french-navy">
                      🇫🇷 Your French Level
                    </label>
                    <Input 
                      id="frenchLevel" 
                      placeholder="e.g. GCSE 10 years ago, A-level, basic conversation..."
                      value={formData.frenchLevel}
                      onChange={handleInputChange}
                      className="border-2 border-french-blue/20 focus:border-french-blue transition-colors h-12 text-lg"
                    />
                  </div>
                  
                  {/* Goals */}
                  <div className="space-y-2">
                    <label htmlFor="goals" className="block text-sm font-semibold text-french-navy">
                      🎯 Your French Goals
                    </label>
                    <Textarea 
                      id="goals" 
                      placeholder="What would you like to achieve with your French? Travel, work, personal interest..."
                      className="min-h-[120px] border-2 border-french-blue/20 focus:border-french-blue transition-colors text-lg resize-none"
                      value={formData.goals}
                      onChange={handleInputChange}
                    />
                  </div>
                  

                  {/* Enquiry Type */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-french-navy">
                      ❓ What are you enquiring about? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, enquiryType: 'adult' }))}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.enquiryType === 'adult' 
                            ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                            : 'border-gray-200 hover:border-french-blue/50 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            formData.enquiryType === 'adult' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                          }`}>
                            {formData.enquiryType === 'adult' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                          </div>
                          <div>
                            <div className="font-semibold">Adult Classes</div>
                            <div className="text-sm text-gray-600">Group or 1:1 lessons</div>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, enquiryType: 'exam-prep' }))}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.enquiryType === 'exam-prep' 
                            ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                            : 'border-gray-200 hover:border-french-blue/50 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            formData.enquiryType === 'exam-prep' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                          }`}>
                            {formData.enquiryType === 'exam-prep' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                          </div>
                          <div>
                            <div className="font-semibold">Exam Preparation</div>
                            <div className="text-sm text-gray-600">GCSE & A-Level support</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Adult Class Type */}
                  {formData.enquiryType === 'adult' && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-french-navy">
                        👥 What type of adult class? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, adultClassType: 'group' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.adultClassType === 'group' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.adultClassType === 'group' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.adultClassType === 'group' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">Group Classes</div>
                              <div className="text-sm text-gray-600">Small groups (max 8 students)</div>
                            </div>
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, adultClassType: '1to1' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.adultClassType === '1to1' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.adultClassType === '1to1' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.adultClassType === '1to1' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">1:1 Sessions</div>
                              <div className="text-sm text-gray-600">Personalised lessons</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 1:1 Session Type */}
                  {formData.enquiryType === 'adult' && formData.adultClassType === '1to1' && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-french-navy">
                        💻 How would you like your 1:1 sessions? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, adultSessionType: 'face-to-face' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.adultSessionType === 'face-to-face' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.adultSessionType === 'face-to-face' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.adultSessionType === 'face-to-face' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">Face-to-Face</div>
                              <div className="text-sm text-gray-600">In-person lessons</div>
                            </div>
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, adultSessionType: 'online' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.adultSessionType === 'online' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.adultSessionType === 'online' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.adultSessionType === 'online' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">Online</div>
                              <div className="text-sm text-gray-600">Virtual lessons</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Group Location */}
                  {formData.enquiryType === 'adult' && formData.adultClassType === 'group' && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-french-navy">
                        📍 Which location would you prefer? *
                      </label>
                      <div className="grid grid-cols-1 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, groupLocation: 'east-dulwich' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.groupLocation === 'east-dulwich' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.groupLocation === 'east-dulwich' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.groupLocation === 'east-dulwich' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">East Dulwich</div>
                              <div className="text-sm text-gray-600">Grove Vale Library, SE22 8EF</div>
                            </div>
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, groupLocation: 'forest-hill' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.groupLocation === 'forest-hill' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.groupLocation === 'forest-hill' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.groupLocation === 'forest-hill' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">Forest Hill</div>
                              <div className="text-sm text-gray-600">Forest Hill Library, SE23 3HZ</div>
                            </div>
                          </div>
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, groupLocation: 'sydenham' }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                            formData.groupLocation === 'sydenham' 
                              ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                              : 'border-gray-200 hover:border-french-blue/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              formData.groupLocation === 'sydenham' ? 'border-french-blue bg-french-blue' : 'border-gray-300'
                            }`}>
                              {formData.groupLocation === 'sydenham' && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
                            </div>
                            <div>
                              <div className="font-semibold">Sydenham</div>
                              <div className="text-sm text-gray-600">Sydenham Library, SE26 5SE</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Exam Year Group */}
                  {formData.enquiryType === 'exam-prep' && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-french-navy">
                        🎓 What year group? *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          { value: 'year-7', label: 'Year 7' },
                          { value: 'year-8', label: 'Year 8' },
                          { value: 'year-9', label: 'Year 9' },
                          { value: 'year-10', label: 'Year 10' },
                          { value: 'year-11', label: 'Year 11 (GCSE)' },
                          { value: 'year-12', label: 'Year 12 (AS Level)' },
                          { value: 'year-13', label: 'Year 13 (A Level)' }
                        ].map((year) => (
                          <button
                            key={year.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, examYearGroup: year.value }))}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 text-center ${
                              formData.examYearGroup === year.value 
                                ? 'border-french-blue bg-french-blue/10 text-french-blue' 
                                : 'border-gray-200 hover:border-french-blue/50 bg-white'
                            }`}
                          >
                            <div className="font-semibold text-sm">{year.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-xl">
                      <div className="flex items-center">
                        <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                        <span className="font-semibold">Message sent successfully! I'll get back to you within 24 hours.</span>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-xl">
                      <div className="flex items-center">
                        <MessageCircle className="w-6 h-6 mr-3 text-red-600" />
                        <span className="font-semibold">Sorry, there was an error sending your message. Please try again or email me directly.</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-french-blue to-french-navy hover:from-french-navy hover:to-french-blue text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                          Envoi en cours... (Sending...)
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5 mr-3" />
                          Envoyer le message (Send Message)
                          <ArrowRight className="w-5 h-5 ml-3" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🇫🇷</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Common Questions
              </h2>
              <span className="text-4xl ml-3">🇫🇷</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to help you take the next step
            </p>
          </div>

          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-heading font-semibold text-lg text-foreground">
                        How do I know if I'm the right level?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-12">
                      <p className="text-muted-foreground leading-relaxed">
                        That's exactly what our free consultation is for! In 30 minutes, 
                        I can assess your current level and recommend the perfect starting point.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Calendar className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-heading font-semibold text-lg text-foreground">
                        What if I can't commit to all 6 weeks?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-12">
                      <p className="text-muted-foreground leading-relaxed">
                        While the 6-week structure works best, we can discuss alternatives 
                        during your consultation. I'm flexible and want to find what works for you.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-heading font-semibold text-lg text-foreground">
                        Do you offer private lessons?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-12">
                      <p className="text-muted-foreground leading-relaxed">
                        Yes! While group classes are my specialty, I do offer private lessons 
                        for specific needs. Let's discuss what would work best during your consultation.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-heading font-semibold text-lg text-foreground">
                        What happens after the 6-week block?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-12">
                      <p className="text-muted-foreground leading-relaxed">
                        Most students continue with the next level block! We'll assess your 
                        progress and plan your continued French journey together.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Contact;