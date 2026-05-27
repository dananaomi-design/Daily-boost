import { useState, useCallback } from "react";

const LESSONS = [
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
  }
];

function Dots({total,cur}) {
  return (
    <div style={{display:"flex",gap:6}}>
      {Array.from({length:total}).map((_,i)=>(
        <div key={i} style={{width:i===cur?22:7,height:7,borderRadius:4,background:i<=cur?"#2563FF":"#2c2c2e",transition:"all .35s"}}/>
      ))}
    </div>
  );
}


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
      <style>{`* { box-sizing:border-box; margin:0; padding:0; } @keyframes up { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} } .up { animation: up .4s ease both; }`}</style>
      <div style={s.wrap}>

        {/* HEADER */}
        <div style={{paddingTop:52, paddingBottom:32, display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
          <div>
            <div style={{fontSize:11, color:"#444", fontFamily:"monospace", marginBottom:6}}>{dateStr}</div>
            <h1 style={{fontSize:28, fontWeight:700, color:"#fff", lineHeight:1.1}}>{greet}, Javier.</h1>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:7, background:"#1c1c1e", border:"1px solid #2c2c2e", borderRadius:20, padding:"9px 15px"}}>
            <span>🔥</span>
            <span style={{fontWeight:700, color:"#ff6b20", fontSize:16}}>{streak}</span>
          </div>
        </div>

        {/* HOME */}
        {phase==="home" && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{...s.card, position:"relative", overflow:"hidden"}}>
              <div style={{position:"absolute", top:-50, right:-50, width:180, height:180, background:"radial-gradient(circle,rgba(37,99,255,.12) 0%,transparent 70%)", pointerEvents:"none"}}/>
              <div style={{fontSize:36, marginBottom:18}}>☀️</div>
              <h2 style={{fontSize:24, fontWeight:700, color:"#fff", marginBottom:8}}>Daily Boost</h2>
              <p style={{color:"#555", fontSize:14, lineHeight:1.65, marginBottom:28}}>One social phrase. Three exercises.<br/>Five minutes. Be ready for the next visit.</p>
              <button style={s.btnPrimary} onClick={startLesson}>Start today's lesson →</button>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
              {[["📅","Streak",`${streak} days`],["🎯","Learned",`${completed.length} phrases`]].map(([ic,lb,vl],i)=>(
                <div key={i} style={s.card}>
                  <div style={{fontSize:22, marginBottom:10}}>{ic}</div>
                  <div style={{fontSize:10, color:"#444", fontFamily:"monospace", letterSpacing:".1em", marginBottom:5}}>{lb.toUpperCase()}</div>
                  <div style={{fontWeight:700, fontSize:17, color:"#fff"}}>{vl}</div>
                </div>
              ))}
            </div>
            {completed.length > 0 && (
              <button style={{...s.card, width:"100%", border:"1px solid #2c2c2e", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 22px"}} onClick={()=>setPhase("phrases")}>
                <div style={{display:"flex", alignItems:"center", gap:12}}>
                  <span style={{fontSize:22}}>📖</span>
                  <div style={{textAlign:"left"}}>
                    <div style={{fontSize:10, color:"#444", fontFamily:"monospace", letterSpacing:".1em", marginBottom:4}}>MY PHRASES</div>
                    <div style={{fontWeight:700, fontSize:16, color:"#fff"}}>Review what you've learned</div>
                  </div>
                </div>
                <span style={{color:"#444", fontSize:20}}>›</span>
              </button>
            )}
          </div>
        )}

        {/* PRESENT */}
        {phase==="present" && lesson && (
          <div className="up" style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div style={s.label}>TODAY'S LESSON</div>
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
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div style={s.label}>PRACTICE</div>
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
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div style={s.label}>PRODUCE</div>
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
              : <button style={s.btnPrimary} onClick={()=>{ const ns=streak+1; const nc=completed.includes(lessonIdx)?completed:[...completed,lessonIdx]; setStreak(ns); setCompleted(nc); saveStorage('javier_streak',ns); saveStorage('javier_completed',nc); setPhase("done"); }}>
                  Complete lesson ✓
                </button>
            }
          </div>
        )}

        {/* DONE */}
        {phase==="done" && (
          <div className="up" style={{textAlign:"center", paddingTop:40}}>
            <div style={{fontSize:56, marginBottom:20}}>🎯</div>
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
                  <div key={i} style={s.card}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10}}>
                      <div style={{fontSize:10, color:"#2563FF", fontFamily:"monospace", letterSpacing:".1em"}}>LESSON {i+1}</div>
                      <div style={{fontSize:11, color:"#333"}}>✓ done</div>
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

      </div>
    </div>
  );
}
