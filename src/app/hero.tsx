"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Select, Option } from "@material-tailwind/react";

import TypingIndicator from "@/components/typing-indicator";
import { Input } from "@material-tailwind/react";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "ai";
  text: string;
  isTyping?: boolean;
  time?: Date;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionAlternative {
    readonly confidence: number;
    readonly transcript: string;
  }

  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string;
    readonly message: string;
  }
}

type SpeechRecognition = any;

function Hero() {
  const ai_endpoint = process.env.NEXT_PUBLIC_FLASK_AI_ENDPOINT_CHAT as string;

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.continuous = false;

      recognition.onstart = () => {
        console.log("Microphone listening...");
        setIsListening(true);
      };

      recognition.onend = () => {
        console.log("Microphone stopped.");
        setIsListening(false);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        console.log("Transcript:", transcript);
        setInput(transcript);

        if (event.results[event.results.length - 1].isFinal) {
          setTimeout(() => {
            document.getElementById("hidden-submit-btn")?.click();
          }, 300);
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      console.warn("Speech recognition not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    } else {
      console.log("Already listening...");
    }
  };

  const typeText = (fullText: string, callback: (text: string) => void) => {
    let index = 0;
    const speed = 20;

    try {
      speak(fullText);
    } catch (error) {
      console.warn("Speech synthesis failed or not supported:", error);
    }

    const type = () => {
      if (index <= fullText.length) {
        callback(fullText.slice(0, index));
        index++;
        setTimeout(type, speed);
      }
    };

    type();
  };

  const speak = (text: string) => {
    const synth = window.speechSynthesis;

    const speakWithVoice = () => {
      const voices = synth.getVoices();
      const desiredVoiceName = "Google UK English Male";
      const maleVoice = voices.find(
        (v) => v.name.toLowerCase() === desiredVoiceName.toLowerCase()
      );

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-GB";

      if (maleVoice) {
        utterance.voice = maleVoice;
      } else {
        console.warn(
          `Voice "${desiredVoiceName}" not found. Using default voice.`
        );
      }

      utterance.pitch = 0.7;
      utterance.rate = 1.09;

      synth.speak(utterance);
    };

    if (synth.getVoices().length === 0) {
      synth.onvoiceschanged = () => {
        synth.onvoiceschanged = null;
        speakWithVoice();
      };
    } else {
      speakWithVoice();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const now = new Date();

    const userMessage: Message = {
      sender: "user",
      text: input,
      time: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(ai_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMessage.text }),
      });

      const data = await res.json();
      const fullAIResponse = data.response || "No response from AI.";

      const aiPlaceholder: Message = {
        sender: "ai",
        text: "",
        isTyping: true,
        time: new Date(),
      };

      setMessages((prev) => [...prev, aiPlaceholder]);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      typeText(fullAIResponse, (typedText) => {
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last && last.sender === "ai") {
            updated[updated.length - 1] = {
              ...last,
              text: typedText,
              isTyping: false,
            };
          }
          return updated;
        });
      });
    } catch {
      const errorMessage: Message = {
        sender: "ai",
        text: "Error fetching AI response.",
        time: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const fullText = "SOFTWARE DEVELOPER";
  const [displayedText, setDisplayedText] = useState("");

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <section className="flex flex-col lg:mb-5 xl:px-[300px]">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-1 text-blue-500">
              <Image
                width={1024}
                height={1024}
                alt="team work"
                src="/image/ai-bot.webp"
                className="h-[3rem] w-auto mx-auto mr-2 rounded-xl object-cover"
                priority
              />
              <small>Hi,</small> AI JEM <small>here!</small>
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden rounded-lg p-0">
            {messages.length === 0 && (
              <p className="text-center text-gray-400">
                Ask me anything about myself, work and experiences...
              </p>
            )}
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  x: msg.sender === "user" ? 50 : -50,
                  scale: 0.95,
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender !== "user" && (
                  <Image
                    src="/image/ai-bot.webp"
                    alt="AI"
                    width={32}
                    height={32}
                    className="mr-2 mb-auto rounded-full"
                  />
                )}

                <div className="flex flex-col max-w-[70%]">
                  <div
                    className={`px-4 py-2 rounded-lg text-[14px] ${
                      msg.sender === "user"
                        ? "bg-black text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    {msg.isTyping ? <TypingIndicator /> : msg.text}
                  </div>

                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-400 self-end">
                    <span>
                      {msg.time instanceof Date
                        ? msg.time.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                        : ""}
                    </span>
                    {msg.sender === "user" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <Image
                    src="/image/user.png?new"
                    alt="User"
                    width={32}
                    height={32}
                    className="ml-2 mb-auto rounded-full"
                  />
                )}
              </motion.div>
            ))}

            <div ref={chatEndRef} />
          </div>

          {isListening && (
            <div className="flex items-center text-green-500 mb-2 text-sm">
              🎙️ Listening...
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex gap-2 items-center"
          >
            <Input
              label="Type Something..."
              crossOrigin=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1"
            />
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              type="button"
              onClick={startListening}
              disabled={isListening}
              className="text-white p-2 rounded bg-blue-700 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </Button>
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              type="submit"
              disabled={loading}
              className="text-white p-2 rounded disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </Button>
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              id="hidden-submit-btn"
              type="submit"
              style={{ display: "none" }}
            >
              Auto Submit
            </Button>
          </form>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
          <div className="row-start-1 md:ml-[100px] lg:row-auto">
            <hr className="mb-4 mt-10 lg:hidden" />
            <h1 className="text-4xl font-bold mb-1">Jemuel Cadayona</h1>
            <p className="text-[16px] font-mono">{displayedText}</p>
            <hr className="my-4 md:mr-[100px]" />
            <div className="flex items-center gap-2 mb-2">
              <MapPinIcon className="w-[20px] h-auto" />
              <h4>Provincial Systems A.O.</h4>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-[20px] h-auto" />
              <h4>Software Dev. | Consultant</h4>
            </div>
            <hr className="my-4 md:mr-[100px]" />
            <div className="flex items-center gap-2 mb-2">
              <MapPinIcon className="w-[20px] h-auto" />
              <p className="font-thin text-[14px]">
                Capitol Site, Southern Leyte PH
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <AcademicCapIcon className="w-[20px] h-auto" />
              <p className="font-thin text-[14px]">
                Graduated, Cum Laude (BSIT)
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FolderIcon className="w-[20px] h-auto" />
              <p className="font-thin text-[14px] underline underline-offset-4">
                <a
                  href="/resume/Cadayona Resume - June 21, 2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              width={1024}
              height={1024}
              alt="team work"
              src="/image/me-2.png"
              className="h-[30rem] w-auto mx-auto rounded-xl object-cover"
              priority
            />
            <div className="flex gap-4 mt-6">
              <Button
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="px-6 py-2"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                variant="outlined"
                className="px-6 py-2"
              >
                <a href="#commissions">Commissions</a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* GitHub Contributions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="mt-16 container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>

          <div className="mb-6 w-48">
            <Select
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              id="year"
              label="Select Year"
              value={String(year)}
              onChange={(val) => setYear(Number(val))}
            >
              {years.map((yr) => (
                <Option key={yr} value={String(yr)}>
                  {yr}
                </Option>
              ))}
            </Select>
          </div>

          <GitHubCalendar
            username="cdynjm"
            year={year}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </motion.div>
    </header>
  );
}

export default Hero;
