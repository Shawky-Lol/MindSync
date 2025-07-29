const PulseCheckPage = () => {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [isComplete, setIsComplete] = useState(false)

  const questions = [
    {
      question: "How many hours per day do you spend on social media?",
      options: ["Less than 1 hour", "1-3 hours", "3-6 hours", "6-8 hours", "More than 8 hours"]
    },
    {
      question: "How often do you check your phone for notifications?",
      options: ["Rarely", "A few times a day", "Every hour", "Every 30 minutes", "Constantly"]
    },
    {
      question: "How do you feel when you can't access your phone or social media?",
      options: ["Completely fine", "Slightly uncomfortable", "Moderately anxious", "Very anxious", "Panicked"]
    },
    {
      question: "How often do you compare yourself to others on social media?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How has social media affected your sleep?",
      options: ["No effect", "Slightly affects it", "Sometimes keeps me up", "Often disrupts sleep", "Severely impacts sleep"]
    },
    {
      question: "How do you feel about your current social media usage?",
      options: ["Very satisfied", "Mostly satisfied", "Neutral", "Somewhat concerned", "Very concerned"]
    },
    {
      question: "How often do you feel FOMO (fear of missing out) from social media?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How has social media affected your real-world relationships?",
      options: ["Very positively", "Somewhat positively", "No effect", "Somewhat negatively", "Very negatively"]
    },
    {
      question: "How often do you use social media when you're supposed to be working or studying?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How do you feel after spending time on social media?",
      options: ["Energized and happy", "Mostly positive", "Neutral", "Somewhat drained", "Exhausted or upset"]
    },
    {
      question: "How often do you post content on social media?",
      options: ["Never", "Rarely", "Weekly", "Daily", "Multiple times daily"]
    },
    {
      question: "How important are likes, comments, and shares to you?",
      options: ["Not important at all", "Slightly important", "Moderately important", "Very important", "Extremely important"]
    },
    {
      question: "How often do you delete posts that don't get enough engagement?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How has social media affected your self-esteem?",
      options: ["Very positively", "Somewhat positively", "No effect", "Somewhat negatively", "Very negatively"]
    },
    {
      question: "How ready are you to make changes to your digital habits?",
      options: ["Not ready at all", "Slightly ready", "Somewhat ready", "Very ready", "Extremely ready"]
    }
  ]

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [step]: answer }
    setAnswers(newAnswers)
    
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      setIsComplete(true)
    }
  }

  const goToPreviousQuestion = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const resetPulseCheck = () => {
    setStep(1)
    setAnswers({})
    setIsComplete(false)
  }

  const getProfile = () => {
    const scores = Object.values(answers)
    const highUsage = scores.filter(s => 
      s && (s.includes("6-8 hours") || s.includes("More than 8 hours") || s.includes("Constantly"))
    ).length
    const anxiety = scores.filter(s => 
      s && (s.includes("anxious") || s.includes("Panicked") || s.includes("Very concerned"))
    ).length
    const awareness = scores.filter(s => 
      s && (s.includes("Very ready") || s.includes("Somewhat ready"))
    ).length
    
    if (highUsage >= 3) return "The Digital Dependent"
    if (anxiety >= 3) return "The Anxious Scroller"
    if (awareness >= 2) return "The Mindful User"
    return "The Balanced Explorer"
  }

  const getRecommendations = () => {
    const profile = getProfile()
    const recommendations = {
      "The Digital Dependent": {
        title: "Time for a Digital Detox",
        description: "Your usage patterns suggest a strong dependency on digital platforms. Consider implementing structured breaks and usage limits.",
        actions: [
          "Set specific times for social media use",
          "Use app timers to limit daily usage",
          "Create phone-free zones in your home",
          "Practice the 20-20-20 rule for screen breaks"
        ]
      },
      "The Anxious Scroller": {
        title: "Managing Digital Anxiety",
        description: "Social media seems to be affecting your mental well-being. Focus on mindful consumption and anxiety management.",
        actions: [
          "Unfollow accounts that trigger negative feelings",
          "Practice mindfulness before opening apps",
          "Set boundaries around news and comparison content",
          "Consider therapy or counseling support"
        ]
      },
      "The Mindful User": {
        title: "Building on Your Awareness",
        description: "You're already aware of your digital habits. Let's help you optimize them further.",
        actions: [
          "Experiment with digital wellness apps",
          "Create a personalized social media schedule",
          "Practice regular digital detox periods",
          "Share your strategies with friends and family"
        ]
      },
      "The Balanced Explorer": {
        title: "Maintaining Your Balance",
        description: "You seem to have a healthy relationship with social media. Keep up the good work!",
        actions: [
          "Continue monitoring your usage patterns",
          "Help others develop healthy digital habits",
          "Stay informed about digital wellness trends",
          "Regularly reassess your digital boundaries"
        ]
      }
    }
    return recommendations[profile] || recommendations["The Balanced Explorer"]
  }

  const getProgressPercentage = () => {
    return Math.round((step / questions.length) * 100)
  }

  if (isComplete) {
    const profile = getProfile()
    const recommendations = getRecommendations()
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <nav className="flex justify-between items-center p-6 bg-white border-b">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
          <div className="flex gap-2">
            <Button 
              onClick={resetPulseCheck}
              variant="outline"
            >
              Retake Assessment
            </Button>
          </div>
        </nav>
        
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Your Digital Wellness Report</h1>
            <p className="text-xl text-gray-600">Based on your responses, here's your personalized assessment</p>
          </div>
          
          <Card className="p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-900">
                Your Digital Profile: <span className="text-purple-600">{profile}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                {recommendations.description}
              </p>
              <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
                Readiness Level: {answers[15] && answers[15].includes("Very ready") ? "High" : answers[15] && answers[15].includes("Somewhat ready") ? "Medium" : "Building"}
              </Badge>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900 mb-4">{recommendations.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {recommendations.actions.map((action, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{action}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
        <div className="flex gap-2">
          {step > 1 && (
            <Button 
              onClick={goToPreviousQuestion} 
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
          )}
          <Button 
            onClick={() => setCurrentPage('home')} 
            variant="outline"
          >
            Exit
          </Button>
        </div>
      </nav>
      
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Digital Wellness Pulse Check</h1>
          <p className="text-gray-600">Answer honestly to get personalized insights about your digital habits</p>
        </div>
        
        <Card className="p-8">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Question {step} of {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  {getProgressPercentage()}%
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex gap-1">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      index + 1 < step 
                        ? 'bg-green-500' 
                        : index + 1 === step 
                          ? 'bg-blue-500' 
                          : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            <CardTitle className="text-2xl text-blue-900 mb-6 leading-relaxed">
              {questions[step - 1]?.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[step - 1]?.options.map((option, index) => {
                const isSelected = answers[step] === option
                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full text-left justify-start p-4 h-auto transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                        : 'hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        isSelected 
                          ? 'border-white bg-white' 
                          : 'border-gray-400'
                      }`}>
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <span className="flex-1">{option}</span>
                    </div>
                  </Button>
                )
              })}
            </div>
            
            {/* Show current answer if one is selected */}
            {answers[step] && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Your answer:</strong> {answers[step]}
                </p>
              </div>
            )}
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={goToPreviousQuestion}
                variant="outline"
                disabled={step === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {answers[step] && (
                <div 
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  {step < questions.length ? (
                    <>
                      <span>Next question in</span>
                      <div className="w-8 h-1 bg-blue-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-blue-600 animate-pulse"></div>
                      </div>
                    </>
                  ) : (
                    <span className="text-green-600 font-medium">
                      ✓ Assessment Complete - Generating Results...
                    </span>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Progress summary */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {Object.keys(answers).length} of {questions.length} questions answered
          </p>
        </div>
      </div>
    </div>
  )
}