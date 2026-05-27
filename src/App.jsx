
import { useState } from "react";

const WEEKS = [

  // ── WEEK 1 ───────────────────────────────────
  {
    week: 1,

    // 7 daily phrases — one shown per day (Mon–Sun)
    // Format: sentence uses {word} to mark the tappable word
    phrases: [
      {
        sentence: "The altitude really {catches} you off guard up here, right Javier?",
        word: "catches",
        meaning: "To surprise or affect someone unexpectedly.",
        usage: "Use it when something has an unexpected effect on people — altitude, heat, jet lag, a question.",
        examples: [
          "The question caught him off guard.",
          "It catches everyone off guard the first time.",
          "Don't let the cold catch you off guard — bring a jacket."
        ]
      },
      {
        sentence: "We need to {iron out} a few details before the visit, right Javier?",
        word: "iron out",
        meaning: "To resolve small problems or smooth over complications.",
        usage: "Perfect for corporate talk — sounds polished when dealing with logistics, contracts, or schedules.",
        examples: [
          "Let's iron out the schedule before they arrive.",
          "We ironed out the last few issues this morning.",
          "There are a few things to iron out but we're close."
        ]
      },
      {
        sentence: "He really {hit the ground running} on his first day, right Javier?",
        word: "hit the ground running",
        meaning: "To start something with full energy and no warm-up needed.",
        usage: "Use it to compliment someone who started strong — a new team member, a visitor who dove straight into work.",
        examples: [
          "She hit the ground running from day one.",
          "The new team really hit the ground running.",
          "We need someone who can hit the ground running."
        ]
      },
      {
        sentence: "That proposal is still {up in the air}, right Javier?",
        word: "up in the air",
        meaning: "Uncertain, not yet decided.",
        usage: "Useful in corporate settings when plans haven't been confirmed — timelines, budgets, visits.",
        examples: [
          "The meeting date is still up in the air.",
          "Everything is up in the air until we hear from HQ.",
          "Let's not commit while things are still up in the air."
        ]
      },
      {
        sentence: "Let's {touch base} after the site tour, right Javier?",
        word: "touch base",
        meaning: "To briefly connect or check in with someone.",
        usage: "Very common in corporate English — use it to suggest a quick follow-up without being too formal.",
        examples: [
          "Can we touch base before the meeting?",
          "I'll touch base with the team later today.",
          "Just wanted to touch base and see how things are going."
        ]
      },
      {
        sentence: "The project is {on track} despite the delays, right Javier?",
        word: "on track",
        meaning: "Progressing as planned, meeting expected milestones.",
        usage: "Use it to reassure visitors or executives that things are going well — even when they almost didn't.",
        examples: [
          "We're on track to finish by Q3.",
          "The team kept things on track through the shutdown.",
          "Good to hear the numbers are on track."
        ]
      },
      {
        sentence: "She really {went the extra mile} for that client, right Javier?",
        word: "went the extra mile",
        meaning: "Did more than what was expected or required.",
        usage: "Great for praising colleagues or describing your team's effort to international visitors.",
        examples: [
          "The local team always goes the extra mile.",
          "He went the extra mile to make the visit smooth.",
          "Clients notice when you go the extra mile."
        ]
      }
    ],

    // 7 daily lessons — shown in order, one per day
    lessons: [
      {
        topic: "Starting small talk with a visitor",
        tagline: "The first 10 seconds set the whole tone of the interaction.",
        phrase: "How are you finding [place/thing]?",
        rule: "Use this to open a conversation naturally. It invites the other person to share their experience without a yes/no answer. Works perfectly when someone has just arrived at your site, city, or event.",
        examples: [
          "How are you finding Lima so far? First time here?",
          "How are you finding the altitude? It catches a lot of people off guard.",
          "How are you finding the conference? Pretty packed agenda, right?"
        ],
        practice: [
          { sentence: "How are you [BLANK] the heat up here at the mine?", blank: "finding", hint: "The key verb of the whole phrase" },
          { sentence: "How are you finding the hotel? I hope they [BLANK] you well.", blank: "treated", hint: "Past tense — how the hotel handled him" },
          { sentence: "It [BLANK] a lot of people off guard at first.", blank: "catches", hint: "Present simple — something that happens regularly" }
        ],
        produce: {
          context: "A Canadian geologist just arrived at your mine site for a 3-day technical visit. You're walking him from reception to the meeting room.",
          prompt: "Use 'How are you finding...' to open the conversation. What would you say?"
        }
      },
      {
        topic: "Buying time when you didn't catch something",
        tagline: "Native speakers do this constantly — it's a skill, not a weakness.",
        phrase: "Sorry, I didn't quite catch that — could you say that again?",
        rule: "The word 'quite' softens it and sounds natural. Avoid just saying 'What?' — it can come across as rude. You can also add 'it's a bit noisy in here' to give context and reduce awkwardness.",
        examples: [
          "Sorry, I didn't quite catch your name — could you repeat it?",
          "I'm sorry, it's a bit loud. Did you say Thursday or Tuesday?",
          "Could you say that again? I want to make sure I've got it right."
        ],
        practice: [
          { sentence: "Sorry, I didn't quite [BLANK] that — could you say it again?", blank: "catch", hint: "The key verb in the phrase" },
          { sentence: "I'm sorry, it's a bit [BLANK] in here.", blank: "noisy", hint: "Adjective describing the environment" },
          { sentence: "Could you [BLANK] that again? I want to make sure.", blank: "repeat", hint: "Synonym of 'say again'" }
        ],
        produce: {
          context: "You're at a lunch with executives from an Australian mining company. One mentions a project name you've never heard.",
          prompt: "How do you ask them to repeat it without feeling embarrassed? Write what you'd say."
        }
      },
      {
        topic: "Wrapping up a conversation naturally",
        tagline: "Knowing how to exit gracefully is just as important as starting well.",
        phrase: "It was great talking to you — I'll let you get back to it.",
        rule: "This closes a conversation warmly. 'I'll let you...' is generous — you're releasing the other person, which people appreciate. It avoids the awkward silence when both want to leave but neither moves.",
        examples: [
          "It was great talking to you — I'll let you get back to your team.",
          "Really enjoyed this — I'll let you get back to it. Let's connect later.",
          "Good catching up. I'll let you enjoy the rest of the evening."
        ],
        practice: [
          { sentence: "It was great [BLANK] to you.", blank: "talking", hint: "Gerund after 'great'" },
          { sentence: "I'll let you get [BLANK] to it.", blank: "back", hint: "Part of the key phrase" },
          { sentence: "Really [BLANK] this conversation — thanks for your time.", blank: "enjoyed", hint: "Past tense of enjoy" }
        ],
        produce: {
          context: "You've been chatting with a VP from London at a mining conference cocktail hour. The conversation has been good but it's time to close.",
          prompt: "Write how you'd wrap up using 'I'll let you...' — make it warm and natural."
        }
      },
      {
        topic: "Showing interest in someone's background",
        tagline: "People remember you when you make them feel genuinely interesting.",
        phrase: "How did you end up in mining?",
        rule: "Asking 'how did you end up in X' invites a story, not just a job title. People love telling it. Use it to build real connection beyond surface-level talk.",
        examples: [
          "How did you end up in mining? It's not most people's first choice, right?",
          "What's your background — did you come from engineering or finance?",
          "Have you always worked in Latin America or is this a new region for you?"
        ],
        practice: [
          { sentence: "How did you end [BLANK] in this industry?", blank: "up", hint: "Part of the phrasal verb 'end up'" },
          { sentence: "What's your [BLANK] — engineering or operations?", blank: "background", hint: "Noun meaning your professional history" },
          { sentence: "Have you always worked in this [BLANK] or is it new for you?", blank: "region", hint: "Geographic area" }
        ],
        produce: {
          context: "You're seated next to a Canadian executive at a site lunch. You know she's been in the industry 20 years but don't know her story.",
          prompt: "Ask about her background using 'how did you end up...' — make it feel like genuine curiosity."
        }
      },
      {
        topic: "Agreeing without just saying yes",
        tagline: "How you agree tells people how engaged you actually are.",
        phrase: "Absolutely / Exactly / That's a fair point / I couldn't agree more",
        rule: "These signal active listening. Vary them — using the same one repeatedly sounds robotic. 'That's a fair point' works when you partially agree. 'I couldn't agree more' is for strong agreement.",
        examples: [
          "Absolutely — the logistics in this region are a real challenge.",
          "That's a fair point. The timeline was tight for everyone.",
          "Exactly — and that's why the local team's experience matters so much."
        ],
        practice: [
          { sentence: "I couldn't [BLANK] more — the safety protocols here are exceptional.", blank: "agree", hint: "The verb in 'I couldn't agree more'" },
          { sentence: "That's a [BLANK] point — we've seen the same in our operations.", blank: "fair", hint: "Adjective meaning reasonable or valid" },
          { sentence: "[BLANK] — and that's exactly why we brought in external consultants.", blank: "Exactly", hint: "One word meaning 'you're right, precisely'" }
        ],
        produce: {
          context: "A UK engineer says: 'The altitude makes everything slower — equipment, people, logistics.' You fully agree.",
          prompt: "Respond with strong agreement and add one detail from your own experience. Don't just say yes."
        }
      },
      {
        topic: "Transitioning topics gracefully",
        tagline: "Smooth topic changes make you sound fluent and in control.",
        phrase: "On a different note... / Speaking of which... / That reminds me...",
        rule: "These connectors let you change subject without it feeling abrupt. 'On a different note' signals a clear topic change. 'Speaking of which' and 'That reminds me' create a natural bridge from what was just said.",
        examples: [
          "On a different note — are you staying through the weekend or heading back Friday?",
          "Speaking of which, how did your flight in compare to last time?",
          "That reminds me — did you get a chance to see the new processing plant?"
        ],
        practice: [
          { sentence: "On a different [BLANK] — are you joining us for dinner tonight?", blank: "note", hint: "The noun that completes this transition phrase" },
          { sentence: "Speaking of [BLANK], how did the site visit go yesterday?", blank: "which", hint: "The pronoun that completes 'speaking of...'" },
          { sentence: "That [BLANK] me — we should talk about the Q3 schedule.", blank: "reminds", hint: "Present tense verb — means 'makes me think of'" }
        ],
        produce: {
          context: "You've been talking about the local food with a visiting engineer. You want to naturally move to asking about his flight back.",
          prompt: "Use one of the transition phrases to change the topic. Write the transition sentence."
        }
      },
      {
        topic: "Giving a compliment that lands",
        tagline: "A well-placed compliment builds trust faster than any meeting.",
        phrase: "I have to say, that's really impressive.",
        rule: "Opening with 'I have to say' signals that what follows is genuine — not just polite. Use it when something actually earns your respect: an operation, a process, a decision. Don't overuse it or it loses weight.",
        examples: [
          "I have to say, the safety setup here is really impressive.",
          "I have to say, your team handled that turnaround incredibly well.",
          "I have to say, I didn't expect the scale of this operation."
        ],
        practice: [
          { sentence: "I have to [BLANK], that's not something you see every day.", blank: "say", hint: "The verb that opens the phrase" },
          { sentence: "I have to say, the [BLANK] of this operation is remarkable.", blank: "scale", hint: "Noun meaning the size or extent of something" },
          { sentence: "Your team [BLANK] that turnaround incredibly well.", blank: "handled", hint: "Past tense verb meaning managed or dealt with" }
        ],
        produce: {
          context: "A visiting executive from Australia just finished a tour of your processing plant. She looked genuinely impressed at several points.",
          prompt: "Give her a compliment using 'I have to say' — make it specific to something she might have seen."
        }
      }
    ]
  },

  // ── WEEK 2 — paste new week below this line ──
  // {
  //   week: 2,
  //   phrases: [ ... ],  // 7 items
  //   lessons: [ ... ],  // 7 items
  // },

];

