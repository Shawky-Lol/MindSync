import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Bell, 
  Brain, 
  Clock, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  Zap,
  Moon,
  Lock,
  HelpCircle,
  CheckCircle,
  Target,
  Smile,
  BookOpen,
  Award,
  UserCheck,
  PenTool,
  TrendingUp,
  TrendingDown,
  Calendar,
  Star,
  Phone,
  MessageCircle,
  Camera,
  Music,
  Coffee,
  Sunrise,
  ArrowLeft
} from 'lucide-react'
import backgroundImage from './assets/background.png'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const HomePage = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* New background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="text-2xl font-bold text-white">MindSync</div>
          <div className="flex gap-6">
            <button onClick={() => setCurrentPage('features')} className="text-white/90 hover:text-white transition-colors">Features</button>
            <button onClick={() => setCurrentPage('about')} className="text-white/90 hover:text-white transition-colors">About</button>
            <button onClick={() => setCurrentPage('blog')} className="text-white/90 hover:text-white transition-colors">Blog</button>
            <Button onClick={() => setCurrentPage('pulse-check')} className="bg-white/20 hover:bg-white/30 text-white border-white/30">Get Started</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white/90 text-sm mb-4">
              <Sunrise className="w-4 h-4" />
              Digital Wellness Revolution
            </div>
          </div>
          
          <h1 className="text-7xl font-bold text-white mb-6 max-w-5xl leading-tight">
            Regain Control of Your 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Real Life</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Phones aren't the enemy. But they've taken over. Let's take it back — together.
          </p>
          
          <div className="flex gap-4 mb-12">
            <Button 
              onClick={() => setCurrentPage('pulse-check')} 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Take the Digital Pulse Check
            </Button>
            <Button 
              onClick={() => setCurrentPage('hidden-cost')} 
              variant="outline" 
              className="text-lg px-8 py-4 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-md"
            >
              Learn Why We're Different
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const FeaturesPage = () => (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <div className="flex gap-6">
          <button onClick={() => setCurrentPage('home')} className="text-blue-800 hover:text-blue-600">Home</button>
          <button onClick={() => setCurrentPage('about')} className="text-blue-800 hover:text-blue-600">About</button>
          <button onClick={() => setCurrentPage('blog')} className="text-blue-800 hover:text-blue-600">Blog</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">Features</h1>
        <p className="text-xl text-center text-blue-700 mb-12">
          Discover what makes MindSync different from other digital wellness solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "15-Question Pulse Check", description: "Comprehensive assessment of your digital habits and emotional patterns", color: "bg-blue-500" },
            { icon: Brain, title: "Emotional Insights", description: "Understand the psychological triggers behind your phone usage", color: "bg-purple-500" },
            { icon: Heart, title: "Mood Tracking", description: "Monitor how screen time affects your emotional well-being", color: "bg-red-500" },
            { icon: Zap, title: "Micro-Challenges", description: "Small, achievable tasks that build lasting offline habits", color: "bg-yellow-500" },
            { icon: Shield, title: "Privacy First", description: "Your data stays private - no tracking, no selling, no sharing", color: "bg-green-500" },
            { icon: Award, title: "Gamified Progress", description: "Earn points, badges, and streaks for meaningful achievements", color: "bg-indigo-500" }
          ].map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setCurrentPage('pulse-check')} 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            Try MindSync Now
          </Button>
        </div>
      </div>
    </div>
  )

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <div className="flex gap-6">
          <button onClick={() => setCurrentPage('home')} className="text-blue-800 hover:text-blue-600">Home</button>
          <button onClick={() => setCurrentPage('features')} className="text-blue-800 hover:text-blue-600">Features</button>
          <button onClick={() => setCurrentPage('blog')} className="text-blue-800 hover:text-blue-600">Blog</button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About MindSync</h1>
        
        <div className="prose prose-lg mx-auto">
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              MindSync was created to address the growing disconnect between our digital lives and our real-world well-being. 
              We believe that technology should enhance our lives, not control them.
            </p>
            <p className="text-gray-700">
              Unlike other digital wellness apps that focus solely on screen time limits, MindSync takes a holistic approach 
              by addressing the emotional and psychological aspects of our relationship with technology.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Why We're Different</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Emotional Intelligence</h3>
                  <p className="text-gray-700">We help you understand why you reach for your phone, not just when.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Real-World Focus</h3>
                  <p className="text-gray-700">Our challenges and activities are designed to enrich your offline life.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Privacy Respect</h3>
                  <p className="text-gray-700">Your personal data and insights remain completely private.</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button 
              onClick={() => setCurrentPage('pulse-check')} 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const BlogPage = () => (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <div className="flex gap-6">
          <button onClick={() => setCurrentPage('home')} className="text-blue-800 hover:text-blue-600">Home</button>
          <button onClick={() => setCurrentPage('features')} className="text-blue-800 hover:text-blue-600">Features</button>
          <button onClick={() => setCurrentPage('about')} className="text-blue-800 hover:text-blue-600">About</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">Blog</h1>
        <p className="text-xl text-center text-blue-700 mb-12">
          Insights, tips, and research on digital wellness and mindful technology use.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "The Psychology of Phone Addiction",
              excerpt: "Understanding the neurological mechanisms behind compulsive phone checking and how to break the cycle.",
              date: "March 15, 2024",
              readTime: "5 min read",
              category: "Psychology"
            },
            {
              title: "Digital Minimalism for Beginners",
              excerpt: "Simple steps to declutter your digital life and focus on what truly matters.",
              date: "March 10, 2024",
              readTime: "7 min read",
              category: "Lifestyle"
            },
            {
              title: "The Hidden Cost of Notifications",
              excerpt: "How constant interruptions affect our cognitive performance and emotional well-being.",
              date: "March 5, 2024",
              readTime: "6 min read",
              category: "Research"
            },
            {
              title: "Building Real-World Connections",
              excerpt: "Strategies for nurturing face-to-face relationships in a digital age.",
              date: "February 28, 2024",
              readTime: "4 min read",
              category: "Relationships"
            },
            {
              title: "Mindful Morning Routines",
              excerpt: "Start your day with intention instead of immediately reaching for your phone.",
              date: "February 20, 2024",
              readTime: "5 min read",
              category: "Wellness"
            },
            {
              title: "The Science of Digital Detox",
              excerpt: "What happens to your brain when you take a break from screens.",
              date: "February 15, 2024",
              readTime: "8 min read",
              category: "Science"
            }
          ].map((post, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="text-xl text-blue-900 hover:text-blue-700">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setCurrentPage('pulse-check')} 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            Ready to Start Your Journey?
          </Button>
        </div>
      </div>
    </div>
  )

  const HiddenCostPage = () => (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <Button onClick={() => setCurrentPage('apps-fail')} className="bg-blue-600 hover:bg-blue-700">
          Why Well-being Apps Don't Help
        </Button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          The Hidden Cost of Digital Life
        </h1>
        <p className="text-xl text-center text-blue-700 mb-12">
          Why are we so anxious, tired, and distracted all the time?
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Bell, title: "Constant Distraction", description: "Notifications pull us away from meaningful tasks, fragmenting our attention and reducing our ability to focus deeply on what matters.", question: "How often do you check your phone without a specific reason?" },
            { icon: Brain, title: "Mental Fatigue", description: "The constant stream of information overwhelms our cognitive resources, leaving us feeling mentally drained and unable to think clearly.", question: "Does your head feel 'heavy' after scrolling?" },
            { icon: Eye, title: "Shorter Attention Span", description: "Digital media trains our brains to expect instant gratification, making it harder to engage with tasks that require sustained focus.", question: "How long can you focus on one task without checking your phone?" },
            { icon: Moon, title: "Sleep Disruption", description: "Blue light exposure and mental stimulation from screens interfere with our natural sleep cycles, affecting rest quality.", question: "Do you check your phone right before bed?" },
            { icon: Users, title: "Toxic Comparison", description: "Social media creates unrealistic standards and constant comparison with others' highlight reels, damaging self-esteem.", question: "How do you feel after seeing others' social media posts?" },
            { icon: Lock, title: "Privacy Loss", description: "Our personal data is constantly collected and monetized, often without our full understanding or consent.", question: "Do you know what data companies collect about you?" },
            { icon: Users, title: "Social Disconnection", description: "Digital interactions often replace face-to-face connections, leading to loneliness despite being 'connected'.", question: "When did you last have a deep conversation without phones?" },
            { icon: HelpCircle, title: "Wasted Time", description: "Hours disappear into mindless scrolling and digital consumption, time that could be spent on meaningful activities.", question: "How much time do you spend mindlessly scrolling?" }
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <p className="text-blue-600 font-medium italic">{item.question}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setCurrentPage('apps-fail')} 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            Why Well-being Apps Don't Help →
          </Button>
        </div>
      </div>
    </div>
  )

  const AppsFailPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <Button onClick={() => setCurrentPage('solution')} className="bg-blue-600 hover:bg-blue-700">
          Discover MindSync
        </Button>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Why Digital Well-being Apps Fail
        </h1>
        <p className="text-xl text-center text-blue-700 mb-12 italic">
          "If apps could solve the problem, we wouldn't still feel this way."
        </p>

        <div className="grid gap-6">
          {[
            { title: "Over-focus on screen limits", description: "They treat symptoms, not causes. Time limits don't address why we reach for our phones." },
            { title: "Guilt-driven feedback", description: "Shame-based notifications make us feel worse about our habits instead of empowering change." },
            { title: "No emotional insight", description: "They track usage but ignore the emotional triggers that drive our digital behavior." },
            { title: "One-size-fits-all", description: "Generic solutions don't account for individual needs, lifestyles, or personal challenges." },
            { title: "Easily bypassed", description: "Most restrictions can be disabled with a few taps, making them ineffective when we need them most." },
            { title: "Privacy-invading", description: "They often collect extensive personal data while claiming to help with digital wellness." },
            { title: "Resource-draining", description: "Ironically, they add more notifications and screen time to solve a screen time problem." },
            { title: "No connection to real life", description: "They focus on digital metrics without helping build meaningful offline alternatives." }
          ].map((problem, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-700">{problem.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setCurrentPage('solution')} 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            So what does work? → Discover MindSync
          </Button>
        </div>
      </div>
    </div>
  )

  const SolutionPage = () => (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <Button onClick={() => setCurrentPage('pulse-check')} className="bg-blue-600 hover:bg-blue-700">
          Try Pulse Check
        </Button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Our Solution: How MindSync Helps You Reconnect
        </h1>
        <p className="text-xl text-center text-blue-700 mb-12">
          "You don't need more limits — you need more clarity, peace, and presence."
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Comprehensive Pulse Check", description: "15-question deep dive into your digital habits and emotional patterns" },
            { icon: Zap, title: "Micro-Challenges", description: "Replace scrolling with real-world actions that build lasting habits" },
            { icon: Heart, title: "Mood Check-Ins", description: "Build emotional awareness around screen use with daily tracking" },
            { icon: Shield, title: "Privacy First", description: "No tracking, no sharing, optional offline mode - your data stays yours" },
            { icon: Award, title: "Reward System", description: "Progress badges, streaks, theme unlocks that celebrate real growth" },
            { icon: UserCheck, title: "Peer Accountability", description: "Support system with optional friend matching or AI buddy" },
            { icon: PenTool, title: "Weekly Reflections", description: "Journal-style check-ins to stay mindful and track progress" }
          ].map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-blue-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => setCurrentPage('pulse-check')} 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              Try the Pulse Check Now
            </Button>
            <Button 
              onClick={() => setCurrentPage('dashboard')} 
              variant="outline"
              className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Start Your Real-Life Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const PulseCheckPage = () => {
    const [step, setStep] = useState(1)
    const [answers, setAnswers] = useState({})

    const questions = [
      {
        question: "How many hours do you spend on your phone daily?",
        options: ["Less than 2 hours", "2-4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"]
      },
      {
        question: "How do you feel after using social media?",
        options: ["Energized and inspired", "Neutral", "Slightly drained", "Very drained", "Anxious or upset"]
      },
      {
        question: "What do you miss doing in real life?",
        options: ["Reading books", "Outdoor activities", "Face-to-face conversations", "Creative hobbies", "Physical exercise"]
      },
      {
        question: "How often do you check your phone without a specific purpose?",
        options: ["Rarely", "A few times a day", "Every hour", "Every 30 minutes", "Constantly"]
      },
      {
        question: "When do you typically reach for your phone first?",
        options: ["When I wake up", "During meals", "When I'm bored", "When I'm anxious", "When I'm with others"]
      },
      {
        question: "How does your phone use affect your sleep?",
        options: ["No impact", "Slightly affects falling asleep", "Often keeps me up late", "Disrupts my sleep quality", "I check it during the night"]
      },
      {
        question: "What emotions trigger your phone use most?",
        options: ["Boredom", "Anxiety", "Loneliness", "FOMO", "Habit/automatic"]
      },
      {
        question: "How do you feel when your phone battery dies?",
        options: ["Relieved", "Slightly anxious", "Very anxious", "Panicked", "Lost/disconnected"]
      },
      {
        question: "Which apps consume most of your time?",
        options: ["Social media", "News/information", "Games", "Video streaming", "Messaging"]
      },
      {
        question: "How often do you have phone-free meals?",
        options: ["Always", "Most of the time", "Sometimes", "Rarely", "Never"]
      },
      {
        question: "What happens when you try to limit phone use?",
        options: ["Easy to stick to", "Manageable with effort", "Difficult but possible", "Very challenging", "Nearly impossible"]
      },
      {
        question: "How has your attention span changed over the years?",
        options: ["Improved", "Stayed the same", "Slightly decreased", "Significantly decreased", "Severely impacted"]
      },
      {
        question: "How do you feel about your current digital habits?",
        options: ["Very satisfied", "Mostly satisfied", "Neutral", "Somewhat concerned", "Very concerned"]
      },
      {
        question: "What would motivate you most to change?",
        options: ["Better relationships", "Improved focus", "Better sleep", "More free time", "Reduced anxiety"]
      },
      {
        question: "How ready are you to make changes?",
        options: ["Very ready", "Somewhat ready", "Unsure", "Not very ready", "Not ready at all"]
      }
    ]

    const handleAnswer = (answer) => {
      const newAnswers = {...answers, [step]: answer}
      setAnswers(newAnswers)
      
      if (step < questions.length) {
        setStep(step + 1)
      } else {
        setStep('results')
      }
    }

    const getProfile = () => {
      const scores = Object.values(answers)
      const highUsage = scores.filter(s => s.includes("6-8 hours") || s.includes("More than 8 hours") || s.includes("Constantly")).length
      const anxiety = scores.filter(s => s.includes("anxious") || s.includes("Panicked") || s.includes("Very concerned")).length
      const awareness = scores.filter(s => s.includes("Very ready") || s.includes("Somewhat ready")).length
      
      if (highUsage >= 3) return "The Digital Dependent"
      if (anxiety >= 3) return "The Anxious Scroller"
      if (awareness >= 2) return "The Mindful Seeker"
      return "The Balanced Explorer"
    }

    const getRecommendations = () => {
      const profile = getProfile()
      const recommendations = {
        "The Digital Dependent": [
          "Start with 30-minute phone-free periods",
          "Use physical alarm clock instead of phone",
          "Create phone-free zones in your home",
          "Practice the 5-4-3-2-1 grounding technique when reaching for phone"
        ],
        "The Anxious Scroller": [
          "Try breathing exercises before checking phone",
          "Set specific times for social media",
          "Use calming apps instead of stimulating ones",
          "Practice mindful phone use - pause before opening apps"
        ],
        "The Mindful Seeker": [
          "Join a digital wellness community",
          "Try a 7-day mindful phone challenge",
          "Explore meditation and mindfulness practices",
          "Set intention before each phone session"
        ],
        "The Balanced Explorer": [
          "Fine-tune your current habits",
          "Experiment with new offline hobbies",
          "Help others with their digital wellness",
          "Maintain your healthy boundaries"
        ]
      }
      return recommendations[profile] || recommendations["The Balanced Explorer"]
    }

    if (step === 'results') {
      const profile = getProfile()
      const recommendations = getRecommendations()
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
          <nav className="flex justify-between items-center p-6 bg-white border-b">
            <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
          </nav>
          
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
              Your Digital Pulse Check Results
            </h1>
            
            <Card className="p-8 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-900">
                  Your Digital Profile: {profile}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Based on your 15 responses, we've identified your unique digital behavior pattern. 
                  This profile helps us provide personalized recommendations for your journey.
                </p>
                <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
                  Readiness Level: {answers[15]?.includes("Very ready") ? "High" : answers[15]?.includes("Somewhat ready") ? "Medium" : "Building"}
                </Badge>
              </CardContent>
            </Card>

            <Card className="p-8 mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Personalized Action Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                onClick={() => setCurrentPage('dashboard')} 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Continue to Your Personal Dashboard
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <nav className="flex justify-between items-center p-6 bg-white border-b">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
          {step > 1 && step !== 'results' && (
            <Button 
              onClick={() => setStep(step - 1)} 
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          )}
        </nav>
        
        <div className="max-w-2xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Digital Pulse Check
          </h1>
          <p className="text-xl text-center text-blue-700 mb-12">
            Let's understand your digital life — and how it's affecting your real one.
          </p>

          <Card className="p-8">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">Question {step} of {questions.length}</span>
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <CardTitle className="text-2xl text-blue-900 mb-6">
                {questions[step - 1].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questions[step - 1].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    variant="outline"
                    className="w-full text-left justify-start p-4 h-auto hover:bg-blue-50 hover:border-blue-300"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const DashboardPage = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('week')
    
    // Simulated real data
    const screenTimeData = {
      today: { hours: 3, minutes: 24, change: -15 },
      week: { hours: 28, minutes: 45, change: -8 },
      month: { hours: 124, minutes: 30, change: -12 }
    }
    
    const moodData = [
      { day: 'Mon', mood: 4, screenTime: 4.2 },
      { day: 'Tue', mood: 3, screenTime: 5.1 },
      { day: 'Wed', mood: 5, screenTime: 2.8 },
      { day: 'Thu', mood: 4, screenTime: 3.5 },
      { day: 'Fri', mood: 2, screenTime: 6.2 },
      { day: 'Sat', mood: 5, screenTime: 2.1 },
      { day: 'Sun', mood: 4, screenTime: 3.4 }
    ]

    const challenges = [
      { id: 1, title: "Take a 15-minute walk without your phone", completed: false, points: 10 },
      { id: 2, title: "Have a phone-free meal", completed: true, points: 15 },
      { id: 3, title: "Read for 30 minutes instead of scrolling", completed: false, points: 20 },
      { id: 4, title: "Practice 5-minute meditation", completed: true, points: 10 }
    ]

    const [userChallenges, setUserChallenges] = useState(challenges)

    const toggleChallenge = (id) => {
      setUserChallenges(prev => 
        prev.map(challenge => 
          challenge.id === id 
            ? { ...challenge, completed: !challenge.completed }
            : challenge
        )
      )
    }

    const totalPoints = userChallenges.filter(c => c.completed).reduce((sum, c) => sum + c.points, 0)
    const currentStreak = 5 // Simulated streak

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="flex justify-between items-center p-6 bg-white border-b shadow-sm">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentPage('pulse-check')}>Retake Pulse Check</Button>
            <Button onClick={() => setCurrentPage('home')}>Home</Button>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-blue-900">Your MindSync Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back! Here's your digital wellness overview.</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{currentTime.toLocaleDateString()}</p>
              <p className="text-lg font-semibold text-blue-900">{currentTime.toLocaleTimeString()}</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Clock className="w-5 h-5" />
                  Screen Time Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-900 mb-1">
                  {screenTimeData.today.hours}h {screenTimeData.today.minutes}m
                </div>
                <div className="flex items-center gap-1">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 text-sm">{screenTimeData.today.change}% from yesterday</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Award className="w-5 h-5" />
                  Current Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-900 mb-1">{currentStreak} days</div>
                <p className="text-green-700 text-sm">Mindful phone usage</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-purple-900">
                  <Star className="w-5 h-5" />
                  Points Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-900 mb-1">{totalPoints}</div>
                <p className="text-purple-700 text-sm">This week</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Heart className="w-5 h-5" />
                  Mood Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-900 mb-1">4.1/5</div>
                <p className="text-orange-700 text-sm">Weekly average</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Mood vs Screen Time Chart */}
            <Card className="lg:col-span-2 p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  Mood vs Screen Time This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moodData.map((day, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-500">Mood:</span>
                          <div className="flex gap-1">
                            {[1,2,3,4,5].map(star => (
                              <Star 
                                key={star} 
                                className={`w-4 h-4 ${star <= day.mood ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Screen:</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${(day.screenTime / 8) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{day.screenTime}h</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Today's Challenges */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  Today's Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userChallenges.map((challenge) => (
                    <div key={challenge.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                      <button
                        onClick={() => toggleChallenge(challenge.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                          challenge.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {challenge.completed && <CheckCircle className="w-3 h-3 text-white" />}
                      </button>
                      <div className="flex-1">
                        <p className={`text-sm ${challenge.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                          {challenge.title}
                        </p>
                        <p className="text-xs text-blue-600">+{challenge.points} points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Reflection */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-500" />
                  Weekly Reflection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">How did your digital habits affect your week?</p>
                <Button variant="outline" className="w-full">Start Reflection</Button>
              </CardContent>
            </Card>

            {/* App Usage Breakdown */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-500" />
                  Top Apps This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { app: "Social Media", time: "8h 32m", icon: MessageCircle, color: "bg-blue-500" },
                    { app: "News", time: "4h 15m", icon: BookOpen, color: "bg-red-500" },
                    { app: "Entertainment", time: "3h 48m", icon: Music, color: "bg-purple-500" },
                    { app: "Productivity", time: "2h 22m", icon: Target, color: "bg-green-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.app}</p>
                        <p className="text-xs text-gray-500">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-500" />
                  Monthly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Screen Time Goal</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mindful Days</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Challenges Completed</span>
                      <span>82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />
      case 'features': return <FeaturesPage />
      case 'about': return <AboutPage />
      case 'blog': return <BlogPage />
      case 'hidden-cost': return <HiddenCostPage />
      case 'apps-fail': return <AppsFailPage />
      case 'solution': return <SolutionPage />
      case 'pulse-check': return <PulseCheckPage />
      case 'dashboard': return <DashboardPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="font-sans">
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">📴 "You don't need to escape the internet. Just return to yourself."</h3>
          <p className="text-blue-200 mb-6">Try the Digital Pulse Check and take the first step toward real-life balance.</p>
          <Button 
            onClick={() => setCurrentPage('pulse-check')} 
            className="bg-white text-blue-900 hover:bg-gray-100 mb-4"
          >
            Start Now
          </Button>
          <p className="text-blue-300 text-sm">🕊️ No pressure. No tracking. Just clarity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

