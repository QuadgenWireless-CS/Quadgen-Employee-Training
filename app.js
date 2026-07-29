/* ============================= STATE ============================= */
/* ============================= BACKGROUND NETWORK MESH (shared by welcome + login screens) ============================= */
function buildNetworkMeshSVG(prefix){
  var sig = ['sig1','sig2','sig3'].map(function(id){ return prefix+'-'+id; });
  var xp  = ['x1','x2','x3','x4','x5','x6','x7','x8'].map(function(id){ return prefix+'-'+id; });

  return ''+
  '<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" '+
       'xmlns:xlink="http://www.w3.org/1999/xlink" '+
       'style="position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;">'+
    '<g class="tower" stroke="#8fd3f4" stroke-width="1.5" fill="none" opacity=".4">'+
      '<path d="M90,560 L130,120 L170,560"/>'+
      '<path d="M100,460 L160,460"/><path d="M105,360 L155,360"/><path d="M112,260 L148,260"/>'+
      '<line x1="130" y1="120" x2="130" y2="90"/>'+
    '</g>'+
    '<g class="tower" stroke="#8fd3f4" stroke-width="1.5" fill="none" opacity=".4">'+
      '<path d="M300,560 L345,60 L390,560"/>'+
      '<path d="M312,440 L378,440"/><path d="M318,320 L372,320"/><path d="M326,200 L364,200"/>'+
      '<line x1="345" y1="60" x2="345" y2="26"/>'+
    '</g>'+
    '<g class="tower" stroke="#8fd3f4" stroke-width="1.5" fill="none" opacity=".4">'+
      '<path d="M540,560 L580,150 L620,560"/>'+
      '<path d="M550,470 L610,470"/><path d="M555,380 L605,380"/><path d="M562,290 L598,290"/>'+
      '<line x1="580" y1="150" x2="580" y2="118"/>'+
    '</g>'+
    '<g class="tower" stroke="#8fd3f4" stroke-width="1.5" fill="none" opacity=".4">'+
      '<path d="M700,560 L735,220 L770,560"/>'+
      '<path d="M709,470 L761,470"/><path d="M714,390 L756,390"/>'+
      '<line x1="735" y1="220" x2="735" y2="190"/>'+
    '</g>'+

    '<path id="'+sig[0]+'" d="M130,90 Q237,20 345,26" fill="none" stroke="none"/>'+
    '<path id="'+sig[1]+'" d="M345,26 Q462,-20 580,118" fill="none" stroke="none"/>'+
    '<path id="'+sig[2]+'" d="M580,118 Q657,150 735,190" fill="none" stroke="none"/>'+

    '<path id="'+xp[0]+'" d="M20,40 L780,560" fill="none" stroke="none"/>'+
    '<path id="'+xp[1]+'" d="M780,60 L20,540" fill="none" stroke="none"/>'+
    '<path id="'+xp[2]+'" d="M40,300 L760,260" fill="none" stroke="none"/>'+
    '<path id="'+xp[3]+'" d="M200,20 L560,580" fill="none" stroke="none"/>'+
    '<path id="'+xp[4]+'" d="M600,10 L180,590" fill="none" stroke="none"/>'+
    '<path id="'+xp[5]+'" d="M10,480 L700,60" fill="none" stroke="none"/>'+
    '<path id="'+xp[6]+'" d="M760,400 L120,120" fill="none" stroke="none"/>'+
    '<path id="'+xp[7]+'" d="M400,10 L400,590" fill="none" stroke="none"/>'+

    '<g class="signal-arc" fill="none" stroke="#8fd3f4" stroke-width="1" opacity=".25">'+
      '<use href="#'+sig[0]+'"/><use href="#'+sig[1]+'"/><use href="#'+sig[2]+'"/>'+
    '</g>'+

    '<circle class="mesh-pulse" r="3.5"><animateMotion dur="2.6s" repeatCount="indefinite" begin="0s"><mpath href="#'+sig[0]+'" xlink:href="#'+sig[0]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3.5"><animateMotion dur="2.6s" repeatCount="indefinite" begin=".9s"><mpath href="#'+sig[1]+'" xlink:href="#'+sig[1]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3.5"><animateMotion dur="2.6s" repeatCount="indefinite" begin="1.8s"><mpath href="#'+sig[2]+'" xlink:href="#'+sig[2]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3"><animateMotion dur="3.1s" repeatCount="indefinite" begin="1.3s"><mpath href="#'+sig[0]+'" xlink:href="#'+sig[0]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3"><animateMotion dur="3.1s" repeatCount="indefinite" begin="2.2s"><mpath href="#'+sig[1]+'" xlink:href="#'+sig[1]+'"/></animateMotion></circle>'+

    '<circle class="mesh-pulse" r="2.5"><animateMotion dur=".8s" repeatCount="indefinite" begin="0s"><mpath href="#'+xp[0]+'" xlink:href="#'+xp[0]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3"><animateMotion dur="1.4s" repeatCount="indefinite" begin=".3s"><mpath href="#'+xp[1]+'" xlink:href="#'+xp[1]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="2"><animateMotion dur=".6s" repeatCount="indefinite" begin=".6s"><mpath href="#'+xp[2]+'" xlink:href="#'+xp[2]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3.5"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0s"><mpath href="#'+xp[3]+'" xlink:href="#'+xp[3]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="2.5"><animateMotion dur="1s" repeatCount="indefinite" begin="1.1s"><mpath href="#'+xp[4]+'" xlink:href="#'+xp[4]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3"><animateMotion dur="1.7s" repeatCount="indefinite" begin=".2s"><mpath href="#'+xp[5]+'" xlink:href="#'+xp[5]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="2"><animateMotion dur=".9s" repeatCount="indefinite" begin="1.4s"><mpath href="#'+xp[6]+'" xlink:href="#'+xp[6]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3"><animateMotion dur="2.6s" repeatCount="indefinite" begin=".5s"><mpath href="#'+xp[7]+'" xlink:href="#'+xp[7]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="2.5"><animateMotion dur="1.3s" repeatCount="indefinite" begin="1.8s"><mpath href="#'+xp[0]+'" xlink:href="#'+xp[0]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="2"><animateMotion dur=".7s" repeatCount="indefinite" begin="2.1s"><mpath href="#'+xp[3]+'" xlink:href="#'+xp[3]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="3"><animateMotion dur="1.9s" repeatCount="indefinite" begin=".9s"><mpath href="#'+xp[5]+'" xlink:href="#'+xp[5]+'"/></animateMotion></circle>'+
    '<circle class="mesh-pulse" r="2.5"><animateMotion dur="1.1s" repeatCount="indefinite" begin="1.6s"><mpath href="#'+xp[1]+'" xlink:href="#'+xp[1]+'"/></animateMotion></circle>'+

    '<g class="twinkle-dots" fill="#8fd3f4">'+
      '<circle cx="230" cy="140" r="2" style="animation-delay:0s;animation-duration:4.6s;"/>'+
      '<circle cx="470" cy="90" r="1.5" style="animation-delay:.7s;animation-duration:5.4s;"/>'+
      '<circle cx="650" cy="60" r="2" style="animation-delay:1.4s;animation-duration:4.2s;"/>'+
      '<circle cx="60" cy="200" r="1.5" style="animation-delay:2.1s;animation-duration:5.8s;"/>'+
      '<circle cx="410" cy="180" r="2" style="animation-delay:.4s;animation-duration:4.9s;"/>'+
      '<circle cx="620" cy="340" r="1.5" style="animation-delay:1.8s;animation-duration:5.1s;"/>'+
      '<circle cx="180" cy="380" r="2" style="animation-delay:1.1s;animation-duration:4.4s;"/>'+
      '<circle cx="750" cy="380" r="1.5" style="animation-delay:2.6s;animation-duration:5.6s;"/>'+
      '<circle cx="330" cy="60" r="1.5" style="animation-delay:1.6s;animation-duration:4.8s;"/>'+
      '<circle cx="530" cy="240" r="2" style="animation-delay:.9s;animation-duration:5.3s;"/>'+
      '<circle cx="150" cy="280" r="1.5" style="animation-delay:2.3s;animation-duration:4.5s;"/>'+
      '<circle cx="700" cy="150" r="2" style="animation-delay:.2s;animation-duration:5.7s;"/>'+
    '</g>'+
  '</svg>';
}

function mountNetworkMeshes(){
  var welcomeHost = document.getElementById('mesh-welcome');
  var loginHost = document.getElementById('mesh-login');
  if(welcomeHost) welcomeHost.innerHTML = buildNetworkMeshSVG('w');
  if(loginHost) loginHost.innerHTML = buildNetworkMeshSVG('l');
}
mountNetworkMeshes();

var user = { name:"", empid:"", email:"" };
var results = {}; // dynamic, keyed by moduleId: { [moduleId]: {done,score,total,pass} }
var allModules = []; // cached list of modules fetched from the backend
var currentModuleId = null;
var currentModuleData = null; // { module, topics, questions } for the module currently being viewed
var currentTopicIndex = 0;
var quizAnswers = {};

/* ============================= SEED CONTENT: COMPLIANCE (used only by "Seed Default Content") ============================= */
/* Builds a consistent, richly-animated 3-phase story illustration (Setup -> Risk flagged -> Resolution)
   for any topic, so every topic gets the same animation quality with topic-relevant icons/text. */
function buildStoryIllustration(o){
  return "<svg viewBox='0 0 700 300' xmlns='http://www.w3.org/2000/svg'>"+
    "<style>"+
      "@keyframes qgArrow{0%{stroke-dashoffset:170;opacity:0;}8%{opacity:1;}35%{stroke-dashoffset:0;opacity:1;}46%{opacity:0;}100%{opacity:0;stroke-dashoffset:0;}}"+
      "@keyframes qgReject{0%,32%{opacity:0;transform:scale(.4);}38%{opacity:1;transform:scale(1.18);}43%{transform:scale(1);}58%{opacity:1;transform:scale(1);}64%,100%{opacity:0;transform:scale(.8);}}"+
      "@keyframes qgReport{0%,64%{opacity:0;transform:translateY(12px);}70%{opacity:1;transform:translateY(0);}90%{opacity:1;}98%,100%{opacity:0;}}"+
      "@keyframes qgBounce{0%,64%,100%{transform:translateY(0);}68%{transform:translateY(-6px);}72%{transform:translateY(0);}}"+
      ".qg-arrow{stroke-dasharray:170;animation:qgArrow 8s ease-in-out infinite;}"+
      ".qg-reject{transform-origin:400px 150px;animation:qgReject 8s ease-in-out infinite;}"+
      ".qg-report{animation:qgReport 8s ease-in-out infinite;}"+
      ".qg-gift{transform-origin:350px 240px;animation:qgBounce 8s ease-in-out infinite;}"+
    "</style>"+
    "<rect width='700' height='300' fill='var(--blue-light)'/>"+
    "<text x='350' y='34' font-size='16' text-anchor='middle' fill='var(--navy)' font-weight='700'>"+o.caption+"</text>"+
    "<circle cx='190' cy='150' r='46' fill='var(--navy)'/>"+
    "<rect x='140' y='196' width='100' height='90' rx='16' fill='var(--navy)'/>"+
    "<text x='190' y='163' font-size='38' text-anchor='middle'>"+o.leftEmoji+"</text>"+
    "<text x='190' y='300' font-size='13' text-anchor='middle' fill='var(--navy)' font-weight='700'>"+o.leftLabel+"</text>"+
    "<circle cx='510' cy='150' r='46' fill='var(--blue)'/>"+
    "<rect x='460' y='196' width='100' height='90' rx='16' fill='var(--blue)'/>"+
    "<text x='510' y='163' font-size='38' text-anchor='middle'>"+o.rightEmoji+"</text>"+
    "<text x='510' y='300' font-size='13' text-anchor='middle' fill='var(--navy)' font-weight='700'>"+o.rightLabel+"</text>"+
    "<g class='qg-gift'><circle cx='350' cy='150' r='34' fill='#fff' stroke='var(--navy)' stroke-width='3'/>"+
      "<text x='350' y='164' font-size='34' text-anchor='middle'>"+o.centerEmoji+"</text></g>"+
    "<line x1='236' y1='150' x2='398' y2='150' stroke='var(--navy)' stroke-width='4' stroke-linecap='round' class='qg-arrow'/>"+
    "<polygon points='398,140 418,150 398,160' fill='var(--navy)' class='qg-arrow'/>"+
    "<g class='qg-reject'>"+
      "<circle cx='400' cy='150' r='30' fill='#fdeceb' stroke='var(--danger)' stroke-width='4'/>"+
      "<text x='400' y='163' font-size='28' text-anchor='middle'>"+o.verdictEmoji+"</text>"+
    "</g>"+
    "<g class='qg-report'>"+
      "<circle cx='350' cy='250' r='30' fill='var(--success-bg)' stroke='var(--success)' stroke-width='3'/>"+
      "<text x='350' y='260' font-size='26' text-anchor='middle'>✓</text>"+
      "<text x='350' y='292' font-size='13' text-anchor='middle' fill='var(--success)' font-weight='800'>"+o.resultText+"</text>"+
    "</g>"+
    "</svg>";
}

