"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function QuizClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, any>>({})
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
  const [birthMonth, setBirthMonth] = useState<string>("")
  const [birthDay, setBirthDay] = useState<string>("")
  const [birthYear, setBirthYear] = useState<string>("")
  const [birthHour, setBirthHour] = useState<string>("")
  const [birthMinute, setBirthMinute] = useState<string>("")
  const [birthPeriod, setBirthPeriod] = useState<string>("")
  const [birthLocation, setBirthLocation] = useState<string>("")
  const [progress, setProgress] = useState(0)
  const [selectedGender, setSelectedGender] = useState<string>("")
  const [selectedPartnerGender, setSelectedPartnerGender] = useState<string>("")
  const [partnerBirthMonth, setPartnerBirthMonth] = useState<string>("")
  const [partnerBirthDay, setPartnerBirthDay] = useState<string>("")
  const [partnerBirthYear, setPartnerBirthYear] = useState<string>("")
  const [partnerBirthHour, setPartnerBirthHour] = useState<string>("")
  const [partnerBirthMinute, setPartnerBirthMinute] = useState<string>("")
  const [partnerBirthPeriod, setPartnerBirthPeriod] = useState<string>("")
  const [partnerBirthLocation, setPartnerBirthLocation] = useState<string>("")
  const [partnerLogicEmotion, setPartnerLogicEmotion] = useState<string>("")
  const [loveLanguage, setLoveLanguage] = useState<string>("")
  const [compatibilityProgress, setCompatibilityProgress] = useState(0)
  const [additionalGoals, setAdditionalGoals] = useState<string[]>([])
  const [curiosityAgreement, setCuriosityAgreement] = useState<string>("")
  const [lifeEventDates, setLifeEventDates] = useState<string[]>([])
  const [updateFrequency, setUpdateFrequency] = useState<string>("")
  const [learningTopics, setLearningTopics] = useState<string[]>([])
  const [analysisProgress, setAnalysisProgress] = useState({
    birthChart: 0,
    relationshipGuidance: 0,
    talentsStrengths: 0,
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const totalSteps = 29
  const router = useRouter()

  const testimonials = [
    {
      title: "Love daily horoscopes",
      content: "I can't leave the house without checking daily horoscopes, haha",
      author: "jp3_6",
    },
    {
      title: "Thank you",
      content: "Having my Venus in the 12th house explained a lot about my difficult love life.",
      author: "monamonamo",
    },
    {
      title: "Explained a lot",
      content: "I had a big 'ohh...' moment when I learned why I'm attracted to Leos.",
      author: "stefana_w",
    },
  ]

  const additionalGoalsOptions = [
    {
      id: "stronger-friendships",
      label: "Build stronger friendships",
      icon: "🤝",
    },
    {
      id: "understand-myself",
      label: "Understand myself better",
      icon: "🔍",
    },
    {
      id: "life-path-purpose",
      label: "Discover my life path & purpose",
      icon: "🗺️",
    },
    {
      id: "grow-spiritually",
      label: "Grow spiritually",
      icon: "🧘",
    },
    {
      id: "find-happiness",
      label: "Find happiness",
      icon: "✨",
    },
    {
      id: "improve-finances",
      label: "Improve finances",
      icon: "💰",
    },
    {
      id: "successful-career",
      label: "Have a successful career",
      icon: "📈",
    },
  ]

  const curiosityOptions = [
    {
      id: "strongly-agree",
      label: "Strongly agree",
      icon: "✅",
    },
    {
      id: "somewhat-agree",
      label: "Somewhat agree",
      icon: "❓",
    },
    {
      id: "disagree",
      label: "Disagree",
      icon: "❌",
    },
  ]

  const lifeEventOptions = [
    {
      id: "conceive-child",
      label: "When is the best time to conceive a child",
      icon: "👶",
    },
    {
      id: "resolve-conflicts",
      label: "Best dates for resolving conflicts",
      icon: "💬",
    },
    {
      id: "career-changes",
      label: "Key dates for career changes",
      icon: "💼",
    },
    {
      id: "meet-perfect-match",
      label: "When will I meet my perfect match",
      icon: "💑",
    },
    {
      id: "start-relationship",
      label: "Best time to start a new relationship",
      icon: "❤️",
    },
    {
      id: "other",
      label: "Other",
      icon: "🤔",
    },
  ]

  const updateFrequencyOptions = [
    {
      id: "daily",
      label: "Daily",
      icon: "😊",
    },
    {
      id: "weekly",
      label: "Weekly",
      icon: "😄",
    },
    {
      id: "monthly",
      label: "Monthly",
      icon: "🙂",
    },
  ]

  const learningTopicsOptions = [
    {
      id: "tarot-cards",
      label: "Tarot cards",
      icon: "♠️",
    },
    {
      id: "numerology",
      label: "Numerology",
      icon: "🔢",
    },
    {
      id: "palmistry",
      label: "Palmistry",
      icon: "✋",
    },
    {
      id: "crystals",
      label: "Crystals",
      icon: "💎",
    },
    {
      id: "divination",
      label: "Divination",
      icon: "🔮",
    },
    {
      id: "none-of-above",
      label: "None of the above",
      icon: "🤷",
    },
  ]

  useEffect(() => {
    if (currentStep === 13) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setTimeout(() => {
              setCurrentStep(14)
            }, 2000)
            return 100
          }
          return prev + 1
        })
      }, 50)

      return () => clearInterval(timer)
    }

    if (currentStep === 21) {
      const timer = setInterval(() => {
        setCompatibilityProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setTimeout(() => {
              setCurrentStep(22)
            }, 2000)
            return 100
          }
          return prev + 1
        })
      }, 50)

      return () => clearInterval(timer)
    }

    if (currentStep === 29) {
      let phase = 0
      const timer = setInterval(() => {
        if (phase === 0) {
          setAnalysisProgress((prev) => {
            const newProgress = Math.min(prev.birthChart + 2, 100)
            if (newProgress === 100) {
              phase = 1
              setCurrentTestimonial(0)
            }
            return { ...prev, birthChart: newProgress }
          })
        } else if (phase === 1) {
          setAnalysisProgress((prev) => {
            const newProgress = Math.min(prev.relationshipGuidance + 2, 100)
            if (newProgress === 100) {
              phase = 2
              setCurrentTestimonial(1)
            }
            return { ...prev, relationshipGuidance: newProgress }
          })
        } else if (phase === 2) {
          setAnalysisProgress((prev) => {
            const newProgress = Math.min(prev.talentsStrengths + 2, 100)
            if (newProgress === 100) {
              clearInterval(timer)
              setCurrentTestimonial(2)
              setTimeout(() => {
                console.log("Analysis completed!")
              }, 3000)
            }
            return { ...prev, talentsStrengths: newProgress }
          })
        }
      }, 100)

      return () => clearInterval(timer)
    }
  }, [currentStep])

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)
    setQuizAnswers((prev) => ({ ...prev, astrologyLevel: level }))
    setTimeout(() => {
      setCurrentStep(3)
    }, 300)
  }

  const handleBack = () => {
    if (currentStep === 1) {
      router.push("/")
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleContinue = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goalId)) {
        return prev.filter((id) => id !== goalId)
      } else {
        return [...prev, goalId]
      }
    })
  }

  const handleGoalsContinue = () => {
    if (selectedGoals.length > 0) {
      setQuizAnswers((prev) => ({ ...prev, relationshipGoals: selectedGoals }))
      setCurrentStep(6)
    }
  }

  const handleAdditionalGoalToggle = (goalId: string) => {
    setAdditionalGoals((prev) => {
      if (prev.includes(goalId)) {
        return prev.filter((id) => id !== goalId)
      } else {
        return [...prev, goalId]
      }
    })
  }

  const handleAdditionalGoalsContinue = () => {
    if (additionalGoals.length > 0) {
      setQuizAnswers((prev) => ({ ...prev, additionalGoals: additionalGoals }))
      setCurrentStep(25)
    }
  }

  const handleValueToggle = (valueId: string) => {
    setSelectedValues((prev) => {
      if (prev.includes(valueId)) {
        return prev.filter((id) => id !== valueId)
      } else {
        return [...prev, valueId]
      }
    })
  }

  const handleValuesContinue = () => {
    if (selectedValues.length > 0) {
      setQuizAnswers((prev) => ({ ...prev, relationshipValues: selectedValues }))
      setCurrentStep(8)
    }
  }

  const progressPercentage = (currentStep / totalSteps) * 100

  const levels = [
    {
      id: "beginner",
      label: "Beginner",
      icon: "👶",
      description: "New to astrology",
    },
    {
      id: "intermediate",
      label: "Intermediate",
      icon: "⚡",
      description: "Some knowledge of astrology",
    },
    {
      id: "expert",
      label: "Expert",
      icon: "🎓",
      description: "Advanced astrology knowledge",
    },
  ]

  const relationshipOptions = [
    {
      id: "single",
      label: "Single",
      icon: "😊",
    },
    {
      id: "single-crush",
      label: "Single, but have a crush",
      icon: "🥰",
    },
    {
      id: "dating",
      label: "Dating",
      icon: "💖",
    },
    {
      id: "living-together",
      label: "Living together",
      icon: "🏠",
    },
    {
      id: "engaged",
      label: "Engaged",
      icon: "💍",
    },
    {
      id: "married",
      label: "Married",
      icon: "❤️",
    },
    {
      id: "complicated",
      label: "It's complicated",
      icon: "💔",
    },
  ]

  const relationshipGoals = [
    {
      id: "perfect-partner",
      label: "Find my perfect partner",
      icon: "👫",
    },
    {
      id: "check-compatibility",
      label: "Check compatibility",
      icon: "🍀",
    },
    {
      id: "improve-sexual-life",
      label: "Improve my sexual life",
      icon: "💖",
    },
    {
      id: "find-true-love",
      label: "Find my true love",
      icon: "❤️",
    },
    {
      id: "get-married",
      label: "Get married",
      icon: "💍",
    },
    {
      id: "make-crush-fall",
      label: "Make my crush fall in love with me",
      icon: "💖",
    },
    {
      id: "other",
      label: "Other",
      icon: "🤔",
    },
  ]

  const relationshipValues = [
    {
      id: "mutual-support",
      label: "Mutual support",
      icon: "👫",
    },
    {
      id: "intimacy",
      label: "Intimacy",
      icon: "💖",
    },
    {
      id: "safety",
      label: "Safety",
      icon: "🔒",
    },
    {
      id: "having-family",
      label: "Having a family",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      id: "emotional-connection",
      label: "Emotional connection",
      icon: "💖",
    },
    {
      id: "beautiful-memories",
      label: "Beautiful memories",
      icon: "❤️",
    },
  ]

  const loveLifeEmotions = [
    {
      id: "loved",
      label: "Loved",
      icon: "🥰",
    },
    {
      id: "satisfied",
      label: "Satisfied",
      icon: "😌",
    },
    {
      id: "uncertain",
      label: "Uncertain",
      icon: "🤔",
    },
    {
      id: "tired",
      label: "Tired",
      icon: "😴",
    },
    {
      id: "anxious",
      label: "Anxious",
      icon: "😰",
    },
    {
      id: "disappointed",
      label: "Disappointed",
      icon: "😞",
    },
  ]

  const genderOptions = [
    {
      id: "male",
      label: "Male",
      icon: "👨",
    },
    {
      id: "female",
      label: "Female",
      icon: "👩",
    },
  ]

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())
  const years = Array.from({ length: 80 }, (_, i) => (2024 - i).toString())
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"))
  const periods = ["AM", "PM"]

  const getZodiacSign = (month: string, day: string) => {
    const monthNum = months.indexOf(month) + 1
    const dayNum = Number.parseInt(day)

    if ((monthNum === 3 && dayNum >= 21) || (monthNum === 4 && dayNum <= 19)) return "aries"
    if ((monthNum === 4 && dayNum >= 20) || (monthNum === 5 && dayNum <= 20)) return "taurus"
    if ((monthNum === 5 && dayNum >= 21) || (monthNum === 6 && dayNum <= 20)) return "gemini"
    if ((monthNum === 6 && dayNum >= 21) || (monthNum === 7 && dayNum <= 22)) return "cancer"
    if ((monthNum === 7 && dayNum >= 23) || (monthNum === 8 && dayNum <= 22)) return "leo"
    if ((monthNum === 8 && dayNum >= 23) || (monthNum === 9 && dayNum <= 22)) return "virgo"
    if ((monthNum === 9 && dayNum >= 23) || (monthNum === 10 && dayNum <= 22)) return "libra"
    if ((monthNum === 10 && dayNum >= 23) || (monthNum === 11 && dayNum <= 21)) return "scorpio"
    if ((monthNum === 11 && dayNum >= 22) || (monthNum === 12 && dayNum <= 21)) return "sagittarius"
    if ((monthNum === 12 && dayNum >= 22) || (monthNum === 1 && dayNum <= 19)) return "capricorn"
    if ((monthNum === 1 && dayNum >= 20) || (monthNum === 2 && dayNum <= 18)) return "aquarius"
    if ((monthNum === 2 && dayNum >= 19) || (monthNum === 3 && dayNum <= 20)) return "pisces"

    return "sagittarius"
  }

  const zodiacSigns = {
    aries: {
      name: "Aries",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Aries, you are bold and ambitious, with a natural leadership quality and pioneering spirit.`,
      svg: <Image src="/aries.svg" alt="Aries constellation" width={364} height={179} className="mx-auto" />,
    },
    taurus: {
      name: "Taurus",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Taurus, you are reliable and practical, with a love for comfort and a strong determination.`,
      svg: <Image src="/taurus.svg" alt="Taurus constellation" width={364} height={179} className="mx-auto" />,
    },
    gemini: {
      name: "Gemini",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Gemini, you are curious and adaptable, with excellent communication skills and a dual nature.`,
      svg: <Image src="/gemini.svg" alt="Gemini constellation" width={364} height={179} className="mx-auto" />,
    },
    cancer: {
      name: "Cancer",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Cancer, you are nurturing and intuitive, with strong emotional intelligence and protective instincts.`,
      svg: <Image src="/cancer.svg" alt="Cancer constellation" width={364} height={179} className="mx-auto" />,
    },
    leo: {
      name: "Leo",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Leo, you are confident and charismatic, with natural leadership abilities and a generous heart.`,
      svg: <Image src="/leo.svg" alt="Leo constellation" width={364} height={179} className="mx-auto" />,
    },
    virgo: {
      name: "Virgo",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Virgo, you are analytical and practical, with attention to detail and a desire for perfection.`,
      svg: <Image src="/virgo.svg" alt="Virgo constellation" width={364} height={179} className="mx-auto" />,
    },
    libra: {
      name: "Libra",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Libra, you are diplomatic and fair-minded, with a natural sense of balance and harmony.`,
      svg: <Image src="/libra.svg" alt="Libra constellation" width={364} height={179} className="mx-auto" />,
    },
    scorpio: {
      name: "Scorpio",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Scorpio, you are intense and passionate, with deep emotional insight and transformative power.`,
      svg: <Image src="/scorpio.svg" alt="Scorpio constellation" width={364} height={179} className="mx-auto" />,
    },
    sagittarius: {
      name: "Sagittarius",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Sagittarius, you are adventurous and optimistic, with a love for exploration and a natural curiosity about the world.`,
      svg: (
        <Image src="/sagittarius.svg" alt="Sagittarius constellation" width={364} height={179} className="mx-auto" />
      ),
    },
    capricorn: {
      name: "Capricorn",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Capricorn, you are ambitious and disciplined, with strong determination and practical wisdom.`,
      svg: <Image src="/capricorn.svg" alt="Capricorn constellation" width={364} height={179} className="mx-auto" />,
    },
    aquarius: {
      name: "Aquarius",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Aquarius, you are independent and innovative, with humanitarian ideals and original thinking.`,
      svg: <Image src="/aquarius.svg" alt="Aquarius constellation" width={364} height={179} className="mx-auto" />,
    },
    pisces: {
      name: "Pisces",
      description: `As a${selectedGender ? ` ${selectedGender}` : ""} Pisces, you are compassionate and intuitive, with deep empathy and artistic sensibilities.`,
      svg: <Image src="/pisces.svg" alt="Pisces constellation" width={364} height={179} className="mx-auto" />,
    },
  }

  const handleBirthDateContinue = () => {
    if (birthMonth && birthDay && birthYear) {
      setQuizAnswers((prev) => ({
        ...prev,
        birthDate: { month: birthMonth, day: birthDay, year: birthYear },
      }))
      setCurrentStep(11)
    }
  }

  const handleBirthTimeContinue = () => {
    if (birthHour && birthMinute && birthPeriod) {
      setQuizAnswers((prev) => ({
        ...prev,
        birthTime: { hour: birthHour, minute: birthMinute, period: birthPeriod },
      }))
      setCurrentStep(12)
    }
  }

  const handleDontKnowTime = () => {
    setQuizAnswers((prev) => ({
      ...prev,
      birthTime: "unknown",
    }))
    setCurrentStep(12)
  }

  const handleBirthLocationContinue = () => {
    if (birthLocation.trim()) {
      setQuizAnswers((prev) => ({
        ...prev,
        birthLocation: birthLocation.trim(),
      }))
      setCurrentStep(13)
    }
  }

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender)
    setQuizAnswers((prev) => ({ ...prev, gender: gender }))
    setTimeout(() => {
      setCurrentStep(2)
    }, 300)
  }

  const handlePartnerGenderSelect = (gender: string) => {
    setSelectedPartnerGender(gender)
    setQuizAnswers((prev) => ({ ...prev, partnerGender: gender }))
    setTimeout(() => {
      setCurrentStep(16)
    }, 300)
  }

  const handlePartnerBirthDateContinue = () => {
    if (partnerBirthMonth && partnerBirthDay && partnerBirthYear) {
      setQuizAnswers((prev) => ({
        ...prev,
        partnerBirthDate: { month: partnerBirthMonth, day: partnerBirthDay, year: partnerBirthYear },
      }))
      setCurrentStep(17)
    }
  }

  const handlePartnerBirthTimeContinue = () => {
    if (partnerBirthHour && partnerBirthMinute && partnerBirthPeriod) {
      setQuizAnswers((prev) => ({
        ...prev,
        partnerBirthTime: { hour: partnerBirthHour, minute: partnerBirthMinute, period: partnerBirthPeriod },
      }))
      setCurrentStep(18)
    }
  }

  const handlePartnerDontKnowTime = () => {
    setQuizAnswers((prev) => ({
      ...prev,
      partnerBirthTime: "unknown",
    }))
    setCurrentStep(18)
  }

  const handlePartnerBirthLocationContinue = () => {
    if (partnerBirthLocation.trim()) {
      setQuizAnswers((prev) => ({
        ...prev,
        partnerBirthLocation: partnerBirthLocation.trim(),
      }))
      setCurrentStep(19)
    }
  }

  const handlePartnerDontKnowLocation = () => {
    setQuizAnswers((prev) => ({
      ...prev,
      partnerBirthLocation: "unknown",
    }))
    setCurrentStep(19)
  }

  const handlePartnerLogicEmotionSelect = (choice: string) => {
    setPartnerLogicEmotion(choice)
    setQuizAnswers((prev) => ({ ...prev, partnerLogicEmotion: choice }))
    setTimeout(() => {
      setCurrentStep(20)
    }, 300)
  }

  const handleLoveLanguageSelect = (language: string) => {
    setLoveLanguage(language)
    setQuizAnswers((prev) => ({ ...prev, loveLanguage: language }))
    setTimeout(() => {
      setCurrentStep(21)
    }, 300)
  }

  const handleCuriositySelect = (agreement: string) => {
    setCuriosityAgreement(agreement)
    setQuizAnswers((prev) => ({ ...prev, curiosityAgreement: agreement }))
    setTimeout(() => {
      setCurrentStep(26)
    }, 300)
  }

  const handleLifeEventToggle = (eventId: string) => {
    setLifeEventDates((prev) => {
      if (prev.includes(eventId)) {
        return prev.filter((id) => id !== eventId)
      } else {
        return [...prev, eventId]
      }
    })
  }

  const handleLifeEventsContinue = () => {
    if (lifeEventDates.length > 0) {
      setQuizAnswers((prev) => ({ ...prev, lifeEventDates: lifeEventDates }))
      setCurrentStep(27)
    }
  }

  const handleUpdateFrequencySelect = (frequency: string) => {
    setUpdateFrequency(frequency)
    setQuizAnswers((prev) => ({ ...prev, updateFrequency: frequency }))
    setTimeout(() => {
      setCurrentStep(28)
    }, 300)
  }

  const handleLearningTopicToggle = (topicId: string) => {
    setLearningTopics((prev) => {
      if (prev.includes(topicId)) {
        return prev.filter((id) => id !== topicId)
      } else {
        return [...prev, topicId]
      }
    })
  }

  const handleLearningTopicsContinue = () => {
    if (learningTopics.length > 0) {
      setQuizAnswers((prev) => ({ ...prev, learningTopics: learningTopics }))
      setCurrentStep(29)
    }
  }

  const logicEmotionOptions = [
    {
      id: "logic",
      label: "Logic",
      icon: "🧠",
    },
    {
      id: "emotions",
      label: "Emotions",
      icon: "❤️",
    },
    {
      id: "both",
      label: "A bit of both",
      icon: "⚖️",
    },
  ]

  const loveLanguageOptions = [
    {
      id: "words-of-affirmation",
      label: "Words of affirmation",
      icon: "❤️",
    },
    {
      id: "quality-time",
      label: "Quality time together",
      icon: "🎊",
    },
    {
      id: "physical-touch",
      label: "Physical touch",
      icon: "🤝",
    },
    {
      id: "gifts",
      label: "Gifts",
      icon: "🎁",
    },
    {
      id: "acts-of-service",
      label: "Acts of service",
      icon: "🤲",
    },
  ]

  // Step 1: Gender Selection
  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Button>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-xl font-semibold text-gray-800">MOONGRADE</span>
              </div>

              <div className="text-sm text-gray-600 font-medium">
                {currentStep}/{totalSteps}
              </div>
            </div>

            <div className="mt-4">
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is your gender?</h1>
            </div>

            <div className="space-y-4">
              {genderOptions.map((gender) => (
                <Card
                  key={gender.id}
                  className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] border-2 ${
                    selectedGender === gender.id
                      ? "border-purple-400 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleGenderSelect(gender.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{gender.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{gender.label}</h3>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-colors ${
                        selectedGender === gender.id ? "border-purple-400 bg-purple-400" : "border-gray-300"
                      }`}
                    >
                      {selectedGender === gender.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Step 2: Astrology Level Selection
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Button>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-xl font-semibold text-gray-800">MOONGRADE</span>
              </div>

              <div className="text-sm text-gray-600 font-medium">
                {currentStep}/{totalSteps}
              </div>
            </div>

            <div className="mt-4">
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's your level of astrology knowledge?
              </h1>
              <p className="text-lg text-gray-600">
                This helps us personalize your experience
              </p>
            </div>

            <div className="space-y-4">
              {levels.map((level) => (
                <Card
                  key={level.id}
                  className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] border-2 ${
                    selectedLevel === level.id
                      ? "border-purple-400 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleLevelSelect(level.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{level.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{level.label}</h3>
                      <p className="text-sm text-gray-600">{level.description}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-colors ${
                        selectedLevel === level.id ? "border-purple-400 bg-purple-400" : "border-gray-300"
                      }`}
                    >
                      {selectedLevel === level.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Return a default fallback for any unhandled steps
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Quiz Page</h1>
        <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
        <Button onClick={handleBack} className="mt-4">Voltar</Button>
      </div>
    </div>
  )
}