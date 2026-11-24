/* Makran Digital verified directory, free public search links and optional topic summaries. */
const SUPABASE_URL="https://gamndpogjznmdccgmanr.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_I9gufeecgDjFz4ybGxLT_g_qG7SphB1";
const TABLE="opportunities";
const resources=[
{id:"usat",category:"tests",title:"USAT — Undergraduate Studies Admission Test (HEC ETC)",description:"Official HEC Education Testing Council portal for USAT registration, test information and candidate updates.",location:"Pakistan · HEC",url:"https://etc.hec.gov.pk/",type:"Official test portal",tags:"usat usa test usat-e usat e undergraduate studies admission test pre engineering pre-engineering pre medical pre-medical etc hec entry test admission test"},
{id:"usat-news",category:"tests",title:"USAT announcements and registration notices",description:"Check HEC ETC announcements for registration windows, date extensions, test notices and candidate instructions.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/services/students/etc/Pages/Announcements.aspx",type:"Official announcements",tags:"usat date deadline registration last date test date etc announcement"},
{id:"usat-faq",category:"tests",title:"HEC ETC FAQs and USAT categories",description:"Read official FAQs about ETC tests, USAT categories and test procedures. Choose the category that matches your academic stream.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/services/students/etc/Pages/FAQ%27s.aspx",type:"Official guidance",tags:"usat categories syllabus test category eligibility faq procedure"},
{id:"usat-acceptance",category:"tests",title:"Does every university accept USAT? HEC clarification",description:"HEC says USAT is recommended, but each university decides whether to accept USAT scores or conduct its own admission test. Confirm with your target university.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/news/news/Pages/USAT-HEC.aspx",type:"Important admission guidance",tags:"usat accepted universities mandatory admission score"},
{id:"hec-universities",category:"tests",title:"HEC recognized universities and degree-awarding institutions",description:"Check whether a university or institution is recognized by HEC before applying or paying fees.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/universities/Pages/recognised.aspx",type:"Official verification",tags:"recognized recognised university degree verification admission"},
{id:"nust",category:"tests",title:"NUST undergraduate admissions and NET",description:"Official NUST admissions information, eligibility, registration and entry-test information.",location:"Pakistan · NUST",url:"https://ugadmissions.nust.edu.pk/",type:"University admissions",tags:"nust net engineering test university undergraduate"},
{id:"fast",category:"tests",title:"FAST-NUCES admissions",description:"Official undergraduate admissions for computing, engineering and other programmes. Check current test and eligibility requirements.",location:"Pakistan · FAST",url:"https://www.nu.edu.pk/Admissions",type:"University admissions",tags:"fast nuces computer science software engineering entry test"},
{id:"hec-scholarships",category:"scholarships",title:"HEC Pakistan — scholarships and grants",description:"Search national and international scholarship programmes listed by Pakistan's Higher Education Commission. Check each programme's current status and eligibility.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/scholarshipsgrants/pages/default.aspx",type:"Official scholarship directory",tags:"hec pakistan fully funded national international grant"},
{id:"balochistan",category:"scholarships",title:"Scholarships for Balochistan and former FATA students",description:"Check HEC announcements for undergraduate scholarship opportunities intended for eligible students from Balochistan and former FATA. Verify active batch and district criteria.",location:"Balochistan · Pakistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/Pages/NationalScholarships.aspx",type:"Regional scholarship information",tags:"balochistan fata undergraduate local need based"},
{id:"gwadar",category:"scholarships",title:"HEC scholarship information for students from Gwadar",description:"Find HEC information about the Undergraduate Scholarships for Students from Gwadar initiative. Check whether a current application cycle is open.",location:"Gwadar · Balochistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/Pages/NationalScholarships.aspx",type:"Regional scholarship information",tags:"gwadar coastal region makran balochistan undergraduate"},
{id:"hec-active",category:"scholarships",title:"HEC active scholarship programmes",description:"Check currently active HEC scholarship programmes and new schemes. Availability changes; read the latest notice.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/services/students/HRD/Pages/Active-Scholarships.aspx",type:"Active programme listings",tags:"active open new latest china commonwealth"},
{id:"hec-portal",category:"scholarships",title:"HEC scholarship application portal",description:"Official HEC online scholarship application portal. Read the relevant programme announcement before applying.",location:"Pakistan · HEC",url:"https://scholarship.hec.gov.pk/",type:"Official application portal",tags:"apply application form scholarship portal"},
{id:"hec-abroad",category:"international",title:"HEC Learning Opportunities Abroad",description:"Explore foreign-funded scholarship opportunities and study-abroad information shared by HEC. Check study level and current programme status.",location:"International · HEC Pakistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/Pages/InternationalScholarships.aspx",type:"Official international directory",tags:"study abroad fully funded foreign international scholarship"},
{id:"china",category:"international",title:"Chinese Government Scholarship — HEC information",description:"Check HEC announcements for Chinese Government Scholarship cycles, eligible degree levels, application routes and deadlines.",location:"China · HEC Pakistan",url:"https://www.hec.gov.pk/english/services/students/HRD/Pages/Active-Scholarships.aspx",type:"Country scholarship information",tags:"china chinese government csc undergraduate masters fully funded"},
{id:"commonwealth",category:"international",title:"Commonwealth Scholarships",description:"Official Commonwealth scholarship information. Programmes vary by degree level and country eligibility; check the current call.",location:"United Kingdom",url:"https://cscuk.fcdo.gov.uk/scholarships/",type:"Official scholarship provider",tags:"commonwealth uk united kingdom masters phd fully funded"},
{id:"hungary",category:"international",title:"Stipendium Hungaricum — Hungary scholarship",description:"Official Hungarian government scholarship programme. Check eligible countries, study levels, partner sending organizations and annual call.",location:"Hungary",url:"https://stipendiumhungaricum.hu/",type:"Official scholarship provider",tags:"hungary stipendium hungaricum bachelor undergraduate fully funded"},
{id:"korea",category:"international",title:"Global Korea Scholarship (GKS)",description:"Official Study in Korea information for Korean government scholarship programmes. Check latest undergraduate or graduate guidelines.",location:"South Korea",url:"https://www.studyinkorea.go.kr/",type:"Official study portal",tags:"korea south gks global undergraduate fully funded"},
{id:"japan",category:"international",title:"MEXT Japanese Government Scholarships",description:"Japanese government scholarship information through official study-in-Japan channels. Confirm Pakistan application route with the Embassy of Japan.",location:"Japan",url:"https://www.studyinjapan.go.jp/en/",type:"Official study portal",tags:"japan mext japanese government fully funded undergraduate"},
{id:"erasmus",category:"international",title:"Erasmus Mundus Joint Masters",description:"Explore Erasmus Mundus joint master's programmes and scholarships. This is generally a postgraduate route, not a bachelor's scholarship.",location:"Europe · European Union",url:"https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",type:"Official EU programme",tags:"erasmus europe masters fully funded"},
{id:"daad",category:"international",title:"DAAD scholarships and study in Germany",description:"Official DAAD scholarship database and guidance for Germany. Filter by degree level, subject and nationality.",location:"Germany",url:"https://www.daad.de/en/studying-in-germany/scholarships/",type:"Official scholarship database",tags:"germany daad german scholarship masters phd"},
{id:"ielts",category:"skills",title:"IELTS — official test information",description:"Understand IELTS test formats, preparation and booking. Check which English test your target university or scholarship accepts.",location:"International",url:"https://ielts.org/",type:"Official test information",tags:"ielts english test proficiency language study abroad"},
{id:"british-council",category:"skills",title:"British Council — English learning and IELTS preparation",description:"Find English learning resources and IELTS preparation support from the British Council.",location:"Pakistan · Online",url:"https://www.britishcouncil.pk/",type:"Learning resource",tags:"english grammar speaking writing ielts preparation"},
{id:"khan",category:"skills",title:"Khan Academy — free learning and test preparation",description:"Free lessons and practice in mathematics, science, computing and other academic subjects.",location:"Online · Free learning",url:"https://www.khanacademy.org/",type:"Free learning resource",tags:"math mathematics physics chemistry computer science practice preparation"},
{id:"coursera",category:"skills",title:"Coursera — online courses and certificates",description:"Explore online courses from universities and organizations. Some courses offer financial aid; check course-specific terms.",location:"Online",url:"https://www.coursera.org/",type:"Skills and courses",tags:"online courses certificates programming ai software engineering"},
{id:"digiskills",category:"skills",title:"DigiSkills.pk — free online skills training",description:"Explore free online training in freelancing and digital skills. Check current batch registration and course availability.",location:"Pakistan · Online",url:"https://digiskills.pk/",type:"Skills training",tags:"freelancing digital skills free courses online training"},
{id:"njp",category:"careers",title:"National Jobs Portal — Government of Pakistan",description:"Search government vacancies, including posts that may be listed for Balochistan. Check education, age, domicile and deadline requirements.",location:"Pakistan · Government",url:"https://www.njp.gov.pk/",type:"Official jobs portal",tags:"jobs government balochistan employment career"},
{id:"njp-live",category:"careers",title:"Browse live government job vacancies",description:"Open the National Jobs Portal live vacancies page to check current openings and closing dates.",location:"Pakistan · Government",url:"https://www.njp.gov.pk/index.php/jobs/live",type:"Live job listings",tags:"latest live jobs vacancies balochistan"},
{id:"rozee",category:"careers",title:"Rozee — private-sector jobs in Pakistan",description:"Explore private-sector job listings and internships. Verify employers and never pay money to secure a job.",location:"Pakistan",url:"https://www.rozee.pk/",type:"Job search platform",tags:"private jobs internship pakistan employment fresh graduates"},
{id:"china-2027",category:"scholarships",title:"Chinese Government Scholarship 2027–28 (HEC Type-A)",description:"Current HEC call: 61 seats for Pakistani students (25 Bachelor’s, 21 Master’s and 15 PhD). HEC portal deadline: 5 January 2027 at 4:00 PM Pakistan time. Bachelor’s applicants must also meet the mandatory CSCA requirement. Check all eligibility and submit on both required portals.",location:"China · Pakistani applicants",url:"https://www.hec.gov.pk/Site/CGSP/default.aspx",type:"Current HEC call · deadline 5 Jan 2027",requirements:["Pakistani/AJ&K national; dual nationals are not eligible.","Bachelor's: completed 12 years of education and under 25 at application time.","Undergraduate applicants must submit a valid CSCA score report.","USAT score of at least 50/100 is required for undergraduate applicants; check the HEC notice for accepted test dates.","Must meet the selected Chinese university's academic and language requirements; no other scholarship may be held.","Both HEC and CSC online applications are mandatory. Shortlisted candidates later submit educational records, CNIC, domicile, birth certificate, study plan, language proof, passport, medical form and police clearance."],requirementsNote:"Requirements checked against the HEC 2027–28 call. Confirm the full advertisement and document checklist before applying.",tags:"china csc chinese government scholarship 2027 2028 bachelors undergraduate masters phd fully funded csca deadline january"},
{id:"lums-nop-2027",category:"scholarships",title:"LUMS National Outreach Programme (NOP) 2027–28",description:"A pathway to undergraduate study at LUMS with comprehensive financial assistance for eligible students. NOP Summer Coaching Session application deadline: 23 February 2027; financial aid application deadline: 24 March 2027. Check academic and financial-need criteria on the official page.",location:"Pakistan · LUMS",url:"https://nop.lums.edu.pk/how-to-apply-nop",type:"Current programme · deadline 23 Feb 2027",requirements:["At least 80% marks in Matriculation or equivalent O-Level grades.","Demonstrated financial need is required.","The NOP Summer Coaching Session route is for students applying during the first year of Intermediate/A-Levels.","Shortlisted students must complete the Summer Coaching Session and assessments, then apply for LUMS undergraduate admission and meet the same merit criteria as other applicants.","A full NOP award depends on securing admission and passing LUMS's financial-need assessment."],requirementsNote:"If you are already in second year of Intermediate, LUMS says to apply through regular undergraduate admissions and complete the Financial Aid section; ask LUMS about the current route.",tags:"lums nop national outreach programme undergraduate bachelors fully funded need based 2027 2028"},
{id:"coastal-hec",category:"scholarships",title:"HEC Coastal Region Higher Education Scholarship — Balochistan",description:"Undergraduate scholarship programme for eligible students from Gwadar, Kech (Turbat), Lasbela/Hub and Awaran. The official page currently shows Batch-IV information and merit-list updates; this is a monitoring link, not confirmation that applications are open.",location:"Gwadar · Kech · Lasbela/Hub · Awaran",url:"https://www.hec.gov.pk/english/scholarshipsgrants/CRHES/Pages/default.aspx",type:"Regional programme · monitor next call",requirements:["Domicile/local certificate must be from Gwadar, Kech (Turbat), Lasbela/Hub or Awaran.","The published criteria require at least 50% marks separately in Matric and Intermediate.","Both Matric and Intermediate must have been completed at institutions in one of the eligible coastal districts.","Maximum age in the published criteria: 22 years on the closing date.","Applicants must meet HEC and university admission criteria for a 4–5 year BS programme; result-awaiting applicants are not eligible.","The published selection formula uses SSC 10%, HSSC 40% and the HEC aptitude test 50%; at least 50% in the test is required."],requirementsNote:"These are the published programme criteria available for the previous batch. This listing is monitoring the next call; verify the next advertisement because criteria can change.",tags:"coastal region makran gwadar kech turbat awaran lasbela hub undergraduate scholarship balochistan"},
{id:"beef-open",category:"scholarships",title:"BEEF current scholarship notices — Out-of-Province and DAE",description:"BEEF’s official website currently lists Out-of-Province scholarship applications and DAE applications as open. Read the linked notice for the exact eligibility, submission route and closing date before applying.",location:"Balochistan · Pakistan",url:"https://beef.org.pk/",type:"Official current notices · check closing dates",requirements:["BEEF lists current notices for Out-of-Province and DAE applications, but the exact criteria depend on the specific notice.","Check the official advertisement for eligible districts, education level, marks, income, age, required documents and closing date.","Do not assume that one BEEF scheme's criteria apply to another scheme."],requirementsNote:"We have not copied unverified eligibility figures into Makran Digital. Open the official BEEF notice and confirm the exact scheme.",tags:"beef balochistan out of province dae scholarship applications open"},
{id:"turkiye-2027",category:"international",title:"Türkiye Scholarships — Government of Türkiye",description:"Government scholarship programme for international students, including undergraduate and graduate study. The official calendar lists the general application period as 10 January–20 February; confirm the 2027 call and current requirements on the official website before applying.",location:"Türkiye",url:"https://turkiyeburslari.gov.tr/calendar",type:"Annual application calendar · confirm 2027 call",tags:"turkiye turkey turkish burslari undergraduate bachelors masters phd fully funded 2027"},
{id:"beef",category:"scholarships",title:"Balochistan Education Endowment Fund (BEEF)",description:"Official Government of Balochistan scholarship programmes, including merit-based, need-based, DAE and out-of-province schemes. Check the current announcement and eligibility.",location:"Balochistan · Pakistan",url:"https://beef.org.pk/",type:"Provincial scholarship provider",tags:"beef balochistan merit need based scholarship dae out of province"},
{id:"bf3-batch-v",category:"scholarships",title:"HEC Undergraduate Scholarships — Balochistan & Erstwhile FATA, Batch V",description:"HEC's current Batch-V call for eligible Balochistan and Erstwhile FATA domicile holders. Official page lists a deadline of 14 December 2026; carefully check age, marks, domicile and other criteria before applying.",location:"Balochistan & Erstwhile FATA · Pakistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/BF-III/Pages/default.aspx",type:"Current HEC scholarship call · deadline 14 Dec 2026",requirements:["Applicant must hold a valid Balochistan or Erstwhile FATA domicile/local certificate; HEC's FAQ also requires the father's valid domicile/local certificate.","Must have completed 12 years of education with at least 60% marks in FA/FSc/I.Com/ICS/DAE or equivalent.","Maximum age: 22 years on the advertisement closing date; no age relaxation.","Result-awaiting applicants are not eligible.","Applicants already receiving another HEC/Government scholarship are not eligible.","The scholarship provides funding; applicants must independently secure admission at an HEC-recognized university/degree-awarding institution."],requirementsNote:"Checked against the HEC Batch V announcement and FAQ. Read the complete advertisement for test, document and application instructions.",tags:"balochistan fata batch v batch 5 2026 2027 undergraduate scholarship deadline"},
{id:"fpsc",category:"careers",title:"Federal Public Service Commission (FPSC)",description:"Official recruitment advertisements, federal government vacancies, CSS and application instructions.",location:"Federal · Pakistan",url:"https://www.fpsc.gov.pk/",type:"Official recruitment commission",tags:"fpsc federal government jobs css pakistan"},
{id:"bpsc",category:"careers",title:"Balochistan Public Service Commission (BPSC)",description:"Official Balochistan government recruitment advertisements, eligibility criteria and application updates.",location:"Balochistan · Pakistan",url:"https://www.bpsc.gob.pk/",type:"Official provincial recruitment",tags:"bpsc balochistan provincial jobs government vacancies"},
{id:"ppsc",category:"careers",title:"Punjab Public Service Commission (PPSC)",description:"Official Punjab government recruitment advertisements and application portal.",location:"Punjab · Pakistan",url:"https://www.ppsc.gop.pk/",type:"Official provincial recruitment",tags:"ppsc punjab jobs government vacancies"},
{id:"spsc",category:"careers",title:"Sindh Public Service Commission (SPSC)",description:"Official Sindh government recruitment advertisements and examination updates.",location:"Sindh · Pakistan",url:"https://www.spsc.gov.pk/",type:"Official provincial recruitment",tags:"spsc sindh jobs government vacancies"},
{id:"kppsc",category:"careers",title:"Khyber Pakhtunkhwa Public Service Commission (KPPSC)",description:"Official Khyber Pakhtunkhwa government recruitment and competitive examination information.",location:"Khyber Pakhtunkhwa · Pakistan",url:"https://www.kppsc.gov.pk/",type:"Official provincial recruitment",tags:"kppsc kp jobs government vacancies"},
{id:"nts",category:"careers",title:"National Testing Service (NTS)",description:"Official NTS announcements for recruitment tests, admissions tests and other assessment projects. Check the project sponsor and current advertisement.",location:"Pakistan",url:"https://www.nts.org.pk/",type:"Testing and recruitment notices",tags:"nts jobs tests recruitment admissions pakistan"},
{id:"etea",category:"careers",title:"Educational Testing and Evaluation Agency (ETEA)",description:"Official ETEA recruitment and testing announcements, especially for Khyber Pakhtunkhwa projects.",location:"Khyber Pakhtunkhwa · Pakistan",url:"https://etea.edu.pk/",type:"Testing and recruitment notices",tags:"etea jobs recruitment tests kpk"}
];
const labels={tests:"Tests & admissions",scholarships:"Scholarships",international:"Study abroad",careers:"Jobs & internships",skills:"Skills & preparation"};
const grid=document.querySelector("#opportunity-grid"),searchInput=document.querySelector("#search-input"),categoryFilter=document.querySelector("#category-filter"),feedStatus=document.querySelector("#feed-status"),resultCount=document.querySelector("#result-count");
let posts=[...resources];
function safeUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)?u.href:""}catch{return ""}}
function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const searchAliases={
 "usa test":"usat","usat e":"usat","usat-e":"usat",
 "undergraduate studies admission test":"usat","education testing council":"usat",
 "fully funded scholarship":"fully funded","study abroad scholarship":"study abroad",
 "balochistan scholarship":"balochistan","jobs in pakistan":"jobs"
};
function normalizeSearch(value){
 let q=String(value||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 for(const [phrase,replacement] of Object.entries(searchAliases)){
  if(q===phrase||q.includes(phrase)) q=q.replace(phrase,replacement);
 }
 return q.replace(/\s+/g," ").trim();
}
let instantTimer=null,instantRequest=0;
function scheduleInstantAnswer(query){
 clearTimeout(instantTimer);
 const request=++instantRequest;
 const target=document.querySelector("#instant-answer");
 if(target)target.innerHTML='<small>Checking for a free topic summary…</small>';
 instantTimer=setTimeout(async()=>{
  try{
   const params=new URLSearchParams({q:query,format:"json",no_html:"1",skip_disambig:"1"});
   const response=await fetch("https://api.duckduckgo.com/?"+params.toString());
   if(!response.ok)throw new Error("Instant answer unavailable");
   const data=await response.json();
   if(request!==instantRequest)return;
   const box=document.querySelector("#instant-answer");
   if(!box)return;
   const summary=data.AbstractText||data.Answer||data.Definition||"";
   const source=data.AbstractURL||data.DefinitionURL||"";
   if(summary){
    box.innerHTML='<div class="instant-answer-label">FREE TOPIC SUMMARY · DUCKDUCKGO</div><p></p>'+(source?'<a target="_blank" rel="noopener noreferrer">Read source ↗</a>':"");
    box.querySelector("p").textContent=summary;
    const link=box.querySelector("a");if(link)link.href=safeUrl(source);
   }else{
    box.innerHTML='<small>No instant summary was available for this keyword. Use the web search links above for full results.</small>';
   }
  }catch(error){
   if(request===instantRequest){const box=document.querySelector("#instant-answer");if(box)box.innerHTML='<small>Topic summary is temporarily unavailable. The free external search links above are still available.</small>'}
  }
 },650);
}
function render(){
 const raw=searchInput.value.trim(),q=normalizeSearch(raw),cat=categoryFilter.value,terms=q.split(/\s+/).filter(Boolean);
 const finderLevel=document.querySelector("#finder-level")?.value||"",finderCountry=document.querySelector("#finder-country")?.value||"",finderFunding=document.querySelector("#finder-funding")?.value||"";
 const filtered=posts.filter(p=>{
  if(cat!=="all"&&p.category!==cat)return false;
  const hay=normalizeSearch([p.title,p.description,p.location,p.type,labels[p.category],p.tags||""].join(" "));
  if(finderLevel&&!hay.includes(normalizeSearch(finderLevel).split(" ")[0])&&!hay.includes(normalizeSearch(finderLevel).split(" ").slice(-1)[0]))return false;
  if(finderCountry&&!hay.includes(normalizeSearch(finderCountry)))return false;
  if(finderFunding&&!hay.includes(normalizeSearch(finderFunding).split(" ")[0]))return false;
  return !terms.length||terms.every(term=>hay.includes(term));
 });
 grid.innerHTML=filtered.map(p=>{const url=safeUrl(p.url);const req=(p.requirements||["Exact eligibility criteria vary by programme and application cycle. Read the official provider notice before applying."]).map(x=>"<li>"+escapeHtml(x)+"</li>").join("");const reqNote=escapeHtml(p.requirementsNote||"Requirements may change between application cycles. Always confirm the latest official notice.");return '<article class="op-card"><div class="op-top"><span class="op-category">'+escapeHtml(labels[p.category]||"Student resource")+'</span><span class="op-date">'+escapeHtml(p.type||"RESOURCE")+'</span></div><h3>'+escapeHtml(p.title)+'</h3><p>'+escapeHtml(p.description)+'</p><details class="scholarship-requirements"><summary>View eligibility & requirements</summary><ul>'+req+'</ul><p class="requirements-note">'+reqNote+'</p></details><div class="op-foot"><button type="button" class="save-opportunity" data-save-id="'+escapeHtml(p.id)+'">＋ Save</button><span>⌖ '+escapeHtml(p.location||"Online")+'</span>'+(url?'<a href="'+escapeHtml(url)+'" target="_blank" rel="noopener noreferrer">Open official source ↗</a>':'<span>Link unavailable</span>')+'</div></article>'}).join("");
 const empty=document.querySelector("#empty-state");
 empty.hidden=!raw;
 if(raw){
  const query=raw+" Pakistan official information";
  const socialQuery=raw+" announcement (site:facebook.com OR site:instagram.com OR site:linkedin.com OR site:x.com)";
  const google="https://www.google.com/search?q="+encodeURIComponent(query);
  const duck="https://duckduckgo.com/?q="+encodeURIComponent(query);
  const bing="https://www.bing.com/search?q="+encodeURIComponent(query);
  const social="https://www.google.com/search?q="+encodeURIComponent(socialQuery);
  empty.innerHTML='<b>'+(filtered.length?'Explore more about “'+escapeHtml(raw)+'”':'No exact match in our verified directory yet.')+'</b><br>Use these free public search engines to discover current test notices, eligibility, preparation, deadlines and announcements. External results are not verified by Makran Digital.<div class="web-search-links"><a class="text-link" style="color:#8a6b35" href="'+google+'" target="_blank" rel="noopener noreferrer">Google ↗</a><a class="text-link" style="color:#8a6b35" href="'+duck+'" target="_blank" rel="noopener noreferrer">DuckDuckGo ↗</a><a class="text-link" style="color:#8a6b35" href="'+bing+'" target="_blank" rel="noopener noreferrer">Bing ↗</a><a class="text-link" style="color:#8a6b35" href="'+social+'" target="_blank" rel="noopener noreferrer">Public social-media posts ↗</a></div><div id="instant-answer" class="instant-answer" aria-live="polite"></div>';
  scheduleInstantAnswer(raw);
 } else {
  empty.innerHTML='<b>Search the verified directory or explore the wider internet.</b>';
 }
 resultCount.textContent=filtered.length+" resource"+(filtered.length===1?"":"s")+" found";
}
function applyScholarshipFinder(){
 const level=document.querySelector("#finder-level").value;
 const country=document.querySelector("#finder-country").value;
 const funding=document.querySelector("#finder-funding").value;
 searchInput.value=[level,country,funding].filter(Boolean).join(" ");
 categoryFilter.value="all";
 render();
 document.querySelector("#explore").scrollIntoView({behavior:"smooth"});
}
document.querySelector("#finder-search").addEventListener("click",applyScholarshipFinder);
document.querySelector("#finder-reset").addEventListener("click",()=>{
 document.querySelector("#finder-level").value="";
 document.querySelector("#finder-country").value="";
 document.querySelector("#finder-funding").value="";
 searchInput.value="";categoryFilter.value="all";render();
});
document.querySelector("#eligibility-form").addEventListener("submit",event=>{
 event.preventDefault();
 const data=Object.fromEntries(new FormData(event.currentTarget).entries());
 const levelTerms={intermediate:["undergraduate","bachelor"],bachelor:["master","postgraduate"],master:["phd","doctoral"]}[data.education]||[];
 const destination=data.destination.toLowerCase();
 const candidates=resources.filter(p=>{
  if(!["scholarships","international"].includes(p.category))return false;
  const hay=(p.title+" "+p.description+" "+p.location+" "+(p.tags||"")).toLowerCase();
  if(destination&&!hay.includes(destination))return false;
  if(levelTerms.length&&!levelTerms.some(term=>hay.includes(term)))return false;
  if(data.domicile==="balochistan"&&/balochistan|gwadar|kech|turbat|makran|coastal|pakistan/.test(hay))return true;
  if(data.domicile==="other-pakistan"&&/pakistan|china|commonwealth|hungary|korea|japan|turkiye|turkey/.test(hay))return true;
  if(data.domicile==="international"&&!/balochistan|gwadar|kech|turbat|makran|beef|pakistan/.test(hay))return true;
  return false;
 });
 const results=document.querySelector("#eligibility-results");
 const list=candidates.slice(0,8);
 results.hidden=false;
 results.innerHTML='<div class="eligibility-result-head"><b>'+list.length+' potential listing'+(list.length===1?'':'s')+' found</b><span>Preliminary matches only</span></div>'+
 (list.length?'<ul>'+list.map(p=>'<li><a href="'+escapeHtml(safeUrl(p.url))+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(p.title)+' ↗</a><small>'+escapeHtml(p.location||'Online')+' · '+escapeHtml(p.type||'Check official criteria')+'</small></li>').join('')+'</ul>':'<p>No close match was found in the current directory. Try “Any destination” or browse the full scholarship list. New calls may be added as they are announced.</p>')+
 '<p class="eligibility-disclaimer">This tool only matches directory keywords and broad study stages. It does not verify age, marks, subject, income, nationality rules or current application status. Read the official notice before applying.</p>';
});
async function loadLivePosts(){
 if(!SUPABASE_URL.startsWith("https://")||SUPABASE_ANON_KEY.startsWith("YOUR_")){feedStatus.textContent="Curated student directory · live community submissions not connected";return}
 try{const response=await fetch(SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+TABLE+"?select=id,category,title,description,location,url,created_at&status=eq.approved&order=created_at.desc",{headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+SUPABASE_ANON_KEY}});if(!response.ok)throw new Error("Database request failed");const live=await response.json();posts=[...live.map(p=>({...p,live:true,tags:""})),...resources];feedStatus.textContent="Curated student directory + approved community submissions";render()}catch(error){feedStatus.textContent="Curated student directory · live database connection needs checking";console.warn(error)}
}
document.querySelector("#submit-form").addEventListener("submit",async event=>{
 event.preventDefault();const form=event.currentTarget,button=document.querySelector("#submit-button"),feedback=document.querySelector("#form-feedback");
 if(!SUPABASE_URL.startsWith("https://")||SUPABASE_ANON_KEY.startsWith("YOUR_")){feedback.textContent="Online submissions are not enabled yet. The platform owner must connect the database. You can still browse the directory.";return}
 const data=Object.fromEntries(new FormData(form).entries());data.url=safeUrl(data.url)||null;data.status="pending";button.disabled=true;button.textContent="Sending...";
 try{const sessionResult=await window.makranSupabase?.auth.getSession();const accessToken=sessionResult?.data?.session?.access_token;if(!accessToken){feedback.textContent="Please create an account or sign in before submitting an opportunity.";return}const response=await fetch(SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+TABLE,{method:"POST",headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+accessToken,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(data)});if(!response.ok)throw new Error("Submission was not accepted");form.reset();feedback.textContent="Thank you! Your student resource has been received and is waiting for review."}catch(error){feedback.textContent="We couldn't send this submission. Please check the database setup and try again."}finally{button.disabled=false;button.innerHTML='Send for review <span>↗</span>'}
});
document.addEventListener("click",async event=>{
 const button=event.target.closest(".save-opportunity");
 if(!button)return;
 const opportunity=posts.find(item=>String(item.id)===button.dataset.saveId);
 if(!opportunity)return;
 if(typeof window.makranSaveOpportunity!=="function"){alert("Please sign in to save opportunities.");return}
 button.disabled=true;
 try{await window.makranSaveOpportunity(opportunity);button.textContent="✓ Saved";button.classList.add("is-saved")}
 catch(error){alert(error.message||"Could not save this opportunity.");button.disabled=false}
});
searchInput.addEventListener("input",()=>{if(searchInput.value.trim())categoryFilter.value="all";render()});categoryFilter.addEventListener("change",render);
document.querySelectorAll("[data-shortcut]").forEach(a=>a.addEventListener("click",()=>{categoryFilter.value=a.dataset.shortcut;render()}));
document.querySelectorAll("[data-search]").forEach(el=>el.addEventListener("click",event=>{event.preventDefault();searchInput.value=el.dataset.search;categoryFilter.value="all";render();document.querySelector("#explore").scrollIntoView({behavior:"smooth"})}));
const menu=document.querySelector("#menu-button");menu.addEventListener("click",()=>{const nav=document.querySelector("#nav"),open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
document.querySelectorAll(".document-checklist").forEach(list=>{
 const progress=list.parentElement.querySelector(".document-progress");
 const update=()=>{const boxes=[...list.querySelectorAll('input[type="checkbox"]')];const done=boxes.filter(box=>box.checked).length;if(progress)progress.textContent=done+" of "+boxes.length+" prepared";};
 list.addEventListener("change",update);update();
});
document.querySelector("#year").textContent=new Date().getFullYear();render();loadLivePosts();