var seedComplianceTopics = [
  {
    icon:"⚖️",
    title:"Code of Conduct & Business Ethics",
    tip:"Our Code of Conduct is the baseline standard of behavior expected of every employee, contractor and leader — regardless of role or seniority.",
    body:"Every employee of QuadGen Wireless Solutions is expected to act with honesty, integrity and fairness in all business dealings. The Code of Conduct sets the minimum standard for how we treat colleagues, customers, partners and competitors. It applies equally at every level of the organization — there is no exception for seniority, tenure or performance.",
    points:[
      "Always act honestly in reporting, expenses, contracts and communications.",
      "Never offer, accept or facilitate bribes, kickbacks or improper gifts.",
      "Comply with all applicable laws, regulations and company policies in every country we operate in.",
      "Report suspected violations promptly — silence enables misconduct."
    ],
    example:"An employee is offered a expensive gift by a vendor shortly before a contract renewal. Accepting it — even 'just this once' — creates a real or perceived conflict and must be politely declined and reported to the Ethics desk.",
    illustration:"<svg viewBox='0 0 700 300' xmlns='http://www.w3.org/2000/svg'>"+
      "<style>"+
        "@keyframes qgArrow{0%{stroke-dashoffset:170;opacity:0;}8%{opacity:1;}35%{stroke-dashoffset:0;opacity:1;}46%{opacity:0;}100%{opacity:0;stroke-dashoffset:0;}}"+
        "@keyframes qgReject{0%,32%{opacity:0;transform:scale(.4);}38%{opacity:1;transform:scale(1.18);}43%{transform:scale(1);}58%{opacity:1;transform:scale(1);}64%,100%{opacity:0;transform:scale(.8);}}"+
        "@keyframes qgReport{0%,64%{opacity:0;transform:translateY(12px);}70%{opacity:1;transform:translateY(0);}90%{opacity:1;}98%,100%{opacity:0;}}"+
        "@keyframes qgBounce{0%,64%,100%{transform:translateY(0);}68%{transform:translateY(-6px);}72%{transform:translateY(0);}}"+
        ".qg-arrow{stroke-dasharray:170;animation:qgArrow 8s ease-in-out infinite;}"+
        ".qg-reject{transform-origin:400px 150px;animation:qgReject 8s ease-in-out infinite;}"+
        ".qg-report{animation:qgReport 8s ease-in-out infinite;}"+
        ".qg-gift{transform-origin:350px 240px;animation:qgBounce 8s ease-in-out infinite;}"+
      "</style>"+
      "<rect width='700' height='300' fill='var(--blue-light)'/>"+
      "<text x='350' y='34' font-size='17' text-anchor='middle' fill='var(--navy)' font-weight='700'>Watch the sequence: Offer &#8594; Decline &#8594; Report</text>"+
      "<circle cx='190' cy='150' r='46' fill='var(--navy)'/>"+
      "<rect x='140' y='196' width='100' height='90' rx='16' fill='var(--navy)'/>"+
      "<text x='190' y='160' font-size='38' text-anchor='middle'>\ud83e\uddd1\u200d\ud83d\udcbc</text>"+
      "<text x='190' y='300' font-size='13' text-anchor='middle' fill='var(--navy)' font-weight='700'>Vendor</text>"+
      "<circle cx='510' cy='150' r='46' fill='var(--blue)'/>"+
      "<rect x='460' y='196' width='100' height='90' rx='16' fill='var(--blue)'/>"+
      "<text x='510' y='160' font-size='38' text-anchor='middle'>\ud83e\uddd1\u200d\ud83d\udcbb</text>"+
      "<text x='510' y='300' font-size='13' text-anchor='middle' fill='var(--navy)' font-weight='700'>Employee</text>"+
      "<g class='qg-gift'>"+
        "<rect x='310' y='180' width='80' height='70' rx='8' fill='#f6c453' stroke='var(--navy)' stroke-width='3'/>"+
        "<rect x='310' y='206' width='80' height='14' fill='var(--navy)'/>"+
        "<rect x='342' y='180' width='16' height='70' fill='var(--navy)'/>"+
      "</g>"+
      "<line x1='236' y1='150' x2='398' y2='150' stroke='var(--navy)' stroke-width='4' stroke-linecap='round' class='qg-arrow'/>"+
      "<polygon points='398,140 418,150 398,160' fill='var(--navy)' class='qg-arrow'/>"+
      "<g class='qg-reject'>"+
        "<circle cx='400' cy='150' r='34' fill='#fdeceb' stroke='var(--danger)' stroke-width='5'/>"+
        "<line x1='386' y1='136' x2='414' y2='164' stroke='var(--danger)' stroke-width='5' stroke-linecap='round'/>"+
        "<line x1='414' y1='136' x2='386' y2='164' stroke='var(--danger)' stroke-width='5' stroke-linecap='round'/>"+
      "</g>"+
      "<g class='qg-report'>"+
        "<circle cx='350' cy='250' r='30' fill='var(--success-bg)' stroke='var(--success)' stroke-width='3'/>"+
        "<text x='350' y='260' font-size='26' text-anchor='middle'>\ud83d\udccb</text>"+
        "<text x='350' y='292' font-size='14' text-anchor='middle' fill='var(--success)' font-weight='800'>Reported to Ethics Desk \u2713</text>"+
      "</g>"+
      "</svg>",
    videoUrl:"videos/Real_world_example_An_employee.mp4"
  },
  {
    icon:"🚫",
    title:"Prevention of Harassment (POSH)",
    tip:"POSH — Prevention of Sexual Harassment — covers unwelcome conduct of a sexual nature, whether verbal, non-verbal or physical, in any work-related setting.",
    body:"QuadGen maintains a zero-tolerance policy toward sexual harassment in the workplace, including during travel, client visits, virtual meetings and company events. Harassment can be verbal (jokes, comments, innuendo), non-verbal (staring, gestures, unwanted messages) or physical (unwanted touching). Both the intent of the person and the impact on the recipient matter — 'I didn't mean it that way' is not a defense.",
    points:[
      "Unwelcome physical contact, comments or advances of a sexual nature are strictly prohibited.",
      "Harassment over chat, email or social media counts just as much as in-person conduct.",
      "Every location has a designated Internal Committee (IC) to receive and investigate complaints confidentially.",
      "Retaliation against a complainant or witness is a separate, serious violation."
    ],
    example:"A manager repeatedly comments on a team member's appearance despite being asked to stop. This is harassment regardless of the manager's seniority, and the employee has the right to file a confidential complaint with the IC without fear of career consequences.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Unwelcome Comment → Stop It → Report to IC',leftEmoji:'😟',leftLabel:'Colleague',rightEmoji:'🧑\u200d💼',rightLabel:'Manager',centerEmoji:'💬',verdictEmoji:'🚫',resultText:'Reported to Internal Committee ✓'}),
    videoUrl:"videos/Posh.mp4"
  },
  {
    icon:"🤝",
    title:"Anti-Discrimination & Equal Opportunity",
    tip:"Discrimination means treating someone less favorably because of a protected characteristic rather than their skills, performance or conduct.",
    body:"Every hiring, promotion, pay and disciplinary decision at QuadGen must be based solely on merit, skills and performance. Discrimination on the basis of race, religion, gender, age, disability, marital status, sexual orientation, nationality or any other protected characteristic is prohibited in every part of the employment relationship.",
    points:[
      "Recruitment, appraisal and promotion decisions must be documented and merit-based.",
      "Reasonable accommodation must be provided for employees with disabilities.",
      "Equal pay for equal work is a legal and ethical obligation, not a courtesy.",
      "Bias — even unconscious — should be actively checked in interviews and reviews."
    ],
    example:"Two candidates apply for the same role with equal qualifications. Rejecting one because of assumptions about their age or family status, rather than documented job-related criteria, is unlawful discrimination.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Equal Candidates → Reject Bias → Decide on Merit',leftEmoji:'🧑',leftLabel:'Candidate A',rightEmoji:'🧑\u200d🦱',rightLabel:'Candidate B',centerEmoji:'📋',verdictEmoji:'🚫',resultText:'Merit-Based Decision ✓'}),
    videoUrl:"videos/Anti-Discrimination%20&%20Equal%20Opportunity.mp4"
  },
  {
    icon:"🌍",
    title:"Diversity, Equity & Inclusion (DEI)",
    tip:"Diversity is the mix of people; equity is fair treatment; inclusion is whether everyone in the mix genuinely feels heard and valued.",
    body:"A diverse workforce brings a wider range of perspectives, but diversity alone isn't enough — QuadGen is committed to equity (fair access to opportunity) and inclusion (a culture where different viewpoints are genuinely welcomed in meetings, projects and decision-making). DEI is not a compliance checkbox; it directly improves decision quality, innovation and retention.",
    points:[
      "Actively invite and credit contributions from quieter or underrepresented voices in meetings.",
      "Avoid assumptions based on someone's background, accent or appearance.",
      "Mentorship and stretch opportunities should be offered broadly, not only within existing networks.",
      "Inclusive language and accessible meeting formats benefit the whole team, not just a few."
    ],
    example:"During a brainstorm, one team member's idea is initially ignored, then praised minutes later when repeated by someone else. A good ally notices this pattern and redirects credit — small daily behaviors like this are what build (or erode) an inclusive culture.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Idea Shared → Credit Redirected → Everyone Heard',leftEmoji:'🙋\u200d♀️',leftLabel:'Team Member',rightEmoji:'🙋',rightLabel:'Colleague',centerEmoji:'💡',verdictEmoji:'🔄',resultText:'Credit Given Correctly ✓'}),
    videoUrl:"videos/Diversity.mp4"
  },
  {
    icon:"🧭",
    title:"Workplace Respect & Professional Conduct",
    tip:"Professional conduct covers everyday interactions: tone in emails, behavior in meetings, and how disagreements are handled.",
    body:"Respect at work goes beyond avoiding harassment — it means communicating professionally even under pressure, disagreeing without demeaning others, and maintaining appropriate boundaries between colleagues. This includes remote and hybrid interactions: tone in a Slack message or email can cause just as much harm as an in-person comment.",
    points:[
      "Critique ideas and work product, never the person.",
      "Avoid shouting, sarcasm, public humiliation or exclusionary behavior in meetings.",
      "Keep personal social media conduct free of content that could embarrass colleagues or the company.",
      "Alcohol at work events never excuses unprofessional or unsafe behavior."
    ],
    example:"During a heated project review, a senior employee raises their voice and mocks a junior colleague's mistake in front of the whole team. Even if the technical criticism is valid, the delivery is a professional conduct violation and should be reported.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Heated Words → Stop & Reset → Respectful Discussion',leftEmoji:'😠',leftLabel:'Senior Employee',rightEmoji:'😟',rightLabel:'Junior Colleague',centerEmoji:'🗯️',verdictEmoji:'🛑',resultText:'Professional Conduct Restored ✓'}),
    videoUrl:"videos/Ethics_in_Workplace.mp4"
  },
  {
    icon:"📣",
    title:"Whistleblower & Speak-Up Awareness",
    tip:"A whistleblower is anyone who reports suspected wrongdoing in good faith — they are protected by policy even if the concern later turns out to be unfounded.",
    body:"QuadGen encourages every employee to speak up about suspected fraud, safety issues, harassment, discrimination or policy violations — through their manager, HR, the Ethics Hotline, or an anonymous reporting channel. Reports made in good faith are protected: retaliation, demotion or exclusion against someone who raises a genuine concern is itself a serious violation, investigated independently.",
    points:[
      "Multiple reporting channels exist, including an anonymous hotline, for anyone uncomfortable naming themselves.",
      "You do not need proof to raise a concern — reasonable suspicion, raised in good faith, is enough.",
      "Retaliation against a whistleblower is grounds for disciplinary action, up to termination.",
      "All reports are handled confidentially and investigated by an independent team."
    ],
    example:"An employee notices a colleague repeatedly falsifying expense reports and reports it anonymously through the Ethics Hotline. The company is obligated to investigate and to protect the reporting employee's identity throughout the process.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Spot Fraud → Report Anonymously → Protected by Policy',leftEmoji:'🧑\u200d💼',leftLabel:'Employee',rightEmoji:'🕵️',rightLabel:'Ethics Team',centerEmoji:'🧾',verdictEmoji:'🚩',resultText:'Protected & Investigated ✓'}),
    videoUrl:"videos/Whistleblowing%20in%20the%20Workplace.mp4"
  },
  {
    icon:"🔒",
    title:"Data Privacy & Confidentiality",
    tip:"Confidential information includes customer data, employee records, trade secrets, unreleased product plans and financial results — anything not meant for public release.",
    body:"Employees regularly handle sensitive company, customer and colleague information. This must be accessed only for legitimate business purposes, shared only with authorized people, and protected from accidental disclosure — including in casual conversation, on personal devices, or on social media. Confidentiality obligations continue even after an employee leaves the company.",
    points:[
      "Access only the data required for your role — 'need to know' applies to everyone.",
      "Never discuss confidential business matters in public spaces, rideshares or on social media.",
      "Use only company-approved tools to store or transmit sensitive data — not personal email or consumer cloud drives.",
      "Report any suspected data leak or lost device immediately, however small it seems."
    ],
    example:"An employee discusses an unreleased product feature with a friend at a coffee shop, unaware a competitor's contact is seated nearby. Even casual disclosure of confidential plans can cause real commercial harm.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Public Conversation → Risk Spotted → Stay Confidential',leftEmoji:'🧑\u200d💼',leftLabel:'Employee',rightEmoji:'🕵️\u200d♂️',rightLabel:'Nearby Listener',centerEmoji:'💬',verdictEmoji:'🚫',resultText:'Confidentiality Maintained ✓'}),
    videoUrl:"videos/DataPrivacy.mp4"
  },
  {
    icon:"🧩",
    title:"Conflict of Interest Awareness",
    tip:"A conflict of interest exists whenever your personal interests could improperly influence — or appear to influence — a decision you make for the company.",
    body:"Conflicts of interest aren't automatically wrongdoing — but they must be disclosed so they can be managed transparently. Common examples include hiring or supervising a relative, holding a financial stake in a vendor or competitor, or accepting outside work that overlaps with company business. Employees must proactively disclose potential conflicts to their manager or the Ethics team.",
    points:[
      "Disclose any financial interest, family relationship or outside role that could influence a work decision.",
      "Recuse yourself from decisions (hiring, procurement, approvals) where a conflict exists.",
      "Outside employment or consulting must be disclosed and approved in advance if it overlaps with company business.",
      "When in doubt, disclose — an undisclosed conflict is far more damaging than a disclosed one."
    ],
    example:"A procurement manager's spouse owns a company bidding for a QuadGen vendor contract. The manager must disclose this relationship and step back from the vendor selection process entirely.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Family Connection → Disclose It → Recuse & Stay Ethical',leftEmoji:'🧑\u200d🤝\u200d🧑',leftLabel:'Family Member',rightEmoji:'🏢',rightLabel:'Vendor',centerEmoji:'📝',verdictEmoji:'🚩',resultText:'Disclosed & Recused ✓'}),
    videoUrl:"videos/Conflict%20of%20Interest%20Awareness.mp4"
  }
];

var seedComplianceQuiz = [
  {q:"What is the primary purpose of QuadGen's Code of Conduct?", options:["To restrict employee benefits","To set the minimum standard of honest and ethical behavior for everyone, regardless of seniority","To apply only to new employees during probation","To replace local laws where they are inconvenient"], correct:1, explanation:"The Code of Conduct sets one consistent standard of honest, ethical behavior for every employee, regardless of seniority or tenure."},
  {q:"An employee is offered an expensive gift by a vendor just before a contract renewal. What should they do?", options:["Accept it quietly since it's a personal gift","Accept it and mention it later if asked","Politely decline and report it to the Ethics desk","Accept but split it with the team"], correct:2, explanation:"Accepting a gift right before a business decision creates a real or perceived conflict of interest — the correct response is to decline and report it to the Ethics desk."},
  {q:"Which of the following best describes sexual harassment under POSH policy?", options:["Only unwanted physical touching counts","Only in-person conduct is covered, not chat or email","Unwelcome verbal, non-verbal or physical conduct of a sexual nature, in any work setting","Only conduct that is intended to offend"], correct:2, explanation:"POSH covers unwelcome verbal, non-verbal or physical conduct of a sexual nature in any work setting, including chat, email and off-site events, not just in-person contact."},
  {q:"An employee wants to report a harassment concern but is afraid of career consequences. What does QuadGen's POSH policy guarantee?", options:["Nothing, they must accept the risk","Protection from retaliation and a confidential investigation process","The complaint will only be reviewed if a manager approves it first","Anonymous complaints are automatically dismissed"], correct:1, explanation:"QuadGen's POSH policy guarantees protection from retaliation and a confidential investigation, so employees can report without fear of career consequences."},
  {q:"Which hiring practice would violate QuadGen's Anti-Discrimination policy?", options:["Selecting the most qualified candidate based on documented criteria","Rejecting a candidate due to assumptions about their age or family status","Interviewing all shortlisted candidates using the same rubric","Providing reasonable accommodation to a candidate with a disability"], correct:1, explanation:"Rejecting a candidate based on assumptions about age or family status, rather than documented job-related criteria, is unlawful discrimination even if unintentional."},
  {q:"What is required for equal pay for equal work at QuadGen?", options:["It is a courtesy offered only in some regions","It is a legal and ethical obligation applied consistently","It only applies to management roles","It applies only if requested by the employee"], correct:1, explanation:"Equal pay for equal work is a legal and ethical obligation applied consistently across the organization, not a courtesy limited to certain roles."},
  {q:"What is the key difference between diversity and inclusion?", options:["They mean exactly the same thing","Diversity is the mix of people present; inclusion is whether everyone genuinely feels heard and valued","Diversity applies to customers; inclusion applies to employees","Inclusion is a legal requirement, diversity is optional"], correct:1, explanation:"Diversity is who is present; inclusion is whether those people are genuinely heard and valued — an organization can be diverse without being inclusive."},
  {q:"In a meeting, a quieter colleague's idea is ignored, then praised when repeated by someone else. What is the appropriate DEI-aligned response?", options:["Let it go since the idea was still heard eventually","Redirect credit to the original contributor", "Discuss it privately only, never in the meeting","Assume it was an honest mistake and ignore it"], correct:1, explanation:"Redirecting credit to the original contributor is the DEI-aligned response; letting the pattern slide reinforces who gets recognized over time."},
  {q:"A senior employee shouts and mocks a junior colleague during a project review. Even if the criticism was technically valid, this is:", options:["Acceptable because seniority allows a firmer tone","A workplace respect and professional conduct violation","Only a concern if the junior employee complains publicly","Standard practice in high-pressure reviews"], correct:1, explanation:"Delivering criticism by shouting or mocking a colleague is a conduct violation because of how it was delivered, regardless of whether the underlying feedback was valid."},
  {q:"Which of the following is considered unprofessional conduct at a company event?", options:["Networking with colleagues from other teams","Using alcohol consumption as an excuse for inappropriate behavior","Leaving early due to a prior commitment","Discussing work projects informally"], correct:1, explanation:"Alcohol consumption is never an acceptable excuse for inappropriate behavior — the same conduct standards apply at company events as anywhere else."},
  {q:"What protection does a whistleblower have under QuadGen policy if their good-faith report later turns out to be incorrect?", options:["They can be disciplined for wasting investigators' time","They remain protected as long as the report was made in good faith","They must publicly retract the claim","Protection only applies to anonymous reports"], correct:1, explanation:"Whistleblower protections apply as long as the report was made in good faith, even if the concern later turns out to be unfounded."},
  {q:"Which of these is a valid channel for raising an ethics concern at QuadGen?", options:["Only your direct manager","Manager, HR, the Ethics Hotline, or anonymous reporting channels","Only the anonymous hotline","Social media posts about the company"], correct:1, explanation:"QuadGen offers multiple valid channels — manager, HR, Ethics Hotline, or anonymous reporting — so no one feels they have only one, possibly uncomfortable, option."},
  {q:"An employee discusses an unreleased product feature at a public coffee shop. This is a violation of:", options:["Conflict of Interest policy","Data Privacy & Confidentiality policy","Whistleblower policy","Anti-Discrimination policy"], correct:1, explanation:"Discussing unreleased product details anywhere outside authorized channels, even casually in public, risks being overheard and is a confidentiality violation."},
  {q:"What is the 'need to know' principle in data confidentiality?", options:["All employees should have access to all company data","Access to sensitive data should be limited to what is required for your role","Only executives need to know sensitive information","Data can be shared freely within the same department"], correct:1, explanation:"The 'need to know' principle limits data access strictly to what's required for a person's role, minimizing exposure even among well-intentioned employees."},
  {q:"A procurement manager's spouse owns a company bidding for a vendor contract. What should the manager do?", options:["Say nothing since it is a personal matter","Disclose the relationship and recuse themselves from the vendor decision","Approve the bid quietly to avoid awkwardness","Ask a friend to approve it instead"], correct:1, explanation:"When a family member has a stake in a vendor bid, the correct action is to disclose the relationship and recuse yourself from that decision entirely."}
];

