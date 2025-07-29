@@ .. @@
   const PulseCheckPage = () => {
     const [step, setStep] = useState(1)
     const [answers, setAnswers] = useState({})
+    const [isComplete, setIsComplete] = useState(false)
 
     const questions = [
       {
@@ .. @@
     ]
 
     const handleAnswer = (answer) => {
-      const newAnswers = {...answers, [step]: answer}
+      const newAnswers = { ...answers, [step]: answer }
       setAnswers(newAnswers)
       
       if (step < questions.length) {
         setStep(step + 1)
       } else {
-        setStep('results')
+        setIsComplete(true)
       }
     }
 
+    const goToPreviousQuestion = () => {
+      if (step > 1) {
+        setStep(step - 1)
+      }
+    }
+
+    const resetPulseCheck = () => {
+      setStep(1)
+      setAnswers({})
+      setIsComplete(false)
+    }
+
     const getProfile = () => {
       const scores = Object.values(answers)
-      const highUsage = scores.filter(s => s.includes("6-8 hours") || s.includes("More than 8 hours") || s.includes("Constantly")).length
-      const anxiety = scores.filter(s => s.includes("anxious") || s.includes("Panicked") || s.includes("Very concerned")).length
-      const awareness = scores.filter(s => s.includes("Very ready") || s.includes("Somewhat ready")).length
+      const highUsage = scores.filter(s => 
+        s && (s.includes("6-8 hours") || s.includes("More than 8 hours") || s.includes("Constantly"))
+      ).length
+      const anxiety = scores.filter(s => 
+        s && (s.includes("anxious") || s.includes("Panicked") || s.includes("Very concerned"))
+      ).length
+      const awareness = scores.filter(s => 
+        s && (s.includes("Very ready") || s.includes("Somewhat ready"))
+      ).length
       
       if (highUsage >= 3) return "The Digital Dependent"
       if (anxiety >= 3) return "The Anxious Scroller"
@@ .. @@
       return recommendations[profile] || recommendations["The Balanced Explorer"]
     }
 
-    if (step === 'results') {
+    const getProgressPercentage = () => {
+      return Math.round((step / questions.length) * 100)
+    }
+
+    if (isComplete) {
       const profile = getProfile()
       const recommendations = getRecommendations()
       
@@ -1088,6 +1115,12 @@
             <nav className="flex justify-between items-center p-6 bg-white border-b">
               <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
+              <div className="flex gap-2">
+                <Button 
+                  onClick={resetPulseCheck}
+                  variant="outline"
+                >
+                  Retake Assessment
+                </Button>
+              </div>
             </nav>
             
             <div className="max-w-4xl mx-auto px-6 py-12">
@@ .. @@
               <Card className="p-8 mb-8">
                 <CardHeader>
                   <CardTitle className="text-2xl text-center text-blue-900">
-                    Your Digital Profile: {profile}
+                    Your Digital Profile: <span className="text-purple-600">{profile}</span>
                   </CardTitle>
                 </CardHeader>
                 <CardContent className="text-center">
@@ .. @@
                   </p>
                   <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
-                    Readiness Level: {answers[15]?.includes("Very ready") ? "High" : answers[15]?.includes("Somewhat ready") ? "Medium" : "Building"}
+                    Readiness Level: {answers[15] && answers[15].includes("Very ready") ? "High" : answers[15] && answers[15].includes("Somewhat ready") ? "Medium" : "Building"}
                   </Badge>
                 </CardContent>
               </Card>
@@ .. @@
         <nav className="flex justify-between items-center p-6 bg-white border-b">
           <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-900">MindSync</button>
-          {step > 1 && step !== 'results' && (
+          <div className="flex gap-2">
+            {step > 1 && (
+              <Button 
+                onClick={goToPreviousQuestion} 
+                variant="outline"
+                className="flex items-center gap-2"
+              >
+                <ArrowLeft className="w-4 h-4" />
+                Previous
+              </Button>
+            )}
             <Button 
-              onClick={() => setStep(step - 1)} 
+              onClick={() => setCurrentPage('home')} 
               variant="outline"
-              className="flex items-center gap-2"
             >
-              <ArrowLeft className="w-4 h-4" />
-              Previous
+              Exit
             </Button>
-          )}
+          </div>
         </nav>
         
         <div className="max-w-2xl mx-auto px-6 py-12">
@@ .. @@
           <Card className="p-8">
             <CardHeader>
               <div className="flex justify-between items-center mb-4">
-                <span className="text-sm text-gray-500">Question {step} of {questions.length}</span>
-                <div className="w-32 bg-gray-200 rounded-full h-2">
+                <span className="text-sm font-medium text-gray-600">
+                  Question {step} of {questions.length}
+                </span>
+                <div className="flex items-center gap-2">
+                  <div className="w-32 bg-gray-200 rounded-full h-2">
+                    <div 
+                      className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
+                      style={{ width: `${getProgressPercentage()}%` }}
+                    ></div>
+                  </div>
+                  <span className="text-xs font-medium text-blue-600">
+                    {getProgressPercentage()}%
+                  </span>
+                </div>
+              </div>
+              <div className="mb-4">
+                <div className="flex gap-1">
+                  {questions.map((_, index) => (
+                    <div
+                      key={index}
+                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
+                        index + 1 < step 
+                          ? 'bg-green-500' 
+                          : index + 1 === step 
+                            ? 'bg-blue-500' 
+                            : 'bg-gray-200'
+                      }`}
+                    />
+                  ))}
+                </div>
+              </div>
+              <CardTitle className="text-2xl text-blue-900 mb-6 leading-relaxed">
+                {questions[step - 1]?.question}
+              </CardTitle>
+            </CardHeader>
+            <CardContent>
+              <div className="space-y-3">
+                {questions[step - 1]?.options.map((option, index) => {
+                  const isSelected = answers[step] === option
+                  return (
+                    <Button
+                      key={index}
+                      onClick={() => handleAnswer(option)}
+                      variant={isSelected ? "default" : "outline"}
+                      className={`w-full text-left justify-start p-4 h-auto transition-all duration-200 ${
+                        isSelected 
+                          ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
+                          : 'hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm'
+                      }`}
+                    >
+                      <div className="flex items-center gap-3">
+                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
+                          isSelected 
+                            ? 'border-white bg-white' 
+                            : 'border-gray-400'
+                        }`}>
+                          {isSelected && (
+                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
+                          )}
+                        </div>
+                        <span className="flex-1">{option}</span>
+                      </div>
+                    </Button>
+                  )
+                })}
+              </div>
+              
+              {/* Show current answer if one is selected */}
+              {answers[step] && (
+                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
+                  <p className="text-sm text-blue-800">
+                    <strong>Your answer:</strong> {answers[step]}
+                  </p>
+                </div>
+              )}
+              
+              {/* Navigation buttons */}
+              <div className="flex justify-between mt-8">
+                <Button
+                  onClick={goToPreviousQuestion}
+                  variant="outline"
+                  disabled={step === 1}
+                  className="flex items-center gap-2"
+                >
+                  <ArrowLeft className="w-4 h-4" />
+                  Previous
+                </Button>
+                
+                {answers[step] && (
                   <div 
-                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
-                    style={{ width: `${(step / questions.length) * 100}%` }}
-                  ></div>
-                </div>
+                    className="flex items-center gap-2 text-sm text-gray-600"
+                  >
+                    {step < questions.length ? (
+                      <>
+                        <span>Next question in</span>
+                        <div className="w-8 h-1 bg-blue-200 rounded-full overflow-hidden">
+                          <div className="w-full h-full bg-blue-600 animate-pulse"></div>
+                        </div>
+                      </>
+                    ) : (
+                      <span className="text-green-600 font-medium">
+                        ✓ Assessment Complete - Generating Results...
+                      </span>
+                    )}
+                  </div>
+                )}
               </div>
-              <CardTitle className="text-2xl text-blue-900 mb-6">
-                {questions[step - 1].question}
-              </CardTitle>
-            </CardHeader>
-            <CardContent>
-              <div className="space-y-3">
-                {questions[step - 1].options.map((option, index) => (
-                  <Button
-                    key={index}
-                    onClick={() => handleAnswer(option)}
-                    variant="outline"
-                    className="w-full text-left justify-start p-4 h-auto hover:bg-blue-50 hover:border-blue-300"
-                  >
-                    {option}
-                  </Button>
-                ))}
-              </div>
             </CardContent>
           </Card>
+          
+          {/* Progress summary */}
+          <div className="mt-6 text-center">
+            <p className="text-sm text-gray-600">
+              {Object.keys(answers).length} of {questions.length} questions answered
+            </p>
+          </div>
         </div>
       </div>
     )
   }