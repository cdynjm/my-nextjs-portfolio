"use client";

import Image from "next/image";
import {
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import GitHubCalendar from "react-github-calendar";

import TypingIndicator from "@/components/typing-indicator";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

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
        setIsListening(true);
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
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
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) recognitionRef.current.start();
  };

  const typeText = (fullText: string, callback: (text: string) => void) => {
    let index = 0;
    const speed = 20;
    try {
      speak(fullText);
    } catch (error) {
      console.warn("Speech synthesis failed:", error);
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
      const maleVoice = voices.find(
        (v) => v.name.toLowerCase() === "google uk english male",
      );
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-GB";
      if (maleVoice) utterance.voice = maleVoice;
      utterance.pitch = 0.7;
      utterance.rate = 1.09;
      synth.speak(utterance);
    };
    if (synth.getVoices().length === 0) {
      synth.onvoiceschanged = () => {
        synth.onvoiceschanged = null;
        speakWithVoice();
      };
    } else speakWithVoice();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const now = new Date();
    const userMessage: Message = { sender: "user", text: input, time: now };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    let waitTimeout: NodeJS.Timeout | null = null;
    try {
      const fetchPromise = fetch(ai_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMessage.text }),
      });
      waitTimeout = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "⏳ Please wait while the AI processes your request for the first time...",
            time: new Date(),
          },
        ]);
      }, 3000);
      const res = await fetchPromise;
      const data = await res.json();
      const fullAIResponse = data.response || "No response from AI.";
      if (waitTimeout) clearTimeout(waitTimeout);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "", isTyping: true, time: new Date() },
      ]);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      typeText(fullAIResponse, (typedText) => {
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last && last.sender === "ai")
            updated[updated.length - 1] = {
              ...last,
              text: typedText,
              isTyping: false,
            };
          return updated;
        });
      });
    } catch {
      if (waitTimeout) clearTimeout(waitTimeout);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Error fetching AI response.",
          time: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fullText = "SOFTWARE DEVELOPER";
  const [displayedText, setDisplayedText] = useState("");
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
    <header className="bg-white">
      {/* ── AI Chat Panel ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <section className="max-w-2xl mx-auto px-6 pt-10 pb-4">
          {/* Chat header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-shrink-0">
              <Image
                width={1024}
                height={1024}
                alt="AI JEM"
                src="/image/ai-bot.webp"
                className="h-9 w-9 rounded-xl object-cover ring-1 ring-gray-200"
                priority
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-gray-900 leading-none">
                AI JEM
              </p>
              <p className="text-[11px] text-emerald-500 font-medium mt-0.5">
                Online · Ask me anything
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 min-h-[72px] max-h-64 overflow-y-auto overflow-x-hidden">
            {messages.length === 0 && (
              <p className="text-center text-gray-400 text-[13px] py-3">
                Ask me anything about myself, work and experiences...
              </p>
            )}
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  x: msg.sender === "user" ? 40 : -40,
                  scale: 0.96,
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender !== "user" && (
                  <Image
                    src="/image/ai-bot.webp"
                    alt="AI"
                    width={28}
                    height={28}
                    className="mr-2 mb-auto rounded-full ring-1 ring-gray-200 flex-shrink-0"
                  />
                )}
                <div className="flex flex-col max-w-[75%]">
                  <div
                    className={`px-3.5 py-2 rounded-2xl text-[13px] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gray-900 text-white rounded-br-sm"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.isTyping ? (
                      <TypingIndicator />
                    ) : (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-400 self-end">
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
                        className="w-3.5 h-3.5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
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
                    width={28}
                    height={28}
                    className="ml-2 mb-auto rounded-full ring-1 ring-gray-200 flex-shrink-0"
                  />
                )}
              </motion.div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Listening indicator */}
          {isListening && (
            <div className="flex items-center gap-2 mt-2 text-emerald-500 text-[12px] font-medium px-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Listening...
            </div>
          )}

          {/* Input bar */}
          <form
            onSubmit={handleSubmit}
            className="mt-3 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2"
          >
            <input
              type="text"
              placeholder="Type something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 bg-transparent text-[13px] text-gray-800 placeholder-gray-400 outline-none min-w-0"
            />
            {/* Mic */}
            <button
              type="button"
              onClick={startListening}
              disabled={isListening}
              className={`p-1.5 rounded-lg transition-colors disabled:opacity-40 ${isListening ? "text-emerald-500" : "text-gray-400 hover:text-gray-700 hover:bg-gray-200"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
            </button>
            {/* Send */}
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-900 hover:bg-gray-700 disabled:opacity-40 text-white p-1.5 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
            <button
              id="hidden-submit-btn"
              type="submit"
              style={{ display: "none" }}
            >
              Auto Submit
            </button>
          </form>
        </section>
      </motion.div>

      {/* ── Thin divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gray-100 my-2" />
      </div>

      {/* ── Profile Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto px-6 grid min-h-[60vh] w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 py-10">
          {/* Left — Info */}
          <div className="order-2 lg:order-1">
            <hr className="mb-6 border-gray-100 lg:hidden" />

            {/* Name block */}
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">
              Based in Southern Leyte, PH
            </p>
            <h1 className="text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight mb-1">
              Jemuel Cadayona
            </h1>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-gray-400 mb-7">
              {displayedText}
              <span className="animate-pulse text-gray-300">|</span>
            </p>

            {/* Role cards */}
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
                <MapPinIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-0.5">
                    DESIGNATION
                  </p>
                  <p className="text-[13px] text-gray-800 font-bold">
                    Provincial Systems Administrators Office
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
                <BriefcaseIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-0.5">
                    WORK
                  </p>
                  <p className="text-[13px] text-gray-800">
                    Software Developer · Consultant
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-100 mb-5" />

            {/* Details */}
            <div className="flex flex-col gap-2.5 mb-7">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-[13px] text-gray-500">
                  Capitol Site, Southern Leyte PH
                </span>
              </div>
              <div className="flex items-center gap-3">
                <AcademicCapIcon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span className="text-[13px] text-gray-500">
                  Graduated, Cum Laude (BSIT)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FolderIcon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <a
                  href="/resume/Cadayona Resume - January 6, 2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-gray-800 font-medium underline underline-offset-4 hover:text-gray-500 transition-colors"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right — Photo, transparent bg, no frame */}
          <div className="flex flex-col items-center order-1 lg:order-2">
            <Image
              width={1024}
              height={1024}
              alt="Jemuel Cadayona"
              src="/image/me-2.png"
              className="h-[28rem] w-auto mx-auto object-contain drop-shadow-lg"
              priority
            />
            <div className="flex gap-3 mt-2">
              <a
                href="#projects"
                className="px-6 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-[13px] font-bold rounded-xl transition-colors"
              >
                View My Work
              </a>
              <a
                href="#commissions"
                className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-800 text-[13px] font-bold rounded-xl border border-gray-200 transition-colors"
              >
                Commissions
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── GitHub Contributions ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto px-6 pb-16">
          <div className="h-px bg-gray-100 mb-10" />
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gray-200 rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
                GitHub Contributions
              </span>
              <div className="h-px w-8 bg-gray-200 rounded-full" />
            </div>
            <div className="w-full overflow-x-auto rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <center>
                <GitHubCalendar
                  username="cdynjm"
                  blockSize={14}
                  blockMargin={5}
                  fontSize={14}
                />
              </center>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Hero;