const CURRENT_WEEK = WEEKS[WEEKS.length - 1];

const DAILY_PHRASES = CURRENT_WEEK.phrases;
const LESSONS = CURRENT_WEEK.lessons;


const IconFlame = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b20" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);

const IconChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const IconSun = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);

function Dots({total,cur}) {
  return (
    <div style={{display:"flex",gap:6}}>
      {Array.from({length:total}).map((_,i)=>(
        <div key={i} style={{width:i===cur?22:7,height:7,borderRadius:4,background:i<=cur?"#2563FF":"#2c2c2e",transition:"all .35s"}}/>
      ))}
    </div>
  );
}



const TAGLINES = [
  "Every great conversation starts with one phrase.",
  "The words you know change the rooms you walk into.",
  "Confidence isn't born. It's practiced.",
  "Five minutes today. A real connection tomorrow.",
  "Small talk is a big skill.",
  "The best networkers don't wing it.",
  "You already speak English. Now own it.",
  "One phrase at a time.",
  "Fluency is just familiarity.",
  "The mine site has enough silence. Break it well.",
  "Words open doors that titles can't.",
  "You've done harder things than small talk.",
  "International visitors remember how you made them feel.",
  "Be the one they remember from the corridor.",
  "Natural English is learned, not inherited.",
  "The right phrase at the right moment is everything.",
  "Today's phrase is tomorrow's reflex.",
  "Preparation is the most underrated social skill.",
  "You don't need a new language. Just new phrases.",
  "Every executive started with awkward small talk.",
  "Connection is a skill. Skills can be built.",
  "The gap between you and them is just vocabulary.",
  "Five minutes here. One less awkward silence there.",
  "Your English is better than you think.",
  "The mine runs 24/7. So does your potential.",
  "Be ready when the moment comes.",
  "Great conversationalists were once nervous too.",
  "Each phrase is a door. Open one today.",
  "Repetition turns effort into instinct.",
  "Today you learn it. Next week you live it.",
];
const SESSION_TAGLINE = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];