/* ============================= CONTENT: CYBER SECURITY ============================= */
var seedCyberTopics = [
  {
    icon:"🎣",
    title:"Phishing & Spear Phishing",
    tip:"Phishing casts a wide net with generic messages; spear phishing is personalized to you specifically, using your name, role or recent activity.",
    body:"Phishing emails impersonate a trusted sender — IT, a bank, a courier, a well-known brand — to trick you into clicking a malicious link, opening an infected attachment, or entering credentials on a fake login page. Spear phishing is a targeted variant that references real details about you or your organization (your manager's name, a current project, an internal tool) to appear far more convincing.",
    points:[
      "Check the sender's actual email address, not just the display name.",
      "Hover over links before clicking to preview the real destination URL.",
      "Be suspicious of urgency: 'your account will be suspended in 24 hours' is a classic pressure tactic.",
      "Never enter your company password on a page reached by clicking an email link — go to the site directly instead."
    ],
    example:"You receive an email that looks like it's from 'IT Support' asking you to 'verify your password' via a link because of a 'security update'. The sender's real address is it-support@quadgen-secure-check.net — a lookalike domain, not the real company domain. This is phishing.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Suspicious Email → Spot Red Flags → Verify & Report',leftEmoji:'📧',leftLabel:'Fake Sender',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔗',verdictEmoji:'🚩',resultText:'Verified & Reported ✓'}),
    videoUrl:"videos/cyber/Phishing1.mp4"
  },
  {
    icon:"📱",
    title:"Smishing (SMS Phishing)",
    tip:"Smishing uses text messages instead of email, often impersonating delivery services, banks or even your own company's HR or IT department.",
    body:"Because text messages feel personal and immediate, people are often less guarded reading them than email. Smishing messages typically contain a shortened or unfamiliar link and create urgency around a package delivery, a payment issue, or an account problem, hoping you'll tap without checking.",
    points:[
      "Be wary of shortened links (bit.ly, tinyurl) in unexpected texts — they hide the real destination.",
      "Legitimate delivery and bank services rarely ask you to 'confirm' account details via SMS link.",
      "Never reply with personal information, OTPs or codes to an unsolicited text.",
      "Verify by contacting the organization directly through its official app or number, not the one in the text."
    ],
    example:"A text reads: 'Your package could not be delivered. Update your address here: bit.ly/xyz123'. You weren't expecting a delivery. This is a classic smishing attempt designed to harvest personal or payment details.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Unexpected Text → Suspicious Link → Block & Report',leftEmoji:'📱',leftLabel:'Unknown Sender',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔗',verdictEmoji:'🚩',resultText:'Blocked & Reported ✓'}),
    videoUrl:"videos/cyber/Smishing1.mp4"
  },
  {
    icon:"📞",
    title:"Vishing (Voice Scams)",
    tip:"Vishing is phishing over a phone call — often using a spoofed caller ID that displays a trusted number, like your bank or IT helpdesk.",
    body:"A vishing caller may impersonate IT support, a bank fraud team, or even a senior executive (sometimes using AI-generated voice cloning) to pressure you into revealing passwords, OTPs, or approving a fraudulent transaction over the phone. These calls rely heavily on urgency and authority.",
    points:[
      "No legitimate IT or bank representative will ever ask for your full password or one-time passcode over the phone.",
      "Caller ID can be spoofed — a familiar number doesn't guarantee a legitimate caller.",
      "If pressured to act immediately, hang up and call back using an official number you look up independently.",
      "Be cautious of unexpected calls claiming to be a senior leader requesting an urgent fund transfer — verify through a second channel."
    ],
    example:"You get a call from someone claiming to be from 'QuadGen IT', saying your account was compromised and asking you to read out the OTP just sent to your phone 'to verify your identity'. This is vishing — hang up and report it.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Urgent Call → Request for OTP → Hang Up & Verify',leftEmoji:'📞',leftLabel:'Spoofed Caller',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔢',verdictEmoji:'🚩',resultText:'Call Ended & Verified ✓'}),
    videoUrl:"videos/cyber/Vishing%20(1).mp4"
  },
  {
    icon:"🔳",
    title:"QR Phishing (Quishing)",
    tip:"Quishing hides a malicious link inside a QR code, bypassing email link scanners and exploiting the fact that people rarely inspect where a QR code leads before scanning.",
    body:"Attackers place fraudulent QR codes on posters, parking meters, or emails asking you to 'scan to verify' or 'scan for a special offer.' Because a QR code doesn't show its destination in plain text, it's easy to be redirected to a credential-harvesting page without the usual visual warning signs of a phishing link.",
    points:[
      "Preview the URL your phone shows after scanning before tapping through — never proceed on trust alone.",
      "Be suspicious of QR codes that appear stuck over an original one, or arrive unexpectedly by email.",
      "Avoid scanning QR codes asking for login credentials or payment information directly.",
      "When in doubt, navigate to the organization's site manually instead of scanning."
    ],
    example:"An email claiming to be from HR asks you to 'scan this QR code to complete your annual benefits enrollment.' Scanning it redirects to a fake login page designed to steal your company credentials.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Scan QR Code → Preview the Link → Confirm Before Proceeding',leftEmoji:'🔳',leftLabel:'QR Poster',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔗',verdictEmoji:'🚩',resultText:'Checked Before Proceeding ✓'}),
    videoUrl:"videos/cyber/Quishing.mp4"
  },
  {
    icon:"💼",
    title:"Business Email Compromise (BEC)",
    tip:"BEC attacks compromise or spoof a real business email account — often an executive's — to authorize fraudulent payments or data transfers.",
    body:"Unlike generic phishing, BEC is highly targeted and often involves no malware or suspicious link at all — just a convincing, well-timed email that appears to come from a CEO, CFO, or trusted vendor, requesting an urgent wire transfer, gift card purchase, or change to bank account details for an upcoming payment.",
    points:[
      "Any request to change vendor payment details must be verified by phone using a known, independently sourced number.",
      "Be suspicious of unusual urgency or confidentiality requests from 'executives' ('don't mention this to anyone else yet').",
      "Check the reply-to address, not just the display name — attackers often use a lookalike domain.",
      "Establish and follow a dual-approval process for any wire transfer or payment detail change."
    ],
    example:"Finance receives an email appearing to be from the CFO: 'I'm in a meeting, please wire $48,000 to this new vendor account today, keep this confidential.' This is a textbook BEC attempt — verify by calling the CFO directly before acting.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Urgent Wire Request → Suspicious Pressure → Verify Independently',leftEmoji:'👔',leftLabel:'\u201cCFO\u201d Email',rightEmoji:'🧑\u200d💼',rightLabel:'Finance Team',centerEmoji:'💸',verdictEmoji:'🚩',resultText:'Verified by Phone Call ✓'}),
    videoUrl:"videos/cyber/BEC.mp4"
  },
  {
    icon:"🎭",
    title:"Social Engineering Tactics",
    tip:"Social engineering manipulates human psychology — trust, urgency, authority, fear or helpfulness — rather than exploiting a technical vulnerability.",
    body:"Every phishing, vishing, smishing and BEC attack relies on social engineering principles at its core. Attackers may impersonate a delivery person to gain physical building access ('tailgating'), pretend to be a new hire needing help, or build rapport over several messages before making a request ('pretexting'). Awareness of these patterns is more valuable than any single technical control.",
    points:[
      "Authority: impersonating a senior leader or regulator to discourage questioning.",
      "Urgency: creating a false deadline so you act before you think.",
      "Tailgating: following an employee through a secure door without badging in.",
      "Pretexting: building a false but plausible backstory to earn your trust over time."
    ],
    example:"Someone in a delivery uniform, carrying boxes, asks an employee to 'hold the door' into a secure office area. Even though it seems polite to help, this is a common tailgating technique — every visitor should badge in independently.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Friendly Request → Tailgating Attempt → Badge In Yourself',leftEmoji:'📦',leftLabel:'Delivery Person',rightEmoji:'🧑\u200d💼',rightLabel:'Employee',centerEmoji:'🚪',verdictEmoji:'🚫',resultText:'Badged In Independently ✓'}),
    videoUrl:"videos/cyber/Social%20engineering.mp4"
  },
  {
    icon:"🔑",
    title:"Passwords & Passkeys Basics",
    tip:"A passkey replaces a password entirely with a cryptographic key tied to your device — there is no shared secret for an attacker to steal or phish.",
    body:"Strong password hygiene remains essential wherever passkeys aren't yet available. Passwords should be long, unique per account, and never reused across personal and work systems. Where offered, passkeys (using your device's biometric or PIN unlock) are more phishing-resistant than passwords because there is no secret to type into a fake site.",
    points:[
      "Use a unique, long passphrase (12+ characters) for every account — never reuse passwords across systems.",
      "Use a company-approved password manager rather than memorizing or writing passwords down.",
      "Enable passkeys wherever QuadGen systems support them for stronger, phishing-resistant login.",
      "Never share your password with anyone, including IT — legitimate support never needs it."
    ],
    example:"An employee uses the same password for their personal email and their work account. If that personal account is ever breached, attackers can immediately try the same password against company systems — this is called credential stuffing.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Reused Password → Breach Risk → Switch to Passkey',leftEmoji:'🔑',leftLabel:'Old Password',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔓',verdictEmoji:'🚩',resultText:'Passkey Enabled ✓'}),
    videoUrl:"videos/cyber/Secure%20passphrase.mp4"
  },
  {
    icon:"🔔",
    title:"MFA Fatigue & Push Bombing",
    tip:"MFA fatigue (push bombing) is when an attacker who already has your password repeatedly triggers login approval requests, hoping you'll tap 'Approve' just to make the notifications stop.",
    body:"Multi-factor authentication (MFA) is a critical defense, but attackers have adapted by bombarding a user's phone with repeated push notifications late at night or during a busy moment, betting on fatigue or confusion rather than technical exploitation. Approving even one unexpected request can hand over full account access.",
    points:[
      "Never approve an MFA push notification you did not personally initiate — always tap 'Deny'.",
      "A flood of unexpected MFA requests means your password is likely already compromised — change it and report immediately.",
      "Where available, use number-matching MFA (entering a code shown on the login screen) instead of a simple approve/deny tap.",
      "Report repeated unexpected MFA prompts to IT Security even if you denied every one of them."
    ],
    example:"At 11pm, an employee's phone buzzes ten times in a row with 'Approve sign-in?' prompts they never requested. Tapping 'Approve' out of frustration would hand an attacker full access — the correct action is to deny all and report it immediately.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Repeated Prompts → Deny the Request → Report to IT Security',leftEmoji:'📲',leftLabel:'Attacker',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔔',verdictEmoji:'🚫',resultText:'Denied & Reported ✓'}),
    videoUrl:"videos/cyber/MFA.mp4"
  },
  {
    icon:"🗂️",
    title:"Data Handling & Privacy Basics",
    tip:"Data classification (public, internal, confidential, restricted) determines how information may be stored, shared and disposed of.",
    body:"Every employee handles some level of sensitive data — customer records, financial data, source code or internal communications. Data must be stored only on approved company systems, shared only through approved channels, and disposed of securely (not simply deleted from the recycle bin) once no longer needed, in line with data retention policy.",
    points:[
      "Store company data only in approved systems — never on personal cloud drives or personal USB devices.",
      "Encrypt sensitive files when sending externally, and confirm the recipient before sending.",
      "Lock your screen every time you step away, even for a minute, in shared or public spaces.",
      "Dispose of physical documents containing sensitive data via secure shredding, not the regular trash."
    ],
    example:"An employee copies a customer database to a personal USB drive to 'work on it over the weekend.' Even with good intentions, this violates data handling policy and creates a serious, unencrypted point of exposure if the drive is lost.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Unknown USB → Risk Recognized → Hand to IT Security',leftEmoji:'💾',leftLabel:'USB Drive',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🔌',verdictEmoji:'🚩',resultText:'Handed to IT Securely ✓'}),
    videoUrl:"videos/cyber/Data%20Handling.mp4"
  },
  {
    icon:"🧯",
    title:"Ransomware & Safe Backups",
    tip:"Ransomware encrypts your files and demands payment for the decryption key — the single best defense is a tested, offline or immutable backup you never have to negotiate for.",
    body:"Ransomware often enters through a phishing attachment, a compromised remote access tool, or an unpatched system, then spreads across the network encrypting files and disrupting operations. Paying the ransom does not guarantee recovery and funds further attacks. The most effective protection is prevention (avoiding the initial infection) combined with regularly tested backups kept separate from the main network.",
    points:[
      "Never enable 'macros' or 'editing' on an unexpected email attachment, even from a known contact whose account may be compromised.",
      "Report a locked screen, ransom note, or unusual mass file renaming immediately — do not attempt to pay or negotiate yourself.",
      "Keep systems patched and updated promptly — many ransomware strains exploit known, unpatched vulnerabilities.",
      "Follow the 3-2-1 backup principle: three copies of data, on two different media, with one copy stored offline or offsite."
    ],
    example:"An employee opens an unexpected invoice attachment and enables 'editing' as prompted. Within minutes, shared drive files begin showing a .locked extension and a ransom note appears — this is active ransomware, and IT Security must be alerted immediately, without shutting the machine off first if instructed otherwise by IT.",
    illustration: buildStoryIllustration({caption:'Watch the sequence: Suspicious Attachment → Files Encrypted → Isolate & Restore',leftEmoji:'📎',leftLabel:'Attachment',rightEmoji:'🧑\u200d💻',rightLabel:'Employee',centerEmoji:'🦠',verdictEmoji:'🚩',resultText:'Isolated & Restored ✓'}),
    videoUrl:"videos/cyber/Ransomware.mp4"
  }
];

var seedCyberQuiz = [
  {q:"What is the key difference between phishing and spear phishing?", options:["Phishing only happens by phone","Spear phishing is a personalized attack referencing details specific to you or your organization","Phishing is always safe to click","Spear phishing only targets executives"], correct:1, explanation:"Spear phishing is a personalized version of phishing that references real details about you or your organization to appear more convincing."},
  {q:"Before clicking a link in an email, what is the safest first step?", options:["Click it quickly before it expires","Hover over it to preview the actual destination URL","Forward it to a coworker to test first","Reply asking if it's safe"], correct:1, explanation:"Hovering over a link reveals its actual destination URL, letting you spot a suspicious or mismatched domain before ever clicking."},
  {q:"An email creates urgency, saying your account will be suspended in 24 hours unless you click a link. This is most likely:", options:["A standard IT reminder","A phishing pressure tactic","Always a legitimate security notice","Something you should ignore without reporting"], correct:1, explanation:"Manufactured urgency, like a 24-hour deadline, is a classic phishing pressure tactic designed to make you act before thinking carefully."},
  {q:"You receive an unexpected text saying a package couldn't be delivered, with a shortened link to 'update your address'. What should you do?", options:["Tap the link since it seems harmless","Reply with your address to be safe","Avoid the link and verify through the official delivery app or number directly","Forward it to friends to warn them"], correct:2, explanation:"Since you weren't expecting a delivery, the safest move is to avoid the link and verify directly through the official app or number, not the text itself."},
  {q:"Why are shortened links (like bit.ly) risky in unexpected texts?", options:["They load slower than normal links","They hide the real destination, making it hard to verify safety before clicking","They are always fraudulent","They only work on certain phones"], correct:1, explanation:"Shortened links hide their real destination, making it much harder to spot a malicious site before clicking — exactly why attackers favor them."},
  {q:"A caller claiming to be from IT asks you to read out the one-time passcode just sent to your phone. What should you do?", options:["Read it out since it's IT","Hang up — legitimate IT never needs your OTP or password","Text it instead of saying it aloud","Provide half the code only"], correct:1, explanation:"No legitimate IT support ever needs your one-time passcode — reading it aloud hands account access straight to the attacker."},
  {q:"Why can't you always trust caller ID during a suspicious phone call?", options:["Caller ID is always accurate","Caller ID can be spoofed to display a trusted number","Only mobile phones can show caller ID","Landlines cannot be spoofed"], correct:1, explanation:"Caller ID can be spoofed to display any number the attacker chooses, including ones that look like your own IT department or bank."},
  {q:"What makes QR phishing (quishing) particularly deceptive?", options:["QR codes always contain malware","The destination link isn't visible until after scanning, unlike a normal link","QR codes cannot be scanned by phones","QR codes are illegal to use"], correct:1, explanation:"A QR code hides its destination until after scanning, unlike a normal link where the URL can be previewed first."},
  {q:"You receive an email asking you to scan a QR code to 'complete benefits enrollment.' What is the safest action?", options:["Scan it immediately since it's from HR","Preview the destination after scanning, or better, navigate to the HR site directly instead","Forward the QR code to a personal email","Ignore email security entirely for HR requests"], correct:1, explanation:"The safest action is to preview the destination after scanning, or better, navigate to the HR site directly yourself rather than trusting the QR code blindly."},
  {q:"What is a defining feature of Business Email Compromise (BEC)?", options:["It always contains a virus attachment","It is a highly targeted attack using a convincing, urgent request, often impersonating an executive, with no malware involved","It only targets personal Gmail accounts","It is always easy to detect due to spelling errors"], correct:1, explanation:"BEC attacks are highly targeted, use urgent convincing language often impersonating an executive, and typically involve no malware — making them harder to catch with technical filters alone."},
  {q:"Finance receives an urgent email 'from the CFO' asking for a wire transfer to a new vendor account, marked confidential. What should happen next?", options:["Process it immediately since it's urgent and confidential","Verify by calling the CFO directly using a known number before acting","Reply to the email asking for confirmation","Ask a junior colleague to approve it instead"], correct:1, explanation:"Any urgent, confidential wire transfer request should be verified by phone using a known number, never by replying to the email itself."},
  {q:"What should be verified before changing any vendor's payment or bank details?", options:["Nothing, email instructions are sufficient","The request should be confirmed by phone using an independently sourced, known number","Only the email signature needs to match","Just confirm the amount is under a certain limit"], correct:1, explanation:"Changes to vendor payment or bank details must be confirmed by phone using an independently sourced, known number — email alone is never sufficient."},
  {q:"What is 'tailgating' in the context of social engineering?", options:["Sending too many phishing emails at once","Following an authorized employee through a secure door without badging in independently","A type of ransomware","A password cracking technique"], correct:1, explanation:"Tailgating means following an authorized employee through a secure door without badging in yourself, exploiting politeness rather than any technical flaw."},
  {q:"Which of these best describes 'pretexting'?", options:["Sending a text message before a call","Building a false but plausible backstory over time to earn trust and extract information","A type of QR code attack","Automatically blocking suspicious emails"], correct:1, explanation:"Pretexting involves building a false but plausible backstory over time to earn trust before extracting sensitive information."},
  {q:"What advantage do passkeys have over traditional passwords?", options:["They are shorter and easier to guess","There is no shared secret to steal or phish, since they're tied to your device","They never need to be set up","They work without any device at all"], correct:1, explanation:"Passkeys are tied to your physical device, so there's no shared secret like a password that can be stolen or phished."},
  {q:"What is the risk of reusing the same password across personal and work accounts?", options:["There is no risk if the password is strong","If one account is breached, attackers can try the same password elsewhere (credential stuffing)","It slows down login times","It is required by most security policies"], correct:1, explanation:"Reusing a password means that if it's exposed in one breach, attackers can immediately try it elsewhere — a technique called credential stuffing."},
  {q:"What is the recommended way to store and manage passwords?", options:["Write them on a sticky note near your desk","Use a company-approved password manager","Reuse one strong password everywhere","Share them with a trusted coworker as backup"], correct:1, explanation:"A company-approved password manager securely stores unique, complex passwords for every account, removing the temptation to reuse or write them down."},
  {q:"What is MFA fatigue (push bombing)?", options:["A user forgetting their MFA device","An attacker repeatedly sending MFA approval requests, hoping the user taps 'approve' out of frustration","A technical failure in the MFA system","A method to reset forgotten passwords"], correct:1, explanation:"MFA fatigue relies on the attacker already having your password and hoping repeated approval requests wear you down into tapping approve out of frustration."},
  {q:"You receive ten unexpected 'Approve sign-in?' push notifications in a row. What should you do?", options:["Approve one to make them stop","Deny all of them and report it to IT Security immediately","Turn off your phone and ignore it","Wait until morning to check"], correct:1, explanation:"A flood of unexpected approval requests signals your password may already be compromised — deny every one and report it immediately rather than approving to make them stop."},
  {q:"What does data classification (public, internal, confidential, restricted) help determine?", options:["Which font to use in documents","How information may be stored, shared and disposed of","Employee salary bands","Which meetings to attend"], correct:1, explanation:"Data classification determines exactly how information may be stored, shared and eventually disposed of, based on its sensitivity."},
  {q:"An employee copies a customer database to a personal USB drive to work on over the weekend. This is:", options:["Acceptable if done with good intentions","A violation of data handling policy that creates unencrypted exposure risk","Required for remote work","Only a problem if the drive is lost"], correct:1, explanation:"Copying company data to a personal USB drive creates an unencrypted, untracked exposure risk — good intentions don't reduce that if the drive is lost."},
  {q:"What should you do with sensitive physical documents that are no longer needed?", options:["Place them in the regular trash bin","Dispose of them via secure shredding","Leave them on your desk for recycling later","Give them to a colleague to reuse the paper"], correct:1, explanation:"Sensitive physical documents should always go through secure shredding, not the regular trash, where they could be recovered by anyone."},
  {q:"What does ransomware typically do once it infects a system?", options:["Improves system performance","Encrypts files and demands payment for a decryption key","Automatically backs up your files","Only affects browser history"], correct:1, explanation:"Ransomware encrypts your files and demands payment for the decryption key, effectively holding your data hostage."},
  {q:"Why is paying a ransomware demand discouraged?", options:["It's illegal in every country","It does not guarantee recovery and funds further attacks","Payment is always instantly refunded","It automatically alerts law enforcement"], correct:1, explanation:"Paying a ransom doesn't guarantee recovery of your files, and it directly funds the attacker to continue targeting others."},
  {q:"What is the 3-2-1 backup principle?", options:["3 passwords, 2 devices, 1 login","3 copies of data, on 2 different media, with 1 copy stored offline or offsite","3 employees must approve every backup","3 minutes between each backup cycle"], correct:1, explanation:"The 3-2-1 rule means 3 copies of data, on 2 different media, with at least 1 stored offline or offsite, so a single ransomware infection can't wipe out every copy at once."}
];

