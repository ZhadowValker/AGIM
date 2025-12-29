import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Trophy, RefreshCw, CheckCircle, XCircle, HelpCircle, ArrowRight, Brain, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "Who was swallowed by a great fish?",
    options: ["Moses", "Jonah", "David", "Elijah"],
    answer: 1,
    verse: "Jonah 1:17"
  },
  {
    id: 2,
    question: "What is the first book of the Bible?",
    options: ["Exodus", "Genesis", "Psalms", "Matthew"],
    answer: 1,
    verse: "Genesis 1:1"
  },
  {
    id: 3,
    question: "Who defeated the giant Goliath?",
    options: ["Saul", "Solomon", "David", "Samson"],
    answer: 2,
    verse: "1 Samuel 17:50"
  },
  {
    id: 4,
    question: "Where was Jesus born?",
    options: ["Nazareth", "Bethlehem", "Jerusalem", "Galilee"],
    answer: 1,
    verse: "Matthew 2:1"
  },
  {
    id: 5,
    question: "How many disciples did Jesus have?",
    options: ["7", "10", "12", "40"],
    answer: 2,
    verse: "Matthew 10:1"
  },
  {
    id: 6,
    question: "What is the longest book in the Bible?",
    options: ["Isaiah", "Psalms", "Jeremiah", "Genesis"],
    answer: 1,
    verse: "Psalms"
  },
  {
    id: 7,
    question: "Who received the Ten Commandments?",
    options: ["Abraham", "Moses", "Noah", "Adam"],
    answer: 1,
    verse: "Exodus 20"
  },
  {
    id: 8,
    question: "What was Paul's name before he became a Christian?",
    options: ["Simon", "Saul", "Stephen", "Silas"],
    answer: 1,
    verse: "Acts 13:9"
  },
  {
    id: 9,
    question: "On which day did God create man?",
    options: ["Third", "Fifth", "Sixth", "Seventh"],
    answer: 2,
    verse: "Genesis 1:26-31"
  },
  {
    id: 10,
    question: "Who denied Jesus three times?",
    options: ["Judas", "Peter", "Thomas", "James"],
    answer: 1,
    verse: "Matthew 26:69-75"
  }
];

const BibleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (isAnswerChecked) return;
    
    setSelectedOption(index);
    setIsAnswerChecked(true);

    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  const getFeedbackMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect Score! You're a Bible Scholar! 🌟";
    if (percentage >= 80) return "Excellent Work! You know your Bible well! 🎉";
    if (percentage >= 60) return "Good Job! Keep studying! 📚";
    return "Keep Reading & Try Again! 🙏";
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Helmet>
        <title>Bible Quiz - Test Your Knowledge | Faith Radio</title>
        <meta name="description" content="Test your biblical knowledge with our interactive Bible Quiz. Learn scripture, challenge yourself, and grow in faith!" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <Brain className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bible Knowledge Quiz</h1>
            <p className="text-xl text-blue-100">
              Challenge yourself and test your knowledge of Scripture, characters, and events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-[600px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {showScore ? (
                /* Results View */
                <motion.div
                  key="score"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
                  
                  <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-12 h-12 text-yellow-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-6">{getFeedbackMessage()}</p>
                  
                  <div className="text-6xl font-bold text-gray-900 mb-4">
                    {score}<span className="text-2xl text-gray-400">/{questions.length}</span>
                  </div>
                  <p className="text-gray-600 mb-8">
                    You scored {Math.round((score / questions.length) * 100)}%
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={resetQuiz}
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    >
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Play Again
                    </Button>
                    <Link to="/media-guidance">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="px-8"
                      >
                        <BookOpen className="w-5 h-5 mr-2" />
                        Study More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                /* Question View */
                <motion.div
                  key="question"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  {/* Progress Bar */}
                  <div className="bg-gray-100 h-3 w-full">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-sm font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
                        Question {currentQuestion + 1}/{questions.length}
                      </span>
                      <HelpCircle className="w-6 h-6 text-gray-300" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-4 mb-8">
                      {questions[currentQuestion].options.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const isCorrect = index === questions[currentQuestion].answer;
                        const showResult = isAnswerChecked;
                        
                        let buttonStyle = "bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700";
                        let icon = <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs font-bold">{String.fromCharCode(65 + index)}</div>;

                        if (showResult) {
                          if (isCorrect) {
                            buttonStyle = "bg-green-50 border-2 border-green-500 text-green-700";
                            icon = <CheckCircle className="w-6 h-6 text-green-500" />;
                          } else if (isSelected) {
                            buttonStyle = "bg-red-50 border-2 border-red-500 text-red-700";
                            icon = <XCircle className="w-6 h-6 text-red-500" />;
                          } else {
                            buttonStyle = "bg-gray-50 border-2 border-gray-200 text-gray-400 opacity-60";
                          }
                        } else if (isSelected) {
                          buttonStyle = "bg-blue-50 border-2 border-blue-500 text-blue-700";
                        }

                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswerOptionClick(index)}
                            disabled={isAnswerChecked}
                            className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-200 text-left font-medium text-lg ${buttonStyle}`}
                          >
                            <span>{option}</span>
                            {icon}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswerChecked && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100"
                      >
                        <div className="text-sm text-gray-600">
                          <span className="font-bold text-gray-900 block mb-1">Did you know?</span>
                          Reference: <span className="italic">{questions[currentQuestion].verse}</span>
                        </div>
                        <Button 
                          onClick={handleNextQuestion}
                          className="bg-blue-600 hover:bg-blue-700 text-white min-w-[140px]"
                        >
                          {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Learn More?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our Media Guidance section for deep dives into scripture, study guides, and more resources.
            </p>
            <Link to="/media-guidance">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Explore Resources
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BibleQuiz;