function loadStorage(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function saveStorage(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

export default function App() {
  const [phase, setPhase] = useState("home");
  const [lesson, setLesson] = useState(null);
  const [lessonIdx, setLessonIdx] = useState(0);
  const [completed, setCompleted] = useState(() => loadStorage('javier_completed', []));
  const [streak, setStreak] = useState(() => loadStorage('javier_streak', 0));

  // Practice state lives here to avoid re-mount issues
  const [inputs, setInputs] = useState(["","",""]);
  const [checked, setChecked] = useState([false,false,false]);
  const [correct, setCorrect] = useState([false,false,false]);

  // Produce state
  const [produce, setProduce] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [fbLoading, setFbLoading] = useState(false);

  // Word drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const todayPhrase = DAILY_PHRASES[new Date().getDay() % DAILY_PHRASES.length];

  const startLesson = () => {
    const available = LESSONS.filter((_,i) => !completed.includes(i));
    const pool = available.length > 0 ? available : LESSONS;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const idx = LESSONS.indexOf(picked);
    setLesson(picked);
    setLessonIdx(idx);
    setInputs(["","",""]);
    setChecked([false,false,false]);
    setCorrect([false,false,false]);
    setProduce("");
    setFeedback(null);
    setPhase("present");
  };

  const checkAnswer = (i) => {
    if (!inputs[i].trim()) return;
    const isCorrect = inputs[i].trim().toLowerCase() === lesson.practice[i].blank.toLowerCase();
    setChecked(c => { const n=[...c]; n[i]=true; return n; });
    setCorrect(c => { const n=[...c]; n[i]=isCorrect; return n; });
  };

  const getFeedback = async () => {
    if (!produce.trim()) return;
    setFbLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 200,
          messages: [{ role: "user", content: `You are Javier's English coach. He practiced the phrase "${lesson.phrase}" by writing: "${produce}". Scenario: ${lesson.produce.context}. Give warm direct feedback in 2 sentences. One thing done well, one improvement or confirmation. Speak directly to him. No bullets.` }]
        })
      });
      const data = await res.json();
      setFeedback(data.content[0].text);
    } catch(e) {
      setFeedback("Great sentence — it sounds natural and would land well in that context. Keep going, you're building real fluency.");
    }
    setFbLoading(false);
  };

  const hr = new Date().getHours();
  const greet = hr<12 ? "Good morning" : hr<18 ? "Good afternoon" : "Good evening";
  const dateStr = new Date().toLocaleDateString("en-US", {weekday:"long",month:"long",day:"numeric"});
  const allChecked = checked.every(Boolean);

  const s = {
    page: { minHeight:"100vh", background:"#111", color:"#e5e5e5", fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", display:"flex", justifyContent:"center" },
    wrap: { width:"100%", maxWidth:430, padding:"0 20px 80px" },
    card: { background:"#1c1c1e", border:"1px solid #2c2c2e", borderRadius:22, padding:"24px 22px" },
    label: { fontSize:10, color:"#444", letterSpacing:".12em", marginBottom:10, fontFamily:"monospace" },
    btnPrimary: { width:"100%", background:"#2563FF", border:"none", borderRadius:14, padding:"17px 0", color:"#fff", fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
    btnSecondary: { width:"100%", background:"transparent", border:"1px solid #2c2c2e", borderRadius:14, padding:"17px 0", color:"#666", fontSize:16, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
    btnDisabled: { width:"100%", background:"transparent", border:"1px solid #2c2c2e", borderRadius:14, padding:"17px 0", color:"#333", fontSize:16, fontWeight:600, cursor:"default", fontFamily:"inherit" },
  };

  return (
    <div style={s.page}>
      <style>{`* { box-sizing:border-box; margin:0; padding:0; } @keyframes up { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} } .up { animation: up .4s ease both; } @keyframes ring-fill { to { stroke-dashoffset: 0; } } @keyframes check-draw { to { stroke-dashoffset: 0; } }`}</style>
      <div style={s.wrap}>

        {/* HEADER — only on home */}
        {phase==="home" && <div style={{paddingTop:80, paddingBottom:56}}>
          <div style={{marginBottom:52}}>
            <div style={{fontSize:11, color:"#444", fontFamily:"monospace"}}>{dateStr}</div>
          </div>
          <h1 style={{fontSize:28, fontWeight:700, color:"#fff", lineHeight:1.55}}>
            {todayPhrase.sentence.split("{"+todayPhrase.word+"}")[0]}
            <span
              onClick={()=>setDrawerOpen(true)}
              style={{color:"#93b4ff", textDecoration:"underline", textDecorationStyle:"dotted", textDecorationColor:"#2563FF", textUnderlineOffset:"4px", cursor:"pointer"}}
            >{todayPhrase.word}</span>
            {todayPhrase.sentence.split("{"+todayPhrase.word+"}")[1]}
          </h1>
        </div>}

        {/* HOME */}
        {phase==="home" && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:16}}>
            <div style={{...s.card, position:"relative", overflow:"hidden"}}>
              <div style={{position:"absolute", top:-50, right:-50, width:180, height:180, background:"radial-gradient(circle,rgba(37,99,255,.12) 0%,transparent 70%)", pointerEvents:"none"}}/>
              <div style={{marginBottom:18}}><IconSun/></div>
              <h2 style={{fontSize:24, fontWeight:700, color:"#fff", marginBottom:8}}>Daily Boost</h2>
              <p style={{color:"#555", fontSize:14, lineHeight:1.65, marginBottom:28}}>{SESSION_TAGLINE}</p>
              <button style={s.btnPrimary} onClick={startLesson}>Start today's lesson →</button>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
              <div style={s.card}>
                <div style={{marginBottom:12}}><IconCalendar/></div>
                <div style={{fontSize:10, color:"#444", fontFamily:"monospace", letterSpacing:".1em", marginBottom:5}}>STREAK</div>
                <div style={{fontWeight:700, fontSize:17, color:"#fff"}}>{streak} days</div>
              </div>
              <div style={s.card}>
                <div style={{marginBottom:12}}><IconTarget/></div>
                <div style={{fontSize:10, color:"#444", fontFamily:"monospace", letterSpacing:".1em", marginBottom:5}}>LEARNED</div>
                <div style={{fontWeight:700, fontSize:17, color:"#fff"}}>{completed.length} phrases</div>
              </div>
            </div>
            {completed.length > 0 && (
              <button style={{...s.card, width:"100%", border:"1px solid #2c2c2e", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 22px"}} onClick={()=>setPhase("phrases")}>
                <div style={{display:"flex", alignItems:"center", gap:12}}>
                  <IconBook/>
                  <div style={{textAlign:"left"}}>
                    <div style={{fontSize:10, color:"#444", fontFamily:"monospace", letterSpacing:".1em", marginBottom:4}}>MY PHRASES</div>
                    <div style={{fontWeight:700, fontSize:16, color:"#fff"}}>Review what you've learned</div>
                  </div>
                </div>
                <IconChevron/>
              </button>
            )}
          </div>
        )}

        {/* PRESENT */}
        {phase==="present" && lesson && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:52}}>
              <button onClick={()=>setPhase("home")} style={{background:"none",border:"none",color:"#555",fontSize:14,cursor:"pointer",fontFamily:"inherit",padding:0}}>← Back</button>
              <Dots total={3} cur={0}/>
            </div>
            <div style={s.card}>
              <div style={s.label}>PRESENT</div>
              <h2 style={{fontSize:21, fontWeight:700, color:"#fff", marginBottom:6}}>{lesson.topic}</h2>
              <p style={{color:"#555", fontSize:13, marginBottom:24, lineHeight:1.6}}>{lesson.tagline}</p>

              <div style={{background:"#111", borderRadius:16, padding:"20px", marginBottom:22, borderLeft:"3px solid #2563FF"}}>
                <div style={s.label}>THE PHRASE</div>
                <p style={{fontSize:19, color:"#93b4ff", fontStyle:"italic", lineHeight:1.5}}>"{lesson.phrase}"</p>
              </div>

              <div style={{marginBottom:22}}>
                <div style={s.label}>WHEN TO USE IT</div>
                <p style={{color:"#777", fontSize:14, lineHeight:1.75}}>{lesson.rule}</p>
              </div>

              <div style={s.label}>EXAMPLES</div>
              <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {lesson.examples.map((ex,i)=>(
                  <div key={i} style={{background:"#111", borderRadius:12, padding:"13px 16px", fontSize:15, color:"#ccc", lineHeight:1.6}}>
                    "{ex}"
                  </div>
                ))}
              </div>
            </div>
            <button style={s.btnPrimary} onClick={()=>setPhase("practice")}>Practice it →</button>
          </div>
        )}

        {/* PRACTICE */}
        {phase==="practice" && lesson && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:52}}>
              <button onClick={()=>setPhase("present")} style={{background:"none",border:"none",color:"#555",fontSize:14,cursor:"pointer",fontFamily:"inherit",padding:0}}>← Back</button>
              <Dots total={3} cur={1}/>
            </div>
            <div style={s.card}>
              <p style={{color:"#555", fontSize:13, marginBottom:20, lineHeight:1.6}}>
                Fill in the missing word and tap Check.
              </p>
              <div style={{display:"flex", flexDirection:"column", gap:16}}>
                {lesson.practice.map((ex, i) => {
                  const parts = ex.sentence.split("[BLANK]");
                  return (
                    <div key={i} style={{
                      background: checked[i] ? (correct[i] ? "rgba(37,99,255,.08)" : "rgba(239,68,68,.07)") : "#111",
                      border: `1px solid ${checked[i] ? (correct[i] ? "rgba(37,99,255,.3)" : "rgba(239,68,68,.3)") : "#2c2c2e"}`,
                      borderRadius:16, padding:"18px 16px", transition:"all .3s"
                    }}>
                      <div style={{fontSize:10, color:"#444", letterSpacing:".1em", marginBottom:8, fontFamily:"monospace"}}>EXERCISE {i+1}</div>
                      <div style={{fontSize:12, color:"#555", marginBottom:14}}>{ex.hint}</div>

                      {/* Sentence */}
                      <div style={{background:"#0a0a0a", borderRadius:12, padding:"14px 16px", marginBottom:14, fontSize:15, color:"#ccc", lineHeight:1.8}}>
                        {parts[0]}
                        <span style={{
                          display:"inline-block", minWidth:70, padding:"0 6px",
                          borderBottom:`2px solid ${checked[i] ? (correct[i]?"#2563FF":"#ef4444") : "#2563FF"}`,
                          color: checked[i] ? (correct[i]?"#93b4ff":"#fca5a5") : "#444",
                          margin:"0 3px", textAlign:"center", fontWeight:600, transition:"all .3s"
                        }}>
                          {checked[i] ? ex.blank : "?"}
                        </span>
                        {parts[1]}
                      </div>

                      {/* Input + button */}
                      {!checked[i] ? (
                        <div style={{display:"flex", flexDirection:"column", gap:8}}>
                          <input
                            value={inputs[i]}
                            onChange={e => { const n=[...inputs]; n[i]=e.target.value; setInputs(n); }}
                            onKeyDown={e => e.key==="Enter" && checkAnswer(i)}
                            placeholder="Type the missing word..."
                            style={{width:"100%", background:"#0a0a0a", border:"1px solid #2c2c2e", borderRadius:10, padding:"13px 14px", color:"#e5e5e5", fontSize:16, outline:"none", fontFamily:"inherit"}}
                          />
                          <button
                            onClick={() => checkAnswer(i)}
                            style={{width:"100%", background:"#2563FF", border:"none", borderRadius:10, padding:"13px 0", color:"#fff", fontWeight:700, fontSize:15, cursor:"pointer", fontFamily:"inherit"}}
                          >
                            Check
                          </button>
                        </div>
                      ) : (
                        <div style={{display:"flex", alignItems:"center", gap:8, fontSize:14, fontWeight:600, color:correct[i]?"#93b4ff":"#fca5a5", paddingTop:4}}>
                          <span style={{fontSize:18}}>{correct[i]?"✓":"✗"}</span>
                          <span>{correct[i] ? "Perfect." : `Answer: "${ex.blank}"`}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {allChecked && (
              <button style={s.btnPrimary} onClick={()=>setPhase("produce")}>Now write your own →</button>
            )}
          </div>
        )}

        {/* PRODUCE */}
        {phase==="produce" && lesson && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:52}}>
              <button onClick={()=>setPhase("practice")} style={{background:"none",border:"none",color:"#555",fontSize:14,cursor:"pointer",fontFamily:"inherit",padding:0}}>← Back</button>
              <Dots total={3} cur={2}/>
            </div>
            <div style={s.card}>
              <div style={s.label}>YOUR TURN</div>
              <div style={{background:"#111", borderRadius:14, padding:"16px", marginBottom:18, borderLeft:"3px solid #222"}}>
                <div style={{...s.label, marginBottom:6}}>SCENARIO</div>
                <p style={{color:"#666", fontSize:13, lineHeight:1.65}}>{lesson.produce.context}</p>
              </div>
              <p style={{color:"#ddd", fontSize:15, lineHeight:1.65, marginBottom:16}}>{lesson.produce.prompt}</p>
              <textarea
                value={produce}
                onChange={e => setProduce(e.target.value)}
                placeholder="Write your sentence here..."
                rows={3}
                style={{width:"100%", background:"#111", border:"1px solid #2c2c2e", borderRadius:12, padding:"13px 15px", color:"#e5e5e5", fontSize:15, resize:"none", outline:"none", lineHeight:1.6, fontFamily:"inherit"}}
              />
              {feedback && (
                <div style={{marginTop:16, background:"rgba(37,99,255,.07)", border:"1px solid rgba(37,99,255,.2)", borderRadius:14, padding:"18px"}}>
                  <div style={s.label}>COACH FEEDBACK</div>
                  <p style={{color:"#999", fontSize:14, lineHeight:1.75}}>{feedback}</p>
                </div>
              )}
            </div>
            {!feedback
              ? <button style={!produce.trim()||fbLoading ? s.btnDisabled : s.btnPrimary} onClick={getFeedback} disabled={!produce.trim()||fbLoading}>
                  {fbLoading ? "Getting feedback..." : "Get feedback →"}
                </button>
              : <button style={s.btnPrimary} onClick={()=>{ const nc=completed.includes(lessonIdx)?completed:[...completed,lessonIdx]; const ns=streak+1; saveStorage('javier_streak',ns); saveStorage('javier_completed',nc); setStreak(ns); setCompleted(nc); setPhase("done"); }}>
                  Complete lesson ✓
                </button>
            }
          </div>
        )}

        {/* DONE */}
        {phase==="done" && (
          <div className="up" style={{textAlign:"center", paddingTop:40}}>
            <div style={{display:"flex", justifyContent:"center", marginBottom:24}}>
              <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="44" cy="44" r="40" stroke="#1e2a3f" strokeWidth="2"/>
                <circle cx="44" cy="44" r="40" stroke="#2563FF" strokeWidth="2" strokeDasharray="251" strokeDashoffset="251"
                  style={{animation:"ring-fill 0.6s ease forwards 0.1s"}}/>
                <polyline points="26,44 38,56 62,32" fill="none" stroke="#2563FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="50" strokeDashoffset="50"
                  style={{animation:"check-draw 0.4s ease forwards 0.65s"}}/>
              </svg>
            </div>
            <h2 style={{fontSize:26, fontWeight:700, color:"#fff", marginBottom:8}}>Lesson complete.</h2>
            <p style={{color:"#444", fontSize:14, marginBottom:10}}>One phrase closer to connecting.</p>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:36}}>
              <span>🔥</span>
              <span style={{color:"#ff6b20", fontWeight:700, fontSize:17}}>{streak} day streak</span>
            </div>
            <div style={{...s.card, textAlign:"left", marginBottom:14}}>
              <div style={s.label}>TODAY YOU LEARNED</div>
              <p style={{fontSize:18, color:"#93b4ff", fontStyle:"italic", marginBottom:6}}>"{lesson?.phrase}"</p>
              <p style={{color:"#444", fontSize:13}}>{lesson?.topic}</p>
            </div>
            <button style={s.btnSecondary} onClick={()=>setPhase("home")}>Back to home</button>
          </div>
        )}


        {/* PHRASES */}
        {phase==="phrases" && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4}}>
              <h2 style={{fontSize:22, fontWeight:700, color:"#fff"}}>My Phrases</h2>
              <button onClick={()=>setPhase("home")} style={{background:"none", border:"none", color:"#555", fontSize:14, cursor:"pointer", fontFamily:"inherit"}}>← Back</button>
            </div>
            <p style={{color:"#444", fontSize:13, marginBottom:4}}>{completed.length} phrase{completed.length!==1?"s":""} learned so far.</p>
            <div style={{display:"flex", flexDirection:"column", gap:12}}>
              {completed.map((idx, i) => {
                const l = LESSONS[idx];
                return (
                  <div key={i} style={{...s.card, cursor:"pointer"}} onClick={()=>{ setLesson(l); setLessonIdx(idx); setInputs(["","",""]); setChecked([false,false,false]); setCorrect([false,false,false]); setProduce(""); setFeedback(null); setPhase("present"); }}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10}}>
                      <div style={{fontSize:10, color:"#2563FF", fontFamily:"monospace", letterSpacing:".1em"}}>LESSON {i+1}</div>
                      <IconChevron/>
                    </div>
                    <p style={{fontSize:11, color:"#555", marginBottom:8}}>{l.topic}</p>
                    <p style={{fontSize:17, color:"#93b4ff", fontStyle:"italic", lineHeight:1.5}}>"{l.phrase}"</p>
                  </div>
                );
              })}
            </div>
            <button style={s.btnSecondary} onClick={()=>setPhase("home")}>Back to home</button>
          </div>
        )}


        {/* WORD DRAWER */}
        {drawerOpen && (
          <>
            <div onClick={()=>setDrawerOpen(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:40,backdropFilter:"blur(2px)"}}/>
            <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:"#1c1c1e",borderRadius:"24px 24px 0 0",padding:"0 0 40px",zIndex:50,animation:"drawerUp .3s ease"}}>
              <style>{`@keyframes drawerUp{from{transform:translateX(-50%) translateY(100%)}to{transform:translateX(-50%) translateY(0)}}`}</style>
              <div style={{width:36,height:4,background:"#333",borderRadius:2,margin:"14px auto 24px"}}/>
              <div style={{padding:"0 24px"}}>
                <div style={{fontSize:10,color:"#2563FF",fontFamily:"monospace",letterSpacing:".12em",marginBottom:12}}>WORD OF THE DAY</div>
                <h2 style={{fontSize:26,fontWeight:700,color:"#93b4ff",marginBottom:16,fontStyle:"italic"}}>"{todayPhrase.word}"</h2>
                <div style={{background:"#111",borderRadius:14,padding:"16px",marginBottom:18}}>
                  <div style={{fontSize:10,color:"#444",fontFamily:"monospace",letterSpacing:".1em",marginBottom:8}}>WHAT IT MEANS</div>
                  <p style={{color:"#ccc",fontSize:15,lineHeight:1.65}}>{todayPhrase.meaning}</p>
                </div>
                <div style={{background:"#111",borderRadius:14,padding:"16px",marginBottom:18}}>
                  <div style={{fontSize:10,color:"#444",fontFamily:"monospace",letterSpacing:".1em",marginBottom:8}}>WHEN TO USE IT</div>
                  <p style={{color:"#888",fontSize:14,lineHeight:1.65}}>{todayPhrase.usage}</p>
                </div>
                <div style={{fontSize:10,color:"#444",fontFamily:"monospace",letterSpacing:".1em",marginBottom:12}}>MORE EXAMPLES</div>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {todayPhrase.examples.map((ex,i)=>(
                    <div key={i} style={{background:"#111",borderRadius:12,padding:"13px 16px",fontSize:15,color:"#ccc",lineHeight:1.55,borderLeft:"3px solid #2563FF"}}>
                      "{ex}"
                    </div>
                  ))}
                </div>
                <button onClick={()=>setDrawerOpen(false)} style={{width:"100%",marginTop:24,background:"#2563FF",border:"none",borderRadius:14,padding:"16px 0",color:"#fff",fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Got it</button>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