/* ============================= EMPLOYEE ID PREFIX CONFIG ============================= */
var PREFIX_CONFIG = [
  { value:"CMS-QWS/", label:"CMS-QWS/", digits:3 },
  { value:"QGI",       label:"QGI",      digits:3 },
  { value:"QES",       label:"QES",      digits:4 },
  { value:"QGIA",      label:"QGIA",     digits:3 },
  { value:"INT/",      label:"INT/",     digits:5, splitAt:2 },
  { value:"QGUS",      label:"QGUS",     digits:4 },
  { value:"DRI",       label:"DRI",      digits:3 },
  { value:"QG-Ctr/",   label:"QG-Ctr/",  digits:3 }
];

function populatePrefixDropdown(){
  var select = document.getElementById('in-empid-prefix');
  if(!select || select.options.length > 0) return; // only populate once
  PREFIX_CONFIG.forEach(function(cfg){
    var opt = document.createElement('option');
    opt.value = cfg.value;
    opt.textContent = cfg.label;
    select.appendChild(opt);
  });
  onPrefixChange();
}

function getPrefixConfig(value){
  for(var i=0;i<PREFIX_CONFIG.length;i++){
    if(PREFIX_CONFIG[i].value === value) return PREFIX_CONFIG[i];
  }
  return PREFIX_CONFIG[0];
}

function formatEmpidDigitsInput(input){
  var container = input.closest ? input.closest('.compound-field') : null;
  var select = container ? container.querySelector('select') : null;
  var cfg = select ? getPrefixConfig(select.value) : null;
  var rawDigits = input.value.replace(/[^0-9]/g, '');

  if(cfg){
    rawDigits = rawDigits.slice(0, cfg.digits);
    if(cfg.splitAt && rawDigits.length > cfg.splitAt){
      input.value = rawDigits.slice(0, cfg.splitAt) + '/' + rawDigits.slice(cfg.splitAt);
    } else {
      input.value = rawDigits;
    }
  } else {
    input.value = rawDigits;
  }
}

function getRawDigits(input){
  return input.value.replace(/[^0-9]/g, '');
}

function getDigitsPlaceholder(cfg){
  if(cfg.splitAt){
    return '0'.repeat(cfg.splitAt) + '/' + '0'.repeat(cfg.digits - cfg.splitAt);
  }
  return '0'.repeat(cfg.digits);
}

function getFieldMaxLength(cfg){
  return cfg.splitAt ? cfg.digits + 1 : cfg.digits; // +1 for the inserted slash
}

function onPrefixChange(){
  var select = document.getElementById('in-empid-prefix');
  var digitsInput = document.getElementById('in-empid-digits');
  var cfg = getPrefixConfig(select.value);
  digitsInput.value = '';
  digitsInput.setAttribute('maxlength', getFieldMaxLength(cfg));
  digitsInput.placeholder = getDigitsPlaceholder(cfg);
}

function composeEmployeeId(prefixValue, digitsRaw){
  var cfg = getPrefixConfig(prefixValue);
  if(cfg.splitAt){
    return prefixValue + digitsRaw.slice(0, cfg.splitAt) + '/' + digitsRaw.slice(cfg.splitAt, cfg.digits);
  }
  return prefixValue + digitsRaw;
}

function isValidEmailFormat(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ============================= LOGIN / LOGOUT ============================= */
var loginMode = 'employee'; // 'employee' or 'admin'
var pendingUser = null;

function startLogin(mode){
  loginMode = mode;
  document.getElementById('login-mode-title').innerHTML = mode === 'admin'
    ? 'Admin Login<br>Sign in with your registered admin email to view the dashboard.'
    : 'Employee Awareness Training Portal<br>Please sign in to begin your mandatory certification.';
  populatePrefixDropdown();
  document.getElementById('login-error').textContent = '';
  showScreen('login');
}

function signIn(){
  var name = document.getElementById('in-name').value.trim();
  var prefix = document.getElementById('in-empid-prefix').value;
  var digits = getRawDigits(document.getElementById('in-empid-digits'));
  var emailLocal = document.getElementById('in-email').value.trim();
  var err = document.getElementById('login-error');
  var cfg = getPrefixConfig(prefix);

  if(!name || !digits || !emailLocal){
    err.textContent = "Please fill in your name, employee ID and email address.";
    return;
  }
  var expectedLen = cfg.digits;
  if(digits.length !== expectedLen || !/^[0-9]+$/.test(digits)){
    err.textContent = "Employee ID must be exactly " + expectedLen + " digits for this format.";
    return;
  }
  if(!/^[a-zA-Z0-9._-]+$/.test(emailLocal)){
    err.textContent = "Please enter a valid email username (letters, numbers, dots only).";
    return;
  }

  var empid = composeEmployeeId(prefix, digits);
  var email = (emailLocal + "@quadgenwireless.com").toLowerCase();
  if(!isValidEmailFormat(email)){
    err.textContent = "That doesn't look like a valid email address.";
    return;
  }

  err.textContent = "";
  pendingUser = { name:name, empid:empid, email:email };

  if(loginMode === 'admin'){
    var signInBtn = document.getElementById('btn-sign-in');
    signInBtn.disabled = true;
    signInBtn.textContent = "Checking access…";

    jsonpRequest(RESULTS_WEBAPP_URL + '?action=is_admin&empid=' + encodeURIComponent(empid) + '&email=' + encodeURIComponent(email))
      .then(function(adminData){
        signInBtn.disabled = false;
        signInBtn.textContent = "Sign in";
        if(adminData.isAdmin){
          completeLogin();
          showScreen('admin');
          loadAdminDashboard();
        } else {
          err.textContent = "This account is not authorized as admin. Contact your administrator to be added.";
        }
      })
      .catch(function(){
        signInBtn.disabled = false;
        signInBtn.textContent = "Sign in";
        err.textContent = "Couldn't reach the server. Please try again.";
      });
  } else {
    completeLogin();
    showScreen('home');
  }
}

function completeLogin(){
  resetResultsState();
  user = pendingUser;
  document.getElementById('greet-name').textContent = user.name.split(' ')[0];
  document.getElementById('hdr-name').textContent = user.name;
  document.getElementById('hdr-empid').textContent = "ID: " + user.empid;
  document.getElementById('hdr-name2').textContent = user.name;
  document.getElementById('hdr-empid2').textContent = "ID: " + user.empid;
}

function handleLogout(){
  showScreen('welcome');
  document.getElementById('in-name').value = "";
  document.getElementById('in-empid-digits').value = "";
  document.getElementById('in-email').value = "";
  document.getElementById('login-error').textContent = "";
  resetResultsState();
  pendingUser = null;
}

function resetResultsState(){
  results = {};
}

function showScreen(name){
  document.getElementById('screen-welcome').classList.add('hidden');
  document.getElementById('screen-login').classList.add('hidden');
  document.getElementById('screen-home').classList.add('hidden');
  document.getElementById('screen-module').classList.add('hidden');
  document.getElementById('screen-admin').classList.add('hidden');
  document.getElementById('screen-' + name).classList.remove('hidden');
  if(name === 'home') renderHomeModules();
  window.scrollTo(0,0);
}

/* ============================= HOME PAGE (dynamic modules) ============================= */
/* Built-in modules — always available, no backend/database dependency at all.
   These use the original hardcoded content, so they can never be affected by
   any Sheet/Apps Script issues. */
var STATIC_MODULES = {
  compliance: {
    id: 'compliance', icon:'📋', title: 'Compliance & Workplace Conduct Awareness',
    description:'Code of conduct, anti-harassment, anti-discrimination, DEI, workplace respect, whistleblower protections, data confidentiality and conflict of interest.',
    passMark: 10,
    topics: seedComplianceTopics, quiz: seedComplianceQuiz
  },
  cyber: {
    id: 'cyber', icon:'🛡️', title: 'Cyber Security Awareness',
    description:'Phishing, smishing, vishing, quishing, BEC, social engineering, passwords & passkeys, MFA fatigue, data handling and ransomware defense.',
    passMark: 20,
    topics: seedCyberTopics, quiz: seedCyberQuiz
  }
};
var STATIC_MODULE_ORDER = ['compliance', 'cyber'];

function renderHomeModules(){
  var container = document.getElementById('module-cards-container');

  var staticCardsHtml = STATIC_MODULE_ORDER.map(function(id){
    var m = STATIC_MODULES[id];
    return '<div class="module-card" id="module-card-'+id+'">'+
      '<div class="module-icon">'+m.icon+'</div>'+
      '<h2>'+m.title+'</h2>'+
      '<p>'+m.description+'</p>'+
      '<div id="status-'+id+'" class="module-status not-done">Checking status…</div>'+
      '<div class="module-meta"><span>'+m.topics.length+' topics</span><span>'+m.quiz.length+' questions</span><span>Pass mark '+m.passMark+'/'+m.quiz.length+'</span></div>'+
      '<button class="btn btn-primary" id="btn-'+id+'" onclick="openModule(\''+id+'\')">Start module</button>'+
    '</div>';
  }).join('');

  container.innerHTML = staticCardsHtml + '<p id="dynamic-modules-loading" style="color:var(--muted);font-size:13.5px;grid-column:1/-1;">Checking for additional modules…</p>';

  // Two requests total per login (not one per module): the module list, and
  // ALL of this employee's results in a single batched call.
  var modulesPromise = jsonpRequest(RESULTS_WEBAPP_URL + '?action=list_modules');
  var resultsPromise = jsonpRequest(RESULTS_WEBAPP_URL + '?action=check_all&empid=' + encodeURIComponent(user.empid));

  Promise.all([modulesPromise, resultsPromise]).then(function(responses){
    allModules = responses[0].modules || [];
    var employeeRows = responses[1].rows || [];

    var loadingEl = document.getElementById('dynamic-modules-loading');
    if(loadingEl) loadingEl.remove();

    var dynamicCardsHtml = allModules.map(function(m){
      return '<div class="module-card" id="module-card-'+m.id+'">'+
        '<div class="module-icon">'+m.icon+'</div>'+
        '<h2>'+m.title+'</h2>'+
        '<p>'+m.description+'</p>'+
        '<div id="status-'+m.id+'" class="module-status not-done">Checking status…</div>'+
        '<div class="module-meta"><span>Pass mark '+m.passPercentage+'%</span></div>'+
        '<button class="btn btn-primary" id="btn-'+m.id+'" onclick="openModule(\''+m.id+'\')">Start module</button>'+
      '</div>';
    }).join('');
    container.insertAdjacentHTML('beforeend', dynamicCardsHtml);

    // Build a lookup by module title, then apply to every module (static + dynamic) at once
    var byTitle = {};
    employeeRows.forEach(function(r){ byTitle[r.module] = r; });

    var allIdsAndTitles = STATIC_MODULE_ORDER.map(function(id){ return {id:id, title:STATIC_MODULES[id].title}; })
      .concat(allModules.map(function(m){ return {id:m.id, title:m.title}; }));

    allIdsAndTitles.forEach(function(entry){
      var r = byTitle[entry.title];
      if(r){
        results[entry.id] = {
          done:true, score:Number(r.score), total:Number(r.total),
          pass: String(r.result).toLowerCase() === 'pass'
        };
      } else {
        results[entry.id] = { done:false, score:0, total:0, pass:false };
      }
      updateModuleCardStatus(entry.id);
    });
  }).catch(function(err){
    var loadingEl = document.getElementById('dynamic-modules-loading');
    if(loadingEl) loadingEl.textContent = 'Could not load training modules: ' + err;
  });
}

/* Kept for other call sites (e.g. re-checking a single module after a change);
   the home page itself now uses the single batched check_all call above. */
function checkModuleStatusById(moduleId, moduleTitle){
  var url = RESULTS_WEBAPP_URL + '?action=check&empid=' + encodeURIComponent(user.empid) + '&module=' + encodeURIComponent(moduleTitle);
  jsonpRequest(url)
    .then(function(data){
      if(data && data.found){
        results[moduleId] = {
          done:true, score:Number(data.score), total:Number(data.total),
          pass: String(data.result).toLowerCase() === 'pass'
        };
      } else {
        results[moduleId] = { done:false, score:0, total:0, pass:false };
      }
      updateModuleCardStatus(moduleId);
    })
    .catch(function(err){ console.error('Could not check prior result for', moduleId, err); });
}

function updateModuleCardStatus(moduleId){
  var statusEl = document.getElementById('status-' + moduleId);
  var btnEl = document.getElementById('btn-' + moduleId);
  if(!statusEl || !btnEl) return;
  var r = results[moduleId];

  if(r && r.done){
    statusEl.textContent = r.pass
      ? 'Certified — ' + Math.round((r.score/r.total)*100) + '%'
      : 'Attempted — retake required';
    statusEl.className = r.pass ? 'module-status' : 'module-status not-done';
    btnEl.textContent = r.pass ? 'View certificate' : 'Retake assessment';
  } else {
    statusEl.textContent = 'Not yet completed';
    statusEl.className = 'module-status not-done';
    btnEl.textContent = 'Start module';
  }
}

/* ============================= MODULE NAVIGATION ============================= */
function openModule(moduleId){
  currentModuleId = moduleId;
  currentModuleData = null;
  currentTopicIndex = 0;
  currentSubSlideIndex = 0;
  quizAnswers = {};
  showScreen('module');

  // Built-in modules: no backend fetch needed, content is already local
  if(STATIC_MODULES[moduleId]){
    var sm = STATIC_MODULES[moduleId];
    currentModuleData = {
      module: { title: sm.title, passPercentage: null, isStatic:true, passMark: sm.passMark },
      topics: sm.topics,
      questions: sm.quiz
    };
    var r = results[moduleId];
    if(r && r.done && r.pass){
      renderResult(r.score, r.total, true);
      return;
    }
    renderTopic();
    return;
  }

  // Dynamic (admin-created) modules: fetch from the backend
  document.getElementById('module-wrap').innerHTML = '<p style="color:var(--muted);">Loading module content…</p>';
  jsonpRequest(RESULTS_WEBAPP_URL + '?action=get_module_content&moduleId=' + encodeURIComponent(moduleId))
    .then(function(data){
      if(!data.found){
        document.getElementById('module-wrap').innerHTML = '<p style="color:var(--danger);">This module could not be found. It may have been removed.</p>';
        return;
      }
      currentModuleData = data;
      var r = results[moduleId];
      if(r && r.done && r.pass){
        renderResult(r.score, r.total, true);
        return;
      }
      renderTopic();
    })
    .catch(function(err){
      document.getElementById('module-wrap').innerHTML = '<p style="color:var(--danger);">Could not load module content: '+err+'</p>';
    });
}

function getTopics(){ return currentModuleData ? currentModuleData.topics : []; }
function getQuiz(){ return currentModuleData ? currentModuleData.questions : []; }
function getModuleTitle(){ return currentModuleData ? currentModuleData.module.title : ''; }
function getPassMark(){
  if(!currentModuleData) return 0;
  if(currentModuleData.module.isStatic) return currentModuleData.module.passMark;
  var total = getQuiz().length;
  return Math.ceil(total * (currentModuleData.module.passPercentage / 100));
}

var currentSubSlideIndex = 0; // 0 = overview, 1 = pictorial example, 2 = key points

/* TEMPORARY (testing only): set to true once the project is fully ready to re-enable
   the "must wait for narration/video to finish before Next unlocks" restriction. */
var ENFORCE_NARRATION_GATING = true;
var currentNarrationText = '';
var isNarrationPaused = false;

function speechSupported(){
  return typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
}

function pickIndianVoice(){
  if(!speechSupported()) return null;
  var voices = window.speechSynthesis.getVoices() || [];
  if(voices.length === 0) return null;

  // Known female voice names across common platforms (Windows, macOS/iOS, Android, Chrome OS).
  // The Web Speech API gives no reliable "gender" field, so this is a best-effort name match —
  // it won't guarantee the exact same voice everywhere, but it noticeably improves consistency.
  var femaleNameHints = [
    'female','zira','samantha','victoria','susan','karen','moira','tessa','fiona',
    'allison','ava','serena','kathy','veena','lekha','heera','neerja','priya',
    'google uk english female','google us english female','aditi','raveena'
  ];
  var isFemaleName = function(name){
    var n = (name || '').toLowerCase();
    return femaleNameHints.some(function(hint){ return n.indexOf(hint) !== -1; });
  };

  // Tier 1: an Indian-English voice that also looks female by name.
  var indianFemale = voices.filter(function(v){ return /en[-_]IN/i.test(v.lang) && isFemaleName(v.name); })[0];
  if(indianFemale) return indianFemale;

  // Tier 2: any Indian-English voice, regardless of apparent gender.
  var indianAny = voices.filter(function(v){ return /en[-_]IN/i.test(v.lang); })[0];
  if(indianAny) return indianAny;

  // Tier 3: any English voice that looks female by name.
  var englishFemale = voices.filter(function(v){ return /^en/i.test(v.lang) && isFemaleName(v.name); })[0];
  if(englishFemale) return englishFemale;

  // Tier 4: give up on matching — let the browser use its own default voice.
  return null;
}

// Many browsers (esp. Chrome) return an empty voice list on the very first call
// and only populate it asynchronously — this just triggers that load early,
// so a real voice (Indian English, if available) is more likely ready in time
// for the very first narrated slide.
if(speechSupported()){
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = function(){ window.speechSynthesis.getVoices(); };
}

var narrationAudioEl = null; // the shared <audio> element used for pre-recorded narration, when available
var currentNarrationAudioUrl = ''; // set when the current slide has a recorded-audio narration instead of browser TTS

/* Returns the recorded-audio URL for a topic's current sub-slide, if the admin/content
   has provided one — otherwise returns '' and the caller falls back to browser TTS. */
function getNarrationAudioUrlForSlide(topic, subSlideIndex){
  if(!topic) return '';
  if(subSlideIndex === 0) return topic.audioOverview || '';
  if(subSlideIndex === 1) return topic.audioExample || '';
  return topic.audioKeyPoints || '';
}

/* Single entry point used by renderTopic(): plays recorded audio if one is set for this
   slide (guaranteeing the exact same voice on every device), otherwise falls back to the
   browser's built-in text-to-speech exactly as before. */
function playNarration(text, audioUrl){
  currentNarrationText = text;
  currentNarrationAudioUrl = audioUrl || '';
  isNarrationPaused = false;

  if(currentNarrationAudioUrl){
    playRecordedNarration(currentNarrationAudioUrl);
  } else {
    narrateCurrentSlide(text);
  }
}

function playRecordedNarration(url){
  var statusEl = document.getElementById('narration-status');
  var nextBtn = document.getElementById('slide-next-btn');
  var pauseBtn = document.getElementById('pause-narration-btn');

  if(narrationAudioEl){
    narrationAudioEl.pause();
    narrationAudioEl.src = '';
  }
  narrationAudioEl = new Audio(url);

  if(nextBtn && ENFORCE_NARRATION_GATING) nextBtn.disabled = true;
  if(pauseBtn){ pauseBtn.disabled = false; pauseBtn.textContent = '⏸ Pause'; }
  if(statusEl) statusEl.textContent = '🔊 Playing narration…';

  narrationAudioEl.addEventListener('ended', function(){
    if(nextBtn) nextBtn.disabled = false;
    if(pauseBtn) pauseBtn.disabled = true;
    if(statusEl) statusEl.textContent = '✓ Narration complete — you can continue.';
  });
  narrationAudioEl.addEventListener('error', function(){
    if(nextBtn) nextBtn.disabled = false;
    if(pauseBtn) pauseBtn.disabled = true;
    if(statusEl) statusEl.textContent = '⚠️ Narration audio could not play — you may continue.';
  });
  narrationAudioEl.play().catch(function(){
    // Some browsers block audio until a real user interaction has happened on the page yet.
    if(nextBtn) nextBtn.disabled = false;
    if(statusEl) statusEl.textContent = '🔊 Tap Replay to start narration.';
  });
}

function narrateCurrentSlide(text){
  currentNarrationText = text;
  isNarrationPaused = false;
  var statusEl = document.getElementById('narration-status');
  var nextBtn = document.getElementById('slide-next-btn');
  var pauseBtn = document.getElementById('pause-narration-btn');

  if(!speechSupported()){
    if(nextBtn) nextBtn.disabled = false;
    if(pauseBtn) pauseBtn.disabled = true;
    if(statusEl) statusEl.textContent = '🔇 Voice narration isn\'t supported in this browser — you may continue.';
    return;
  }

  window.speechSynthesis.cancel();
  if(nextBtn && ENFORCE_NARRATION_GATING) nextBtn.disabled = true;
  if(pauseBtn){ pauseBtn.disabled = false; pauseBtn.textContent = '⏸ Pause'; }
  if(statusEl) statusEl.textContent = '🔊 Playing narration…';

  var utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.98;
  var indianVoice = pickIndianVoice();
  if(indianVoice){
    utter.voice = indianVoice;
    utter.lang = indianVoice.lang;
  } else {
    utter.lang = 'en-IN'; // hint the engine toward an Indian-English pronunciation even without a dedicated voice
  }
  utter.onend = function(){
    if(nextBtn) nextBtn.disabled = false;
    if(pauseBtn) pauseBtn.disabled = true;
    if(statusEl) statusEl.textContent = '✓ Narration complete — you can continue.';
  };
  utter.onerror = function(){
    if(nextBtn) nextBtn.disabled = false;
    if(pauseBtn) pauseBtn.disabled = true;
    if(statusEl) statusEl.textContent = '⚠️ Narration could not play — you may continue.';
  };
  window.speechSynthesis.speak(utter);
}

function togglePauseNarration(){
  var pauseBtn = document.getElementById('pause-narration-btn');
  var statusEl = document.getElementById('narration-status');

  if(currentNarrationAudioUrl && narrationAudioEl){
    if(isNarrationPaused){
      narrationAudioEl.play();
      isNarrationPaused = false;
      if(pauseBtn) pauseBtn.textContent = '⏸ Pause';
      if(statusEl) statusEl.textContent = '🔊 Playing narration…';
    } else {
      narrationAudioEl.pause();
      isNarrationPaused = true;
      if(pauseBtn) pauseBtn.textContent = '▶ Resume';
      if(statusEl) statusEl.textContent = '⏸ Paused.';
    }
    return;
  }

  if(!speechSupported()) return;
  if(isNarrationPaused){
    window.speechSynthesis.resume();
    isNarrationPaused = false;
    if(pauseBtn) pauseBtn.textContent = '⏸ Pause';
    if(statusEl) statusEl.textContent = '🔊 Playing narration…';
  } else {
    window.speechSynthesis.pause();
    isNarrationPaused = true;
    if(pauseBtn) pauseBtn.textContent = '▶ Resume';
    if(statusEl) statusEl.textContent = '⏸ Paused.';
  }
}

function replayNarration(){
  if(currentNarrationAudioUrl){
    playRecordedNarration(currentNarrationAudioUrl);
    return;
  }
  if(currentNarrationText) narrateCurrentSlide(currentNarrationText);
}

function stopNarration(){
  if(narrationAudioEl) narrationAudioEl.pause();
  currentNarrationAudioUrl = '';
  if(speechSupported()) window.speechSynthesis.cancel();
}

/* Converts any common YouTube URL format into a proper embeddable URL.
   Returns null if the input doesn't look like a valid YouTube link. */
function toYouTubeEmbedUrl(url){
  if(!url) return null;
  url = String(url).trim();
  var idMatch =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{6,})/);
  if(!idMatch) return null;
  return 'https://www.youtube.com/embed/' + idMatch[1];
}

