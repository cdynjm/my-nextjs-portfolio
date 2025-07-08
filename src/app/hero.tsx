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
}

function Hero() {
  const ai_endpoint = process.env.NEXT_PUBLIC_FLASK_AI_ENDPOINT_CHAT as string;

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const typeText = (fullText: string, callback: (text: string) => void) => {
    let index = 0;
    const speed = 20;

    const type = () => {
      if (index <= fullText.length) {
        callback(fullText.slice(0, index));
        index++;
        setTimeout(type, speed);
      }
    };

    type();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
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

      // Add placeholder AI message with typing indicator
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "", isTyping: true },
      ]);

      // ✅ Add a short delay (1-2 sec) to show the typing indicator before actual typing starts
      await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 seconds

      // Start typing effect
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
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error fetching AI response." },
      ]);
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
        <div className="flex-1 overflow-y-auto overflow-x-hidden rounded-lg p-4">
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
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`mb-3 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg text-[14px] ${
                  msg.sender === "user"
                    ? "bg-black text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.isTyping ? <TypingIndicator /> : msg.text}
              </div>
            </motion.div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2 items-center">
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
            type="submit"
            disabled={loading}
            className="text-white px-3 py-2 rounded disabled:opacity-50"
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
        </form>
      </section>

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
            <p className="font-thin text-[14px]">Graduated, Cum Laude (BSIT)</p>
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

      {/* GitHub Contributions */}
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
    </header>
  );
}

export default Hero;