/* A "direct" video is an uploaded/hosted file (e.g. videos/example.mp4) rather than a YouTube link.
   These play muted with the TTS narration continuing over them, instead of the video's own audio. */
function isDirectVideoFile(url){
  if(!url) return false;
  url = String(url).trim();
  if(toYouTubeEmbedUrl(url)) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

function renderTopic(){
  var topics = getTopics();
  var t = topics[currentTopicIndex];
  var wrap = document.getElementById('module-wrap');
  var dots = '';
  for(var i=0;i<topics.length;i++){
    var cls = 'progress-dot';
    if(i < currentTopicIndex) cls += ' done';
    if(i === currentTopicIndex) cls += ' current';
    dots += '<div class="'+cls+'"></div>';
  }

  var totalSteps = topics.length * 3;
  var currentStep = (currentTopicIndex * 3) + currentSubSlideIndex + 1;
  var percentComplete = Math.round((currentStep / totalSteps) * 100);

  var keyPoints = t.keyPoints || t.points || [];
  var isLastTopic = currentTopicIndex === topics.length - 1;
  var isLastSlide = currentSubSlideIndex === 2;

  var slideLabel = ['Part 1 of 3 — Overview', 'Part 2 of 3 — Pictorial Example', 'Part 3 of 3 — Key Points'][currentSubSlideIndex];
  var bodyHtml, narrationText;
  var isVideoSlide = false; // true only for YouTube (own audio -> watched checkbox instead of narration)
  var isDirectVideo = false; // true for an uploaded/hosted video file (plays first, then narration follows)
  var embedUrl = null;

  if(currentSubSlideIndex === 0){
    narrationText = t.title + '. ' + t.body;
    bodyHtml =
      '<h2><span class="topic-icon">'+t.icon+'</span>'+t.title+
        '<span class="hover-tip">i<span class="tip-bubble">'+t.tip+'</span></span>'+
      '</h2>'+
      '<p>'+t.body+'</p>';
  } else if(currentSubSlideIndex === 1){
    narrationText = 'Real world example. ' + t.example;
    embedUrl = toYouTubeEmbedUrl(t.videoUrl);
    if(embedUrl){
      isVideoSlide = true;
      bodyHtml =
        '<h2><span class="topic-icon">'+t.icon+'</span>'+t.title+'</h2>'+
        '<div class="video-embed-wrap"><iframe src="'+embedUrl+'" title="'+t.title+' training video" '+
          'frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
    } else if(isDirectVideoFile(t.videoUrl)){
      // Uploaded/hosted video clip: plays with its own audio first; narration begins only once it finishes
      isDirectVideo = true;
      bodyHtml =
        '<h2><span class="topic-icon">'+t.icon+'</span>'+t.title+'</h2>'+
        '<div class="video-embed-wrap">'+
          '<video id="topic-direct-video" src="'+t.videoUrl+'" playsinline controls></video>'+
          '<div class="video-play-overlay" id="video-play-overlay" onclick="playDirectVideoWithSound()">'+
            '<div class="play-circle">▶</div>'+
            '<div>Tap to play with sound</div>'+
          '</div>'+
          '<button class="video-fullscreen-btn" onclick="fullscreenDirectVideo()">⛶ Fullscreen</button>'+
        '</div>';
    } else if(t.illustration){
      bodyHtml =
        '<h2><span class="topic-icon">'+t.icon+'</span>'+t.title+' — Pictorial Example</h2>'+
        '<div class="topic-visual">'+t.illustration+'</div>'+
        '<div class="example-box"><div class="ex-title">Real-world example</div><p>'+t.example+'</p></div>';
    } else {
      // Graceful fallback until an illustration or video has been added for this topic
      bodyHtml =
        '<h2><span class="topic-icon">'+t.icon+'</span>'+t.title+' — Example</h2>'+
        '<div class="example-box"><div class="ex-title">Real-world example</div><p>'+t.example+'</p></div>';
    }
  } else {
    narrationText = 'Key points to remember. ' + keyPoints.join('. ');
    bodyHtml =
      '<h2><span class="topic-icon">'+t.icon+'</span>'+t.title+' — Key Points</h2>'+
      '<div class="key-points"><div class="kp-title">Key points to remember</div><ul>'+
        keyPoints.map(function(p){ return '<li>'+p+'</li>'; }).join('')+
      '</ul></div>';
  }

  var isVeryFirstSlide = currentTopicIndex === 0 && currentSubSlideIndex === 0;
  var nextLabel = (isLastTopic && isLastSlide) ? 'Proceed to assessment →' : 'Next →';
  var nextAction = (isLastTopic && isLastSlide) ? 'startQuiz()' : 'goNextSlide()';

  var footerHtml = isVideoSlide
    ? '<div style="display:flex;align-items:center;gap:10px;justify-content:center;margin:14px 0;">'+
        '<label style="font-size:13.5px;color:var(--ink);cursor:pointer;display:flex;align-items:center;gap:8px;">'+
          '<input type="checkbox" id="video-watched-check" onchange="onVideoWatchedToggle()" style="width:16px;height:16px;"> '+
          "I've watched this video"+
        '</label>'+
      '</div>'
    : (isDirectVideo
        ? ''
        : '<div style="display:flex;align-items:center;gap:12px;justify-content:center;margin:14px 0;flex-wrap:wrap;">'+
            '<span id="narration-status" style="font-size:13px;color:var(--muted);">🔊 Playing narration…</span>'+
            '<button class="btn-mini" id="pause-narration-btn" onclick="togglePauseNarration()">⏸ Pause</button>'+
            '<button class="btn-mini" id="replay-narration-btn" onclick="replayNarration()">↻ Replay narration</button>'+
          '</div>');

  wrap.innerHTML =
    '<div class="module-heading"><h1>'+getModuleTitle()+'</h1></div>'+
    '<div class="overall-progress">'+
      '<div class="overall-progress-labels"><span>Overall progress</span><span class="overall-progress-pct">'+percentComplete+'% complete</span></div>'+
      '<div class="overall-progress-bar"><div class="overall-progress-fill" style="width:'+percentComplete+'%;"></div></div>'+
    '</div>'+
    '<div class="progress-track">'+dots+'</div>'+
    '<div class="topic-eyebrow">📍 Topic '+(currentTopicIndex+1)+' of '+topics.length+' &nbsp;·&nbsp; '+slideLabel+'</div>'+
    '<div class="topic-card">'+
      bodyHtml+
    '</div>'+
    footerHtml+
    '<div class="topic-nav">'+
      '<button class="btn btn-ghost" onclick="goPrevSlide()" '+(isVeryFirstSlide?'disabled':'')+'>&larr; Previous</button>'+
      '<button class="btn btn-primary" id="slide-next-btn" '+(ENFORCE_NARRATION_GATING?'disabled':'')+' onclick="'+nextAction+'">'+nextLabel+'</button>'+
    '</div>'+
    '<div style="text-align:center;margin-top:18px;"><button class="btn-ghost btn back-link" style="border:none;" onclick="stopNarration();showScreen(\'home\')">&larr; Back to home</button></div>';

  if(isVideoSlide){
    // No TTS on video slides — the video has its own audio. Next unlocks only once the viewer confirms they watched it.
    stopNarration();
  } else {
    var directVideoEl = document.getElementById('topic-direct-video');
    if(directVideoEl){
      // Direct video slides play with their own audio only — no narration follows, and no controls are shown below.
      stopNarration();

      // Prevent skipping ahead: remember the furthest point actually reached by real playback,
      // and snap back if the viewer drags the scrubber forward past that point.
      var lastValidTime = 0;
      directVideoEl.addEventListener('timeupdate', function(){
        if(!directVideoEl.seeking) lastValidTime = directVideoEl.currentTime;
      });
      directVideoEl.addEventListener('seeking', function(){
        if(directVideoEl.currentTime - lastValidTime > 0.5){
          directVideoEl.currentTime = lastValidTime;
        }
      });

      // Next stays locked until the video has genuinely finished playing.
      directVideoEl.addEventListener('ended', function(){
        var nextBtn = document.getElementById('slide-next-btn');
        if(nextBtn) nextBtn.disabled = false;
      });
    } else {
      playNarration(narrationText, getNarrationAudioUrlForSlide(t, currentSubSlideIndex));
    }
  }
}

function playDirectVideoWithSound(){
  var videoEl = document.getElementById('topic-direct-video');
  var overlay = document.getElementById('video-play-overlay');
  if(!videoEl) return;
  videoEl.play().then(function(){
    if(overlay) overlay.style.display = 'none';
  }).catch(function(err){
    console.warn('Could not start video playback.', err);
  });
}

function fullscreenDirectVideo(){
  var videoEl = document.getElementById('topic-direct-video');
  if(!videoEl) return;
  var req = videoEl.requestFullscreen || videoEl.webkitRequestFullscreen || videoEl.msRequestFullscreen;
  if(req) req.call(videoEl);
}

function onVideoWatchedToggle(){
  var checkbox = document.getElementById('video-watched-check');
  var nextBtn = document.getElementById('slide-next-btn');
  if(nextBtn) nextBtn.disabled = ENFORCE_NARRATION_GATING ? !checkbox.checked : false;
}

function goNextSlide(){
  var topics = getTopics();
  if(currentSubSlideIndex < 2){
    currentSubSlideIndex++;
    renderTopic();
  } else if(currentTopicIndex < topics.length - 1){
    currentTopicIndex++;
    currentSubSlideIndex = 0;
    renderTopic();
  }
}

function goPrevSlide(){
  if(currentSubSlideIndex > 0){
    currentSubSlideIndex--;
    renderTopic();
  } else if(currentTopicIndex > 0){
    currentTopicIndex--;
    currentSubSlideIndex = 2;
    renderTopic();
  }
}

/* ============================= QUIZ ============================= */
function startQuiz(){
  stopNarration();
  quizAnswers = {};
  renderQuiz();
}

function renderQuiz(){
  var quiz = getQuiz();
  var wrap = document.getElementById('module-wrap');
  var qHtml = quiz.map(function(item, idx){
    var optsHtml = item.options.map(function(opt, oi){
      return '<label id="q'+idx+'-opt'+oi+'-label"><input type="radio" name="q'+idx+'" value="'+oi+'" onchange="setAnswer('+idx+','+oi+')"> '+opt+'</label>';
    }).join('');
    return '<div class="quiz-q" id="quiz-q-'+idx+'"><div class="q-num">Question '+(idx+1)+' of '+quiz.length+'</div>'+
      '<div class="q-text">'+(item.questionText || item.q)+'</div>'+
      '<div class="q-options">'+optsHtml+'</div>'+
      '<div class="q-feedback" id="q'+idx+'-feedback"></div>'+
      '</div>';
  }).join('');

  wrap.innerHTML =
    '<div class="module-heading"><h1>'+getModuleTitle()+' — Assessment</h1></div>'+
    '<div class="quiz-intro"><h2>Final assessment</h2><p>Answer all '+quiz.length+' questions below — you\'ll see right away whether each answer is correct. Once you pick an answer it locks in, so choose carefully. You need at least '+getPassMark()+' correct answers out of '+quiz.length+' to pass and receive your certificate.</p></div>'+
    qHtml+
    '<div class="quiz-warn" id="quiz-warn"></div>'+
    '<div class="quiz-submit-bar"><button class="btn btn-primary" onclick="submitQuiz()">Submit assessment</button></div>'+
    '<div style="text-align:center;"><button class="btn-ghost btn back-link" style="border:none;" onclick="renderTopic()">&larr; Back to topics</button></div>';
}

function setAnswer(qIdx, optIdx){
  if(quizAnswers[qIdx] !== undefined) return; // already locked in, ignore further changes
  quizAnswers[qIdx] = optIdx;

  var quiz = getQuiz();
  var item = quiz[qIdx];
  var correctAns = (item.correctIndex !== undefined) ? item.correctIndex : item.correct;
  var isCorrect = optIdx === correctAns;

  // Lock the whole question: disable every radio button for it
  var questionEl = document.getElementById('quiz-q-'+qIdx);
  var radios = questionEl.querySelectorAll('input[type="radio"]');
  radios.forEach(function(r){ r.disabled = true; });

  // Highlight the selected option, and the correct one if the selection was wrong
  var selectedLabel = document.getElementById('q'+qIdx+'-opt'+optIdx+'-label');
  selectedLabel.classList.add(isCorrect ? 'q-opt-correct' : 'q-opt-wrong');
  if(!isCorrect){
    var correctLabel = document.getElementById('q'+qIdx+'-opt'+correctAns+'-label');
    correctLabel.classList.add('q-opt-correct');
  }

  var feedbackEl = document.getElementById('q'+qIdx+'-feedback');
  var explanation = item.explanation || '';
  if(isCorrect){
    feedbackEl.className = 'q-feedback q-feedback-correct';
    feedbackEl.innerHTML = '<b>✅ Correct!</b>' + (explanation ? ' ' + explanation : '');
  } else {
    feedbackEl.className = 'q-feedback q-feedback-wrong';
    feedbackEl.innerHTML = '<b>❌ Not quite.</b> The correct answer is: <b>"'+item.options[correctAns]+'"</b>.' + (explanation ? ' ' + explanation : '');
  }
}

function submitQuiz(){
  var quiz = getQuiz();
  if(Object.keys(quizAnswers).length < quiz.length){
    document.getElementById('quiz-warn').textContent = 'Please answer all '+quiz.length+' questions before submitting.';
    return;
  }
  var score = 0;
  quiz.forEach(function(item, idx){
    var correctAns = (item.correctIndex !== undefined) ? item.correctIndex : item.correct;
    if(quizAnswers[idx] === correctAns) score++;
  });
  var pass = score >= getPassMark();
  results[currentModuleId] = { done:true, score:score, total:quiz.length, pass:pass };
  reportResultToSheet(score, quiz.length, pass);
  renderResult(score, quiz.length, pass, true);
}

/* ============================= ADMIN REPORTING (Google Sheet) ============================= */
var RESULTS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzUE5J6GW__1QSuqfB1op3hcCVv-QJKCVitWxcH8AhOGLrtKIm4r2NfmH2wP_OpnrfH/exec";

function reportResultToSheet(score, total, pass){
  if(!RESULTS_WEBAPP_URL || RESULTS_WEBAPP_URL.indexOf('PASTE_YOUR') === 0){
    return;
  }
  var pct = Math.round((score/total)*100);
  var payload = {
    name: user.name,
    empid: user.empid,
    email: user.email,
    module: getModuleTitle(),
    score: score,
    total: total,
    percentage: pct,
    pass: pass
  };
  fetch(RESULTS_WEBAPP_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).catch(function(err){
    console.error('Could not send result to admin sheet:', err);
  });
}

/* ============================= RESULT / CERTIFICATE ============================= */
function renderResult(score, total, pass, isFreshPass){
  var wrap = document.getElementById('module-wrap');
  var pct = Math.round((score/total)*100);
  var today = new Date();
  var dateStr = today.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  if(!pass){
    wrap.innerHTML =
      '<div class="result-wrap">'+
        '<div class="fail-box">'+
          '<div style="font-size:44px;">📉</div>'+
          '<h2>Assessment not yet passed</h2>'+
          '<p>You answered <b>'+score+' of '+total+'</b> questions correctly ('+pct+'%). A minimum of <b>'+getPassMark()+' correct answers</b> is required to pass '+getModuleTitle()+' and receive your certificate. Review the topics again, then retake the assessment — you can attempt it as many times as needed.</p>'+
          '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">'+
            '<button class="btn btn-primary" onclick="retakeQuiz()">Retake the assessment</button>'+
            '<button class="btn btn-ghost" onclick="currentTopicIndex=0;renderTopic();">Review topics again</button>'+
          '</div>'+
        '</div>'+
        '<div style="margin-top:24px;"><button class="btn-ghost btn back-link" style="border:none;" onclick="showScreen(\'home\')">&larr; Back to home</button></div>'+
      '</div>';
    return;
  }

  wrap.innerHTML =
    '<div class="result-wrap">'+
      '<div class="certificate" id="certificate-print">'+
        '<img class="cert-logo" src="logo.png" alt="QuadGen Wireless Solutions logo">'+
        '<p class="cert-kicker">Employee Awareness Training Portal</p>'+
        '<p class="cert-heading">Certificate of Completion</p>'+
        '<p class="cert-sub">This certifies that</p>'+
        '<p class="cert-name">'+user.name+'</p>'+
        '<p class="cert-desc">has successfully completed the <b>'+getModuleTitle()+'</b> training module and passed the associated assessment, demonstrating a working understanding of the policies and practices covered.</p>'+
        '<div class="cert-details">'+
          '<div class="cert-detail"><div class="lbl">Employee ID</div><div class="val">'+user.empid+'</div></div>'+
          '<div class="cert-detail"><div class="lbl">Company</div><div class="val">QuadGen Wireless Solutions</div></div>'+
          '<div class="cert-detail"><div class="lbl">Training</div><div class="val">'+getModuleTitle()+'</div></div>'+
          '<div class="cert-detail"><div class="lbl">Date issued</div><div class="val">'+dateStr+'</div></div>'+
        '</div>'+
        '<div class="cert-score">Score: '+score+' / '+total+' correct ('+pct+'%)</div>'+
      '</div>'+
      '<div class="cert-actions no-print">'+
        '<button class="btn btn-primary" onclick="window.print()">Print / save as PDF</button>'+
        '<button class="btn btn-outline" onclick="showScreen(\'home\')">Back to home</button>'+
      '</div>'+
    '</div>';

  if(isFreshPass){
    showCelebration(getModuleTitle());
  }
}

/* ============================= CELEBRATION (confetti + congrats, any module) ============================= */
function showCelebration(moduleTitle){
  var overlay = document.createElement('div');
  overlay.className = 'celebration-overlay';
  overlay.id = 'celebration-overlay';
  overlay.innerHTML =
    '<div class="celebration-message">'+
      '<div class="celebration-emoji">🎉</div>'+
      '<h2>Congratulations!</h2>'+
      '<p>You\'ve successfully completed<br><b>'+moduleTitle+'</b></p>'+
      '<p style="font-size:12.5px;margin-top:14px;color:var(--muted);">Your certificate is ready…</p>'+
    '</div>';
  document.body.appendChild(overlay);

  var colors = ['#2f9fe0','#8fd3f4','#f6c453','#1f9d55','#ffffff','#0b2447'];
  for(var i=0;i<80;i++){
    var piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random()*100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDelay = (Math.random()*0.6) + 's';
    piece.style.animationDuration = (2.2 + Math.random()*1.4) + 's';
    overlay.appendChild(piece);
  }

  overlay.addEventListener('click', dismissCelebration);
  setTimeout(dismissCelebration, 3200);
}

function dismissCelebration(){
  var overlay = document.getElementById('celebration-overlay');
  if(!overlay) return;
  overlay.classList.add('celebration-fade-out');
  setTimeout(function(){
    if(overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }, 400);
}

function retakeQuiz(){
  quizAnswers = {};
  renderQuiz();
}

/* JSONP helper — Google Apps Script GET requests are unreliable with fetch()
   due to CORS, so we load them as a <script> tag instead, which is immune
   to CORS restrictions entirely. */
function jsonpRequest(url){
  return new Promise(function(resolve, reject){
    var callbackName = 'jsonp_cb_' + Date.now() + '_' + Math.floor(Math.random()*100000);
    var script = document.createElement('script');
    var timeoutId = setTimeout(function(){
      cleanup();
      reject(new Error('JSONP request timed out'));
    }, 10000);
    function cleanup(){
      clearTimeout(timeoutId);
      delete window[callbackName];
      if(script.parentNode) script.parentNode.removeChild(script);
    }
    window[callbackName] = function(data){
      cleanup();
      resolve(data);
    };
    script.onerror = function(){
      cleanup();
      reject(new Error('JSONP script failed to load'));
    };
    var sep = url.indexOf('?') === -1 ? '?' : '&';
    script.src = url + sep + 'callback=' + callbackName;
    document.body.appendChild(script);
  });
}

/* ============================= ADMIN DASHBOARD ============================= */
var adminRowsCache = [];
var adminSearchTerm = '';
var COMPLIANCE_TITLE = 'Compliance & Workplace Conduct Awareness';
var CYBER_TITLE = 'Cyber Security Awareness';

function loadAdminDashboard(){
  var wrap = document.getElementById('admin-wrap');
  wrap.innerHTML = '<p style="color:var(--muted);">Loading records…</p>';
  adminSearchTerm = '';

  if(!RESULTS_WEBAPP_URL || RESULTS_WEBAPP_URL.indexOf('PASTE_YOUR') === 0){
    wrap.innerHTML = '<p style="color:var(--danger);">RESULTS_WEBAPP_URL is not configured in app.js yet.</p>';
    return;
  }

  Promise.all([
    jsonpRequest(RESULTS_WEBAPP_URL + '?action=list'),
    jsonpRequest(RESULTS_WEBAPP_URL + '?action=list_modules')
  ]).then(function(responses){
      adminRowsCache = responses[0].rows || [];
      allModules = responses[1].modules || [];
      renderAdminTable(adminRowsCache);
    })
    .catch(function(err){
      wrap.innerHTML = '<p style="color:var(--danger);">Could not load records: '+err+'</p>';
    });
}

function onAdminSearchInput(value){
  adminSearchTerm = value;
  renderAdminTable(adminRowsCache);
  var input = document.getElementById('admin-search-input');
  if(input){
    input.focus();
    var pos = input.value.length;
    input.setSelectionRange(pos, pos);
  }
}

function buildAdminSectionTable(rows, sectionPrefix, includeModuleColumn){
  if(rows.length === 0){
    return '<p style="color:var(--muted);font-size:13.5px;padding:16px 4px;">No matching records.</p>';
  }
  var headerModuleCol = includeModuleColumn ? '<th>Module</th>' : '';
  var tableRows = rows.map(function(r){
    var resultClass = r.result === 'Pass' ? 'pill pill-pass' : 'pill pill-fail';
    var moduleCell = includeModuleColumn ? '<td>'+r.module+'</td>' : '';
    return '<tr id="admin-row-'+sectionPrefix+'-'+r.row+'">'+
      '<td>'+r.timestamp+'</td>'+
      '<td>'+r.name+'</td>'+
      '<td>'+r.empid+'</td>'+
      '<td>'+r.email+'</td>'+
      moduleCell+
      '<td class="admin-editable" data-field="score">'+r.score+'</td>'+
      '<td class="admin-editable" data-field="total">'+r.total+'</td>'+
      '<td>'+r.percentage+'</td>'+
      '<td><span class="'+resultClass+'">'+r.result+'</span></td>'+
      '<td><button class="btn-mini" onclick="startModifyRow('+r.row+',\''+sectionPrefix+'\')">Modify</button></td>'+
    '</tr>';
  }).join('');

  return '<div class="admin-table-wrap">'+
    '<table class="admin-table">'+
      '<thead><tr>'+
        '<th>Timestamp</th><th>Name</th><th>Employee ID</th><th>Email</th>'+
        headerModuleCol+
        '<th>Score</th><th>Total</th><th>%</th><th>Result</th><th>Action</th>'+
      '</tr></thead>'+
      '<tbody>'+tableRows+'</tbody>'+
    '</table>'+
  '</div>';
}

function renderAdminTable(allRows){
  var wrap = document.getElementById('admin-wrap');

  var totalEmployees = {};
  allRows.forEach(function(r){ totalEmployees[r.empid] = true; });
  var passCount = allRows.filter(function(r){ return r.result === 'Pass'; }).length;
  var failCount = allRows.filter(function(r){ return r.result !== 'Pass'; }).length;

  var summary =
    '<div class="admin-summary">'+
      '<div class="admin-stat"><div class="num">'+Object.keys(totalEmployees).length+'</div><div class="lbl">Employees with records</div></div>'+
      '<div class="admin-stat"><div class="num">'+allRows.length+'</div><div class="lbl">Total records</div></div>'+
      '<div class="admin-stat pass"><div class="num">'+passCount+'</div><div class="lbl">Passed</div></div>'+
      '<div class="admin-stat fail"><div class="num">'+failCount+'</div><div class="lbl">Failed / retake needed</div></div>'+
    '</div>';

  var term = adminSearchTerm.trim().toLowerCase();
  var filteredRows = term
    ? allRows.filter(function(r){ return String(r.empid).toLowerCase().indexOf(term) !== -1; })
    : allRows;

  var failedRows = filteredRows.filter(function(r){ return r.result !== 'Pass'; });

  var staticSectionsHtml = STATIC_MODULE_ORDER.map(function(id){
    var m = STATIC_MODULES[id];
    var rowsForModule = filteredRows.filter(function(r){ return r.module === m.title; });
    return '<h2 style="color:var(--navy);font-size:17px;margin:26px 0 10px;">'+m.icon+' '+m.title+'</h2>'+
      buildAdminSectionTable(rowsForModule, 'mod-'+id, false);
  }).join('');

  var moduleSectionsHtml = allModules.map(function(m){
    var rowsForModule = filteredRows.filter(function(r){ return r.module === m.title; });
    return '<h2 style="color:var(--navy);font-size:17px;margin:26px 0 10px;">'+m.icon+' '+m.title+'</h2>'+
      buildAdminSectionTable(rowsForModule, 'mod-'+m.id, false);
  }).join('');

  wrap.innerHTML =
    '<h1 style="color:var(--navy);margin-bottom:4px;">Training Completion Records</h1>'+
    '<p style="color:var(--muted);font-size:13.5px;margin-bottom:20px;">Each employee has one row per module (Employee ID is the unique key) — retaking after a pass is blocked, and a failed attempt updates the same row instead of creating a duplicate.</p>'+
    summary+
    '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin:22px 0 10px;flex-wrap:wrap;">'+
      '<input id="admin-search-input" type="text" placeholder="🔍 Search by Employee ID (e.g. QGI042)" '+
        'value="'+adminSearchTerm.replace(/"/g,'&quot;')+'" oninput="onAdminSearchInput(this.value)" '+
        'style="flex:1;min-width:220px;max-width:340px;padding:10px 14px;border:1.5px solid var(--border);border-radius:9px;font-size:13.5px;">'+
      '<div style="display:flex;gap:10px;">'+
        '<button class="btn btn-ghost" onclick="exportResultsCsv()">⬇ Export CSV</button>'+
        '<button class="btn btn-ghost" onclick="loadAdminDashboard()">↻ Refresh</button>'+
      '</div>'+
    '</div>'+

    staticSectionsHtml+
    moduleSectionsHtml+

    '<h2 style="color:var(--danger);font-size:17px;margin:30px 0 10px;">⚠️ Failed / Retake Needed (all modules)</h2>'+
    buildAdminSectionTable(failedRows, 'failed', true)+

    '<h2 style="color:var(--navy);font-size:17px;margin:34px 0 10px;">👤 Manage Admin Users</h2>'+
    '<div id="admin-users-section"><p style="color:var(--muted);font-size:13.5px;">Loading admin list…</p></div>'+

    '<h2 style="color:var(--navy);font-size:17px;margin:34px 0 10px;">📚 Manage Training Modules</h2>'+
    '<div id="admin-modules-section"><p style="color:var(--muted);font-size:13.5px;">Loading modules…</p></div>';

  populatePrefixDropdown(); // in case the login form hasn't been opened yet this session
  renderAdminUsersSection();
  renderAdminModulesSection();
}

function renderAdminUsersSection(){
  var section = document.getElementById('admin-users-section');
  if(!section) return;

  var prefixOptions = PREFIX_CONFIG.map(function(cfg){
    return '<option value="'+cfg.value+'">'+cfg.label+'</option>';
  }).join('');

  section.innerHTML =
    '<div class="admin-table-wrap" style="padding:20px 22px;margin-bottom:16px;">'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;">'+
        '<div>'+
          '<label style="display:block;font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:5px;text-transform:uppercase;">Employee ID</label>'+
          '<div class="compound-field" style="min-width:200px;">'+
            '<select id="new-admin-prefix" onchange="onNewAdminPrefixChange()">'+prefixOptions+'</select>'+
            '<input id="new-admin-digits" type="text" placeholder="000" style="width:90px;" oninput="formatEmpidDigitsInput(this)">'+
          '</div>'+
        '</div>'+
        '<div>'+
          '<label style="display:block;font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:5px;text-transform:uppercase;">Email</label>'+
          '<div class="compound-field" style="min-width:220px;">'+
            '<input id="new-admin-email-local" type="text" placeholder="name" oninput="this.value=this.value.replace(/[^a-zA-Z0-9._-]/g,\'\');">'+
            '<span class="compound-fixed compound-fixed-suffix">@quadgenwireless.com</span>'+
          '</div>'+
        '</div>'+
        '<button class="btn btn-primary" onclick="addAdminUser()">+ Add Admin</button>'+
      '</div>'+
      '<div class="modal-error" id="add-admin-error" style="margin-top:8px;"></div>'+
    '</div>'+
    '<div id="admin-users-list"><p style="color:var(--muted);font-size:13.5px;">Loading…</p></div>';

  onNewAdminPrefixChange();
  refreshAdminUsersList();
}

function onNewAdminPrefixChange(){
  var select = document.getElementById('new-admin-prefix');
  var digitsInput = document.getElementById('new-admin-digits');
  if(!select || !digitsInput) return;
  var cfg = getPrefixConfig(select.value);
  digitsInput.value = '';
  digitsInput.setAttribute('maxlength', getFieldMaxLength(cfg));
  digitsInput.placeholder = getDigitsPlaceholder(cfg);
}

function refreshAdminUsersList(){
  var listEl = document.getElementById('admin-users-list');
  jsonpRequest(RESULTS_WEBAPP_URL + '?action=list_admins')
    .then(function(data){
      var admins = data.admins || [];
      if(admins.length === 0){
        listEl.innerHTML = '<p style="color:var(--muted);font-size:13.5px;">No admin users added yet.</p>';
        return;
      }
      var rows = admins.map(function(a){
        return '<tr>'+
          '<td>'+a.empid+'</td>'+
          '<td>'+a.email+'</td>'+
          '<td>'+a.addedOn+'</td>'+
          '<td><button class="btn-mini" style="background:var(--danger-bg);color:var(--danger);border-color:var(--danger-bg);" onclick="removeAdminUser('+a.row+')">Remove</button></td>'+
        '</tr>';
      }).join('');
      listEl.innerHTML =
        '<div class="admin-table-wrap"><table class="admin-table">'+
          '<thead><tr><th>Employee ID</th><th>Email</th><th>Added On</th><th>Action</th></tr></thead>'+
          '<tbody>'+rows+'</tbody>'+
        '</table></div>';
    })
    .catch(function(err){
      listEl.innerHTML = '<p style="color:var(--danger);font-size:13.5px;">Could not load admin list: '+err+'</p>';
    });
}

function addAdminUser(){
  var prefix = document.getElementById('new-admin-prefix').value;
  var digits = getRawDigits(document.getElementById('new-admin-digits'));
  var emailLocal = document.getElementById('new-admin-email-local').value.trim();
  var errEl = document.getElementById('add-admin-error');
  var cfg = getPrefixConfig(prefix);

  if(!digits || !emailLocal){
    errEl.textContent = 'Please fill in both the employee ID and email.';
    return;
  }
  if(digits.length !== cfg.digits || !/^[0-9]+$/.test(digits)){
    errEl.textContent = 'Employee ID must be exactly ' + cfg.digits + ' digits for this format.';
    return;
  }
  if(!/^[a-zA-Z0-9._-]+$/.test(emailLocal)){
    errEl.textContent = 'Please enter a valid email username.';
    return;
  }
  errEl.textContent = '';

  var empid = composeEmployeeId(prefix, digits);
  var email = (emailLocal + '@quadgenwireless.com').toLowerCase();

  fetch(RESULTS_WEBAPP_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{ 'Content-Type':'text/plain;charset=utf-8' },
    body: JSON.stringify({ action:'add_admin', empid:empid, email:email })
  }).then(function(){
    document.getElementById('new-admin-digits').value = '';
    document.getElementById('new-admin-email-local').value = '';
    setTimeout(refreshAdminUsersList, 700);
  }).catch(function(err){
    errEl.textContent = 'Could not add admin: ' + err;
  });
}

function removeAdminUser(row){
  fetch(RESULTS_WEBAPP_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{ 'Content-Type':'text/plain;charset=utf-8' },
    body: JSON.stringify({ action:'delete_admin', row:row })
  }).then(function(){
    setTimeout(refreshAdminUsersList, 700);
  }).catch(function(err){
    console.error('Could not remove admin', err);
    refreshAdminUsersList();
  });
}

function exportResultsCsv(){
  if(!adminRowsCache || adminRowsCache.length === 0){
    alert('No records to export yet.');
    return;
  }
  var headers = ['Timestamp','Name','Employee ID','Email','Module','Score','Total Questions','Percentage','Result'];
  var lines = [headers.join(',')];
  adminRowsCache.forEach(function(r){
    var fields = [r.timestamp, r.name, r.empid, r.email, r.module, r.score, r.total, r.percentage, r.result];
    var escaped = fields.map(function(f){
      var s = String(f == null ? '' : f);
      if(s.indexOf(',') !== -1 || s.indexOf('"') !== -1 || s.indexOf('\n') !== -1){
        s = '"' + s.replace(/"/g,'""') + '"';
      }
      return s;
    });
    lines.push(escaped.join(','));
  });
  var csvContent = lines.join('\r\n');
  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.href = url;
  link.download = 'quadgen_training_results_' + new Date().toISOString().slice(0,10) + '.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function startModifyRow(rowNum, sectionPrefix){
  var row = document.getElementById('admin-row-' + sectionPrefix + '-' + rowNum);
  var scoreCell = row.querySelector('[data-field="score"]');
  var totalCell = row.querySelector('[data-field="total"]');
  var currentScore = scoreCell.textContent.trim();
  var currentTotal = totalCell.textContent.trim();

  scoreCell.innerHTML = '<input type="number" min="0" style="width:60px;" id="edit-score-'+sectionPrefix+'-'+rowNum+'" value="'+currentScore+'">';
  totalCell.innerHTML = '<input type="number" min="0" style="width:60px;" id="edit-total-'+sectionPrefix+'-'+rowNum+'" value="'+currentTotal+'">';

  var actionCell = row.lastElementChild;
  actionCell.innerHTML =
    '<button class="btn-mini btn-mini-primary" onclick="saveModifyRow('+rowNum+',\''+sectionPrefix+'\')">Save</button> '+
    '<button class="btn-mini" onclick="renderAdminTable(adminRowsCache)">Cancel</button>';
}

function saveModifyRow(rowNum, sectionPrefix){
  var score = Number(document.getElementById('edit-score-'+sectionPrefix+'-'+rowNum).value);
  var total = Number(document.getElementById('edit-total-'+sectionPrefix+'-'+rowNum).value);
  var pct = total > 0 ? Math.round((score/total)*100) : 0;
  var passMark = total === 15 ? 10 : (total === 25 ? 20 : Math.ceil(total*0.6));
  var pass = score >= passMark;

  fetch(RESULTS_WEBAPP_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{ 'Content-Type':'text/plain;charset=utf-8' },
    body: JSON.stringify({ action:'modify', row:rowNum, score:score, total:total, percentage:pct, pass:pass })
  }).then(function(){
    setTimeout(loadAdminDashboard, 700);
  }).catch(function(err){
    console.error('Could not save row', err);
    loadAdminDashboard();
  });
}

/* ============================= ADMIN: MANAGE TRAINING MODULES ============================= */
var currentEditingModuleId = null; // which module's content editor is currently open, if any
var currentEditingModuleData = null; // cached {module, topics, questions} for the open editor, used to prefill edit forms

function postToBackend(payload){
  return fetch(RESULTS_WEBAPP_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{ 'Content-Type':'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
}

function renderAdminModulesSection(){
  var section = document.getElementById('admin-modules-section');
  if(!section) return;

  var moduleListHtml = allModules.length === 0
    ? '<p style="color:var(--muted);font-size:13.5px;">No modules yet.</p>'
    : '<div class="admin-table-wrap" style="margin-bottom:18px;"><table class="admin-table">'+
        '<thead><tr><th>Icon</th><th>Title</th><th>Description</th><th>Pass %</th><th>Action</th></tr></thead>'+
        '<tbody>'+
          allModules.map(function(m){
            return '<tr>'+
              '<td style="font-size:20px;">'+m.icon+'</td>'+
              '<td>'+m.title+'</td>'+
              '<td style="max-width:280px;white-space:normal;">'+m.description+'</td>'+
              '<td>'+m.passPercentage+'%</td>'+
              '<td>'+
                '<button class="btn-mini" onclick="openModuleContentEditor(\''+m.id+'\')">Manage content</button> '+
                '<button class="btn-mini" onclick="startEditModule(\''+m.id+'\')">Edit</button> '+
                '<button class="btn-mini" style="background:var(--danger-bg);color:var(--danger);border-color:var(--danger-bg);" onclick="deleteModuleConfirm(\''+m.id+'\')">Delete</button>'+
              '</td>'+
            '</tr>';
          }).join('')+
        '</tbody>'+
      '</table></div>';

  section.innerHTML =
    moduleListHtml+
    '<div class="admin-table-wrap" style="padding:20px 22px;margin-bottom:16px;">'+
      '<div style="font-size:13px;font-weight:800;color:var(--navy);margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px;">Create a new module</div>'+
      '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;">'+
        '<div><label style="display:block;font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:5px;">Icon (emoji)</label>'+
          '<input id="new-module-icon" type="text" placeholder="📘" style="width:60px;padding:10px;border:1.5px solid var(--border);border-radius:8px;"></div>'+
        '<div style="flex:1;min-width:180px;"><label style="display:block;font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:5px;">Title</label>'+
          '<input id="new-module-title" type="text" placeholder="e.g. Fire Safety Awareness" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:8px;"></div>'+
        '<div><label style="display:block;font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:5px;">Pass %</label>'+
          '<input id="new-module-pass" type="number" min="1" max="100" value="70" style="width:80px;padding:10px;border:1.5px solid var(--border);border-radius:8px;"></div>'+
      '</div>'+
      '<div style="margin-top:10px;"><label style="display:block;font-size:11.5px;font-weight:700;color:var(--navy);margin-bottom:5px;">Description</label>'+
        '<input id="new-module-description" type="text" placeholder="Short description shown on the home page card" style="width:100%;padding:10px;border:1.5px solid var(--border);border-radius:8px;"></div>'+
      '<div class="modal-error" id="add-module-error" style="margin-top:8px;"></div>'+
      '<button class="btn btn-primary" style="margin-top:12px;" onclick="createModuleSubmit()">+ Create Module</button>'+
    '</div>'+
    '<div id="module-content-editor"></div>';
}

function createModuleSubmit(){
  var icon = document.getElementById('new-module-icon').value.trim() || '📘';
  var title = document.getElementById('new-module-title').value.trim();
  var description = document.getElementById('new-module-description').value.trim();
  var passPct = Number(document.getElementById('new-module-pass').value);
  var errEl = document.getElementById('add-module-error');

  if(!title || !description){
    errEl.textContent = 'Please fill in a title and description.';
    return;
  }
  if(!passPct || passPct < 1 || passPct > 100){
    errEl.textContent = 'Pass percentage must be between 1 and 100.';
    return;
  }
  errEl.textContent = '';

  postToBackend({ action:'create_module', icon:icon, title:title, description:description, passPercentage:passPct })
    .then(function(){ setTimeout(loadAdminDashboard, 800); })
    .catch(function(err){ errEl.textContent = 'Could not create module: ' + err; });
}

function startEditModule(moduleId){
  var m = allModules.filter(function(x){ return x.id === moduleId; })[0];
  if(!m) return;
  var newTitle = prompt('Module title:', m.title);
  if(newTitle === null) return;
  var newDescription = prompt('Description:', m.description);
  if(newDescription === null) return;
  var newIcon = prompt('Icon (emoji):', m.icon);
  if(newIcon === null) return;
  var newPass = prompt('Pass percentage (1-100):', m.passPercentage);
  if(newPass === null) return;

  postToBackend({
    action:'update_module', id:moduleId,
    title:newTitle, description:newDescription, icon:newIcon, passPercentage:Number(newPass)
  }).then(function(){ setTimeout(loadAdminDashboard, 800); });
}

function deleteModuleConfirm(moduleId){
  var m = allModules.filter(function(x){ return x.id === moduleId; })[0];
  var name = m ? m.title : 'this module';
  if(!confirm('Delete "'+name+'"? This will also permanently delete all of its topics and quiz questions, and cannot be undone.')) return;

  postToBackend({ action:'delete_module', moduleId:moduleId })
    .then(function(){ setTimeout(loadAdminDashboard, 800); });
}

/* ---------------- Module content editor (topics + questions) ---------------- */

function openModuleContentEditor(moduleId){
  currentEditingModuleId = moduleId;
  var editorEl = document.getElementById('module-content-editor');
  editorEl.innerHTML = '<p style="color:var(--muted);font-size:13.5px;">Loading module content…</p>';
  editorEl.scrollIntoView({ behavior:'smooth', block:'start' });

  jsonpRequest(RESULTS_WEBAPP_URL + '?action=get_module_content&moduleId=' + encodeURIComponent(moduleId))
    .then(function(data){
      if(!data.found){
        editorEl.innerHTML = '<p style="color:var(--danger);">Module not found.</p>';
        return;
      }
      renderModuleContentEditor(data);
    })
    .catch(function(err){
      editorEl.innerHTML = '<p style="color:var(--danger);">Could not load module content: '+err+'</p>';
    });
}

function renderModuleContentEditor(data){
  var editorEl = document.getElementById('module-content-editor');
  editorEl.dataset.moduleId = data.module.id;
  currentEditingModuleData = data; // cache so edit forms can prefill without re-fetching

  var module = data.module, topics = data.topics, questions = data.questions;

  var topicsHtml = topics.length === 0
    ? '<p style="color:var(--muted);font-size:13px;">No topics yet.</p>'
    : topics.map(function(t){
        return '<div style="border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:8px;">'+
          '<div style="display:flex;justify-content:space-between;align-items:center;">'+
            '<div><b>'+t.icon+' '+t.title+'</b> <span style="color:var(--muted);font-size:12px;">(order '+t.order+')</span></div>'+
            '<div><button class="btn-mini" onclick="showTopicForm(\''+module.id+'\',\''+t.id+'\')">Edit</button> '+
              '<button class="btn-mini" style="background:var(--danger-bg);color:var(--danger);border-color:var(--danger-bg);" onclick="deleteTopicConfirm(\''+t.id+'\')">Delete</button></div>'+
          '</div>'+
        '</div>';
      }).join('');

  var questionsHtml = questions.length === 0
    ? '<p style="color:var(--muted);font-size:13px;">No questions yet.</p>'
    : questions.map(function(q){
        return '<div style="border:1px solid var(--border);border-radius:10px;padding:12px 16px;margin-bottom:8px;">'+
          '<div style="display:flex;justify-content:space-between;align-items:center;">'+
            '<div style="max-width:70%;">'+(q.order)+'. '+q.questionText+' <span style="color:var(--success);font-size:12px;">(correct: '+q.options[q.correctIndex]+')</span></div>'+
            '<div><button class="btn-mini" onclick="showQuestionForm(\''+module.id+'\',\''+q.id+'\')">Edit</button> '+
              '<button class="btn-mini" style="background:var(--danger-bg);color:var(--danger);border-color:var(--danger-bg);" onclick="deleteQuestionConfirm(\''+q.id+'\')">Delete</button></div>'+
          '</div>'+
        '</div>';
      }).join('');

  editorEl.innerHTML =
    '<div style="border-top:2px dashed var(--border);margin-top:24px;padding-top:20px;">'+
      '<h3 style="color:var(--navy);">Editing content for: '+module.icon+' '+module.title+'</h3>'+

      '<div style="font-size:13px;font-weight:800;color:var(--navy);margin:16px 0 8px;text-transform:uppercase;">Topics ('+topics.length+')</div>'+
      '<p style="font-size:12.5px;color:var(--muted);margin:-4px 0 10px;">This is the information employees read before reaching the quiz.</p>'+
      '<div id="topics-list">'+topicsHtml+'</div>'+
      '<div id="topic-form-slot"></div>'+
      '<div style="display:flex;gap:8px;margin-top:10px;">'+
        '<button class="btn btn-outline" onclick="showTopicForm(\''+module.id+'\', null)">+ Add Topic</button>'+
      '</div>'+

      '<div style="font-size:13px;font-weight:800;color:var(--navy);margin:24px 0 8px;text-transform:uppercase;">Quiz Questions ('+questions.length+')</div>'+
      '<div id="questions-list">'+questionsHtml+'</div>'+
      '<div id="question-form-slot"></div>'+
      '<div style="display:flex;gap:8px;margin-top:10px;">'+
        '<button class="btn btn-outline" onclick="showQuestionForm(\''+module.id+'\', null)">+ Add Question</button>'+
      '</div>'+

      '<div style="text-align:center;margin-top:20px;">'+
        '<button class="btn-ghost btn" style="border:none;" onclick="document.getElementById(\'module-content-editor\').innerHTML=\'\';">Close editor</button>'+
      '</div>'+
    '</div>';
}

/* ---------------- Topic form (create + edit) ---------------- */

function setVideoInputMode(mode){
  var modeInput = document.getElementById('tf-video-mode');
  if(modeInput) modeInput.value = mode;
  var youtubeBlock = document.getElementById('video-mode-youtube');
  var uploadBlock = document.getElementById('video-mode-upload');
  if(youtubeBlock) youtubeBlock.classList.toggle('hidden', mode !== 'youtube');
  if(uploadBlock) uploadBlock.classList.toggle('hidden', mode !== 'upload');
  var youtubeBtn = document.getElementById('vm-btn-youtube');
  var uploadBtn = document.getElementById('vm-btn-upload');
  if(youtubeBtn) youtubeBtn.classList.toggle('btn-mini-primary', mode === 'youtube');
  if(uploadBtn) uploadBtn.classList.toggle('btn-mini-primary', mode === 'upload');
}

function handleVideoFileSelect(inputEl){
  var file = inputEl.files && inputEl.files[0];
  var previewEl = document.getElementById('video-file-preview');
  var pathInput = document.getElementById('tf-videourl-upload');
  if(!file){ if(previewEl) previewEl.innerHTML = ''; return; }

  // Auto-fill the expected path inside this module's own subfolder, so videos never
  // get mixed up between modules — matches videos/<moduleId>/filename.mp4 convention.
  var safeName = file.name.replace(/ /g, '%20');
  var moduleFolder = currentEditingModuleId || 'misc';
  if(pathInput && !pathInput.value) pathInput.value = 'videos/' + moduleFolder + '/' + safeName;

  var objectUrl = URL.createObjectURL(file);
  previewEl.innerHTML =
    '<video id="video-file-preview-player" src="'+objectUrl+'" controls playsinline style="width:100%;max-width:360px;border-radius:8px;display:block;background:#000;"></video>'+
    '<p id="video-file-duration" style="font-size:12.5px;color:var(--muted);margin-top:6px;">Checking length…</p>';

  var previewPlayer = document.getElementById('video-file-preview-player');
  previewPlayer.addEventListener('loadedmetadata', function(){
    var secs = Math.round(previewPlayer.duration);
    var durEl = document.getElementById('video-file-duration');
    if(durEl){
      var note = (secs < 15 || secs > 35) ? ' — recommended length is 20\u201325 seconds.' : ' — good length!';
      durEl.textContent = 'Length: ' + secs + 's' + note;
    }
  });
}

function showTopicForm(moduleId, topicId){
  var slot = document.getElementById('topic-form-slot');
  var existing = null;
  if(topicId && currentEditingModuleData){
    existing = currentEditingModuleData.topics.filter(function(t){ return t.id === topicId; })[0];
  }
  var t = existing || { icon:'📌', title:'', body:'', keyPoints:[], example:'', tip:'', illustration:'', videoUrl:'', order: (currentEditingModuleData ? currentEditingModuleData.topics.length+1 : 1) };
  var keyPointsText = (t.keyPoints || []).join('\n');
  var existingIsYoutube = !!toYouTubeEmbedUrl(t.videoUrl || '');
  var initialMode = t.videoUrl ? (existingIsYoutube ? 'youtube' : 'upload') : 'youtube';
  var youtubeVal = existingIsYoutube ? (t.videoUrl || '') : '';
  var uploadVal = (t.videoUrl && !existingIsYoutube) ? t.videoUrl : '';

  slot.innerHTML =
    '<div class="cms-form">'+
      '<h4>'+(topicId ? 'Edit Topic' : 'Add New Topic')+'</h4>'+
      '<div class="cms-form-row">'+
        '<div style="width:80px;"><label>Icon</label><input id="tf-icon" type="text" value="'+escapeAttr(t.icon)+'"></div>'+
        '<div style="flex:1;"><label>Title</label><input id="tf-title" type="text" value="'+escapeAttr(t.title)+'" placeholder="Topic title"></div>'+
        '<div style="width:80px;"><label>Order</label><input id="tf-order" type="number" min="1" value="'+t.order+'"></div>'+
      '</div>'+
      '<label>Body (main explanation shown to employees)</label>'+
      '<textarea id="tf-body" rows="4" placeholder="The main paragraph explaining this topic...">'+escapeHtml(t.body)+'</textarea>'+
      '<label>Video (recommended length: 20\u201325 seconds — if set, this plays instead of the illustration below, with no text shown underneath it, exactly like the built-in modules)</label>'+
      '<input type="hidden" id="tf-video-mode" value="'+initialMode+'">'+
      '<div class="video-mode-toggle" style="display:flex;gap:8px;margin-bottom:10px;">'+
        '<button type="button" class="btn-mini'+(initialMode==='youtube'?' btn-mini-primary':'')+'" id="vm-btn-youtube" onclick="setVideoInputMode(\'youtube\')">🔗 YouTube link</button>'+
        '<button type="button" class="btn-mini'+(initialMode==='upload'?' btn-mini-primary':'')+'" id="vm-btn-upload" onclick="setVideoInputMode(\'upload\')">📁 Upload from device</button>'+
      '</div>'+
      '<div id="video-mode-youtube" class="'+(initialMode==='youtube'?'':'hidden')+'">'+
        '<input id="tf-videourl" type="text" value="'+escapeAttr(youtubeVal)+'" placeholder="https://www.youtube.com/watch?v=...">'+
      '</div>'+
      '<div id="video-mode-upload" class="'+(initialMode==='upload'?'':'hidden')+'">'+
        '<input id="tf-video-file" type="file" accept="video/mp4,video/webm,video/quicktime,video/ogg" onchange="handleVideoFileSelect(this)">'+
        '<div id="video-file-preview" style="margin-top:10px;"></div>'+
        '<label>Path once uploaded to your videos/ folder on GitHub</label>'+
        '<input id="tf-videourl-upload" type="text" value="'+escapeAttr(uploadVal)+'" placeholder="videos/'+(currentEditingModuleId||'modulename')+'/my-clip.mp4">'+
        '<p style="font-size:12px;color:var(--muted);margin-top:6px;line-height:1.5;">Choosing a file here previews it in your browser and checks its length — it does not upload it anywhere by itself. You still need to add this exact file to the <code>videos/</code> folder in your GitHub repo (same as your other videos); the path above is filled in automatically to match.</p>'+
      '</div>'+
      '<label>Narration audio — Overview slide (optional — path/URL to a pre-recorded audio file; guarantees the exact same voice on every device, unlike browser narration)</label>'+
      '<input id="tf-audio-overview" type="text" value="'+escapeAttr(t.audioOverview || '')+'" placeholder="audio/topic-overview.mp3">'+
      '<label>Narration audio — Example slide (optional — only used on slides with no video)</label>'+
      '<input id="tf-audio-example" type="text" value="'+escapeAttr(t.audioExample || '')+'" placeholder="audio/topic-example.mp3">'+
      '<label>Narration audio — Key Points slide (optional)</label>'+
      '<input id="tf-audio-keypoints" type="text" value="'+escapeAttr(t.audioKeyPoints || '')+'" placeholder="audio/topic-keypoints.mp3">'+
      '<p style="font-size:12px;color:var(--muted);margin:-4px 0 4px;">Leave any of these blank to fall back to the browser\'s built-in narration for that slide (voice will vary by device). Note: these three fields need matching columns in your Apps Script/Sheet backend to actually save — ask if you\'d like help adding those.</p>'+
      '<label>Pictorial example (optional — paste SVG code; only used if no video is set above)</label>'+
      '<textarea id="tf-illustration" rows="3" placeholder="<svg viewBox=\'0 0 700 300\' ...>...</svg>">'+escapeHtml(t.illustration || '')+'</textarea>'+
      '<label>Real-world example</label>'+
      '<textarea id="tf-example" rows="2" placeholder="A short example illustrating this topic...">'+escapeHtml(t.example)+'</textarea>'+
      '<label>Key points (one per line)</label>'+
      '<textarea id="tf-keypoints" rows="4" placeholder="One key point per line...">'+escapeHtml(keyPointsText)+'</textarea>'+
      '<label>Hover tip (short one-line summary shown on hover)</label>'+
      '<input id="tf-tip" type="text" value="'+escapeAttr(t.tip)+'" placeholder="Short one-line tip">'+
      '<div class="modal-error" id="topic-form-error"></div>'+
      '<div class="cms-form-actions">'+
        '<button class="btn btn-primary" onclick="saveTopicForm(\''+moduleId+'\', '+(topicId ? "'"+topicId+"'" : 'null')+')">'+(topicId ? 'Save Changes' : 'Add Topic')+'</button>'+
        '<button class="btn btn-ghost" onclick="document.getElementById(\'topic-form-slot\').innerHTML=\'\';">Cancel</button>'+
      '</div>'+
    '</div>';

  slot.scrollIntoView({ behavior:'smooth', block:'center' });
}

function saveTopicForm(moduleId, topicId){
  var icon = document.getElementById('tf-icon').value.trim() || '📌';
  var title = document.getElementById('tf-title').value.trim();
  var order = Number(document.getElementById('tf-order').value) || 1;
  var body = document.getElementById('tf-body').value.trim();
  var videoMode = document.getElementById('tf-video-mode').value;
  var videoUrl = videoMode === 'upload'
    ? document.getElementById('tf-videourl-upload').value.trim()
    : document.getElementById('tf-videourl').value.trim();
  var illustration = document.getElementById('tf-illustration').value.trim();
  var audioOverview = document.getElementById('tf-audio-overview').value.trim();
  var audioExample = document.getElementById('tf-audio-example').value.trim();
  var audioKeyPoints = document.getElementById('tf-audio-keypoints').value.trim();
  var keyPoints = document.getElementById('tf-keypoints').value.split('\n').map(function(s){ return s.trim(); }).filter(Boolean);
  var example = document.getElementById('tf-example').value.trim();
  var tip = document.getElementById('tf-tip').value.trim();
  var errEl = document.getElementById('topic-form-error');

  if(!title || !body){
    errEl.textContent = 'Please fill in at least a title and body.';
    return;
  }
  if(videoUrl && !toYouTubeEmbedUrl(videoUrl) && !isDirectVideoFile(videoUrl)){
    errEl.textContent = "That doesn't look like a valid YouTube URL or video file path (.mp4/.webm/.mov). Please check it and try again, or leave it blank.";
    return;
  }
  errEl.textContent = '';

  var payload = topicId
    ? { action:'update_topic', id:topicId, order:order, icon:icon, title:title, body:body, keyPoints:keyPoints, example:example, tip:tip, illustration:illustration, videoUrl:videoUrl, audioOverview:audioOverview, audioExample:audioExample, audioKeyPoints:audioKeyPoints }
    : { action:'create_topic', moduleId:moduleId, order:order, icon:icon, title:title, body:body, keyPoints:keyPoints, example:example, tip:tip, illustration:illustration, videoUrl:videoUrl, audioOverview:audioOverview, audioExample:audioExample, audioKeyPoints:audioKeyPoints };

  postToBackend(payload).then(function(){ setTimeout(function(){ openModuleContentEditor(moduleId); }, 800); });
}

function deleteTopicConfirm(topicId){
  if(!confirm('Delete this topic?')) return;
  var moduleId = currentEditingModuleId;
  postToBackend({ action:'delete_topic', topicId:topicId })
    .then(function(){ setTimeout(function(){ openModuleContentEditor(moduleId); }, 800); });
}

/* ---------------- Question form (create + edit) ---------------- */

function showQuestionForm(moduleId, questionId){
  var slot = document.getElementById('question-form-slot');
  var existing = null;
  if(questionId && currentEditingModuleData){
    existing = currentEditingModuleData.questions.filter(function(q){ return q.id === questionId; })[0];
  }
  var q = existing || { questionText:'', options:['','','',''], correctIndex:0, explanation:'', order: (currentEditingModuleData ? currentEditingModuleData.questions.length+1 : 1) };

  var optionRows = [0,1,2,3].map(function(i){
    return '<div class="cms-form-row" style="align-items:center;">'+
      '<input type="radio" name="qf-correct" value="'+i+'" '+(q.correctIndex===i ? 'checked' : '')+' style="width:auto;">'+
      '<input id="qf-opt'+i+'" type="text" value="'+escapeAttr(q.options[i])+'" placeholder="Option '+(i+1)+'" style="flex:1;">'+
    '</div>';
  }).join('');

  slot.innerHTML =
    '<div class="cms-form">'+
      '<h4>'+(questionId ? 'Edit Question' : 'Add New Question')+'</h4>'+
      '<div class="cms-form-row">'+
        '<div style="flex:1;"><label>Order</label><input id="qf-order" type="number" min="1" value="'+q.order+'" style="width:100px;"></div>'+
      '</div>'+
      '<label>Question text</label>'+
      '<textarea id="qf-text" rows="2" placeholder="Type the question here...">'+escapeHtml(q.questionText)+'</textarea>'+
      '<label>Options (select the radio button next to the correct one)</label>'+
      optionRows+
      '<label>Explanation (shown to the employee right after they answer, whether correct or wrong)</label>'+
      '<textarea id="qf-explanation" rows="2" placeholder="Briefly explain why the correct answer is correct...">'+escapeHtml(q.explanation || '')+'</textarea>'+
      '<div class="modal-error" id="question-form-error"></div>'+
      '<div class="cms-form-actions">'+
        '<button class="btn btn-primary" onclick="saveQuestionForm(\''+moduleId+'\', '+(questionId ? "'"+questionId+"'" : 'null')+')">'+(questionId ? 'Save Changes' : 'Add Question')+'</button>'+
        '<button class="btn btn-ghost" onclick="document.getElementById(\'question-form-slot\').innerHTML=\'\';">Cancel</button>'+
      '</div>'+
    '</div>';

  slot.scrollIntoView({ behavior:'smooth', block:'center' });
}

function saveQuestionForm(moduleId, questionId){
  var questionText = document.getElementById('qf-text').value.trim();
  var order = Number(document.getElementById('qf-order').value) || 1;
  var options = [0,1,2,3].map(function(i){ return document.getElementById('qf-opt'+i).value.trim(); });
  var explanation = document.getElementById('qf-explanation').value.trim();
  var correctRadio = document.querySelector('input[name="qf-correct"]:checked');
  var errEl = document.getElementById('question-form-error');

  if(!questionText || options.some(function(o){ return !o; })){
    errEl.textContent = 'Please fill in the question text and all 4 options.';
    return;
  }
  if(!correctRadio){
    errEl.textContent = 'Please select which option is correct.';
    return;
  }
  errEl.textContent = '';
  var correctIndex = Number(correctRadio.value);

  var payload = questionId
    ? { action:'update_question', id:questionId, order:order, questionText:questionText, options:options, correctIndex:correctIndex, explanation:explanation }
    : { action:'create_question', moduleId:moduleId, order:order, questionText:questionText, options:options, correctIndex:correctIndex, explanation:explanation };

  postToBackend(payload).then(function(){ setTimeout(function(){ openModuleContentEditor(moduleId); }, 800); });
}

function deleteQuestionConfirm(questionId){
  if(!confirm('Delete this question?')) return;
  var moduleId = currentEditingModuleId;
  postToBackend({ action:'delete_question', questionId:questionId })
    .then(function(){ setTimeout(function(){ openModuleContentEditor(moduleId); }, 800); });
}

function escapeHtml(str){
  return String(str == null ? '' : str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function escapeAttr(str){
  return escapeHtml(str).replace(/"/g,'&quot;');
}

/* Note: the original 2 modules no longer need seeding — they're always
   available as STATIC_MODULES above, independent of the Sheet/backend. */
